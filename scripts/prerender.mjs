// Renders the public pages to static HTML after `vite build`, so crawlers and
// link previews get real content and per-page tags. Also writes the SPA shell
// (spa.html) used for every other route, and sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, ROUTES, HOME_JSON_LD, SITE_URL, OG_IMAGE } = await import(pathToFileURL(serverEntry).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headTags(route) {
  const url = SITE_URL + (route.path === '/' ? '/' : route.path)
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Barber's Book" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ]
  if (route.path === '/') {
    for (const ld of HOME_JSON_LD) {
      tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`)
    }
  }
  return tags.join('\n    ')
}

function page(route) {
  return template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(route.title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${esc(route.description)}" />`)
    .replace('<!--seo-head-->', headTags(route))
    .replace('<!--app-html-->', render(route.path))
}

// SPA shell for client-only routes (referral links, Stripe redirects, admin).
fs.writeFileSync(
  path.join(dist, 'spa.html'),
  template
    .replace('<!--seo-head-->', '<meta name="robots" content="noindex" />')
    .replace('<!--app-html-->', ''),
)

for (const route of ROUTES) {
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), page(route))
  console.log(`prerendered ${route.path} -> ${file}`)
}

const today = new Date().toISOString().slice(0, 10)
const urls = ROUTES.filter((r) => r.indexable)
  .map((r) => `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

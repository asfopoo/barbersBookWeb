/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

// Build-time renderer for the public pages (see scripts/prerender.mjs). It
// mirrors the markup App renders for these routes so the client can hydrate it.
const PAGES: Record<string, () => React.JSX.Element> = {
  '/': HomePage,
  '/privacy': PrivacyPolicy,
  '/terms': TermsOfService,
  '/cookies': CookiePolicy,
}

export function render(path: string): string {
  const Page = PAGES[path]
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <div className="min-h-screen bg-gray-950">
          <Page />
        </div>
      </StaticRouter>
    </StrictMode>,
  )
}

export { ROUTES, HOME_JSON_LD, SITE_URL, OG_IMAGE } from './seo'

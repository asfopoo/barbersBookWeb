import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const SITE_URL = 'https://www.thebarbersbook.com'
export const OG_IMAGE = `${SITE_URL}/og.png`

export type RouteMeta = {
  path: string
  title: string
  description: string
  // pages crawlers should find; anything else is left out of the sitemap
  indexable: boolean
  lang: 'en' | 'es'
  // translations of this page, keyed by hreflang
  alternates?: Record<string, string>
}

const HOME_ALTERNATES = { en: '/', es: '/es', 'x-default': '/' }

// Public pages that get prerendered to static HTML at build time.
export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: "Barber's Book | Free App for Barbers: Income, Booking, Taxes",
    description:
      'The free app for barbers. Log a cut in seconds, see your real take-home after shop cut and expenses, share a free booking link, and know how much to set aside for taxes.',
    indexable: true,
    lang: 'en',
    alternates: HOME_ALTERNATES,
  },
  {
    path: '/es',
    title: "Barber's Book | App gratis para barberos: ingresos, reservas e impuestos",
    description:
      'La app gratis para barberos. Registra un corte en segundos, ve lo que te queda después de la barbería y los gastos, comparte un enlace de reservas gratis y ten claro cuánto apartar para impuestos.',
    indexable: true,
    lang: 'es',
    alternates: HOME_ALTERNATES,
  },
  {
    path: '/privacy',
    title: "Privacy Policy | Barber's Book",
    description: "How Barber's Book collects, uses and protects your data.",
    indexable: true,
    lang: 'en',
  },
  {
    path: '/terms',
    title: "Terms of Service | Barber's Book",
    description: "The terms that apply when you use the Barber's Book app and booking pages.",
    indexable: true,
    lang: 'en',
  },
  {
    path: '/cookies',
    title: "Cookie Policy | Barber's Book",
    description: "How Barber's Book uses cookies and similar technologies.",
    indexable: true,
    lang: 'en',
  },
]

// Structured data for the home pages (SoftwareApplication + Organization).
export const homeJsonLd = (route: RouteMeta) => [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: "Barber's Book",
    operatingSystem: 'iOS, Android',
    applicationCategory: 'BusinessApplication',
    description: route.description,
    inLanguage: route.lang,
    url: SITE_URL + route.path,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    downloadUrl: [
      'https://apps.apple.com/us/app/barbers-book/id6740193881',
      'https://play.google.com/store/apps/details?id=com.thebarbersbook.app',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Barber's Book",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: 'support@thebarbersbook.com',
    sameAs: [
      'https://www.instagram.com/barbers_book/',
      'https://www.tiktok.com/@barbers_book',
    ],
  },
]

// Keeps the title and description in sync on client-side navigation. The
// prerendered HTML already has the right tags for the first load.
export function useRouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = ROUTES.find((r) => r.path === pathname) ?? ROUTES[0]
    document.title = meta.title
    document.documentElement.lang = meta.lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])
}

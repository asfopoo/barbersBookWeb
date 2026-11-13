import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang, useT } from '../../i18n'
import { Logo, trackStore, useStoreUrl } from './shared'

export default function Nav() {
  const t = useT().nav
  const lang = useLang()
  const storeUrl = useStoreUrl()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#features', t.features],
    ['#calculator', t.calculator],
    ['#how-it-works', t.howItWorks],
    ['#pricing', t.pricing],
  ] as const

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
          scrolled ? 'glass shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]' : 'border border-transparent'
        }`}
      >
        <Link to={lang === 'es' ? '/es' : '/'} aria-label={t.home}>
          <Logo />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="rounded-full px-3.5 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            to={lang === 'es' ? '/' : '/es'}
            hrefLang={lang === 'es' ? 'en' : 'es'}
            lang={lang === 'es' ? 'en' : 'es'}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-zinc-300 transition hover:border-white/30 hover:text-white"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </Link>
          <a
            href={storeUrl}
            onClick={() => trackStore('nav', 'auto')}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            {t.download}
          </a>
        </div>
      </nav>
    </header>
  )
}

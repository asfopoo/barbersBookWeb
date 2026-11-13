/* eslint-disable react-refresh/only-export-components -- small shared module for the home page */
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react'
import { useT } from '../../i18n'
import type { IconName, Shot } from '../../i18n/en'
import { track } from '../../lib/analytics'

export const APP_STORE_URL = 'https://apps.apple.com/us/app/barbers-book/id6740193881'
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.thebarbersbook.app'

const SHOT_FILES: Record<Shot, string> = {
  today: '01_today',
  money: '02_money',
  schedule: '03_schedule',
  clients: '04_clients',
  tax: '05_tax_services',
  client: '06_client',
}

export function useShot() {
  const dir = useT().shotDir
  return (shot: Shot) => `${dir}/${SHOT_FILES[shot]}.webp`
}

// Store link that points Android visitors at Google Play and everyone else at
// the App Store. Starts as the App Store link so prerendered HTML matches.
const noSubscribe = () => () => {}
export function useStoreUrl() {
  return useSyncExternalStore(
    noSubscribe,
    () => (/android/i.test(navigator.userAgent) ? PLAY_URL : APP_STORE_URL),
    () => APP_STORE_URL,
  )
}

export function trackStore(placement: string, store: 'ios' | 'android' | 'auto') {
  track('marketing_store_clicked', { placement, store })
}

export function StoreBadges({ placement, dark = false, className = '' }: { placement: string; dark?: boolean; className?: string }) {
  const t = useT().badges
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        onClick={() => trackStore(placement, 'ios')}
        className="inline-block rounded-[10px] transition hover:-translate-y-0.5 hover:brightness-110"
      >
        <img src={dark ? t.appStoreImg : t.appStoreImgWhite} alt={t.appStoreAlt} className="h-[48px] w-auto" width={144} height={48} />
      </a>
      <a
        href={PLAY_URL}
        onClick={() => trackStore(placement, 'android')}
        className="inline-block transition hover:-translate-y-0.5 hover:brightness-110"
      >
        {/* The Play badge PNG has built-in padding, so it renders taller to match. */}
        <img src={t.playImg} alt={t.playAlt} className="-my-[10px] h-[68px] w-auto" width={175} height={68} />
      </a>
    </div>
  )
}

// iPhone-style frame around a 1320x2868 app capture.
export function Phone({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  eager?: boolean
}) {
  return (
    <div
      className={`relative rounded-[13%/6%] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-700 p-[2.6%] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
    >
      <div className="relative aspect-[1320/2868] overflow-hidden rounded-[11%/5.1%] bg-black ring-1 ring-black">
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width={660}
          height={1434}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dynamic Island (simulator captures don't include it). */}
        <div className="absolute left-1/2 top-[1.35%] h-[3.3%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
        {/* Glass sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
      </div>
    </div>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-zinc-300 ${className}`}>
      <span className="pole h-2.5 w-2.5 rounded-full" aria-hidden />
      {children}
    </div>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[9px] bg-white/10 ring-1 ring-white/15">
        <span className="pole absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 rounded-full opacity-90" aria-hidden />
      </span>
      Barber's Book
    </span>
  )
}

const PATHS: Record<IconName | 'check' | 'star' | 'arrow', ReactNode> = {
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </>
  ),
  wallet: (
    <>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  receipt: (
    <>
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  link: <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />,
  repeat: <path d="m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3" />,
  history: <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M12 7v5l4 2" />,
  download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
  sparkles: (
    <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.13 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0zM20 3v4M22 5h-4" />
  ),
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  bell: <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />,
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  chart: <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" />,
  check: <path d="M20 6 9 17l-5-5" />,
  star: <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z" fill="currentColor" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export function Icon({ name, className = 'h-5 w-5' }: { name: keyof typeof PATHS; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  )
}

// Adds .in to every .reveal element under the root as it scrolls into view.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

// Eases a number toward its target, for animated totals.
export function useTween(target: number, ms = 450) {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  const current = useRef(target)
  useEffect(() => {
    const duration = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 0 : ms
    from.current = current.current
    const start = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = duration === 0 ? 1 : Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const v = from.current + (target - from.current) * eased
      current.current = v
      setValue(v)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, ms])
  return value
}

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
export const money = (n: number) => usd.format(Math.round(n))

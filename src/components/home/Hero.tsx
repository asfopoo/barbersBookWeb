import { useEffect, useRef } from 'react'
import { useT } from '../../i18n'
import { Eyebrow, Icon, Phone, StoreBadges, useShot } from './shared'

export default function Hero() {
  const t = useT().hero
  const f = t.float
  const shot = useShot()
  const stage = useRef<HTMLDivElement>(null)

  // Subtle 3D tilt that follows the pointer (desktop, motion allowed).
  useEffect(() => {
    const el = stage.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5
        const y = e.clientY / window.innerHeight - 0.5
        el.style.setProperty('--ry', `${x * 10}deg`)
        el.style.setProperty('--rx', `${-y * 8}deg`)
        el.style.setProperty('--tx', `${x * 14}px`)
        el.style.setProperty('--ty', `${y * 14}px`)
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="grid-lines absolute inset-0" />
        <div className="aurora absolute -left-[10%] -top-[20%] h-[620px] w-[620px] bg-[#0a84ff]/30" />
        <div className="aurora absolute -right-[12%] top-[10%] h-[520px] w-[520px] bg-[#bf5af2]/20 [animation-delay:-6s]" />
        <div className="aurora absolute bottom-[-30%] left-[35%] h-[500px] w-[500px] bg-[#ff9f0a]/15 [animation-delay:-12s]" />
        <div className="noise absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <Eyebrow className="pop-in">{t.eyebrow}</Eyebrow>
          <h1 className="pop-in mt-6 font-display text-[clamp(2.6rem,6.4vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white [--d:80ms]">
            {t.title1}
            <br />
            <span className="text-gradient pb-1">{t.title2}</span>
          </h1>
          <p className="pop-in mx-auto mt-7 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl lg:mx-0 [--d:160ms]">{t.body}</p>
          <div className="pop-in mt-9 flex flex-col items-center gap-5 lg:items-start [--d:240ms]">
            <StoreBadges placement="hero" />
            <p className="text-sm text-zinc-500">
              {t.priceBefore} <span className="text-zinc-600 line-through">$24.99</span>{' '}
              <span className="font-semibold text-zinc-300">{t.priceAfter}</span>
              <span className="mx-2 text-zinc-700">·</span>
              {t.platforms}
            </p>
          </div>
        </div>

        {/* Phones */}
        <div
          ref={stage}
          className="relative mx-auto h-[540px] w-full max-w-[460px] [perspective:1400px] md:h-[640px]"
        >
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{ transform: 'rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))' }}
          >
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a84ff]/25 blur-[80px]" />

            <div className="pop-in absolute left-[2%] top-[8%] w-[46%] -rotate-[8deg] opacity-80 [--d:350ms] md:w-[48%]">
              <Phone src={shot('today')} alt={t.shotAltBack} eager />
            </div>
            <div className="pop-in absolute right-[4%] top-0 w-[54%] rotate-[4deg] [--d:200ms] md:w-[56%]">
              <div className="float-a">
                <Phone src={shot('money')} alt={t.shotAltFront} eager />
              </div>
            </div>

            {/* Floating cards */}
            <div
              className="absolute inset-0 [transform:translate3d(var(--tx,0),var(--ty,0),60px)]"
              aria-hidden
            >
              <div className="pop-in absolute -left-2 top-[52%] [--d:700ms] md:-left-10">
                <div className="glass float-b flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0a84ff] text-white">
                    <Icon name="scissors" className="h-[18px] w-[18px]" />
                  </span>
                  <div className="text-left">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">{f.cutLabel}</p>
                    <p className="text-sm font-semibold text-white">{f.cutValue}</p>
                  </div>
                  <div className="ml-2 text-right">
                    <p className="font-display text-lg font-bold text-white">{f.cutAmount}</p>
                    <p className="text-[11px] font-semibold text-app-green">{f.cutTip}</p>
                  </div>
                </div>
              </div>

              <div className="pop-in absolute -right-2 top-[64%] hidden [--d:900ms] sm:block md:-right-8">
                <div className="glass float-c flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl">
                  <span className="flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-[#ff9f0a]/20 ring-1 ring-[#ff9f0a]/40">
                    <span className="text-[8px] font-bold leading-none text-[#ff9f0a]">{f.taxDate}</span>
                    <span className="font-display text-base font-bold leading-none text-[#ffb340]">15</span>
                  </span>
                  <div className="text-left">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">{f.taxLabel}</p>
                    <p className="text-sm font-semibold text-white">{f.taxValue}</p>
                  </div>
                </div>
              </div>

              <div className="pop-in absolute bottom-[3%] left-[8%] [--d:1100ms] md:bottom-[6%]">
                <div className="glass float-a flex items-center gap-3 rounded-2xl py-2.5 pl-3 pr-2.5 shadow-2xl">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0a84ff]/25 text-xs font-bold text-[#64b5ff]">AM</span>
                  <div className="text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#ff9f0a]">{f.dueLabel}</p>
                    <p className="text-sm font-semibold text-white">{f.dueValue}</p>
                  </div>
                  <span className="ml-2 rounded-lg bg-[#0a84ff] px-3 py-1.5 text-xs font-semibold text-white">{f.dueAction}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

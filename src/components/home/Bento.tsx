import type { PointerEvent } from 'react'
import { useT } from '../../i18n'
import { Eyebrow, Icon, useReveal } from './shared'

function spot(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function KeypadVisual() {
  const k = useT().bento.keypad
  return (
    <div className="mt-8 rounded-2xl bg-black/50 p-4 ring-1 ring-white/[0.07]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#0a84ff]/15 px-3 py-1 text-xs font-semibold text-[#64b5ff]">{k.service}</span>
        <span className="text-xs text-zinc-500">{k.method}</span>
      </div>
      <p className="mt-4 text-center font-display text-5xl font-extrabold tracking-tight text-white">$45</p>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="mr-1 text-xs text-zinc-500">{k.tip}</span>
        {['$0', '$3', '$5', '$10'].map((v) => (
          <span
            key={v}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${v === '$3' ? 'bg-app-green/20 text-app-green ring-1 ring-app-green/40' : 'bg-white/[0.06] text-zinc-400'}`}
          >
            {v}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0a84ff] py-3 text-sm font-semibold text-white">
        <Icon name="scissors" className="h-4 w-4" />
        {k.save}
      </div>
    </div>
  )
}

function BarVisual() {
  const c = useT().calc
  const rows = [
    { label: c.yours, value: '$3,168', w: 46.2, color: '#0a84ff', strong: true },
    { label: `${c.tax} (25%)`, value: '$1,056', w: 15.4, color: '#ff9f0a' },
    { label: c.expensesShort, value: '$212', w: 3.1, color: '#8e8e93' },
    { label: c.shop, value: '$2,418', w: 35.3, color: '#48484a' },
  ]
  return (
    <div className="mt-8 rounded-2xl bg-black/50 p-5 ring-1 ring-white/[0.07]">
      <p className="font-display text-5xl font-extrabold tracking-tight text-white">$3,168</p>
      <div className="grow-x mt-5 flex h-3 gap-[3px] overflow-hidden rounded-full">
        {rows.map((r) => (
          <div key={r.label} className="h-full rounded-[2px]" style={{ width: `${r.w}%`, background: r.color }} />
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {rows.map((r) => (
          <li key={r.label} className="flex justify-between">
            <span className={`flex items-center gap-2 ${r.strong ? 'font-semibold text-white' : 'text-zinc-400'}`}>
              <span className="h-2 w-2 rounded-full" style={{ background: r.color }} />
              {r.label}
            </span>
            <span className={r.strong ? 'font-semibold text-white' : 'text-zinc-400'}>{r.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Bento() {
  const t = useT().bento
  const root = useReveal<HTMLElement>()
  const small = t.items.filter((i) => i.size === 'sm')
  const large = t.items.filter((i) => i.size === 'lg')
  // A lone item on the last row of three spans the full width.
  const loneLast = small.length % 3 === 1

  return (
    <section ref={root} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">{t.title}</h2>
          <p className="mt-5 text-lg text-zinc-400 md:text-xl">{t.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {large.map((item, i) => (
            <article
              key={item.title}
              onPointerMove={spot}
              className="reveal spotlight card-surface rounded-[26px] p-7 md:p-9"
              style={{ ['--d' as string]: `${i * 90}ms` }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#0a84ff]/15 text-[#64b5ff] ring-1 ring-[#0a84ff]/30">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">{item.title}</h3>
              <p className="mt-2 text-zinc-400">{item.body}</p>
              {item.visual === 'keypad' ? <KeypadVisual /> : <BarVisual />}
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {small.map((item, i) => {
            const wide = loneLast && i === small.length - 1
            return (
              <article
                key={item.title}
                onPointerMove={spot}
                className={`reveal spotlight card-surface flex rounded-[22px] p-6 ${wide ? 'items-center gap-5 sm:col-span-2 lg:col-span-3' : 'flex-col'}`}
                style={{ ['--d' as string]: `${(i % 3) * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ${
                      item.badge ? 'bg-[#bf5af2]/15 text-[#d48cff] ring-[#bf5af2]/30' : 'bg-white/[0.06] text-zinc-200 ring-white/10'
                    }`}
                  >
                    <Icon name={item.icon} />
                  </span>
                  {item.badge && !wide && (
                    <span className="rounded-full bg-gradient-to-r from-[#bf5af2]/25 to-[#0a84ff]/25 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e0b3ff]">
                      {t.premium}
                    </span>
                  )}
                </div>
                <div className={wide ? '' : 'mt-5'}>
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

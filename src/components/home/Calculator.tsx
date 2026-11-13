import { useId, useRef, useState } from 'react'
import { useT } from '../../i18n'
import { track } from '../../lib/analytics'
import { Eyebrow, Icon, money, trackStore, useReveal, useStoreUrl, useTween } from './shared'

const COLORS = { yours: '#0a84ff', tax: '#ff9f0a', expenses: '#8e8e93', shop: '#48484a' }

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  color = '#0a84ff',
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (v: number) => string
  color?: string
}) {
  const id = useId()
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-zinc-400">
          {label}
        </label>
        <span className="font-display text-lg font-bold tabular-nums text-white">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range"
        style={{ ['--p' as string]: `${pct}%`, ['--c' as string]: color }}
      />
    </div>
  )
}

// Same math as the app's Money screen: the shop takes its cut (commission on
// services, or flat chair rent), expenses come off, and the tax set-aside is
// a percentage of what's left.
export default function Calculator() {
  const t = useT().calc
  const storeUrl = useStoreUrl()
  const root = useReveal<HTMLElement>()
  const [services, setServices] = useState(1200)
  const [tips, setTips] = useState(150)
  const [mode, setMode] = useState<'commission' | 'rent'>('commission')
  const [pct, setPct] = useState(40)
  const [rent, setRent] = useState(250)
  const [expenses, setExpenses] = useState(40)
  const [rate, setRate] = useState(25)
  const tracked = useRef(false)

  const touch = <T,>(set: (v: T) => void) => (v: T) => {
    set(v)
    if (!tracked.current) {
      tracked.current = true
      track('marketing_calculator_used')
    }
  }

  const gross = services + tips
  const shop = mode === 'commission' ? (services * pct) / 100 : rent
  const beforeTax = gross - shop - expenses
  const tax = Math.max(0, beforeTax) * (rate / 100)
  const yours = beforeTax - tax

  const animYours = useTween(yours)
  const segs = [
    { key: 'yours', label: t.yours, value: Math.max(0, yours), color: COLORS.yours },
    { key: 'tax', label: `${t.tax} (${rate}%)`, value: tax, color: COLORS.tax },
    { key: 'expenses', label: t.expensesShort, value: expenses, color: COLORS.expenses },
    { key: 'shop', label: t.shop, value: shop, color: COLORS.shop },
  ]
  const total = segs.reduce((s, x) => s + x.value, 0) || 1

  return (
    <section id="calculator" ref={root} className="relative py-24 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(10,132,255,0.10),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">{t.title}</h2>
          <p className="mt-5 text-lg text-zinc-400 md:text-xl">{t.subtitle}</p>
        </div>

        <div className="reveal card-surface mt-14 grid overflow-hidden rounded-[28px] lg:grid-cols-[1fr_1.05fr] [--d:120ms]">
          {/* Inputs */}
          <div className="space-y-7 p-6 md:p-10">
            <Slider label={t.services} value={services} min={200} max={4000} step={50} onChange={touch(setServices)} format={money} />
            <Slider label={t.tips} value={tips} min={0} max={800} step={10} onChange={touch(setTips)} format={money} color="#64d2ff" />

            <div>
              <p className="mb-3 text-sm font-medium text-zinc-400">{t.payLabel}</p>
              <div className="grid grid-cols-2 gap-1 rounded-xl bg-white/[0.05] p-1" role="radiogroup" aria-label={t.payLabel}>
                {(['commission', 'rent'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    aria-checked={mode === m}
                    onClick={() => touch(setMode)(m)}
                    className={`rounded-lg py-2.5 text-sm font-semibold transition ${mode === m ? 'bg-white/[0.12] text-white shadow' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {m === 'commission' ? t.commission : t.rent}
                  </button>
                ))}
              </div>
            </div>

            {mode === 'commission' ? (
              <Slider label={t.shopPct} value={pct} min={0} max={70} step={5} onChange={touch(setPct)} format={(v) => `${v}%`} color="#8e8e93" />
            ) : (
              <Slider label={t.rentWeek} value={rent} min={0} max={800} step={25} onChange={touch(setRent)} format={money} color="#8e8e93" />
            )}
            <Slider label={t.expenses} value={expenses} min={0} max={400} step={10} onChange={touch(setExpenses)} format={money} color="#8e8e93" />
            <Slider label={t.taxRate} value={rate} min={0} max={40} step={1} onChange={touch(setRate)} format={(v) => `${v}%`} color="#ff9f0a" />
          </div>

          {/* Result, styled like the app's take-home card */}
          <div className="relative flex flex-col justify-center border-t border-white/[0.07] bg-black/40 p-6 md:p-10 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{t.resultLabel}</p>
            <p className="mt-3 flex items-baseline gap-2" aria-live="polite">
              <span className="font-display text-[clamp(3.5rem,9vw,5.5rem)] font-extrabold leading-none tracking-[-0.04em] text-white tabular-nums">
                {money(animYours)}
              </span>
              <span className="text-lg text-zinc-500">{t.perWeek}</span>
            </p>
            <p className="mt-3 text-zinc-400">{t.perYear.replace('{amount}', money(yours * 52))}</p>

            <div className="mt-8 flex h-4 w-full gap-[3px] overflow-hidden rounded-full">
              {segs.map((s) => (
                <div
                  key={s.key}
                  className="h-full rounded-[3px] transition-[width] duration-500 ease-out first:rounded-l-full last:rounded-r-full"
                  style={{ width: `${(s.value / total) * 100}%`, background: s.color }}
                />
              ))}
            </div>

            <ul className="mt-7 space-y-3.5">
              {segs.map((s) => (
                <li key={s.key} className="flex items-center justify-between">
                  <span className={`flex items-center gap-3 ${s.key === 'yours' ? 'font-semibold text-white' : 'text-zinc-400'}`}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                    {s.label}
                  </span>
                  <span className={`tabular-nums ${s.key === 'yours' ? 'font-semibold text-white' : 'text-zinc-400'}`}>
                    {money(s.key === 'yours' ? yours : s.value)}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={storeUrl}
              onClick={() => trackStore('calculator', 'auto')}
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a84ff] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2b95ff]"
            >
              {t.cta}
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <p className="mt-5 text-xs leading-relaxed text-zinc-600">{t.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

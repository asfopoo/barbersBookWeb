import { useT } from '../../i18n'
import { Eyebrow, Icon, StoreBadges, trackStore, useReveal, useStoreUrl } from './shared'

export default function Pricing() {
  const t = useT().pricing
  const storeUrl = useStoreUrl()
  const root = useReveal<HTMLElement>()

  return (
    <section id="pricing" ref={root} className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#bf5af2]/10 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">{t.title}</h2>
          <p className="mt-5 text-lg text-zinc-400 md:text-xl">{t.subtitle}</p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
          {/* Free */}
          <div className="reveal card-surface flex flex-col rounded-[28px] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-white">{t.freeName}</h3>
            <p className="mt-4 font-display text-6xl font-extrabold tracking-tight text-white">{t.freePrice}</p>
            <p className="mt-2 text-zinc-500">{t.freeNote}</p>
            <ul className="mt-8 flex-1 space-y-3.5">
              {t.freeFeatures.map((f) => (
                <li key={f} className="flex gap-3 text-zinc-300">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={storeUrl}
              onClick={() => trackStore('pricing_free', 'auto')}
              className="mt-10 rounded-xl border border-white/15 py-3.5 text-center font-semibold text-white transition hover:bg-white/5"
            >
              {t.cta}
            </a>
          </div>

          {/* Premium */}
          <div className="reveal glow-border rounded-[28px] [--d:120ms]">
            <div className="flex h-full flex-col rounded-[28px] bg-[#0b0c10] p-8 md:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-white">{t.premiumName}</h3>
                <span className="rounded-full bg-app-green/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-app-green ring-1 ring-app-green/30">
                  {t.trial}
                </span>
              </div>
              <p className="mt-4 flex items-end gap-3">
                <span className="mb-1.5 font-display text-2xl font-semibold text-zinc-600 line-through">$24.99</span>
                <span className="font-display text-6xl font-extrabold tracking-tight text-white">$4.99</span>
                <span className="mb-2 text-zinc-500">{t.perMonth}</span>
              </p>
              <p className="mt-2 text-zinc-500">{t.premiumNote}</p>
              <p className="mt-8 text-sm font-semibold text-zinc-300">{t.premiumLead}</p>
              <ul className="mt-4 flex-1 space-y-3.5">
                {t.premiumFeatures.map((f) => (
                  <li key={f} className="flex gap-3 text-zinc-200">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#d48cff]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={storeUrl}
                onClick={() => trackStore('pricing_premium', 'auto')}
                className="mt-10 rounded-xl bg-gradient-to-r from-[#0a84ff] to-[#7d5cff] py-3.5 text-center font-semibold text-white shadow-[0_10px_40px_-10px_rgba(10,132,255,0.7)] transition hover:brightness-110"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-center gap-6">
          <p className="flex items-center gap-2 text-center text-sm text-zinc-400">
            <Icon name="gift" className="h-4 w-4 shrink-0 text-app-orange" />
            {t.referral}
          </p>
          <StoreBadges placement="pricing" className="justify-center" />
        </div>
      </div>
    </section>
  )
}

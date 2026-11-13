import { useT } from '../../i18n'
import { Phone, StoreBadges, useReveal, useShot } from './shared'

export default function FinalCTA() {
  const t = useT()
  const c = t.cta
  const shot = useShot()
  const root = useReveal<HTMLElement>()
  return (
    <section ref={root} className="relative overflow-hidden px-4 pb-0 pt-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#0d1a2e] to-[#07080c] px-6 pt-16 text-center md:pt-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="grid-lines absolute inset-0 opacity-60" />
          <div className="aurora absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 bg-[#0a84ff]/30" />
        </div>
        <div className="relative">
          <h2 className="reveal mx-auto max-w-4xl font-display text-[clamp(2.4rem,6.5vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-white">
            {c.title1}
            <br />
            <span className="text-gradient">{c.title2}</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl [--d:100ms]">{c.body}</p>
          <div className="reveal mt-9 flex justify-center [--d:200ms]">
            <StoreBadges placement="final_cta" className="justify-center" />
          </div>
          <p className="reveal mt-6 text-sm text-zinc-500 [--d:250ms]">{c.foot}</p>

          {/* Phones rising from the bottom edge */}
          <div className="reveal relative mx-auto mt-14 flex h-[300px] max-w-3xl items-start justify-center gap-4 md:h-[420px] md:gap-8 [--d:300ms]">
            <Phone src={shot('clients')} alt="" className="mt-16 hidden w-[210px] -rotate-6 opacity-70 sm:block md:w-[250px]" />
            <Phone src={shot('client')} alt="" className="w-[230px] md:w-[280px]" />
            <Phone src={shot('schedule')} alt="" className="mt-16 hidden w-[210px] rotate-6 opacity-70 sm:block md:w-[250px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

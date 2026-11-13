import { useT } from '../../i18n'
import { Eyebrow, useReveal } from './shared'

export default function HowItWorks() {
  const t = useT().how
  const root = useReveal<HTMLElement>()
  return (
    <section id="how-it-works" ref={root} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">{t.title}</h2>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="absolute left-[16%] right-[16%] top-11 hidden h-px bg-gradient-to-r from-[#0a84ff]/0 via-[#0a84ff]/50 to-[#0a84ff]/0 md:block" aria-hidden />
          {t.steps.map((s, i) => (
            <li key={s.title} className="reveal relative text-center" style={{ ['--d' as string]: `${i * 120}ms` }}>
              <div className="relative mx-auto grid h-[88px] w-[88px] place-items-center rounded-full bg-ink">
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/[0.02] ring-1 ring-white/10" />
                <span className="text-gradient relative font-display text-4xl font-extrabold">{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-zinc-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

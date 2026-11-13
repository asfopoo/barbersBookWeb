import { useT } from '../../i18n'
import { Eyebrow, Icon, useReveal } from './shared'

const AVATAR = ['from-[#0a84ff] to-[#5e5ce6]', 'from-[#ff9f0a] to-[#ff453a]']

export default function Testimonials() {
  const t = useT().testimonials
  const root = useReveal<HTMLElement>()
  return (
    <section ref={root} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">{t.title}</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.items.map((q, i) => (
            <figure
              key={q.name}
              className="reveal card-surface relative flex flex-col overflow-hidden rounded-[26px] p-8"
              style={{ ['--d' as string]: `${i * 120}ms` }}
            >
              <span className="pointer-events-none absolute -right-2 -top-10 font-display text-[180px] font-extrabold leading-none text-white/[0.04]" aria-hidden>
                "
              </span>
              <div className="flex gap-1 text-app-orange" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="star" className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-zinc-200">"{q.text}"</blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${AVATAR[i % AVATAR.length]} text-sm font-bold text-white`}>
                  {q.initials}
                </span>
                <span>
                  <span className="block font-semibold text-white">{q.name}</span>
                  <span className="block text-sm text-zinc-500">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useT } from '../../i18n'
import { Eyebrow, Icon, Phone, useReveal, useShot } from './shared'

const ACCENTS = ['#0a84ff', '#30d158', '#ff9f0a', '#bf5af2', '#64d2ff']

// Scroll story: chapters scroll on the left while one pinned phone on the
// right crossfades between app screens. On small screens each chapter shows
// its own phone inline.
export default function Story() {
  const t = useT().story
  const shot = useShot()
  const [active, setActive] = useState(0)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])
  const root = useReveal<HTMLElement>()

  useEffect(() => {
    const els = chapterRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.idx))
        }
      },
      { rootMargin: '-48% 0px -48% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const accent = ACCENTS[active % ACCENTS.length]

  return (
    <section id="features" ref={root} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white">{t.title}</h2>
          <p className="mt-5 text-lg text-zinc-400 md:text-xl">{t.subtitle}</p>
        </div>

        <div className="mt-16 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-20">
          <div>
            {t.chapters.map((c, i) => (
              <div
                key={c.tag}
                ref={(el) => {
                  chapterRefs.current[i] = el
                }}
                data-idx={i}
                className="flex min-h-0 flex-col justify-center py-14 lg:min-h-[88vh] lg:py-0"
              >
                <div className={`transition-opacity duration-500 ${active === i ? 'lg:opacity-100' : 'lg:opacity-35'}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]"
                      style={{ color: ACCENTS[i], background: `${ACCENTS[i]}1f`, boxShadow: `inset 0 0 0 1px ${ACCENTS[i]}40` }}
                    >
                      {c.tag}
                    </span>
                    <span className="font-display text-sm font-semibold text-zinc-600">0{i + 1} / 0{t.chapters.length}</span>
                  </div>
                  <h3 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-5xl">{c.title}</h3>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">{c.body}</p>
                  <ul className="mt-7 space-y-3">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-zinc-300">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ background: `${ACCENTS[i]}26`, color: ACCENTS[i] }}>
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mx-auto mt-12 w-[68%] max-w-[290px] lg:hidden">
                  <div className="absolute inset-[10%] rounded-full blur-[60px]" style={{ background: `${ACCENTS[i]}55` }} />
                  <Phone src={shot(c.shot)} alt={c.alt} className="relative" />
                </div>
              </div>
            ))}
          </div>

          {/* Pinned phone (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-0 flex h-screen items-center justify-center">
              <div className="relative w-[330px]">
                <div
                  className="absolute -inset-16 rounded-full blur-[90px] transition-colors duration-700"
                  style={{ background: `${accent}40` }}
                  aria-hidden
                />
                <div className="relative">
                  {t.chapters.map((c, i) => (
                    <div
                      key={c.tag}
                      className={`transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${i === 0 ? 'relative' : 'absolute inset-0'} ${
                        active === i ? 'scale-100 opacity-100' : 'pointer-events-none scale-[0.96] opacity-0'
                      }`}
                      aria-hidden={active !== i}
                    >
                      <Phone src={shot(c.shot)} alt={c.alt} />
                    </div>
                  ))}
                </div>
                {/* Progress rail */}
                <div className="absolute -right-14 top-1/2 flex -translate-y-1/2 flex-col gap-2.5" aria-hidden>
                  {t.chapters.map((c, i) => (
                    <span
                      key={c.tag}
                      className="w-1.5 rounded-full transition-all duration-500"
                      style={{ height: active === i ? 28 : 8, background: active === i ? ACCENTS[i] : 'rgb(255 255 255 / 0.15)' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

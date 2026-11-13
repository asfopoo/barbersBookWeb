import { useT } from '../../i18n'

export default function Marquee() {
  const items = useT().marquee
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap px-6 font-display text-lg font-semibold text-zinc-500 md:text-xl">
          {item}
          <span className="pole ml-12 h-2 w-2 rounded-full opacity-70" aria-hidden />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

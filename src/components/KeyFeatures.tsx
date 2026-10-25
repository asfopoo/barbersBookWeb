import { useT } from '../i18n'

function CheckIcon({ color }: { color: string }) {
  return (
    <div className={`rounded-lg p-2 mt-1 flex-shrink-0 ${color}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function KeyFeatures() {
  const { booking: b, earnings: e, tax: x, waitlist: w } = useT().key
  return (
    <section id="booking" className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">

        {/* Online Booking */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              {b.pill}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {b.title}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {b.body}
            </p>
            <div className="space-y-4">
              {b.points.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3">
                  <CheckIcon color="bg-blue-500/20 text-blue-400" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{pt.title}</h4>
                    <p className="text-gray-400">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl space-y-3">
              <p className="text-gray-400 text-sm px-1">{b.today}</p>
              {b.appts.map((a) => (
                <div key={a.time} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{a.time}</p>
                    <p className="font-semibold text-white text-sm">{a.name} · {a.who}</p>
                  </div>
                  <div className="bg-blue-500/15 text-blue-400 text-xs px-2 py-1 rounded-full font-semibold border border-blue-500/20">
                    {a.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Earnings and Analytics */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img
                src={e.img}
                alt={e.imgAlt}
                className={e.imgTall ? "w-full max-w-[280px] mx-auto rounded-[2rem] drop-shadow-lg" : "w-full rounded-2xl drop-shadow-lg"}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              {e.pill}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {e.title}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {e.body}
            </p>
            <div className="space-y-4">
              {e.points.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3">
                  <CheckIcon color="bg-green-500/20 text-green-400" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{pt.title}</h4>
                    <p className="text-gray-400">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tax Estimate */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              <span>{x.pill}</span>
              <span className="bg-amber-500/30 text-amber-300 text-xs px-2 py-0.5 rounded-full">{x.pillBadge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {x.title}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {x.body}
            </p>
            <div className="space-y-4">
              {x.points.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3">
                  <CheckIcon color="bg-amber-500/20 text-amber-400" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{pt.title}</h4>
                    <p className="text-gray-400">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl space-y-3">
              <div className="bg-gray-800 rounded-xl p-5">
                <p className="text-xs text-gray-400 mb-1">{x.ytd}</p>
                <p className="text-3xl font-bold text-white">$18,420.00</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                <p className="text-xs text-amber-300 mb-1">{x.estimated}</p>
                <p className="text-3xl font-bold text-amber-400">$4,605.00</p>
                <p className="text-xs text-gray-400 mt-2">{x.rate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Waitlist */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img src={w.img} alt={w.imgAlt} className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              {w.pill}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {w.title}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {w.body}
            </p>
            <div className="space-y-4">
              {w.points.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3">
                  <CheckIcon color="bg-purple-500/20 text-purple-400" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{pt.title}</h4>
                    <p className="text-gray-400">{pt.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

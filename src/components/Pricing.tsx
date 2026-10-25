import { useT } from '../i18n'

export default function Pricing() {
  const t = useT().pricing;
  const features = t.features;

  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden ring-4 ring-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-3 text-sm font-bold tracking-wide">
              {t.banner}
            </div>
            <div className="p-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  {t.trial}
                </div>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-3xl font-semibold text-gray-500 line-through mb-1">
                    $24.99
                  </span>
                  <span className="text-6xl font-bold text-white">$4.99</span>
                  <span className="text-gray-400 text-lg mb-2">{t.perMonth}</span>
                </div>
                <p className="text-gray-400 text-sm">
                  {t.noteBefore}{" "}
                  <span className="line-through text-gray-500">$24.99</span>{" "}
                  {t.noteAfter}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">
                      {feature.text}
                      {feature.note && (
                        <span className="text-gray-500 ml-1">
                          · {feature.note}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/us/app/barbers-book/id6740193881"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition text-base"
                >
                  {t.appStore}
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.thebarbersbook.app"
                  className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition text-base"
                >
                  {t.play}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

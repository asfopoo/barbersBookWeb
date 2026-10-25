import { useT } from '../i18n'

export default function Features() {
  const t = useT().features;

  return (
    <section id="features" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition transform hover:-translate-y-0.5 relative"
            >
              {feature.badge && (
                <span
                  className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full ${
                    feature.badge === "free"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {feature.badge === "free" ? t.free : t.premium}
                </span>
              )}
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          {t.legendLabel}{" "}
          <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-2 py-0.5 rounded-full">
            {t.free}
          </span>{" "}
          {t.legendFree} &nbsp;•&nbsp;
          <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-0.5 rounded-full">
            {t.premium}
          </span>{" "}
          {t.legendPremiumBefore}<span className="line-through">$24.99</span>{" "}
          {t.legendPremiumAfter}
        </p>
      </div>
    </section>
  );
}

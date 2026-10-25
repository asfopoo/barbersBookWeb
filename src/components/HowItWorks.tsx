import { useT } from '../i18n'

export default function HowItWorks() {
  const t = useT().how
  const steps = t.steps.map((s, i) => ({ ...s, number: String(i + 1) }))

  return (
    <section id="how-it-works" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl w-14 h-14 flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div className="bg-gray-800 text-gray-400 text-xs font-bold px-2 py-1 rounded-full">
                  {t.step} {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-16 w-full h-0.5 bg-gradient-to-r from-blue-700 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useT } from '../i18n'

export default function Testimonials() {
  const t = useT().testimonials
  const testimonials = t.items

  return (
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition flex flex-col"
            >
              <div className="flex text-yellow-400 text-lg mb-5">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-300 leading-relaxed italic flex-1 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 border-t border-gray-700 pt-5">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Master Barber, NYC',
      image: '👨🏿‍🦱',
      text: 'Tap to Pay is a game changer. My clients just tap their card on my phone — no reader, no fuss. And Tax Hold running automatically means I stopped dreading tax season.'
    },
    {
      name: 'Sofia Martinez',
      role: 'Shop Owner, Miami',
      image: '👩🏽',
      text: 'I used to keep a notebook for everything. Now Barber\'s Book tracks every service, every expense, and every tip. The earnings charts showed me my Fridays are twice as profitable — so I stopped taking Mondays off.'
    },
    {
      name: 'James Lee',
      role: 'Independent Barber, LA',
      image: '👨🏻',
      text: 'The waitlist is incredible. Customers scan my QR code from their car, wait outside, and walk in right on time. No more crowded shop. My clients love it and honestly so do I.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Barbers Love It
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From solo barbers to multi-chair shops — Barber's Book is built for how you actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col"
            >
              <div className="flex text-yellow-400 text-lg mb-5">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-700 leading-relaxed italic flex-1 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 border-t pt-5">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

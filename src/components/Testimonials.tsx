export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Master Barber, NYC',
      image: '👨🏿‍🦱',
      text: 'BarbersBook has completely transformed how I track my earnings. I can see exactly how much I make daily, weekly, and monthly. The waitlist feature is a game changer!'
    },
    {
      name: 'Sofia Martinez',
      role: 'Salon Owner, Miami',
      image: '👩🏽',
      text: 'The analytics features are incredible. I can track trends, see my best services, and make data-driven decisions for my salon.'
    },
    {
      name: 'James Lee',
      role: 'Independent Barber, LA',
      image: '👨🏻',
      text: 'The digital waitlist is incredible. My customers love being able to check the queue from their phones. No more crowded waiting area!'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Barbers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of barbers who have transformed their business with BarbersBook.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

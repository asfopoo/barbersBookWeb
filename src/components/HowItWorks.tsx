export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Download & Sign Up',
      description: 'Get the app from App Store or Google Play. Create your account in seconds.'
    },
    {
      number: '2',
      title: 'Set Up Your Services',
      description: 'Add your services with pricing. Set up your digital waitlist with a custom shop code.'
    },
    {
      number: '3',
      title: 'Log Every Haircut',
      description: 'After each service, quickly log the earnings, tips, and payment method.'
    },
    {
      number: '4',
      title: 'Track & Grow',
      description: 'View analytics, manage expenses, and watch your business grow with data-driven insights.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with BarbersBook in just four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-20 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

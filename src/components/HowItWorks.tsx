export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      emoji: '📲',
      title: 'Download & Create Account',
      description: 'Get Barber\'s Book from the App Store or Google Play. Create your free account and set up your shop profile in minutes.'
    },
    {
      number: '2',
      emoji: '💳',
      title: 'Connect Stripe & Set Up',
      description: 'Complete the quick Stripe onboarding to start accepting payments. Add your custom services with pricing and get your waitlist QR code.'
    },
    {
      number: '3',
      emoji: '✂️',
      title: 'Serve Clients & Get Paid',
      description: 'Tap to Pay on iPhone for contactless payments, or charge via card and Apple Pay. Add tips, select the service, done.'
    },
    {
      number: '4',
      emoji: '📊',
      title: 'Track, Save for Taxes & Grow',
      description: 'Monitor daily earnings, watch your Tax Hold balance grow automatically, manage expenses, and analyze your business performance.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Up and Running in Minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Barber's Book is built to get out of your way. Set up once, then just run your shop.
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
                  Step {step.number}
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

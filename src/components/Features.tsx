type Feature = {
  icon: string
  title: string
  description: string
  badge?: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: '📲',
      title: 'Tap to Pay on iPhone',
      description: 'Accept contactless cards, Apple Pay, and Google Pay right on your iPhone. No card reader or extra hardware needed.'
    },
    {
      icon: '💳',
      title: 'Cards & Apple Pay',
      description: 'Charge any card or digital wallet through the built-in Stripe payment sheet. Works for in-person and manual entry.'
    },
    {
      icon: '🏦',
      title: 'Tax Hold',
      description: 'Automatically earmark a percentage of every payment for taxes. Never get surprised when the tax bill arrives.',
      badge: 'Free'
    },
    {
      icon: '🧾',
      title: 'Tax Estimation',
      description: 'See a running estimate of your self-employment tax liability based on your actual earnings — updated in real time.',
      badge: 'Free'
    },
    {
      icon: '💰',
      title: 'Earnings Tracking',
      description: 'Log every service with price, tip, service type, and payment method. Know exactly how much you made today.'
    },
    {
      icon: '📊',
      title: 'Visual Analytics',
      description: 'Daily, weekly, and monthly charts show your earnings trends, top services, and best-performing days.'
    },
    {
      icon: '💸',
      title: 'Expense Management',
      description: 'Track chair rent, supplies, and other business costs by category. See your real net income automatically.'
    },
    {
      icon: '✂️',
      title: 'Service Management',
      description: 'Create your custom service menu with prices. Log earnings for any service in seconds.'
    },
    {
      icon: '⏰',
      title: 'Digital Waitlist',
      description: 'Customers scan your QR code to join your queue from anywhere. Manage walk-ins without the chaos.'
    },
    {
      icon: '🔔',
      title: 'Customer Notifications',
      description: 'Send SMS & email alerts when a customer\'s turn is coming up. Keep them informed, keep them happy.',
      badge: 'Pro'
    },
    {
      icon: '🏪',
      title: 'Multi-Location',
      description: 'Manage multiple shops from a single account. Switch between locations instantly.',
      badge: 'Pro'
    },
    {
      icon: '📤',
      title: 'Data Export',
      description: 'Export your full earnings and expense history anytime. Your data belongs to you.',
      badge: 'Pro'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Shop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Barber's Book is built specifically for barbers — with real payments, real tax tools, and a real waitlist system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 relative"
            >
              {feature.badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full ${
                  feature.badge === 'Free'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {feature.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Badges: <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">Free</span> = included in the free plan &nbsp;•&nbsp;
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">Pro</span> = included in Pro ($4.99/mo)
        </p>
      </div>
    </section>
  )
}

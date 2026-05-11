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
      description: 'See a running estimate of your self-employment tax liability based on your actual earnings, updated in real time.',
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
      icon: '🔁',
      title: 'Recurring Appointments',
      description: 'Turn any booking into a standing weekly, biweekly, or monthly reservation. Set it once and stop chasing rebookings.',
      badge: 'Premium'
    },
    {
      icon: '🛡️',
      title: 'No-Show Fee Protection',
      description: 'Charge customers who miss their appointment without cancelling. Stop eating the cost of empty chairs.',
      badge: 'Premium'
    },
    {
      icon: '🔔',
      title: 'SMS & Email Notifications',
      description: "Notify customers via SMS and email when it's their turn. Keep them informed, keep them happy.",
      badge: 'Premium'
    },
    {
      icon: '🎨',
      title: "Your Shop's Look",
      description: "Your booking page, waitlist, texts, and emails. Branded for you, not The Barber's Book.",
      badge: 'Premium'
    },
    {
      icon: '🏪',
      title: 'Multi-Location',
      description: 'Manage multiple shop locations from one account. Switch between locations instantly.',
      badge: 'Premium'
    },
    {
      icon: '📤',
      title: 'Unlimited Data Export',
      description: 'Export and backup your full earnings and expense history anytime. Your data belongs to you.',
      badge: 'Premium'
    },
    {
      icon: '🕰️',
      title: 'Unlimited History',
      description: 'Access all your metrics and earnings data forever. No 30-day cap, no auto-archive.',
      badge: 'Premium'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Run Your Shop
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Barber's Book is built specifically for barbers, with real payments, real tax tools, and a real waitlist system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition transform hover:-translate-y-0.5 relative"
            >
              {feature.badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full ${
                  feature.badge === 'Free'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {feature.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Badges: <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-2 py-0.5 rounded-full">Free</span> = included in the free plan &nbsp;•&nbsp;
          <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-0.5 rounded-full">Premium</span> = included in Premium ($4.99/mo, 14-day free trial)
        </p>
      </div>
    </section>
  )
}
</content>
</invoke>
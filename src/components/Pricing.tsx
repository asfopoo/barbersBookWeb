export default function Pricing() {
  const features = [
    { text: 'Tap to Pay on iPhone', note: 'no card reader needed' },
    { text: 'Cards, Apple Pay & Google Pay' },
    { text: 'No-show fee protection', note: 'auto-charge customers who miss their appointment' },
    { text: 'Tax Hold', note: 'auto-earmarks % of every payment' },
    { text: 'Tax Estimation', note: 'running liability estimate' },
    { text: 'Earnings & tips tracking' },
    { text: 'Visual analytics — daily, weekly, monthly' },
    { text: 'Digital waitlist (unlimited customers)' },
    { text: 'Expense tracking & net income' },
    { text: 'Service management' },
    { text: 'Unlimited history access' },
    { text: 'Data export & backup' },
    { text: 'Multi-location management' },
    { text: 'SMS & email customer notifications' },
    { text: 'Custom waitlist branding' },
    { text: 'Priority support' },
    { text: 'Transparent payment processing', note: '3.0% + $0.30 in-person · 3.3% + $0.40 online' },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One Plan. Everything Included.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Payments, tax tools, analytics, and a digital waitlist — all in one app for less than a cup of coffee a week.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden ring-4 ring-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-3 text-sm font-bold tracking-wide">
              BARBER&apos;S BOOK PRO
            </div>
            <div className="p-10">
              <div className="text-center mb-8">
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-6xl font-bold text-white">$4.99</span>
                  <span className="text-gray-400 text-lg mb-2">/ month</span>
                </div>
                <p className="text-gray-400 text-sm">Cancel anytime. No contracts.</p>
              </div>

              <ul className="space-y-3 mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">
                      {feature.text}
                      {feature.note && <span className="text-gray-500 ml-1">— {feature.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/us/app/barbers-book/id6740193881"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition text-base"
                >
                  Download on the App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.thebarbersbook.app"
                  className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition text-base"
                >
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Payment processing: 3.0% + $0.30 in-person (Tap to Pay) · 3.3% + $0.40 online. Powered by Stripe.
          </p>
        </div>
      </div>
    </section>
  )
}

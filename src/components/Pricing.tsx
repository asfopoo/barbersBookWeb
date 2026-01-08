export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Unlimited earnings tracking',
        'Last 30 days of history',
        'Unlimited digital waitlist',
        'Basic analytics',
        'Expense tracking',
        'Service management',
        'Mobile app access',
        'Banner ads'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$4.99',
      period: 'per month',
      features: [
        'Everything in Free',
        'Unlimited history access',
        'No ads - completely ad-free',
        'Advanced analytics',
        'Data export (coming soon)',
        'SMS notifications (coming soon)',
        'Custom branding (coming soon)',
        'Priority support'
      ],
      highlighted: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, upgrade when you're ready. No credit card required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">{plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105 ${
                plan.highlighted ? 'ring-4 ring-blue-500 relative' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

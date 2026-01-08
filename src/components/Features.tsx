export default function Features() {
  const features = [
    {
      icon: '�',
      title: 'Earnings Tracking',
      description: 'Track every haircut with price, tips, service type, and payment method. See exactly how much you make.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Visualize your earnings with daily, weekly, and monthly charts. Track trends and growth.'
    },
    {
      icon: '💸',
      title: 'Expense Management',
      description: 'Log expenses by category, track receipts, and calculate your net income automatically.'
    },
    {
      icon: '✂️',
      title: 'Service Management',
      description: 'Create custom services with pricing. Quickly log earnings for any service you offer.'
    },
    {
      icon: '⏰',
      title: 'Digital Waitlist',
      description: 'Customers join your waitlist online via QR code. Manage walk-ins effortlessly.'
    },
    {
      icon: '🔔',
      title: 'Customer Notifications',
      description: 'Automatically notify customers when their turn is coming up. Keep everyone informed.'
    },
    {
      icon: '📱',
      title: 'Customer Web App',
      description: 'Customers can check waitlist status, join the queue, and see real-time updates online.'
    },
    {
      icon: '☁️',
      title: 'Cloud Sync',
      description: 'Your data is automatically backed up and synced. Access from any device, anytime.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BarbersBook is packed with powerful features designed specifically for barbers and salon professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

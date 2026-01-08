export default function KeyFeatures() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Earnings Insights */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
              💰 Earnings Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Every Dollar You Earn
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Log each haircut with price, tips, service type, and payment method. View beautiful charts that show your daily, weekly, and monthly earnings. Know exactly where your money comes from and track your growth over time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Detailed Breakdown</h4>
                  <p className="text-gray-600">Track service revenue, tips, and payment types separately</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visual Analytics</h4>
                  <p className="text-gray-600">Beautiful charts and graphs make trends easy to spot</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Smart Insights</h4>
                  <p className="text-gray-600">See your best days, top services, and growth patterns</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-12 shadow-xl">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Today's Earnings</p>
                    <p className="text-4xl font-bold text-gray-900">$425.50</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    +12%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Services</p>
                    <p className="font-bold text-gray-900">$360.00</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tips</p>
                    <p className="font-bold text-gray-900">$65.50</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <span className="text-xl">✂️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Classic Cut</p>
                      <p className="text-sm text-gray-500">8 services today</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">$240</p>
                </div>
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-lg p-2">
                      <span className="text-xl">💈</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Fade + Beard</p>
                      <p className="text-sm text-gray-500">4 services today</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">$180</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Management */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-3xl p-12 shadow-xl">
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">This Month</p>
                    <p className="text-4xl font-bold text-gray-900">$12,450</p>
                    <p className="text-green-600 font-semibold text-sm mt-1">↗ +$2,340 net income</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Income</span>
                    <span className="font-semibold text-gray-900">$14,200</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Expenses</span>
                    <span className="font-semibold">-$1,750</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="text-gray-900 font-bold">Net Income</span>
                    <span className="font-bold text-green-600">$12,450</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-xl p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💺</span>
                    <span className="text-sm font-medium text-gray-900">Chair Rent</span>
                  </div>
                  <span className="text-sm font-bold text-red-600">-$800</span>
                </div>
                <div className="bg-white rounded-xl p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✂️</span>
                    <span className="text-sm font-medium text-gray-900">Supplies</span>
                  </div>
                  <span className="text-sm font-bold text-red-600">-$450</span>
                </div>
                <div className="bg-white rounded-xl p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    <span className="text-sm font-medium text-gray-900">Marketing</span>
                  </div>
                  <span className="text-sm font-bold text-red-600">-$300</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-6">
              📊 Expense Management
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Know Your True Profit
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Track every expense by category - chair rent, supplies, marketing, and more. The app automatically calculates your net income so you always know your real profit. Make smarter business decisions with clear financial data.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Categorized Expenses</h4>
                  <p className="text-gray-600">Organize expenses by type for better insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Auto Net Calculation</h4>
                  <p className="text-gray-600">Instantly see your real profit after expenses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Monthly Breakdowns</h4>
                  <p className="text-gray-600">Compare spending patterns month over month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Online Waitlist */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-6">
              ⏰ Digital Waitlist
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Customers Join Online
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              No more crowded waiting areas. Customers scan your QR code or visit your shop's unique link to join the queue from anywhere. They get real-time updates on their phone and you manage everything from your app.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">QR Code Check-In</h4>
                  <p className="text-gray-600">Customers scan and join instantly - no app required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Real-Time Updates</h4>
                  <p className="text-gray-600">Automatic notifications when their turn is coming up</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-2 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Customer Web Portal</h4>
                  <p className="text-gray-600">They can check status anytime from any device</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-3xl p-12 shadow-xl">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Current Queue</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">5 waiting</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-900">Marcus J.</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">NOW SERVING</span>
                    </div>
                    <p className="text-sm text-gray-600">Joined 12 min ago</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">Sarah M.</span>
                      <span className="text-gray-600 text-sm font-semibold">Position #2</span>
                    </div>
                    <p className="text-sm text-gray-500">Est. wait: 15 min</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">John D.</span>
                      <span className="text-gray-600 text-sm font-semibold">Position #3</span>
                    </div>
                    <p className="text-sm text-gray-500">Est. wait: 30 min</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">Mike R.</span>
                      <span className="text-gray-600 text-sm font-semibold">Position #4</span>
                    </div>
                    <p className="text-sm text-gray-500">Est. wait: 45 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
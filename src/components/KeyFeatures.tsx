function CheckIcon({ color }: { color: string }) {
  return (
    <div className={`rounded-lg p-2 mt-1 flex-shrink-0 ${color}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function KeyFeatures() {
  return (
    <section id="payments" className="py-32 bg-white">
      <div className="container mx-auto px-6">

        {/* Built-in Payments */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
              Built-in Payments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accept Payments Right on Your iPhone
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              No card reader. No extra hardware. Use Tap to Pay on iPhone to accept contactless cards, Apple Pay,
              and Google Pay — right from your phone. Or charge any card via the built-in payment sheet.
              Powered by Stripe, with a flat 3.5% all-in fee.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-100 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tap to Pay on iPhone</h4>
                  <p className="text-gray-600">Customers tap their card or Apple Pay device to your phone. Works with any contactless payment — no hardware needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-100 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Cards, Apple Pay &amp; Google Pay</h4>
                  <p className="text-gray-600">Accept all major credit/debit cards and digital wallets through the secure Stripe payment sheet.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-100 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Flat 3.5% All-In Fee</h4>
                  <p className="text-gray-600">One transparent rate for everyone. No monthly surprises, no hidden fees stacked on top.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 shadow-xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                <div className="text-center mb-5">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl text-3xl mb-3">
                    📲
                  </div>
                  <p className="font-bold text-gray-900 text-lg">Tap to Pay</p>
                  <p className="text-gray-500 text-sm">Hold near a contactless card or device</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center border-2 border-blue-200 border-dashed">
                  <p className="text-sm text-gray-500 mb-1">Payment amount</p>
                  <p className="text-3xl font-bold text-gray-900">$45.00</p>
                  <p className="text-xs text-gray-400 mt-1">Fade + Beard Trim</p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-green-600 font-bold">
                  <span className="text-xl">&#10003;</span>
                  <span>Payment Accepted</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">💳</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Or charge manually</p>
                    <p className="text-xs text-gray-500">Apple Pay · Google Pay · All cards</p>
                  </div>
                </div>
                <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">Stripe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Earnings and Analytics */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-10 shadow-xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Today's Earnings</p>
                    <p className="text-4xl font-bold text-gray-900">$425.50</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">+12%</div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Services</p>
                    <p className="font-bold text-gray-900">$360.00</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tips</p>
                    <p className="font-bold text-gray-900">$65.50</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Cuts</p>
                    <p className="font-bold text-gray-900">11</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg w-10 h-10 flex items-center justify-center">✂️</div>
                    <div>
                      <p className="font-semibold text-gray-900">Classic Cut</p>
                      <p className="text-sm text-gray-500">8 services today</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">$240</p>
                </div>
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-lg w-10 h-10 flex items-center justify-center">🪒</div>
                    <div>
                      <p className="font-semibold text-gray-900">Fade + Beard</p>
                      <p className="text-sm text-gray-500">3 services today</p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900">$135</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
              Earnings &amp; Analytics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Every Dollar You Earn
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Log each service with price, tip, service type, and payment method. View daily, weekly, and monthly
              earnings charts. Know your top services, best days, and exactly how your business is growing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-green-100 text-green-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service + Tip Breakdown</h4>
                  <p className="text-gray-600">Track service revenue and tips separately, with payment method per transaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-green-100 text-green-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visual Analytics</h4>
                  <p className="text-gray-600">Daily, weekly, and monthly charts make trends and growth easy to spot</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-green-100 text-green-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Top Services &amp; Best Days</h4>
                  <p className="text-gray-600">Identify what drives your revenue so you can make smarter business decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Hold */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold mb-6">
              <span>Tax Hold</span>
              <span className="bg-amber-200 text-amber-800 text-xs px-2 py-0.5 rounded-full">FREE for everyone</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Never Get Caught Off Guard at Tax Time
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              As a self-employed barber, taxes can sneak up on you. Tax Hold automatically sets aside a percentage
              of every payment — so when the bill comes, the money is already there. Set your rate once and forget it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-100 text-amber-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Auto-Earmark Every Payment</h4>
                  <p className="text-gray-600">Every time you get paid, your tax hold balance grows automatically — no manual tracking needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-100 text-amber-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Your Rate, Your Rules</h4>
                  <p className="text-gray-600">Set your own withholding percentage. Most self-employed barbers use 25–30%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-100 text-amber-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tax Estimation Included</h4>
                  <p className="text-gray-600">See a running estimate of your tax liability based on your actual earnings — free for all users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl p-10 shadow-xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Tax Hold Balance</p>
                    <p className="text-4xl font-bold text-gray-900">$1,218.75</p>
                    <p className="text-sm text-amber-600 font-semibold mt-1">25% of earnings set aside</p>
                  </div>
                  <div className="text-3xl">🏦</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-t">
                    <span className="text-gray-600">This Month's Earnings</span>
                    <span className="font-semibold text-gray-900">$4,875.00</span>
                  </div>
                  <div className="flex justify-between py-2 border-t">
                    <span className="text-gray-600">Tax Hold (25%)</span>
                    <span className="font-semibold text-amber-600">$1,218.75</span>
                  </div>
                  <div className="flex justify-between py-2 border-t">
                    <span className="font-bold text-gray-900">Estimated Liability</span>
                    <span className="font-bold text-gray-900">~$1,150</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 font-medium">You're covered. Tax money is already set aside.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Waitlist */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-3xl p-10 shadow-xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-gray-900">Current Queue</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">5 waiting</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900">Marcus J.</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">NOW SERVING</span>
                    </div>
                    <p className="text-xs text-gray-500">Joined 12 min ago</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">Sarah M.</span>
                      <span className="text-gray-600 text-sm font-semibold">Position 2</span>
                    </div>
                    <p className="text-xs text-gray-500">Est. wait: 15 min</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">John D.</span>
                      <span className="text-gray-600 text-sm font-semibold">Position 3</span>
                    </div>
                    <p className="text-xs text-gray-500">Est. wait: 30 min</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">Mike R.</span>
                      <span className="text-gray-600 text-sm font-semibold">Position 4</span>
                    </div>
                    <p className="text-xs text-gray-500">Est. wait: 45 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-6">
              Digital Waitlist
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Customers Wait Anywhere
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              No more crowded waiting areas. Customers scan your QR code or visit your shop's unique link to join
              the queue from anywhere. They get real-time updates on their phone — you manage everything from the app.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-purple-100 text-purple-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">QR Code Check-In</h4>
                  <p className="text-gray-600">Customers scan and join instantly — no app download required on their end</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-purple-100 text-purple-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Real-Time Position Updates</h4>
                  <p className="text-gray-600">They always know where they stand in line and when to head over</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-purple-100 text-purple-600" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">SMS &amp; Email Alerts (Pro)</h4>
                  <p className="text-gray-600">Automatically notify customers when their turn is coming up — never a missed appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

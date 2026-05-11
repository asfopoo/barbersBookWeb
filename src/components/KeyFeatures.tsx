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
    <section id="payments" className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">

        {/* Built-in Payments */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              Built-in Payments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Accept Payments Right on Your iPhone
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              No card reader. No extra hardware. Use Tap to Pay on iPhone to accept contactless cards, Apple Pay,
              and Google Pay right from your phone. Or charge any card via the built-in payment sheet.
              Powered by Stripe, with one clear rate per channel.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-500/20 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Tap to Pay on iPhone</h4>
                  <p className="text-gray-400">Customers tap their card or Apple Pay device to your phone. Works with any contactless payment. No hardware needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-500/20 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Cards, Apple Pay &amp; Google Pay</h4>
                  <p className="text-gray-400">Accept all major credit/debit cards and digital wallets through the secure Stripe payment sheet.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-500/20 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Clear Rates by Channel</h4>
                  <p className="text-gray-400">3.0% + $0.20 in-person (Tap to Pay) · 3.3% + $0.40 online. Same rates for every subscription tier. No surprises, no hidden fees.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img src="/screenshots/tap-to-pay.png" alt="Tap to Pay on iPhone" className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Earnings and Analytics */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img src="/screenshots/earnings.png" alt="Earnings overview screen" className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              Earnings &amp; Analytics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Every Dollar You Earn
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Log each service with price, tip, service type, and payment method. View daily, weekly, and monthly
              earnings charts. Know your top services, best days, and exactly how your business is growing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-green-500/20 text-green-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Service + Tip Breakdown</h4>
                  <p className="text-gray-400">Track service revenue and tips separately, with payment method per transaction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-green-500/20 text-green-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Visual Analytics</h4>
                  <p className="text-gray-400">Daily, weekly, and monthly charts make trends and growth easy to spot</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-green-500/20 text-green-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Top Services &amp; Best Days</h4>
                  <p className="text-gray-400">Identify what drives your revenue so you can make smarter business decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Hold */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              <span>Tax Hold</span>
              <span className="bg-amber-500/30 text-amber-300 text-xs px-2 py-0.5 rounded-full">FREE for everyone</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Get Caught Off Guard at Tax Time
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              As a self-employed barber, taxes can sneak up on you. Tax Hold automatically sets aside a percentage
              of every payment, so when the bill comes, the money is already there. Set your rate once and forget it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-500/20 text-amber-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Auto-Earmark Every Payment</h4>
                  <p className="text-gray-400">Every time you get paid, your tax hold balance grows automatically. No manual tracking needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-500/20 text-amber-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Your Rate, Your Rules</h4>
                  <p className="text-gray-400">Set your own withholding percentage. Most self-employed barbers use 25–30%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-500/20 text-amber-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Tax Estimation Included</h4>
                  <p className="text-gray-400">See a running estimate of your tax liability based on your actual earnings. Free for all users.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img src="/screenshots/tax-hold.png" alt="Tax Hold and Tax Estimation" className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Digital Waitlist */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl">
              <img src="/screenshots/waitlist.png" alt="Digital Waitlist management" className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              Digital Waitlist
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Customers Wait Anywhere
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              No more crowded waiting areas. Customers scan your QR code or visit your shop's unique link to join
              the queue from anywhere. They get real-time updates on their phone. You manage everything from the app.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-purple-500/20 text-purple-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">QR Code Check-In</h4>
                  <p className="text-gray-400">Customers scan and join instantly. No app download required on their end.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-purple-500/20 text-purple-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Real-Time Position Updates</h4>
                  <p className="text-gray-400">They always know where they stand in line and when to head over</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-purple-500/20 text-purple-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">SMS &amp; Email Alerts (Premium)</h4>
                  <p className="text-gray-400">Automatically notify customers when their turn is coming up. Never a missed appointment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

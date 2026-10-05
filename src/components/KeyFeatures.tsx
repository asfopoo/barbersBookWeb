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
    <section id="booking" className="py-32 bg-gray-950">
      <div className="container mx-auto px-6">

        {/* Online Booking */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              Online Booking
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let Customers Book You Anytime
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Share your booking link and customers pick a service and an open time on their own. Every booking
              lands on your calendar, and you set the rules for when and how far ahead people can book.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-500/20 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Your Own Booking Page</h4>
                  <p className="text-gray-400">Customers see your services, prices, and open times. No app download required on their end.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-500/20 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Automatic Reminders</h4>
                  <p className="text-gray-400">Customers get reminded before their appointment, with a link to cancel if plans change.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-blue-500/20 text-blue-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Your Booking Rules</h4>
                  <p className="text-gray-400">Set your hours, minimum notice, booking window, and cancellation cutoff.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl space-y-3">
              <p className="text-gray-400 text-sm px-1">Today</p>
              {[
                { time: "10:00 AM", name: "Skin Fade", who: "Marcus J.", tag: "Booked online" },
                { time: "11:30 AM", name: "Classic Cut", who: "Andre W.", tag: "Recurring" },
                { time: "2:30 PM", name: "Cut + Beard", who: "Luis R.", tag: "Booked online" },
              ].map((a) => (
                <div key={a.time} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{a.time}</p>
                    <p className="font-semibold text-white text-sm">{a.name} · {a.who}</p>
                  </div>
                  <div className="bg-blue-500/15 text-blue-400 text-xs px-2 py-1 rounded-full font-semibold border border-blue-500/20">
                    {a.tag}
                  </div>
                </div>
              ))}
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

        {/* Tax Estimate */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-full font-semibold mb-6">
              <span>Tax Estimate</span>
              <span className="bg-amber-500/30 text-amber-300 text-xs px-2 py-0.5 rounded-full">FREE for everyone</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Get Caught Off Guard at Tax Time
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              As a self-employed barber, taxes can sneak up on you. Barber's Book estimates what you owe from the
              earnings you log, so you know how much to put aside before the bill comes. Set your rate once and check in anytime.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-500/20 text-amber-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Built From Your Real Earnings</h4>
                  <p className="text-gray-400">Every cut and tip you log updates your estimate. You choose whether cash earnings count.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-500/20 text-amber-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Your Rate, Your Rules</h4>
                  <p className="text-gray-400">Set your own estimate rate. Most self-employed barbers use 25 to 30%.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon color="bg-amber-500/20 text-amber-400" />
                <div>
                  <h4 className="font-bold text-white mb-1">Free for Everyone</h4>
                  <p className="text-gray-400">The running tax estimate is included on every plan, including free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-3xl p-6 shadow-xl space-y-3">
              <div className="bg-gray-800 rounded-xl p-5">
                <p className="text-xs text-gray-400 mb-1">Year-to-date earnings</p>
                <p className="text-3xl font-bold text-white">$18,420.00</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                <p className="text-xs text-amber-300 mb-1">Estimated tax</p>
                <p className="text-3xl font-bold text-amber-400">$4,605.00</p>
                <p className="text-xs text-gray-400 mt-2">25% rate · from logged earnings</p>
              </div>
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

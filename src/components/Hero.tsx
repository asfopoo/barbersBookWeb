export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <nav className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">✂️ BarbersBook</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-200 transition">Features</a>
            <a href="#how-it-works" className="hover:text-blue-200 transition">How It Works</a>
            <a href="#pricing" className="hover:text-blue-200 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
          </div>
        </div>
      </nav>
      
      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Barbershop Business, Simplified
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Track every dollar, manage expenses, and let customers join your queue online. Everything you need in one powerful app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
              <a href="https://apps.apple.com/us/app/barbers-book/id6740193881" className="inline-block transform hover:scale-105 transition">
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1617926400" 
                  alt="Download on the App Store" 
                  className="h-[52px]"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.thebarbersbook.app" className="inline-block transform hover:scale-105 transition">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-[70px]"
                />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Real-time Earnings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Expense Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Digital Waitlist</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <div className="text-gray-800">
                  <h3 className="text-3xl font-bold mb-3">$12,450</h3>
                  <p className="text-gray-600 mb-4">This Month's Earnings</p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <span className="text-2xl">↗</span>
                    <span>+23% from last month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

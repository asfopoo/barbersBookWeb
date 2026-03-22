import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-3">✂️ Barber's Book</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The all-in-one app for barbers: accept payments, manage your waitlist, track earnings, and stay on top of taxes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#payments" className="hover:text-white transition">Payments</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="https://apps.apple.com/us/app/barbers-book/id6740193881" className="hover:text-white transition">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Download</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://apps.apple.com/us/app/barbers-book/id6740193881" className="inline-block hover:opacity-80 transition">
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1617926400"
                    alt="Download on the App Store"
                    className="h-9"
                  />
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.thebarbersbook.app" className="inline-block hover:opacity-80 transition">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-[46px] -ml-2"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            &copy; 2026 eansolutions llc. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Payments powered by Stripe
          </p>
        </div>
      </div>
    </footer>
  )
}

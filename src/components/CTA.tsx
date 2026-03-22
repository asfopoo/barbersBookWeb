export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span>🆓</span>
          <span>Free to download. No credit card required.</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Run Your Shop Smarter?
        </h2>
        <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
          Get Tap to Pay, Tax Hold, a digital waitlist, and full earnings tracking — free. Upgrade to Pro anytime for $4.99/month.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="https://apps.apple.com/us/app/barbers-book/id6740193881" className="inline-block transform hover:scale-105 transition">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1617926400"
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
        <p className="mt-8 text-gray-500 text-sm">
          Cancel PRO anytime &nbsp;•&nbsp; Payments powered by Stripe &nbsp;•&nbsp; Your data is always yours
        </p>
      </div>
    </section>
  )
}

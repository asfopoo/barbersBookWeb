export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
          Join thousands of barbers who are already using BarbersBook to manage their business like pros.
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
        <p className="mt-8 text-blue-200">
          Cancel anytime
        </p>
      </div>
    </section>
  )
}

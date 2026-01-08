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
          <button className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-xl hover:bg-blue-50 transition shadow-2xl transform hover:scale-105">
            📱 Download for iOS
          </button>
          <button className="px-10 py-5 bg-blue-500 text-white rounded-lg font-bold text-xl hover:bg-blue-400 transition border-2 border-white shadow-2xl transform hover:scale-105">
            🤖 Download for Android
          </button>
        </div>
        <p className="mt-8 text-blue-200">
          Cancel anytime
        </p>
      </div>
    </section>
  )
}

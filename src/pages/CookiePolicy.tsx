import { Link } from 'react-router-dom'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-6">
        <div className="container mx-auto px-6">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            ✂️ BarbersBook
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 8, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your device when you visit a website or use an application. They help us provide a better experience by remembering your preferences and understanding how you use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              eansolutions llc uses cookies and similar technologies in the BarbersBook Service to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Keep you signed in to your account</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use the Service</li>
              <li>Improve Service performance and features</li>
              <li>Provide security and prevent fraud</li>
              <li>Deliver relevant advertising (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Essential Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the Service to function properly. They enable core functionality such as authentication, security, and access to secure areas. The Service cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Performance Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies collect information about how you use the Service, such as which pages you visit most often and if you receive error messages. This helps us improve the Service's performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Functionality Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies allow the Service to remember choices you make (such as your theme preference or language) and provide enhanced, personalized features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Analytics Cookies</h3>
            <p className="text-gray-700 mb-4">
              We use analytics services to understand how users interact with our Service. These cookies collect information about your usage patterns to help us improve the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.5 Advertising Cookies (Free Tier)</h3>
            <p className="text-gray-700 mb-4">
              For users on the free tier, we display advertisements. Advertising partners may use cookies to show you relevant ads based on your interests. These cookies track your browsing activity across different websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We work with third-party service providers who may set their own cookies. These include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Analytics Providers:</strong> Such as Google Analytics, to understand usage patterns</li>
              <li><strong>Advertising Networks:</strong> Such as Google AdMob (for free tier users)</li>
              <li><strong>Payment Processors:</strong> To handle subscription payments</li>
              <li><strong>Cloud Services:</strong> For data storage and app functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Browser Settings</h3>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>See what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Note: Blocking or deleting cookies may affect your ability to use certain features of the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Mobile App Settings</h3>
            <p className="text-gray-700 mb-4">
              On mobile devices, you can manage tracking preferences through your device settings:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>iOS:</strong> Settings → Privacy → Tracking</li>
              <li><strong>Android:</strong> Settings → Google → Ads</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Opt-Out of Advertising</h3>
            <p className="text-gray-700 mb-4">
              You can opt-out of personalized advertising by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Upgrading to BarbersBook Pro (ad-free)</li>
              <li>Using device settings to limit ad tracking</li>
              <li>Visiting optout.aboutads.info or youronlinechoices.eu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Do Not Track</h2>
            <p className="text-gray-700 mb-4">
              Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for how to respond to these signals. We do not alter our data collection practices when we detect a Do Not Track signal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will post any changes on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. More Information</h2>
            <p className="text-gray-700 mb-4">
              For more information about how we collect and use your data, please see our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies, contact us at:
            </p>
            <p className="text-gray-700">
              <strong>eansolutions llc</strong><br />
              Email: privacy@barbersbook.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

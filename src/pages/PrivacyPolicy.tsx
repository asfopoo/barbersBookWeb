import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: April 27, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              eansolutions llc ("we," "our," or "us") operates the BarbersBook mobile application and related services (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We collect information directly from two groups of users: barbers and other service professionals who use our app to run their business, and the end customers who book appointments with those professionals through our online booking flow.
            </p>
            <p className="text-gray-700 mb-4">From <strong>barbers and service professionals</strong>, we collect:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Account information (name, email address, phone number)</li>
              <li>Business information (shop name, services offered, pricing)</li>
              <li>Financial data (earnings, expenses, payment information)</li>
              <li>Customer information you enter into the app (names, phone numbers for waitlist)</li>
            </ul>
            <p className="text-gray-700 mb-4">From <strong>end customers</strong> booking appointments through the booking flow, we collect:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Name, phone number, and email address</li>
              <li>Appointment details (selected service, time, notes to barber)</li>
              <li>SMS opt-in status and consent timestamp (when you check the consent box on the booking form)</li>
              <li>Payment information processed by Stripe (we do not store full card numbers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Device information (device type, operating system)</li>
              <li>Usage data (features used, time spent in app)</li>
              <li>Log data (IP address, access times, errors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Payment Information</h3>
            <p className="text-gray-700 mb-4">
              Payment information is collected and processed by our payment processor, Stripe. We do not store full credit card numbers on our servers. We receive limited payment information (last 4 digits, transaction amounts) for record-keeping purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 SMS / Text Messaging Data</h3>
            <p className="text-gray-700 mb-4">
              When you book an appointment through The Barbers Book and consent to receive text messages, we collect your mobile phone number to send transactional SMS — specifically, booking confirmations, appointment reminders, and updates if your appointment time or status changes. We also record the timestamp and source of your opt-in to maintain a compliance audit trail.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>No sharing of mobile information.</strong> Mobile information (including your phone number, opt-in consent, and SMS-related data) will not be shared with third parties or affiliates for marketing or promotional purposes. All other data-sharing categories described in this Privacy Policy exclude text messaging originator opt-in data and consent — this information is never shared with any third parties for their own marketing.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>SMS service providers.</strong> We use Twilio and/or AWS End User Messaging (Amazon SNS) to deliver text messages on our behalf. These providers process your phone number solely to transmit messages we initiate and are contractually prohibited from using it for any other purpose.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Opting out.</strong> You can opt out of SMS at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance. Standard message and data rates may apply.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send notifications about waitlist updates</li>
              <li>Provide customer support</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
            <p className="text-gray-700 mb-4">Third-party vendors who perform services on our behalf:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Stripe:</strong> Payment processing and payouts</li>
              <li><strong>AWS:</strong> Cloud hosting, storage (S3), email (SES), and SMS delivery (AWS End User Messaging / SNS)</li>
              <li><strong>Twilio:</strong> SMS delivery (transactional booking confirmations and reminders)</li>
              <li><strong>PostHog:</strong> Analytics and product insights</li>
              <li><strong>Sentry:</strong> Error tracking and monitoring</li>
              <li><strong>RevenueCat:</strong> Subscription management</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose information when required by law or to protect our rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
            <p className="text-gray-700 mb-4">
              In connection with a merger, sale, or acquisition of our business.
            </p>

            <p className="text-gray-700 mb-4 font-semibold">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure servers and databases</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits</li>
            </ul>
            <p className="text-gray-700 mb-4">
              However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, contact us at support@thebarbersbook.com or through the app settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your information for as long as necessary to provide our Service and comply with legal obligations. You may request deletion of your account at any time through the app settings. After deletion, we will remove your personal information within 30 days, except where retention is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in the United States and other countries. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our Service uses third-party services that have their own privacy policies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Stripe (payments): <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://stripe.com/privacy</a></li>
              <li>RevenueCat (subscriptions): <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.revenuecat.com/privacy</a></li>
              <li>AWS (hosting & storage): <a href="https://aws.amazon.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://aws.amazon.com/privacy</a></li>
              <li>PostHog (analytics): <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://posthog.com/privacy</a></li>
              <li>Sentry (error tracking): <a href="https://sentry.io/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://sentry.io/privacy</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy in the app and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>eansolutions llc</strong><br />
              Email: support@thebarbersbook.com<br />
              Support: support@thebarbersbook.com
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

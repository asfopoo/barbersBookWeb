import { Link } from 'react-router-dom'

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: April 27, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using BarbersBook ("Service"), operated by EAN Solutions LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              BarbersBook is a mobile application that provides tools for barbers and salon professionals to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Track earnings and expenses</li>
              <li>Manage services and pricing</li>
              <li>Operate a digital waitlist</li>
              <li>Accept card payments from customers</li>
              <li>View analytics and insights</li>
              <li>Manage customer information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Registration</h3>
            <p className="text-gray-700 mb-4">
              You must create an account to use the Service. You agree to provide accurate, current, and complete information during registration and to update it as necessary.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must notify us immediately of any unauthorized access.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Eligibility</h3>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old to use the Service. By using the Service, you represent that you meet this requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Processing</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Payment Service Provider</h3>
            <p className="text-gray-700 mb-4">
              Payment processing services are provided by Stripe. By enabling payment features, you agree to Stripe's Connected Account Agreement available at <a href="https://stripe.com/legal/connect-account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://stripe.com/legal/connect-account</a>. We act as a payment facilitator and collect a platform fee on every transaction you process.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Platform Fees</h3>
            <p className="text-gray-700 mb-4">
              A platform fee is deducted from each transaction at the following rates. Rates are inclusive of Stripe's own processing fees, so the amounts listed below are the total deducted from the transaction. Rates are the same for every subscription tier — subscriptions unlock additional features (tax tools, multi-location, etc.) but do not change payment processing fees:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>In-person (Tap to Pay):</strong> 3.0% + $0.30 per transaction</li>
              <li><strong>Online (PaymentSheet):</strong> 3.3% + $0.40 per transaction</li>
            </ul>
            <p className="text-gray-700 mb-4">
              All fees are clearly disclosed before processing each transaction. Platform fees may be adjusted with 30 days' notice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Payouts</h3>
            <p className="text-gray-700 mb-4">
              Payouts are managed by Stripe and typically arrive in your bank account within 2 business days. You are responsible for providing accurate banking information. We are not responsible for delays caused by your bank or Stripe.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Refunds and Disputes</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for handling refunds and disputes with your customers. Platform fees are not refundable for completed transactions. Excessive chargebacks or disputes may result in account suspension or termination.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.5 Prohibited Transactions</h3>
            <p className="text-gray-700 mb-4">
              You may not use the payment processing features for any illegal, fraudulent, or prohibited activities as defined by Stripe's terms and applicable law.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.6 Tax Estimation Features</h3>
            <p className="text-gray-700 mb-4">
              The tax estimation features provided by the Service (available to Pro and Premium subscribers) are for informational and planning purposes only. These features do NOT constitute tax advice and should NOT be relied upon for tax filing.
            </p>
            <p className="text-gray-700 mb-4">
              Tax estimates are based solely on recorded earnings and your configured tax rate. Your actual tax liability depends on many factors not considered here, including but not limited to: other income sources, deductions, credits, filing status, state/local taxes, and self-employment taxes.
            </p>
            <p className="text-gray-700 mb-4">
              We strongly recommend consulting with a qualified tax professional (CPA, enrolled agent, or tax attorney) for accurate tax guidance specific to your situation. The platform and its operators are not responsible for any inaccuracies in tax estimates or any consequences resulting from reliance on these estimates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS / Text Messaging Service</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Program Description</h3>
            <p className="text-gray-700 mb-4">
              When you opt in during the booking flow at app.thebarbersbook.com, The Barbers Book sends transactional text messages to confirm your appointment, send reminders, and notify you of any changes. SMS is strictly transactional — we do not send marketing messages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Consent</h3>
            <p className="text-gray-700 mb-4">
              You provide consent to receive SMS by checking the consent box on the booking form. Consent is not a condition of booking — you can complete a booking and choose email or no notifications instead.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Message Frequency</h3>
            <p className="text-gray-700 mb-4">
              Message frequency varies and is typically 1–3 messages per appointment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.4 Message and Data Rates</h3>
            <p className="text-gray-700 mb-4">
              Standard message and data rates may apply, depending on your wireless carrier plan. The Barbers Book is not responsible for charges from your carrier.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.5 Opting Out</h3>
            <p className="text-gray-700 mb-4">
              You can opt out of SMS at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance, or contact us at support@thebarbersbook.com. After you reply STOP, we will stop sending text messages to your number, though you may receive a final confirmation message.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.6 Carrier Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              Wireless carriers are not liable for delayed or undelivered messages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.7 Privacy</h3>
            <p className="text-gray-700 mb-4">
              For details on how we handle SMS data, see our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription and Billing</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Subscription Plans</h3>
            <p className="text-gray-700 mb-4">
              We offer Free, Pro ($4.99/month), and Premium ($9.99/month) subscription plans. Paid subscriptions are billed on a recurring monthly basis through your chosen app store (Apple App Store or Google Play Store).
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Pro:</strong> Tax estimation, tax hold, multi-location, unlimited history, data export, SMS/email notifications, and all standard features</li>
              <li><strong>Premium:</strong> All Pro features plus additional advanced tooling</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Cancellation</h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time through your app store account settings. Cancellations take effect at the end of the current billing period. Refunds are handled according to the app store's refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any laws or regulations</li>
              <li>Process fraudulent transactions</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Interfere with other users' use of the Service</li>
              <li>Scrape or harvest data from the Service</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Content</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of all content you submit to the Service (earnings data, customer information, etc.). You grant us a license to use, store, and process this content to provide the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Responsibility</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for the accuracy and legality of your content. You must have the right to share any customer information you enter into the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service, including its design, features, and content, is owned by EAN Solutions LLC and protected by copyright, trademark, and other laws. You may not copy, modify, or distribute any part of the Service without our permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers</h2>
            <p className="text-gray-700 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. YOU USE THE SERVICE AT YOUR OWN RISK.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EAN SOLUTIONS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless EAN Solutions LLC from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account at any time for violation of these Terms or for any other reason. You may delete your account at any time through the app settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the United States, without regard to conflict of law provisions. Any disputes will be resolved in the appropriate courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may modify these Terms at any time. We will notify you of material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, contact us at:
            </p>
            <p className="text-gray-700">
              <strong>EAN Solutions LLC</strong><br />
              Email: support@thebarbersbook.com
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

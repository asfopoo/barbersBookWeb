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
        <p className="text-gray-600 mb-8">Last updated: October 23, 2026</p>

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
              <li>Manage appointments and online booking</li>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tax Estimation and Payment Accounts</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Previously Connected Payment Accounts</h3>
            <p className="text-gray-700 mb-4">
              The Service no longer offers in-app card payment processing. If you previously connected a payment account through Stripe, that account, including any remaining balance, payouts, refunds, and disputes, continues to be governed by Stripe's Connected Account Agreement available at <a href="https://stripe.com/legal/connect-account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://stripe.com/legal/connect-account</a>. You remain responsible for refunds and disputes on payments you processed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Tax Estimation Features</h3>
            <p className="text-gray-700 mb-4">
              The tax estimation features provided by the Service are for informational and planning purposes only. These features do NOT constitute tax advice and should NOT be relied upon for tax filing.
            </p>
            <p className="text-gray-700 mb-4">
              Tax estimates are based solely on the earnings and expenses you record, the pay structure you set (such as the share of each service that goes to your shop), and your configured tax rate. Your actual tax liability depends on many factors not considered here, including but not limited to: other income sources, deductions, credits, filing status, state/local taxes, and self-employment taxes.
            </p>
            <p className="text-gray-700 mb-4">
              Amounts you record as set aside for taxes are your own record only. We do not hold, move, or manage any money for you. Quarterly payment dates shown in the app are general US federal estimated-tax dates, provided as a reminder; your own deadlines may differ.
            </p>
            <p className="text-gray-700 mb-4">
              We strongly recommend consulting with a qualified tax professional (CPA, enrolled agent, or tax attorney) for accurate tax guidance specific to your situation. The platform and its operators are not responsible for any inaccuracies in tax estimates or any consequences resulting from reliance on these estimates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS / Text Messaging Service</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Program Description</h3>
            <p className="text-gray-700 mb-4">
              When you opt in during the booking flow at app.thebarbersbook.com, The Barbers Book sends transactional text messages to confirm your appointment, send reminders, and notify you of any changes. SMS is strictly transactional. We do not send marketing messages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Consent</h3>
            <p className="text-gray-700 mb-4">
              You provide consent to receive SMS by checking the consent box on the booking form. Consent is not a condition of booking; you can complete a booking and choose email or no notifications instead.
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
              We offer a Free plan and a paid Premium plan at $4.99 per month. Premium is the only paid subscription available. Paid subscriptions are billed on a recurring monthly basis through your chosen app store (Apple App Store or Google Play Store).
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Free:</strong> Tax estimation, take-home for the current and previous month, your client list, and basic features (earnings tracking, waitlist, expense tracking, service management).</li>
              <li><strong>Premium ($4.99/month):</strong> Everything in Free, plus unlimited history (including take-home history and the year view), tax set-aside tracking, clients due for a cut and full client visit history, recurring appointments, unlimited data export, multi-location, SMS &amp; email notifications, and your shop's branding on every customer-facing surface (booking page, waitlist, texts, emails).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Free Trial</h3>
            <p className="text-gray-700 mb-4">
              New Premium subscribers may be eligible for a 14-day free trial. Eligibility is determined by Apple App Store or Google Play, typically limited to users who have not previously subscribed to Premium. The trial begins when you start the subscription. If you do not cancel before the 14-day trial period ends, your subscription will automatically convert to a paid Premium subscription at $4.99 per month, and your payment method on file with the app store will be charged. You may cancel at any time during the trial through your app store account settings to avoid being charged.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Auto-Renewal</h3>
            <p className="text-gray-700 mb-4">
              Premium subscriptions automatically renew each month until cancelled. Your app store will charge your payment method for the renewal within 24 hours before the end of the current period. You can manage and cancel auto-renewal in your app store account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.4 Cancellation</h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time through your app store account settings. Cancellations take effect at the end of the current billing period; you retain Premium access until that period ends. Refunds are handled according to the app store's refund policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.5 Referral Rewards</h3>
            <p className="text-gray-700 mb-4">
              You may invite other barbers to the Service using your referral code or link. When a barber you invited signs up with your code and becomes active, which currently means logging at least 5 services on at least 2 different days within 30 days of signing up, you and the invited barber each earn one free month (30 days) of Premium. You can earn up to 12 free months from referrals.
            </p>
            <p className="text-gray-700 mb-4">How you receive a free month depends on how you pay for Premium:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>If you are not paying for Premium through an app store, we add 30 days of free Premium to your account.</li>
              <li>If you subscribe through Google Play, we ask Google Play to move your next renewal date back by 30 days, so you are not charged for that month.</li>
              <li>If you subscribe through the Apple App Store, the free month is saved to your account. You can redeem it in the app, and Apple applies it to an upcoming renewal so you are not charged for that period. If your subscription ends before a saved month has been applied, we add the saved time to your account as free Premium instead.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Free months have no cash value and cannot be transferred, sold, or exchanged. They do not change your app store's billing terms for any other period. We may review referrals and withhold, delay, or reverse rewards that we reasonably believe involve self-referral, duplicate or fake accounts, or other abuse of the program. We may change or end the referral program at any time; free months you earned before a change will still be honored.
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

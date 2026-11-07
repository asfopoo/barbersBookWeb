import { Routes, Route, Navigate } from 'react-router-dom'
import { useRouteMeta } from './seo'
import HomePage from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import StripeReturn from './pages/StripeReturn'
import StripeRefresh from './pages/StripeRefresh'
import Referral from './pages/Referral'
import AffiliateStats from './pages/AffiliateStats'
import AdminLogin from './pages/admin/AdminLogin'
import AdminUsers from './pages/admin/AdminUsers'
import AdminUserDetail from './pages/admin/AdminUserDetail'
import AdminShops from './pages/admin/AdminShops'
import AdminInvitations from './pages/admin/AdminInvitations'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminNotifications from './pages/admin/AdminNotifications'
import AdminTransactions from './pages/admin/AdminTransactions'
import AdminPayouts from './pages/admin/AdminPayouts'
import AdminFeedback from './pages/admin/AdminFeedback'
import AdminReferrals from './pages/admin/AdminReferrals'
import AdminAffiliates from './pages/admin/AdminAffiliates'
import AdminAffiliateDetail from './pages/admin/AdminAffiliateDetail'
import AdminVersions from './pages/admin/AdminVersions'
import ProtectedRoute from './components/admin/ProtectedRoute'

function App() {
  useRouteMeta()

  return (
    <div className="min-h-screen bg-gray-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/es" element={<HomePage lang="es" />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/r/:code" element={<Referral />} />
        <Route path="/a/:token" element={<AffiliateStats />} />
        
        {/* Stripe Connect redirect pages */}
        <Route path="/stripe-return" element={<StripeReturn />} />
        <Route path="/stripe-refresh" element={<StripeRefresh />} />
        
        {/* Admin Routes - No reference from home page */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* Users is the landing page; old Dashboard links land there too. */}
        <Route path="/admin" element={<Navigate to="/admin/users" replace />} />
        <Route path="/admin/dashboard" element={<Navigate to="/admin/users" replace />} />
        <Route
          path="/admin/feedback"
          element={
            <ProtectedRoute>
              <AdminFeedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/referrals"
          element={
            <ProtectedRoute>
              <AdminReferrals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/affiliates"
          element={
            <ProtectedRoute>
              <AdminAffiliates />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/affiliates/:id"
          element={
            <ProtectedRoute>
              <AdminAffiliateDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/versions"
          element={
            <ProtectedRoute>
              <AdminVersions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users/:id"
          element={
            <ProtectedRoute>
              <AdminUserDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/shops"
          element={
            <ProtectedRoute>
              <AdminShops />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/invitations"
          element={
            <ProtectedRoute>
              <AdminInvitations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <AdminAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notifications"
          element={
            <ProtectedRoute>
              <AdminNotifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/transactions"
          element={
            <ProtectedRoute>
              <AdminTransactions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/payouts"
          element={
            <ProtectedRoute>
              <AdminPayouts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App

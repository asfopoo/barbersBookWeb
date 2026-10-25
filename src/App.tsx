import { Routes, Route } from 'react-router-dom'
import { useRouteMeta } from './seo'
import HomePage from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import StripeReturn from './pages/StripeReturn'
import StripeRefresh from './pages/StripeRefresh'
import Referral from './pages/Referral'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminUserDetail from './pages/admin/AdminUserDetail'
import AdminShops from './pages/admin/AdminShops'
import AdminInvitations from './pages/admin/AdminInvitations'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminNotifications from './pages/admin/AdminNotifications'
import AdminTransactions from './pages/admin/AdminTransactions'
import AdminPayouts from './pages/admin/AdminPayouts'
import ProtectedRoute from './components/admin/ProtectedRoute'

function App() {
  useRouteMeta()

  return (
    <div className="min-h-screen bg-gray-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/r/:code" element={<Referral />} />
        
        {/* Stripe Connect redirect pages */}
        <Route path="/stripe-return" element={<StripeReturn />} />
        <Route path="/stripe-refresh" element={<StripeRefresh />} />
        
        {/* Admin Routes - No reference from home page */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
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

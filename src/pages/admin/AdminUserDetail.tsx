import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi, barberBookingUrl, shopBookingUrl } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';
import BookingLink from '../../components/admin/BookingLink';
import { useState } from 'react';

export default function AdminUserDetail() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    subscriptionTier: '',
    subscriptionStatus: '',
    exportCount: 0,
  });
  const [tempPassword, setTempPassword] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const resetPasswordMutation = useMutation({
    mutationFn: () => adminApi.resetUserPassword(id!),
    onSuccess: (result) => {
      setTempPassword(result.tempPassword);
      setCopied(false);
    },
  });

  const generateSlugMutation = useMutation({
    mutationFn: () => adminApi.generateUserBookingSlug(id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-user', id] });
    },
  });

  const handleResetPassword = () => {
    if (
      !window.confirm(
        "Reset this user's password to a new temporary one? Their current password will stop working immediately.",
      )
    ) {
      return;
    }
    resetPasswordMutation.mutate();
  };

  const handleCopyTempPassword = async () => {
    if (!tempPassword) return;
    await navigator.clipboard.writeText(tempPassword);
    setCopied(true);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['admin-user', id],
    queryFn: () => adminApi.getUser(id!),
    enabled: !!id,
  });

  const { data: taxBreakdown } = useQuery({
    queryKey: ['admin-tax-breakdown', id],
    queryFn: () => adminApi.getTaxBreakdown(id!),
    enabled: !!id,
  });

  const updateMutation = useMutation({
    mutationFn: (data: Record<string, unknown>) => adminApi.updateUser(id!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-user', id] });
      setEditMode(false);
    },
  });

  const handleEdit = () => {
    if (data?.user) {
      setFormData({
        subscriptionTier: data.user.subscriptionTier,
        subscriptionStatus: data.user.subscriptionStatus,
        exportCount: data.user.exportCount,
      });
      setEditMode(true);
    }
  };

  const handleSave = () => {
    updateMutation.mutate(formData);
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-600">Loading user...</div>
        </div>
      </AdminLayout>
    );
  }

  if (!data?.user) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-600">User not found</p>
        </div>
      </AdminLayout>
    );
  }

  const { user, shop, stats } = data;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
          {!editMode ? (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Edit User
            </button>
          ) : (
            <div className="space-x-2">
              <button
                onClick={handleSave}
                disabled={updateMutation.isPending}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">User ID</label>
                <p className="text-sm text-gray-900 font-mono">{user.id}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-sm text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Admin Status</label>
                <p className="text-sm text-gray-900">
                  {user.isAdmin ? (
                    <span className="text-purple-600 font-semibold">✓ Admin</span>
                  ) : (
                    <span className="text-gray-500">Regular User</span>
                  )}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Created</label>
                <p className="text-sm text-gray-900">
                  {new Date(user.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <label className="text-sm font-medium text-gray-600">Password</label>
                <div className="mt-1 flex items-center gap-2">
                  <button
                    onClick={handleResetPassword}
                    disabled={resetPasswordMutation.isPending}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors disabled:opacity-50"
                  >
                    {resetPasswordMutation.isPending ? 'Resetting…' : 'Reset Password'}
                  </button>
                  {resetPasswordMutation.isError && (
                    <span className="text-sm text-red-600">
                      {(resetPasswordMutation.error as Error).message}
                    </span>
                  )}
                </div>
                {tempPassword && (
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                      Temporary password — shown only once
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <code className="flex-1 px-3 py-2 bg-white border border-amber-300 rounded font-mono text-base text-gray-900 select-all">
                        {tempPassword}
                      </code>
                      <button
                        onClick={handleCopyTempPassword}
                        className="px-3 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-lg transition-colors"
                      >
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                      <button
                        onClick={() => setTempPassword(null)}
                        className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded-lg transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-amber-700">
                      Deliver this to the user out-of-band (text / phone). It will not be
                      recoverable once dismissed.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Tier</label>
                {editMode ? (
                  <select
                    value={formData.subscriptionTier}
                    onChange={(e) =>
                      setFormData({ ...formData, subscriptionTier: e.target.value })
                    }
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="free">Free</option>
                    <option value="pro">Pro</option>
                    <option value="premium">Premium</option>
                  </select>
                ) : (
                  <p className="text-sm text-gray-900 capitalize">{user.subscriptionTier}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Status</label>
                {editMode ? (
                  <select
                    value={formData.subscriptionStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, subscriptionStatus: e.target.value })
                    }
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="none">None</option>
                    <option value="active">Active</option>
                    <option value="trialing">Trialing</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="expired">Expired</option>
                  </select>
                ) : (
                  <p className="text-sm text-gray-900 capitalize">
                    {user.subscriptionStatus}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Expires At</label>
                <p className="text-sm text-gray-900">
                  {user.subscriptionExpiresAt
                    ? new Date(user.subscriptionExpiresAt).toLocaleString()
                    : 'N/A'}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Export Count</label>
                {editMode ? (
                  <input
                    type="number"
                    value={formData.exportCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        exportCount: parseInt(e.target.value) || 0,
                      })
                    }
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{user.exportCount}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Haircuts</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats?.haircutCount || 0}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats?.expenseCount || 0}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Has Shop</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{shop ? '✓' : '✗'}</p>
            </div>
          </div>
        </div>

        {/* Shop Info */}
        {shop && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Shop Name</label>
                <p className="text-sm text-gray-900">{shop.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Shop Code</label>
                <p className="text-sm text-gray-900 font-mono">{shop.code}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Phone</label>
                <p className="text-sm text-gray-900">{shop.phone || 'N/A'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Status</label>
                <p className="text-sm text-gray-900">
                  {shop.isActive ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-gray-500">Inactive</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Booking Sites */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Sites</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Barber Booking Page</label>
              {(() => {
                const url = barberBookingUrl(user.bookingSlug);
                if (!url) {
                  return (
                    <div className="mt-1 flex items-center gap-3">
                      <p className="text-sm text-gray-400">
                        No booking slug yet.
                      </p>
                      <button
                        type="button"
                        onClick={() => generateSlugMutation.mutate()}
                        disabled={generateSlugMutation.isPending}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors disabled:opacity-50"
                      >
                        {generateSlugMutation.isPending ? 'Generating…' : 'Generate slug'}
                      </button>
                      {generateSlugMutation.isError && (
                        <span className="text-sm text-red-600">
                          {(generateSlugMutation.error as Error).message}
                        </span>
                      )}
                    </div>
                  );
                }
                return (
                  <div className="mt-1">
                    <BookingLink
                      url={url}
                      disabled={!user.bookingEnabled}
                      disabledReason={!user.bookingEnabled ? 'Booking disabled' : undefined}
                    />
                  </div>
                );
              })()}
            </div>
            {shop && (
              <div>
                <label className="text-sm font-medium text-gray-600">Shop Booking Page</label>
                {(() => {
                  const url = shopBookingUrl(shop.bookingSlug);
                  if (!url) {
                    return (
                      <p className="text-sm text-gray-400 mt-1">
                        Shop has no booking slug — shop booking not set up.
                      </p>
                    );
                  }
                  return (
                    <div className="mt-1">
                      <BookingLink
                        url={url}
                        disabled={!shop.shopBookingEnabled}
                        disabledReason={
                          !shop.shopBookingEnabled ? 'Shop booking disabled' : undefined
                        }
                      />
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>

        {/* Stripe & Payments */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stripe &amp; Payments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Connect Account ID</label>
              <p className="text-sm text-gray-900 font-mono break-all">
                {user.stripeConnectAccountId || <span className="text-gray-400">Not set up</span>}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Payouts Enabled</label>
              <p className="text-sm">
                {user.stripePayoutsEnabled ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-500 font-semibold">No</span>
                )}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Open Dispute</label>
              <p className="text-sm">
                {user.hasOpenDispute ? (
                  <span className="text-red-600 font-semibold">
                    Yes — deadline {user.disputeDeadline
                      ? new Date(user.disputeDeadline).toLocaleDateString()
                      : 'unknown'}
                  </span>
                ) : (
                  <span className="text-gray-500">None</span>
                )}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">RevenueCat Customer ID</label>
              <p className="text-sm text-gray-900 font-mono break-all">
                {user.revenueCatCustomerId || <span className="text-gray-400">None</span>}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Legacy Subscriber</label>
              <p className="text-sm text-gray-900">
                {user.isLegacySubscriber ? (
                  <span className="text-amber-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-gray-500">No</span>
                )}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Push Token</label>
              <p className="text-xs text-gray-900 font-mono break-all">
                {user.expoPushToken
                  ? `${String(user.expoPushToken).slice(0, 30)}…`
                  : <span className="text-gray-400">Not registered</span>}
              </p>
            </div>
          </div>
        </div>

        {/* Payouts & Tax */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payouts &amp; Tax</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Payout Schedule</label>
              <p className="text-sm text-gray-900 capitalize">
                {user.payoutSchedule || <span className="text-gray-400">Not configured</span>}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Payout Frequency</label>
              <p className="text-sm text-gray-900 capitalize">
                {user.payoutFrequency || <span className="text-gray-400">Not configured</span>}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Tax Reserve</label>
              <p className="text-sm">
                {user.taxHoldEnabled ? (
                  <span className="text-green-600 font-semibold">Enabled</span>
                ) : (
                  <span className="text-gray-500">Disabled</span>
                )}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Tax Reserve Amount</label>
              <p className="text-sm text-gray-900">
                {taxBreakdown
                  ? `$${taxBreakdown.calculatedHold.toFixed(2)}`
                  : user.taxHoldAmount != null
                    ? `$${parseFloat(user.taxHoldAmount).toFixed(2)}`
                    : <span className="text-gray-400">N/A</span>}
              </p>
            </div>
            {user.scheduledPayoutError && (
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-red-600">Last Payout Error</label>
                <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-2 mt-1 font-mono">
                  {user.scheduledPayoutError}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';
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

  const { data, isLoading } = useQuery({
    queryKey: ['admin-user', id],
    queryFn: () => adminApi.getUser(id!),
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
      </div>
    </AdminLayout>
  );
}

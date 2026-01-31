import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminInvitations() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['admin-invitations', page, search, statusFilter],
    queryFn: () =>
      adminApi.getInvitations({
        page,
        limit: 50,
        search: search || undefined,
        status: statusFilter,
      }),
  });

  const cancelMutation = useMutation({
    mutationFn: (id: string) => adminApi.cancelInvitation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-invitations'] });
    },
  });

  const handleCancel = async (id: string, invitedName: string) => {
    if (!window.confirm(`Cancel invitation for ${invitedName}?`)) return;

    try {
      await cancelMutation.mutateAsync(id);
      alert('Invitation cancelled successfully');
    } catch (error) {
      alert('Failed to cancel invitation');
    }
  };

  const copyInvitationLink = (link: string) => {
    navigator.clipboard.writeText(link);
    alert('Invitation link copied to clipboard!');
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800',
      accepted: 'bg-green-100 text-green-800',
      cancelled: 'bg-gray-100 text-gray-800',
      expired: 'bg-red-100 text-red-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Shop Invitations</h2>
          <p className="text-gray-600 mt-1">Manage shop member invitations across all shops</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search by email, name, or shop..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={statusFilter || ''}
              onChange={(e) => setStatusFilter(e.target.value || undefined)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="cancelled">Cancelled</option>
              <option value="expired">Expired</option>
            </select>
            <button
              onClick={() => {
                setSearch('');
                setStatusFilter(undefined);
              }}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-600">Total Invitations</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{data.total}</p>
            </div>
            <div className="bg-yellow-50 rounded-lg shadow-sm border border-yellow-200 p-4">
              <p className="text-sm font-medium text-yellow-800">Pending</p>
              <p className="text-3xl font-bold text-yellow-900 mt-2">
                {data.invitations.filter((i: any) => i.status === 'pending').length}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg shadow-sm border border-green-200 p-4">
              <p className="text-sm font-medium text-green-800">Accepted</p>
              <p className="text-3xl font-bold text-green-900 mt-2">
                {data.invitations.filter((i: any) => i.status === 'accepted').length}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-600">Cancelled/Expired</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {
                  data.invitations.filter(
                    (i: any) => i.status === 'cancelled' || i.status === 'expired'
                  ).length
                }
              </p>
            </div>
          </div>
        )}

        {/* Invitations Table */}
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-600">Loading invitations...</div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Invited Person
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Invited By
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dates
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.invitations?.map(
                      (invitation: {
                        id: string;
                        email: string | null;
                        invitedName: string | null;
                        status: string;
                        shop: { id: string; name: string; code: string };
                        invitedBy: {
                          id: string;
                          firstName: string;
                          lastName: string;
                          email: string;
                        };
                        acceptedBy: {
                          id: string;
                          firstName: string;
                          lastName: string;
                          email: string;
                        } | null;
                        createdAt: string;
                        expiresAt: string;
                        acceptedAt: string | null;
                        invitationLink: string | null;
                      }) => (
                        <tr key={invitation.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {invitation.invitedName || 'N/A'}
                            </div>
                            {invitation.email && (
                              <div className="text-sm text-gray-500">{invitation.email}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {invitation.shop.name}
                            </div>
                            <div className="text-xs text-gray-500 font-mono">
                              {invitation.shop.code}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {invitation.invitedBy.firstName} {invitation.invitedBy.lastName}
                            </div>
                            <div className="text-xs text-gray-500">
                              {invitation.invitedBy.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(
                                invitation.status
                              )}`}
                            >
                              {invitation.status}
                            </span>
                            {invitation.acceptedBy && (
                              <div className="text-xs text-gray-500 mt-1">
                                by {invitation.acceptedBy.firstName}{' '}
                                {invitation.acceptedBy.lastName}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div>
                              Created: {new Date(invitation.createdAt).toLocaleDateString()}
                            </div>
                            {invitation.status === 'pending' && (
                              <div className="text-xs">
                                Expires: {new Date(invitation.expiresAt).toLocaleDateString()}
                              </div>
                            )}
                            {invitation.acceptedAt && (
                              <div className="text-xs text-green-600">
                                Accepted: {new Date(invitation.acceptedAt).toLocaleDateString()}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                            {invitation.status === 'pending' && invitation.invitationLink && (
                              <>
                                <button
                                  onClick={() => copyInvitationLink(invitation.invitationLink!)}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  Copy Link
                                </button>
                                <button
                                  onClick={() =>
                                    handleCancel(invitation.id, invitation.invitedName || 'user')
                                  }
                                  className="text-red-600 hover:text-red-900"
                                  disabled={cancelMutation.isPending}
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                            {invitation.status !== 'pending' && (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {data && data.totalPages > 1 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Page {data.page} of {data.totalPages} ({data.total} total invitations)
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === data.totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </AdminLayout>
  );
}

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminShops() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<boolean | undefined>(undefined);

  const { data, isLoading } = useQuery({
    queryKey: ['admin-shops', page, search, activeFilter],
    queryFn: () =>
      adminApi.getShops({
        page,
        limit: 50,
        search: search || undefined,
        active: activeFilter,
      }),
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Shops</h2>
          <p className="text-gray-600 mt-1">Manage barbershops and their waitlists</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search shops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={activeFilter === undefined ? '' : activeFilter.toString()}
              onChange={(e) =>
                setActiveFilter(e.target.value === '' ? undefined : e.target.value === 'true')
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Shops</option>
              <option value="true">Active Only</option>
              <option value="false">Inactive Only</option>
            </select>
            <button
              onClick={() => {
                setSearch('');
                setActiveFilter(undefined);
              }}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Shops Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-600">Loading shops...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.shops?.map((shop: {
                id: string;
                name: string;
                code: string;
                phone: string | null;
                isActive: boolean;
                estimatedWaitMinutes: number;
                user: { firstName: string; lastName: string; email: string; subscriptionTier: string };
                waitlistStats: { waiting: number; completed: number };
              }) => (
                <div
                  key={shop.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{shop.name}</h3>
                      <p className="text-sm text-gray-500 font-mono mt-1">{shop.code}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        shop.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {shop.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-600 w-20">Owner:</span>
                      <span className="text-gray-900">
                        {shop.user.firstName} {shop.user.lastName}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-600 w-20">Email:</span>
                      <span className="text-gray-900 text-xs">{shop.user.email}</span>
                    </div>
                    {shop.phone && (
                      <div className="flex items-center text-sm">
                        <span className="text-gray-600 w-20">Phone:</span>
                        <span className="text-gray-900">{shop.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <span className="text-gray-600 w-20">Plan:</span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${
                          shop.user.subscriptionTier === 'premium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : shop.user.subscriptionTier === 'pro'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {shop.user.subscriptionTier}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-gray-600">Waiting</p>
                        <p className="text-xl font-bold text-orange-600">
                          {shop.waitlistStats?.waiting || 0}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Completed</p>
                        <p className="text-xl font-bold text-green-600">
                          {shop.waitlistStats?.completed || 0}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Est. Wait</p>
                        <p className="text-xl font-bold text-blue-600">
                          {shop.estimatedWaitMinutes}m
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {data && data.totalPages > 1 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Page {data.page} of {data.totalPages} ({data.total} total shops)
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

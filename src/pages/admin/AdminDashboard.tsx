import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => adminApi.getStats(),
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-600">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  const statCards = [
    {
      title: 'Total Users',
      value: stats?.totalUsers || 0,
      icon: '👥',
      color: 'bg-blue-500',
    },
    {
      title: 'Active Subscriptions',
      value: stats?.activeSubscriptions || 0,
      icon: '💳',
      color: 'bg-green-500',
    },
    {
      title: 'Recent Signups (30d)',
      value: stats?.recentSignups || 0,
      icon: '✨',
      color: 'bg-purple-500',
    },
    {
      title: 'Active Shops',
      value: `${stats?.activeShops || 0} / ${stats?.totalShops || 0}`,
      icon: '🏪',
      color: 'bg-orange-500',
    },
    {
      title: 'Total Haircuts',
      value: stats?.totalHaircuts || 0,
      icon: '✂️',
      color: 'bg-pink-500',
    },
    {
      title: 'Total Revenue',
      value: `$${(stats?.totalRevenue || 0).toLocaleString()}`,
      icon: '💰',
      color: 'bg-emerald-500',
    },
    {
      title: 'Total Expenses',
      value: stats?.totalExpenses || 0,
      icon: '📋',
      color: 'bg-red-500',
    },
    {
      title: 'Waitlist Entries',
      value: stats?.activeWaitlistEntries || 0,
      icon: '⏱️',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600 mt-1">Overview of your BarbersBook platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                </div>
                <div
                  className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}
                >
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Breakdown */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats?.subscriptionBreakdown?.map((item: { tier: string; count: string }) => (
              <div
                key={item.tier}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600 capitalize">
                    {item.tier} Tier
                  </span>
                  <span className="text-2xl font-bold text-gray-900">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

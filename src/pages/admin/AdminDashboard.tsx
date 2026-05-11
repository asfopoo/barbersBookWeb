import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

interface StatCardProps {
  label: string;
  value: string | number;
  accent: string;
  sub?: string;
}

function StatCard({ label, value, accent, sub }: StatCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 ${accent} p-5 hover:shadow-md transition-shadow`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2 leading-none">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1.5">{sub}</p>}
    </div>
  );
}

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => adminApi.getStats(),
    refetchInterval: 30000,
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

  const totalUsers = stats?.totalUsers || 0;
  const activeSubscriptions = stats?.activeSubscriptions || 0;
  const conversionRate = totalUsers > 0 ? ((activeSubscriptions / totalUsers) * 100).toFixed(1) : '0.0';

  const breakdown: { tier: string; count: string }[] = stats?.subscriptionBreakdown || [];
  const breakdownTotal = breakdown.reduce((sum, item) => sum + parseInt(item.count || '0', 10), 0);

  const tierConfig: Record<string, { color: string; bar: string }> = {
    free: { color: 'text-gray-600', bar: 'bg-gray-400' },
    pro: { color: 'text-blue-600', bar: 'bg-blue-500' },
    premium: { color: 'text-purple-600', bar: 'bg-purple-500' },
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-500 mt-1 text-sm">Platform overview. Refreshes every 30s.</p>
          </div>
          <p className="text-xs text-gray-400">Updated {new Date().toLocaleTimeString()}</p>
        </div>

        {/* Users & Growth */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Users &amp; Growth</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              label="Total Users"
              value={totalUsers.toLocaleString()}
              accent="border-l-blue-500"
            />
            <StatCard
              label="New Signups"
              value={stats?.recentSignups || 0}
              accent="border-l-purple-500"
              sub="Last 30 days"
            />
            <StatCard
              label="Premium Subscribers"
              value={activeSubscriptions.toLocaleString()}
              accent="border-l-green-500"
              sub={`${conversionRate}% conversion`}
            />
          </div>
        </div>

        {/* Platform Activity */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Platform Activity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              label="Active Shops"
              value={stats?.activeShops || 0}
              accent="border-l-orange-500"
              sub={`${stats?.totalShops || 0} total`}
            />
            <StatCard
              label="Total Haircuts"
              value={(stats?.totalHaircuts || 0).toLocaleString()}
              accent="border-l-pink-500"
            />
            <StatCard
              label="Waitlist Entries"
              value={stats?.activeWaitlistEntries || 0}
              accent="border-l-cyan-500"
              sub="Currently active"
            />
          </div>
        </div>

        {/* Financials */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Financials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              label="Total Revenue Tracked"
              value={`$${(stats?.totalRevenue || 0).toLocaleString()}`}
              accent="border-l-emerald-500"
              sub="All-time across all users"
            />
            <StatCard
              label="Total Expenses Tracked"
              value={(stats?.totalExpenses || 0).toLocaleString()}
              accent="border-l-red-500"
              sub="All-time across all users"
            />
          </div>
        </div>

        {/* Subscription Breakdown */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Subscription Breakdown</h3>
          <div className="space-y-4">
            {breakdown.map((item) => {
              const count = parseInt(item.count || '0', 10);
              const pct = breakdownTotal > 0 ? ((count / breakdownTotal) * 100).toFixed(1) : '0.0';
              const cfg = tierConfig[item.tier.toLowerCase()] ?? { color: 'text-gray-600', bar: 'bg-gray-400' };
              return (
                <div key={item.tier}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm font-semibold capitalize ${cfg.color}`}>{item.tier}</span>
                    <span className="text-sm text-gray-900 font-medium">{count.toLocaleString()} <span className="text-gray-400 font-normal">({pct}%)</span></span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${cfg.bar} rounded-full transition-all duration-500`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
            {breakdown.length === 0 && (
              <p className="text-sm text-gray-400">No subscription data available.</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

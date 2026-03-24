import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminAnalytics() {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');

  const getDateRange = () => {
    const endDate = new Date();
    const startDate = new Date();
    
    switch (dateRange) {
      case '7d':
        startDate.setDate(startDate.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(startDate.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(startDate.getDate() - 90);
        break;
    }

    return {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    };
  };

  const { startDate, endDate } = getDateRange();

  const { data: revenueData } = useQuery({
    queryKey: ['admin-analytics-revenue', startDate, endDate],
    queryFn: () => adminApi.getRevenueAnalytics(startDate, endDate),
  });

  const { data: userGrowth } = useQuery({
    queryKey: ['admin-analytics-users'],
    queryFn: () => adminApi.getUserAnalytics(),
  });

  const totalRevenue = revenueData?.dailyRevenue?.reduce(
    (sum: number, day: { total?: string }) => sum + parseFloat(day.total || '0'),
    0
  );

  const totalHaircuts = revenueData?.dailyRevenue?.reduce(
    (sum: number, day: { count?: string }) => sum + parseInt(day.count || '0', 10),
    0
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
            <p className="text-gray-600 mt-1">Platform performance and trends</p>
          </div>
          <div className="flex space-x-2">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dateRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : 'Last 90 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Revenue Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              ${totalRevenue?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0.00'}
            </p>
            <p className="text-xs text-gray-500 mt-1">Last {dateRange}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Haircuts</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {totalHaircuts?.toLocaleString() || 0}
            </p>
            <p className="text-xs text-gray-500 mt-1">Last {dateRange}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Average per Haircut</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              ${totalHaircuts && totalRevenue
                ? (totalRevenue / totalHaircuts).toFixed(2)
                : '0.00'}
            </p>
            <p className="text-xs text-gray-500 mt-1">Last {dateRange}</p>
          </div>
        </div>

        {/* Daily Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Daily Revenue Trend</h3>
          {revenueData?.dailyRevenue?.length > 0 ? (() => {
            const days: { date: string; count?: string; total?: string }[] = revenueData.dailyRevenue;
            const maxRev = Math.max(...days.map((d) => parseFloat(d.total || '0')), 1);
            return (
              <div className="space-y-2">
                {days.map((day) => {
                  const revenue = parseFloat(day.total || '0');
                  const count = parseInt(day.count || '0', 10);
                  const pct = (revenue / maxRev) * 100;
                  return (
                    <div key={day.date} className="flex items-center gap-3 group">
                      <span className="text-xs text-gray-400 w-20 shrink-0 text-right">
                        {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <div className="flex-1 h-6 bg-gray-100 rounded overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 w-16 text-right shrink-0">
                        ${revenue.toFixed(0)}
                      </span>
                      <span className="text-xs text-gray-400 w-12 text-right shrink-0">
                        {count} cuts
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })() : (
            <p className="text-center text-gray-500 py-8">No revenue data available</p>
          )}
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">User Growth (Last 12 Months)</h3>
          {userGrowth?.userGrowth?.length > 0 ? (() => {
            const months: { month: string; count: string }[] = userGrowth.userGrowth;
            const maxCount = Math.max(...months.map((m) => parseInt(m.count || '0', 10)), 1);
            return (
              <div className="space-y-2">
                {months.map((m) => {
                  const count = parseInt(m.count || '0', 10);
                  const pct = (count / maxCount) * 100;
                  return (
                    <div key={m.month} className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 w-24 shrink-0 text-right">
                        {new Date(m.month).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </span>
                      <div className="flex-1 h-6 bg-gray-100 rounded overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 w-10 text-right shrink-0">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })() : (
            <p className="text-center text-gray-500 py-8">No user growth data available</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

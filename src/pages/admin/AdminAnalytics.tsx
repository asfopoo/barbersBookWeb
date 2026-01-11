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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Revenue Trend</h3>
          {revenueData?.dailyRevenue?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Haircuts
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Revenue
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Avg
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {revenueData.dailyRevenue.map((day: { date: string; count?: string; total?: string }) => {
                    const revenue = parseFloat(day.total || '0');
                    const count = parseInt(day.count || '0', 10);
                    const avg = count > 0 ? revenue / count : 0;

                    return (
                      <tr key={day.date} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {new Date(day.date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{count}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          ${revenue.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">${avg.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">No revenue data available</p>
          )}
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth (Last 12 Months)</h3>
          {userGrowth?.userGrowth?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Month
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      New Users
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {userGrowth.userGrowth.map((month: { month: string; count: string }) => (
                    <tr key={month.month} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {new Date(month.month).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {month.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">No user growth data available</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

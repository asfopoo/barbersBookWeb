import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

type Tab = 'haircuts' | 'expenses';
type Range = '7d' | '30d' | '90d';

function getDateRange(range: Range) {
  const endDate = new Date();
  const startDate = new Date();
  if (range === '7d') startDate.setDate(startDate.getDate() - 7);
  else if (range === '30d') startDate.setDate(startDate.getDate() - 30);
  else startDate.setDate(startDate.getDate() - 90);
  return {
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
  };
}

interface Haircut {
  id: string;
  createdAt: string;
  userEmail?: string;
  userName?: string;
  clientName?: string;
  serviceName?: string;
  price?: string | number;
  tip?: string | number;
  totalAmount?: string | number;
  paymentMethod?: string;
  paidViaApp?: boolean;
  paymentStatus?: string;
  platformFeeAmount?: string | number;
}

interface Expense {
  id: string;
  createdAt: string;
  userEmail?: string;
  userName?: string;
  category?: string;
  description?: string;
  amount?: string | number;
}

export default function AdminTransactions() {
  const [tab, setTab] = useState<Tab>('haircuts');
  const [range, setRange] = useState<Range>('30d');

  const { startDate, endDate } = getDateRange(range);

  const { data: haircutsData, isLoading: haircutsLoading } = useQuery({
    queryKey: ['admin-haircuts', startDate, endDate],
    queryFn: () => adminApi.getHaircuts({ startDate, endDate, limit: 500 }),
    enabled: tab === 'haircuts',
  });

  const { data: expensesData, isLoading: expensesLoading } = useQuery({
    queryKey: ['admin-expenses', startDate, endDate],
    queryFn: () => adminApi.getExpenses({ startDate, endDate, limit: 500 }),
    enabled: tab === 'expenses',
  });

  const haircuts: Haircut[] = haircutsData?.haircuts || [];
  const expenses: Expense[] = expensesData?.expenses || [];

  const haircutRevenue = haircuts.reduce(
    (sum, h) => sum + parseFloat(String(h.totalAmount || h.price || 0)),
    0
  );
  const haircutFees = haircuts.reduce(
    (sum, h) => sum + parseFloat(String(h.platformFeeAmount || 0)),
    0
  );
  const expenseTotal = expenses.reduce(
    (sum, e) => sum + parseFloat(String(e.amount || 0)),
    0
  );

  const paidViaApp = haircuts.filter((h) => h.paidViaApp).length;

  const loading = tab === 'haircuts' ? haircutsLoading : expensesLoading;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Transactions</h2>
            <p className="text-gray-500 mt-1 text-sm">All haircuts and expenses logged across the platform</p>
          </div>
          <div className="flex space-x-2">
            {(['7d', '30d', '90d'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  range === r ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {r === '7d' ? 'Last 7d' : r === '30d' ? 'Last 30d' : 'Last 90d'}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {(['haircuts', 'expenses'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`py-3 px-1 text-sm font-semibold border-b-2 transition-colors capitalize ${
                  tab === t
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {t}
              </button>
            ))}
          </nav>
        </div>

        {/* Summary Cards */}
        {tab === 'haircuts' && !haircutsLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-emerald-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Haircuts</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{haircuts.length.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-blue-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">${haircutRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-purple-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Platform Fees</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">${haircutFees.toFixed(2)}</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-orange-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Paid via App</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{paidViaApp}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {haircuts.length > 0 ? ((paidViaApp / haircuts.length) * 100).toFixed(0) : 0}% of total
              </p>
            </div>
          </div>
        )}

        {tab === 'expenses' && !expensesLoading && (
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-red-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{expenses.length.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-red-400 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">${expenseTotal.toFixed(2)}</p>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">Loading...</div>
          ) : tab === 'haircuts' ? (
            haircuts.length === 0 ? (
              <div className="flex items-center justify-center h-48 text-gray-400 text-sm">No haircuts in this period</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Barber</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Client</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Service</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Price</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Tip</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Method</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">App</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {haircuts.map((h) => (
                      <tr key={h.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          {new Date(h.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-gray-900 whitespace-nowrap">
                          {h.userName || h.userEmail || '—'}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{h.clientName || '—'}</td>
                        <td className="px-4 py-3 text-gray-600">{h.serviceName || '—'}</td>
                        <td className="px-4 py-3 text-right text-gray-900">
                          ${parseFloat(String(h.price || 0)).toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {parseFloat(String(h.tip || 0)) > 0
                            ? `$${parseFloat(String(h.tip)).toFixed(2)}`
                            : '—'}
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-gray-900">
                          ${parseFloat(String(h.totalAmount || h.price || 0)).toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-gray-600 capitalize whitespace-nowrap">
                          {h.paymentMethod || '—'}
                        </td>
                        <td className="px-4 py-3">
                          {h.paidViaApp ? (
                            <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">Yes</span>
                          ) : (
                            <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500">No</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-500 text-xs">
                          {parseFloat(String(h.platformFeeAmount || 0)) > 0
                            ? `$${parseFloat(String(h.platformFeeAmount)).toFixed(2)}`
                            : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            expenses.length === 0 ? (
              <div className="flex items-center justify-center h-48 text-gray-400 text-sm">No expenses in this period</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">User</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Description</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wide">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {expenses.map((e) => (
                      <tr key={e.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          {new Date(e.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-gray-900 whitespace-nowrap">
                          {e.userName || e.userEmail || '—'}
                        </td>
                        <td className="px-4 py-3 text-gray-600 capitalize">{e.category || '—'}</td>
                        <td className="px-4 py-3 text-gray-600">{e.description || '—'}</td>
                        <td className="px-4 py-3 text-right font-semibold text-gray-900">
                          ${parseFloat(String(e.amount || 0)).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

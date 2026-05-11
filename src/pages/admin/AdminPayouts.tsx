import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi, type PayoutUser, type PayoutRunResult } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

const FREQ_LABELS: Record<string, string> = {
  rolling: 'Rolling',
  daily: 'Daily',
  weekly: 'Weekly',
  biweekly: 'Biweekly',
  semimonthly: 'Semi-monthly',
};

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function frequencyLabel(user: PayoutUser): string {
  const base = FREQ_LABELS[user.payoutFrequency] ?? user.payoutFrequency;
  if ((user.payoutFrequency === 'weekly' || user.payoutFrequency === 'biweekly') && user.payoutDayOfWeek != null) {
    return `${base} (${DAY_LABELS[user.payoutDayOfWeek]})`;
  }
  return base;
}

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

function formatDateTime(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-US', {
    month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit',
    timeZone: 'UTC', timeZoneName: 'short',
  });
}

type Filter = 'all' | 'errors' | 'ok';

interface RunResultBannerProps {
  result: PayoutRunResult;
  onDismiss: () => void;
}

function RunResultBanner({ result, onDismiss }: RunResultBannerProps) {
  const hasErrors = result.payoutsFailed > 0;
  return (
    <div className={`rounded-lg border p-4 ${hasErrors ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-sm font-semibold ${hasErrors ? 'text-red-800' : 'text-green-800'}`}>
            {hasErrors ? 'Run completed with errors' : 'Run completed successfully'}
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Evaluated: {result.usersEvaluated} &nbsp;·&nbsp;
            Initiated: <span className="font-medium text-green-700">{result.payoutsInitiated}</span> &nbsp;·&nbsp;
            Skipped: {result.payoutsSkipped} &nbsp;·&nbsp;
            Failed: <span className="font-medium text-red-700">{result.payoutsFailed}</span> &nbsp;·&nbsp;
            Total paid: <span className="font-medium">${result.totalAmountPaid.toFixed(2)}</span>
          </p>
          {result.errors.length > 0 && (
            <ul className="mt-2 space-y-1">
              {result.errors.map((e) => (
                <li key={e.userId} className="text-xs text-red-700">
                  <span className="font-medium">{e.email}</span>: {e.error}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button onClick={onDismiss} className="text-gray-400 hover:text-gray-600 text-lg leading-none flex-shrink-0">×</button>
      </div>
    </div>
  );
}

interface TaxBreakdownRowProps {
  userId: string;
}

function TaxBreakdownRow({ userId }: TaxBreakdownRowProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-tax-breakdown', userId],
    queryFn: () => adminApi.getTaxBreakdown(userId),
  });

  if (isLoading) {
    return (
      <tr>
        <td colSpan={7} className="px-8 py-3 bg-amber-50 text-xs text-gray-400">Loading breakdown…</td>
      </tr>
    );
  }

  if (error || !data) {
    return (
      <tr>
        <td colSpan={7} className="px-8 py-3 bg-amber-50 text-xs text-red-500">Failed to load breakdown.</td>
      </tr>
    );
  }

  const drift = Math.abs(data.dbHold - data.calculatedHold) > 0.01;

  return (
    <tr>
      <td colSpan={7} className="px-8 py-4 bg-amber-50 border-b border-amber-100">
        {!data.holdEnabled ? (
          <p className="text-xs text-gray-400">Tax reserve is disabled for this user.</p>
        ) : !data.taxHoldEnabledSince ? (
          <p className="text-xs text-amber-600">Tax reserve is enabled but has no accumulation start date. Run <strong>Recalculate Tax Reserves</strong> to initialize.</p>
        ) : (
          <div className="flex flex-wrap gap-6 text-xs">
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Hold Active Since</p>
              <p className="text-gray-900 font-medium">{formatDate(data.taxHoldEnabledSince)}</p>
              <p className="text-gray-400">Only services from this date count</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Tax Rate</p>
              <p className="text-gray-900 font-medium">{data.taxRate}%</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Card Earnings</p>
              <p className="text-gray-900 font-medium">${data.holdEarnings.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Card Tips</p>
              <p className="text-gray-900 font-medium">${data.holdTips.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Total</p>
              <p className="text-gray-900 font-medium">${data.holdTotal.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Calculated Hold</p>
              <p className="text-gray-900 font-medium">${data.calculatedHold.toFixed(2)}</p>
              <p className="text-gray-400">{data.taxRate}% × ${data.holdTotal.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">DB Hold (used by cron)</p>
              <p className={`font-medium ${drift ? 'text-red-600' : 'text-gray-900'}`}>${data.dbHold.toFixed(2)}</p>
              {drift && <p className="text-red-500">Stale. Run Recalculate.</p>}
            </div>
            <div>
              <p className="text-gray-400 uppercase tracking-wide font-semibold mb-1">Transactions</p>
              <p className="text-gray-900 font-medium">{data.transactionCount}</p>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}

export default function AdminPayouts() {
  const [filter, setFilter] = useState<Filter>('all');
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  const [runResult, setRunResult] = useState<PayoutRunResult | null>(null);
  const [recalcResult, setRecalcResult] = useState<{ updated: number; failed: number; total: number } | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-payout-cron'],
    queryFn: () => adminApi.getPayoutCronStatus(),
    refetchInterval: 60_000,
  });

  const triggerMutation = useMutation({
    mutationFn: () => adminApi.triggerPayoutRun(),
    onSuccess: (result) => {
      setRunResult(result);
      queryClient.invalidateQueries({ queryKey: ['admin-payout-cron'] });
    },
  });

  const recalcMutation = useMutation({
    mutationFn: () => adminApi.recalculateTaxHolds(),
    onSuccess: (result) => {
      setRecalcResult(result);
      queryClient.invalidateQueries({ queryKey: ['admin-payout-cron'] });
      queryClient.invalidateQueries({ queryKey: ['admin-tax-breakdown'] });
    },
  });

  const users = data?.users ?? [];

  const filtered = users.filter((u) => {
    if (filter === 'errors') return !!u.scheduledPayoutError;
    if (filter === 'ok') return !u.scheduledPayoutError;
    return true;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Payout Cron</h2>
            <p className="text-gray-500 mt-1 text-sm">
              Scheduled at <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">{data?.cronSchedule ?? '0 3 * * *'}</code> UTC daily
              {data?.nextCronRunAt && (
                <span className="ml-2 text-gray-400">· next run {formatDateTime(data.nextCronRunAt)}</span>
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { setRecalcResult(null); recalcMutation.mutate(); }}
              disabled={recalcMutation.isPending || triggerMutation.isPending}
              className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {recalcMutation.isPending ? 'Recalculating…' : 'Recalculate Tax Reserves'}
            </button>
            <button
              onClick={() => triggerMutation.mutate()}
              disabled={triggerMutation.isPending || recalcMutation.isPending}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {triggerMutation.isPending ? 'Running…' : 'Trigger Run Now'}
            </button>
          </div>
        </div>

        {/* Trigger error */}
        {triggerMutation.isError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
            Trigger failed: {(triggerMutation.error as Error).message}
          </div>
        )}

        {/* Recalc result */}
        {recalcResult && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between gap-4">
            <p className="text-sm text-green-800">
              Tax holds recalculated. <span className="font-medium">{recalcResult.updated}</span> of {recalcResult.total} users updated.
              {recalcResult.failed > 0 && <span className="text-red-600 ml-2">{recalcResult.failed} failed.</span>}
            </p>
            <button onClick={() => setRecalcResult(null)} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
          </div>
        )}

        {/* Run result */}
        {runResult && <RunResultBanner result={runResult} onDismiss={() => setRunResult(null)} />}

        {/* Summary cards */}
        {isLoading ? (
          <div className="text-gray-500 text-sm">Loading…</div>
        ) : error ? (
          <div className="text-red-600 text-sm">Failed to load payout data.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-sm border border-l-4 border-blue-500 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">On Scheduled Payout</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{data?.summary.totalOnScheduled ?? 0}</p>
                <p className="text-xs text-gray-400 mt-1">Users with Stripe Connect</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-l-4 border-green-500 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Stripe Payouts Enabled</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{data?.summary.stripeEnabled ?? 0}</p>
                <p className="text-xs text-gray-400 mt-1">Account fully onboarded</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-l-4 border-red-500 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">With Errors</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{data?.summary.withErrors ?? 0}</p>
                <p className="text-xs text-gray-400 mt-1">Failed last attempted run</p>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-2">
              {(['all', 'errors', 'ok'] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    filter === f ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {f === 'all' ? `All (${users.length})` : f === 'errors' ? `Errors (${users.filter(u => u.scheduledPayoutError).length})` : `Healthy (${users.filter(u => !u.scheduledPayoutError).length})`}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Barber</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Frequency</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Last Payout</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Next Payout</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Tax Reserve</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Stripe</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Error</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-gray-400 text-sm">
                          No users match this filter.
                        </td>
                      </tr>
                    )}
                    {filtered.map((user) => {
                      const isExpanded = expandedUserId === user.id;
                      return (
                        <>
                          <tr
                            key={user.id}
                            onClick={() => setExpandedUserId(isExpanded ? null : user.id)}
                            className={`cursor-pointer transition-colors ${user.scheduledPayoutError ? 'bg-red-50/40' : ''} ${isExpanded ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
                          >
                            <td className="px-4 py-3">
                              <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                              <p className="text-xs text-gray-400">{user.email}</p>
                            </td>
                            <td className="px-4 py-3 text-gray-700">{frequencyLabel(user)}</td>
                            <td className="px-4 py-3 text-gray-600">{formatDate(user.lastScheduledPayoutAt)}</td>
                            <td className="px-4 py-3 text-gray-600">
                              {user.payoutFrequency === 'rolling'
                                ? <span className="text-gray-400 italic">Stripe auto</span>
                                : formatDate(user.nextPayoutDate)}
                            </td>
                            <td className="px-4 py-3">
                              {user.taxHoldEnabled ? (
                                <span className="text-xs bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded-full">
                                  ${Number(user.taxHoldAmount).toFixed(2)}
                                </span>
                              ) : (
                                <span className="text-xs text-gray-400">Off</span>
                              )}
                            </td>
                            <td className="px-4 py-3">
                              {user.stripePayoutsEnabled ? (
                                <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">Enabled</span>
                              ) : (
                                <span className="text-xs bg-gray-100 text-gray-500 font-medium px-2 py-0.5 rounded-full">Disabled</span>
                              )}
                            </td>
                            <td className="px-4 py-3 max-w-xs">
                              {user.scheduledPayoutError ? (
                                <span className="text-xs text-red-600 truncate block" title={user.scheduledPayoutError}>
                                  {user.scheduledPayoutError}
                                </span>
                              ) : (
                                <span className="text-xs text-gray-400">—</span>
                              )}
                            </td>
                          </tr>
                          {isExpanded && <TaxBreakdownRow key={`${user.id}-breakdown`} userId={user.id} />}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {filtered.length > 0 && (
                <p className="text-xs text-gray-400 px-4 py-2 border-t border-gray-100">Click a row to see the tax reserve breakdown.</p>
              )}
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}

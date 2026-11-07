import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { adminApi, type AffiliateInput } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';
import Field from '../../components/admin/Field';
import { INPUT, MIN_PAYOUT_USD, usd } from '../../lib/affiliateFormat';

const EMPTY: AffiliateInput = { name: '', code: '', email: '', payoutMethod: '', payoutHandle: '', commissionPercent: 30, commissionMonths: 12 };

export default function AdminAffiliates() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<AffiliateInput>(EMPTY);
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-affiliates'],
    queryFn: () => adminApi.getAffiliates(),
  });

  const create = useMutation({
    mutationFn: (input: AffiliateInput) => adminApi.createAffiliate(input),
    onSuccess: (a) => navigate(`/admin/affiliates/${a.id}`),
  });

  const affiliates = data?.affiliates ?? [];
  const owedTotal = affiliates.reduce((sum, a) => sum + a.totals.owedUsd, 0);
  const set = (key: keyof AffiliateInput) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'number' ? Number(e.target.value) : e.target.value }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Affiliates</h2>
            <p className="text-gray-600 mt-1 max-w-3xl">
              People who send us barbers for a cut of what those barbers pay. Their code works in the app's invite code field, and
              their link is thebarbersbook.com/r/CODE. Commissions land automatically from App Store and Google Play charges.
            </p>
          </div>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-lg"
          >
            {showForm ? 'Cancel' : 'New affiliate'}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              create.mutate(form);
            }}
            className="bg-white rounded-lg border border-gray-200 p-5 grid gap-4 sm:grid-cols-2"
          >
            <Field label="Name" hint="Shown to barbers: “Tootie invited you”">
              <input required value={form.name} onChange={set('name')} className={INPUT} />
            </Field>
            <Field label="Code" hint="4 to 16 letters or numbers. Can't change later.">
              <input required value={form.code} onChange={set('code')} className={`${INPUT} uppercase`} />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email ?? ''} onChange={set('email')} className={INPUT} />
            </Field>
            <Field label="Pay them by" hint="PayPal, Zelle, Cash App, Venmo">
              <input value={form.payoutMethod ?? ''} onChange={set('payoutMethod')} className={INPUT} />
            </Field>
            <Field label="Payout handle" hint="Email, phone, or $cashtag">
              <input value={form.payoutHandle ?? ''} onChange={set('payoutHandle')} className={INPUT} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Commission %">
                <input type="number" min={0} max={100} step="0.5" value={form.commissionPercent} onChange={set('commissionPercent')} className={INPUT} />
              </Field>
              <Field label="For months">
                <input type="number" min={1} max={120} value={form.commissionMonths} onChange={set('commissionMonths')} className={INPUT} />
              </Field>
            </div>
            {create.error && <p className="sm:col-span-2 text-red-600 text-sm">{(create.error as Error).message}</p>}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={create.isPending}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg disabled:opacity-50"
              >
                Create affiliate
              </button>
            </div>
          </form>
        )}

        {isLoading && <p className="text-gray-500">Loading affiliates…</p>}
        {error && <p className="text-red-600">{(error as Error).message}</p>}
        {!isLoading && affiliates.length === 0 && !showForm && (
          <div className="bg-white rounded-lg border border-gray-200 p-10 text-center text-gray-500">No affiliates yet.</div>
        )}

        {affiliates.length > 0 && (
          <>
            <p className="text-sm text-gray-600">
              Owed across all affiliates: <span className="font-semibold text-gray-900">{usd(owedTotal)}</span>
            </p>
            <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Affiliate</th>
                    <th className="px-4 py-3 text-right">Sign-ups</th>
                    <th className="px-4 py-3 text-right">Paying</th>
                    <th className="px-4 py-3 text-right">Earned</th>
                    <th className="px-4 py-3 text-right">Paid</th>
                    <th className="px-4 py-3 text-right">Owed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {affiliates.map((a) => (
                    <tr key={a.id} className={a.active ? '' : 'opacity-50'}>
                      <td className="px-4 py-3">
                        <Link to={`/admin/affiliates/${a.id}`} className="font-medium text-gray-900 hover:underline">
                          {a.name}
                        </Link>
                        <div className="text-xs text-gray-500">
                          {a.code} · {a.commissionPercent}% for {a.commissionMonths} mo{a.active ? '' : ' · inactive'}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">{a.totals.signups}</td>
                      <td className="px-4 py-3 text-right">{a.totals.payingBarbers}</td>
                      <td className="px-4 py-3 text-right">{usd(a.totals.earnedUsd)}</td>
                      <td className="px-4 py-3 text-right">{usd(a.totals.paidUsd)}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={a.totals.owedUsd >= MIN_PAYOUT_USD ? 'font-semibold text-green-700' : ''}>
                          {usd(a.totals.owedUsd)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}


import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { adminApi, type AffiliateDetail, type AffiliateInput } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';
import Field from '../../components/admin/Field';
import { INPUT, MIN_PAYOUT_USD, usd } from '../../lib/affiliateFormat';

function date(iso: string | null): string {
  return iso ? new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '';
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-gray-500 w-28 shrink-0">{label}</span>
      <code className="bg-gray-100 rounded px-2 py-1 break-all">{value}</code>
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch {
            // Clipboard blocked; the value is selectable.
          }
        }}
        className="text-blue-600 hover:underline"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

function EditForm({ affiliate }: { affiliate: AffiliateDetail }) {
  const queryClient = useQueryClient();
  // Seeded once per affiliate (the parent keys this form by id).
  const [form, setForm] = useState<AffiliateInput>(() => ({
    name: affiliate.name,
    email: affiliate.email ?? '',
    payoutMethod: affiliate.payoutMethod ?? '',
    payoutHandle: affiliate.payoutHandle ?? '',
    commissionPercent: affiliate.commissionPercent,
    commissionMonths: affiliate.commissionMonths,
    notes: affiliate.notes ?? '',
  }));
  const save = useMutation({
    mutationFn: (input: AffiliateInput) => adminApi.updateAffiliate(affiliate.id, input),
    onSuccess: (a) => queryClient.setQueryData(['admin-affiliate', affiliate.id], a),
  });
  const set = (key: keyof AffiliateInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'number' ? Number(e.target.value) : e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        save.mutate(form);
      }}
      className="bg-white rounded-lg border border-gray-200 p-5 grid gap-4 sm:grid-cols-2"
    >
      <Field label="Name">
        <input required value={form.name ?? ''} onChange={set('name')} className={INPUT} />
      </Field>
      <Field label="Email">
        <input type="email" value={form.email ?? ''} onChange={set('email')} className={INPUT} />
      </Field>
      <Field label="Pay them by">
        <input value={form.payoutMethod ?? ''} onChange={set('payoutMethod')} className={INPUT} />
      </Field>
      <Field label="Payout handle">
        <input value={form.payoutHandle ?? ''} onChange={set('payoutHandle')} className={INPUT} />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Commission %" hint="Applies to new charges only">
          <input type="number" min={0} max={100} step="0.5" value={form.commissionPercent ?? 0} onChange={set('commissionPercent')} className={INPUT} />
        </Field>
        <Field label="For months">
          <input type="number" min={1} max={120} value={form.commissionMonths ?? 12} onChange={set('commissionMonths')} className={INPUT} />
        </Field>
      </div>
      <Field label="Notes">
        <textarea rows={2} value={form.notes ?? ''} onChange={set('notes')} className={INPUT} />
      </Field>
      {save.error && <p className="sm:col-span-2 text-red-600 text-sm">{(save.error as Error).message}</p>}
      <div className="sm:col-span-2 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={save.isPending}
          className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-lg disabled:opacity-50"
        >
          {save.isSuccess && !save.isPending ? 'Saved' : 'Save changes'}
        </button>
        <button
          type="button"
          onClick={() => {
            const next = !affiliate.active;
            const msg = next
              ? `Turn ${affiliate.code} back on? New sign-ups with it will count again.`
              : `Turn off ${affiliate.code}? New sign-ups won't attach. Barbers already attributed keep earning commission.`;
            if (window.confirm(msg)) save.mutate({ active: next });
          }}
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50"
        >
          {affiliate.active ? 'Turn off code' : 'Turn code back on'}
        </button>
      </div>
    </form>
  );
}

function PayoutBox({ affiliate }: { affiliate: AffiliateDetail }) {
  const queryClient = useQueryClient();
  const [reference, setReference] = useState('');
  const owed = affiliate.totals.owedUsd;
  const pay = useMutation({
    mutationFn: () =>
      adminApi.recordAffiliatePayout(affiliate.id, { method: affiliate.payoutMethod ?? undefined, reference: reference || undefined }),
    onSuccess: () => {
      setReference('');
      queryClient.invalidateQueries({ queryKey: ['admin-affiliate', affiliate.id] });
      queryClient.invalidateQueries({ queryKey: ['admin-affiliates'] });
    },
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-gray-900">Owed now</h3>
        <span className={`text-2xl font-bold ${owed >= MIN_PAYOUT_USD ? 'text-green-700' : 'text-gray-900'}`}>{usd(owed)}</span>
      </div>
      <p className="text-sm text-gray-600">
        {owed <= 0
          ? 'Nothing to pay right now.'
          : owed < MIN_PAYOUT_USD
            ? `Under the ${usd(MIN_PAYOUT_USD)} minimum, so it normally rolls to next month.`
            : `Send ${usd(owed)}${affiliate.payoutMethod ? ` by ${affiliate.payoutMethod}` : ''}${affiliate.payoutHandle ? ` to ${affiliate.payoutHandle}` : ''}, then record it here.`}
      </p>
      {owed > 0 && (
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="Confirmation # (optional)"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className={`${INPUT} sm:max-w-xs`}
          />
          <button
            onClick={() => {
              const warn = owed < MIN_PAYOUT_USD ? ` That's under the ${usd(MIN_PAYOUT_USD)} minimum.` : '';
              if (window.confirm(`Record that you sent ${affiliate.name} ${usd(owed)}?${warn}`)) pay.mutate();
            }}
            disabled={pay.isPending}
            className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white text-sm font-medium rounded-lg disabled:opacity-50"
          >
            I sent it
          </button>
        </div>
      )}
      {pay.error && <p className="text-red-600 text-sm">{(pay.error as Error).message}</p>}
    </div>
  );
}

export default function AdminAffiliateDetail() {
  const { id = '' } = useParams();
  const { data: a, isLoading, error } = useQuery({
    queryKey: ['admin-affiliate', id],
    queryFn: () => adminApi.getAffiliate(id),
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <Link to="/admin/affiliates" className="text-sm text-blue-600 hover:underline">
          ← All affiliates
        </Link>
        {isLoading && <p className="text-gray-500">Loading…</p>}
        {error && <p className="text-red-600">{(error as Error).message}</p>}
        {a && (
          <>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {a.name} {!a.active && <span className="text-sm font-medium text-gray-500">(code off)</span>}
              </h2>
              <p className="text-gray-600 mt-1">
                {a.code} · {a.commissionPercent}% of what their barbers pay, for {a.commissionMonths} months from each barber's first charge
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-2">
              <CopyRow label="Their link" value={a.link} />
              <CopyRow label="Invite code" value={a.code} />
              <CopyRow label="Stats page" value={a.statsUrl} />
              <p className="text-xs text-gray-500 pt-1">Send them the stats page link. Anyone with it can see their numbers (no barber names).</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              {[
                ['Sign-ups', String(a.totals.signups)],
                ['Paying barbers', String(a.totals.payingBarbers)],
                ['Earned', usd(a.totals.earnedUsd)],
                ['Paid out', usd(a.totals.paidUsd)],
              ].map(([label, value]) => (
                <div key={label} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">{value}</div>
                </div>
              ))}
            </div>

            <PayoutBox affiliate={a} />

            <section className="space-y-2">
              <h3 className="font-semibold text-gray-900">Barbers they sent ({a.barbers.length})</h3>
              {a.barbers.length === 0 ? (
                <p className="text-sm text-gray-500">No sign-ups with {a.code} yet.</p>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      <tr>
                        <th className="px-4 py-3">Barber</th>
                        <th className="px-4 py-3">Joined</th>
                        <th className="px-4 py-3">Plan</th>
                        <th className="px-4 py-3">First charge</th>
                        <th className="px-4 py-3 text-right">Commission</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {a.barbers.map((b) => (
                        <tr key={b.id}>
                          <td className="px-4 py-3">
                            <Link to={`/admin/users/${b.id}`} className="font-medium text-gray-900 hover:underline">
                              {[b.firstName, b.lastName].filter(Boolean).join(' ') || b.email}
                            </Link>
                            <div className="text-xs text-gray-500">{b.email}</div>
                          </td>
                          <td className="px-4 py-3 text-gray-700">{date(b.createdAt)}</td>
                          <td className="px-4 py-3 text-gray-700">
                            {b.subscriptionTier} · {b.subscriptionStatus}
                          </td>
                          <td className="px-4 py-3 text-gray-700">{date(b.firstChargeAt) || 'Not yet'}</td>
                          <td className="px-4 py-3 text-right">{usd(b.earnedUsd)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            <section className="space-y-2">
              <h3 className="font-semibold text-gray-900">Commissions</h3>
              {a.commissions.length === 0 ? (
                <p className="text-sm text-gray-500">None yet. They appear when a barber they sent is charged by the App Store or Google Play.</p>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                      <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Event</th>
                        <th className="px-4 py-3 text-right">Barber paid</th>
                        <th className="px-4 py-3 text-right">Commission</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {a.commissions.map((c) => (
                        <tr key={c.id}>
                          <td className="px-4 py-3 text-gray-700">{date(c.occurredAt)}</td>
                          <td className="px-4 py-3 text-gray-700">
                            {c.grossUsd < 0 ? 'Refund' : c.eventType.replace(/_/g, ' ').toLowerCase()}
                            {c.store && <span className="text-xs text-gray-500"> · {c.store.replace(/_/g, ' ').toLowerCase()}</span>}
                          </td>
                          <td className="px-4 py-3 text-right">{usd(c.grossUsd)}</td>
                          <td className={`px-4 py-3 text-right ${c.commissionUsd < 0 ? 'text-red-600' : ''}`}>{usd(c.commissionUsd)}</td>
                          <td className="px-4 py-3 text-gray-700">{c.paid ? 'Paid' : 'Owed'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {a.payouts.length > 0 && (
              <section className="space-y-2">
                <h3 className="font-semibold text-gray-900">Payouts</h3>
                <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100 text-sm">
                  {a.payouts.map((p) => (
                    <div key={p.id} className="px-4 py-3 flex flex-wrap justify-between gap-2">
                      <span className="text-gray-700">
                        {date(p.paidAt)}
                        {p.method && ` · ${p.method}`}
                        {p.reference && ` · ${p.reference}`}
                      </span>
                      <span className="font-medium">{usd(p.amountUsd)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="space-y-2">
              <h3 className="font-semibold text-gray-900">Edit</h3>
              <EditForm key={a.id} affiliate={a} />
            </section>
          </>
        )}
      </div>
    </AdminLayout>
  );
}

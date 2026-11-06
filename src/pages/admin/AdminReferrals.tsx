import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { adminApi, type HeldReferral } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

const REASON: Record<HeldReferral['reason'], string> = {
  same_ip_as_referrer: 'Signed up from the same IP as the referrer',
  same_ip_as_other_referee: "Same signup IP as another of this referrer's invites",
};

function name(p: { firstName: string | null; lastName: string | null; email: string }) {
  return [p.firstName, p.lastName].filter(Boolean).join(' ') || p.email;
}

export default function AdminReferrals() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-referrals-held'],
    queryFn: () => adminApi.getHeldReferrals(),
  });

  const release = useMutation({
    mutationFn: (refereeId: string) => adminApi.releaseReferral(refereeId),
    onSuccess: (r) => {
      queryClient.invalidateQueries({ queryKey: ['admin-referrals-held'] });
      const parts = [
        r.refereeRewards && 'invited barber',
        r.referrerRewards && 'referrer',
      ].filter(Boolean);
      const lines = [parts.length ? `Paid a free month to the ${parts.join(' and the ')}.` : 'Nothing left to pay.'];
      if (r.capped) lines.push('Referrer is at the 12-reward cap, so they got nothing.');
      if (r.errors.length) lines.push(`Errors: ${r.errors.map((e) => e.error).join('; ')}`);
      window.alert(lines.join('\n'));
    },
    onError: (err: Error) => window.alert(err.message || 'Failed to release'),
  });

  const held = data?.held ?? [];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Held referral rewards</h2>
          <p className="text-gray-600 mt-1 max-w-3xl">
            These invited barbers used the app enough to earn the free month, but the daily sweep won't pay it because the signup
            IPs match. Usually that's one person farming accounts. If it's real (same shop wifi, family), release it to pay both
            sides now. Left alone, a hold drops off the list 45 days after the barber signed up.
          </p>
        </div>

        {isLoading && <p className="text-gray-500">Checking referrals…</p>}
        {error && <p className="text-red-600">{(error as Error).message}</p>}
        {!isLoading && held.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-10 text-center text-gray-500">Nothing held right now.</div>
        )}

        {held.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-4 py-3">Invited barber</th>
                  <th className="px-4 py-3">Referrer</th>
                  <th className="px-4 py-3">Why held</th>
                  <th className="px-4 py-3">Unpaid</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {held.map((h) => (
                  <tr key={h.referee.id} className="align-top">
                    <td className="px-4 py-3">
                      <Link to={`/admin/users/${h.referee.id}`} className="font-medium text-gray-900 hover:underline">
                        {name(h.referee)}
                      </Link>
                      <div className="text-xs text-gray-500">{h.referee.email}</div>
                      <div className="text-xs text-gray-500">
                        Joined {new Date(h.referee.createdAt).toLocaleDateString()} · IP {h.referee.signupIp ?? 'unknown'}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Link to={`/admin/users/${h.referrer.id}`} className="font-medium text-gray-900 hover:underline">
                        {name(h.referrer)}
                      </Link>
                      <div className="text-xs text-gray-500">{h.referrer.email}</div>
                      <div className="text-xs text-gray-500">IP {h.referrer.signupIp ?? 'unknown'}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{REASON[h.reason]}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {[!h.refereeRewarded && 'Invited', !h.referrerRewarded && 'Referrer'].filter(Boolean).join(', ')}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => {
                          if (window.confirm(`Pay the free month to ${name(h.referee)} and ${name(h.referrer)}?`)) {
                            release.mutate(h.referee.id);
                          }
                        }}
                        disabled={release.isPending}
                        className="px-3 py-1.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-lg disabled:opacity-50 whitespace-nowrap"
                      >
                        Release
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

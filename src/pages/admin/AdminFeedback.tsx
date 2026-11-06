import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { adminApi, type FeedbackItem } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

const CATEGORY_STYLE: Record<string, string> = {
  'Bug Report': 'bg-red-100 text-red-800',
  'Feature Request': 'bg-blue-100 text-blue-800',
  'General Feedback': 'bg-gray-100 text-gray-700',
};

function timeAgo(iso: string): string {
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 60) return `${Math.max(mins, 1)}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 48) return `${hours}h ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function mailto(item: FeedbackItem): string {
  const spanish = item.language === 'es';
  const subject = spanish ? 'Re: tus comentarios sobre The Barber\'s Book' : 'Re: your feedback on The Barber\'s Book';
  const quoted = item.message.split('\n').map((l) => `> ${l}`).join('\n');
  return `mailto:${item.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`\n\n${quoted}`)}`;
}

export default function AdminFeedback() {
  const [filter, setFilter] = useState<'open' | 'all'>('open');
  const queryClient = useQueryClient();

  // One fetch for both views; "open" is filtered here so the nav badge and
  // this page share the cached list.
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-feedback', 'all'],
    queryFn: () => adminApi.getFeedback('all'),
  });

  const toggle = useMutation({
    mutationFn: ({ id, replied }: { id: string; replied: boolean }) => adminApi.setFeedbackReplied(id, replied),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-feedback'] }),
    onError: (err: Error) => window.alert(err.message || 'Failed to update'),
  });

  const items = (data?.feedback ?? []).filter((f) => filter === 'all' || !f.repliedAt);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Feedback</h2>
            <p className="text-gray-600 mt-1">
              Sent from the app's Feedback screen. Each one is also emailed to you; reply goes to the barber.
            </p>
          </div>
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-0.5 text-sm">
            {(['open', 'all'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-md font-medium ${filter === f ? 'bg-gray-900 text-white' : 'text-gray-600'}`}
              >
                {f === 'open' ? `Needs reply (${data?.openCount ?? 0})` : `All (${data?.feedback.length ?? 0})`}
              </button>
            ))}
          </div>
        </div>

        {isLoading && <p className="text-gray-500">Loading…</p>}
        {error && <p className="text-red-600">{(error as Error).message}</p>}
        {!isLoading && items.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-10 text-center text-gray-500">
            {filter === 'open' ? 'All caught up.' : 'No feedback saved yet. New messages from the app show up here.'}
          </div>
        )}

        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg border p-5 ${item.repliedAt ? 'border-gray-200 opacity-70' : 'border-gray-300'}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${CATEGORY_STYLE[item.category] ?? CATEGORY_STYLE['General Feedback']}`}>
                      {item.category}
                    </span>
                    {item.userId ? (
                      <Link to={`/admin/users/${item.userId}`} className="font-medium text-gray-900 hover:underline">
                        {[item.firstName, item.lastName].filter(Boolean).join(' ') || item.email}
                      </Link>
                    ) : (
                      <span className="font-medium text-gray-900">{item.email ?? 'Deleted user'}</span>
                    )}
                    {item.language === 'es' && <span className="text-xs text-gray-500">ES</span>}
                    <span className="text-sm text-gray-500" title={new Date(item.createdAt).toLocaleString()}>
                      {timeAgo(item.createdAt)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {[item.email, item.appVersion && `v${item.appVersion}`, item.os, item.deviceModel].filter(Boolean).join(' · ')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {item.email && (
                    <a
                      href={mailto(item)}
                      className="px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Reply
                    </a>
                  )}
                  <button
                    onClick={() => toggle.mutate({ id: item.id, replied: !item.repliedAt })}
                    disabled={toggle.isPending}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg disabled:opacity-50 ${
                      item.repliedAt
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-gray-900 text-white hover:bg-gray-700'
                    }`}
                  >
                    {item.repliedAt ? '✓ Replied' : 'Mark replied'}
                  </button>
                </div>
              </div>
              <p className="mt-3 text-gray-800 whitespace-pre-wrap break-words">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

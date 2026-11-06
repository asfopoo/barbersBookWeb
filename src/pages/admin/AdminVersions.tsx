import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { adminApi, type AppPlatform, type PlatformVersions } from '../../lib/adminApi';
import AdminLayout from '../../components/admin/AdminLayout';

const VERSION_RE = /^\d+\.\d+\.\d+$/;
const LABEL: Record<AppPlatform, string> = { ios: 'iOS (App Store)', android: 'Android (Google Play)' };

function PlatformCard({ platform, current }: { platform: AppPlatform; current: PlatformVersions }) {
  const queryClient = useQueryClient();
  const [latest, setLatest] = useState(current.latestVersion);
  const [min, setMin] = useState(current.minVersion);

  useEffect(() => {
    setLatest(current.latestVersion);
    setMin(current.minVersion);
  }, [current.latestVersion, current.minVersion]);

  const save = useMutation({
    mutationFn: () => adminApi.setAppVersions(platform, { latestVersion: latest.trim(), minVersion: min.trim() }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['admin-app-config'] }),
    onError: (err: Error) => window.alert(err.message || 'Failed to save'),
  });

  const dirty = latest.trim() !== current.latestVersion || min.trim() !== current.minVersion;
  const valid = VERSION_RE.test(latest.trim()) && VERSION_RE.test(min.trim());
  const minChanged = min.trim() !== current.minVersion;

  const onSave = () => {
    if (minChanged && min.trim() !== '0.0.0') {
      const ok = window.confirm(
        `Raise the ${platform} minimum to ${min.trim()}? Anyone below it is blocked by a forced update screen until they update.`,
      );
      if (!ok) return;
    }
    save.mutate();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{LABEL[platform]}</h3>
        <a href={current.storeUrl} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
          Store page ↗
        </a>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Latest version</span>
        <span className="block text-xs text-gray-500 mb-1">
          Set this once the build is live in the store. Anyone older sees a soft "update available" prompt.
        </span>
        <input
          value={latest}
          onChange={(e) => setLatest(e.target.value)}
          className="w-40 px-3 py-2 border border-gray-300 rounded-lg font-mono"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Minimum version</span>
        <span className="block text-xs text-gray-500 mb-1">
          Forced update below this. Leave at 0.0.0 unless an old version truly can't work anymore.
        </span>
        <input
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="w-40 px-3 py-2 border border-gray-300 rounded-lg font-mono"
        />
      </label>
      <div className="flex items-center gap-3">
        <button
          onClick={onSave}
          disabled={!dirty || !valid || save.isPending}
          className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-lg disabled:opacity-40"
        >
          {save.isPending ? 'Saving…' : 'Save'}
        </button>
        {!valid && <span className="text-sm text-red-600">Versions look like 4.19.0</span>}
        {save.isSuccess && !dirty && <span className="text-sm text-green-700">Saved. Apps pick it up within a minute.</span>}
      </div>
    </div>
  );
}

export default function AdminVersions() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-app-config'],
    queryFn: () => adminApi.getAppConfig(),
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Store versions</h2>
          <p className="text-gray-600 mt-1 max-w-3xl">
            What the app's update prompt compares against. Only raise "latest" after the store has approved and released the build,
            or barbers get sent to a store page that doesn't have it yet.
          </p>
        </div>
        {isLoading && <p className="text-gray-500">Loading…</p>}
        {error && <p className="text-red-600">{(error as Error).message}</p>}
        {data && (
          <div className="grid gap-4 md:grid-cols-2">
            {(['ios', 'android'] as const).map((p) => (
              <PlatformCard key={p} platform={p} current={data[p]} />
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

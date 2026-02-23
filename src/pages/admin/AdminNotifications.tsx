import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { adminApi } from '../../lib/adminApi';

interface BlastResult {
  sent: number;
  failed: number;
  total: number;
  errors?: string[];
}

export default function AdminNotifications() {
  const [emailLoading, setEmailLoading] = useState(false);
  const [pushLoading, setPushLoading] = useState(false);
  const [emailResult, setEmailResult] = useState<BlastResult | null>(null);
  const [pushResult, setPushResult] = useState<BlastResult | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [pushError, setPushError] = useState<string | null>(null);

  const handleEmailBlast = async () => {
    if (!confirm('Send the Tap to Pay launch email to ALL users with an active Stripe Connect account? This cannot be undone.')) return;

    setEmailLoading(true);
    setEmailResult(null);
    setEmailError(null);
    try {
      const result = await adminApi.blastTapToPayEmail();
      setEmailResult(result);
    } catch (err: any) {
      setEmailError(err.message || 'Failed to send email blast');
    } finally {
      setEmailLoading(false);
    }
  };

  const handlePushBlast = async () => {
    if (!confirm('Send the Tap to Pay launch push notification to all eligible users with a push token?')) return;

    setPushLoading(true);
    setPushResult(null);
    setPushError(null);
    try {
      const result = await adminApi.blastTapToPayPush();
      setPushResult(result);
    } catch (err: any) {
      setPushError(err.message || 'Failed to send push blast');
    } finally {
      setPushLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
          <p className="text-gray-600 mt-1">Send launch announcements and push notifications to users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Email Blast */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Tap to Pay Launch Email</h3>
                <p className="text-sm text-gray-500">Sends announcement email to all users with active Stripe Connect accounts</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-amber-800 font-medium">⚠️ One-time blast — only send once at launch</p>
            </div>

            <button
              onClick={handleEmailBlast}
              disabled={emailLoading || !!emailResult}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {emailLoading ? 'Sending...' : emailResult ? '✓ Sent' : 'Send Email Blast'}
            </button>

            {emailResult && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
                <strong>Complete!</strong> Sent: {emailResult.sent} / {emailResult.total} &nbsp;|&nbsp; Failed: {emailResult.failed}
                {emailResult.errors && emailResult.errors.length > 0 && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-green-700">View errors ({emailResult.errors.length})</summary>
                    <ul className="mt-1 space-y-1">
                      {emailResult.errors.map((e, i) => <li key={i} className="text-xs text-red-600">{e}</li>)}
                    </ul>
                  </details>
                )}
              </div>
            )}
            {emailError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">{emailError}</div>
            )}
          </div>

          {/* Push Blast */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔔</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Tap to Pay Launch Push</h3>
                <p className="text-sm text-gray-500">Sends push notification to eligible users with saved push tokens</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-amber-800 font-medium">⚠️ Only reaches users who installed the latest app version</p>
            </div>

            <button
              onClick={handlePushBlast}
              disabled={pushLoading || !!pushResult}
              className="w-full px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {pushLoading ? 'Sending...' : pushResult ? '✓ Sent' : 'Send Push Blast'}
            </button>

            {pushResult && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
                <strong>Complete!</strong> Sent: {pushResult.sent} / {pushResult.total} &nbsp;|&nbsp; Failed: {pushResult.failed}
              </div>
            )}
            {pushError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">{pushError}</div>
            )}
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}

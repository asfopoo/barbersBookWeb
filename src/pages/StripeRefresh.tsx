import { useEffect, useState } from 'react';

export default function StripeRefresh() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Attempt to deep link back to the app
    window.location.href = 'barbersbook://payment-setup?refresh=true';

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Let's Try Again
        </h1>
        
        <p className="text-gray-600 mb-6">
          We need to refresh your payment setup. Redirecting you back to the app...
        </p>
        
        {countdown > 0 && (
          <div className="text-4xl font-bold text-orange-600 mb-4">
            {countdown}
          </div>
        )}
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            If you're not automatically redirected:
          </p>
          <a
            href="barbersbook://payment-setup?refresh=true"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Open BarbersBook App
          </a>
        </div>
      </div>
    </div>
  );
}

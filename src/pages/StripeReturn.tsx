import { useEffect, useState } from 'react';

export default function StripeReturn() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Attempt to deep link back to the app
    window.location.href = 'barbersbook://payment-setup?success=true';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Setup Complete!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your payment account has been successfully configured. Redirecting you back to the app...
        </p>
        
        {countdown > 0 && (
          <div className="text-4xl font-bold text-blue-600 mb-4">
            {countdown}
          </div>
        )}
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            If you're not automatically redirected:
          </p>
          <a
            href="barbersbook://payment-setup?success=true"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open BarbersBook App
          </a>
        </div>
      </div>
    </div>
  );
}

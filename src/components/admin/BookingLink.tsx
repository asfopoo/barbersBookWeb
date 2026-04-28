import { useState } from 'react';

interface BookingLinkProps {
  url: string;
  disabled?: boolean;
  disabledReason?: string;
}

export default function BookingLink({ url, disabled, disabledReason }: BookingLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-2">
      <code
        className={`flex-1 min-w-0 px-2 py-1.5 bg-gray-50 border border-gray-200 rounded font-mono text-xs truncate ${
          disabled ? 'text-gray-400 line-through' : 'text-gray-900'
        }`}
        title={url}
      >
        {url}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        className="px-2 py-1.5 bg-gray-800 hover:bg-gray-900 text-white text-xs rounded transition-colors whitespace-nowrap"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors whitespace-nowrap"
      >
        Open
      </a>
      {disabled && disabledReason && (
        <span className="text-xs text-amber-700 whitespace-nowrap" title={disabledReason}>
          ⚠ {disabledReason}
        </span>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

type Stats = {
  name: string
  code: string
  link: string
  commissionPercent: number
  commissionMonths: number
  minimumPayoutUsd: number
  signups: number
  payingBarbers: number
  activePayingBarbers: number
  earnedUsd: number
  paidUsd: number
  owedUsd: number
  months: { month: string; signups: number; earnedUsd: number }[]
  payouts: { paidAt: string; amountUsd: number; method: string | null }[]
}

function usd(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

function monthLabel(ym: string): string {
  const [y, m] = ym.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, 15)).toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' })
}

// Private, unlisted page for one affiliate: thebarbersbook.com/a/<token>.
// The token is the only key, so the page is excluded from analytics
// (lib/analytics.ts) and sent with no-referrer (vercel.json).
export default function AffiliateStats() {
  const { token = '' } = useParams()
  const [stats, setStats] = useState<Stats | null>(null)
  const [state, setState] = useState<'loading' | 'ok' | 'missing' | 'error'>('loading')
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, nofollow'
    document.head.appendChild(robots)
    document.title = "Your affiliate stats | Barber's Book"
    return () => robots.remove()
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch(`${API_URL}/api/affiliates/stats/${encodeURIComponent(token)}`, { cache: 'no-store' })
      .then(async (res) => {
        if (cancelled) return
        if (res.status === 404) return setState('missing')
        if (!res.ok) return setState('error')
        const body: Stats = await res.json()
        setStats(body)
        setState('ok')
      })
      .catch(() => !cancelled && setState('error'))
    return () => {
      cancelled = true
    }
  }, [token])

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      // Clipboard blocked; the text is selectable.
    }
  }

  const maxEarned = Math.max(1, ...(stats?.months.map((m) => m.earnedUsd) ?? [1]))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white">
      <nav className="container mx-auto px-4 sm:px-6 py-6">
        <a href="/" className="text-2xl font-bold">
          ✂️ Barber's Book
        </a>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 pb-20 pt-2 max-w-2xl">
        {state === 'loading' && <p className="text-gray-400">Loading your numbers…</p>}
        {state === 'missing' && (
          <p className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 rounded-xl p-4">
            This link doesn't match an affiliate account. Check that you copied the whole link, or email
            support@thebarbersbook.com.
          </p>
        )}
        {state === 'error' && (
          <p className="bg-red-500/10 border border-red-500/30 text-red-200 rounded-xl p-4">
            Couldn't load your numbers right now. Try again in a minute.
          </p>
        )}

        {stats && (
          <div className="space-y-8">
            <header>
              <p className="text-sm uppercase tracking-wide text-gray-400 font-semibold">Affiliate stats</p>
              <h1 className="text-3xl sm:text-4xl font-bold mt-1">Hey {stats.name}</h1>
              <p className="text-gray-300 mt-3 leading-relaxed">
                You earn {stats.commissionPercent}% of what every barber you send pays, for {stats.commissionMonths} months
                from their first payment. Payouts go out monthly once you're owed {usd(stats.minimumPayoutUsd)} or more.
              </p>
            </header>

            <section className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
              <div>
                <p className="text-sm text-gray-400">Your link</p>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span className="text-lg font-semibold break-all">{stats.link.replace(/^https:\/\//, '')}</span>
                  <button onClick={() => copy(stats.link)} className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-full">
                    {copied === stats.link ? 'Copied' : 'Copy link'}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Your code (barbers type it when they sign up)</p>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span className="text-2xl font-extrabold tracking-widest">{stats.code}</span>
                  <button onClick={() => copy(stats.code)} className="text-sm border border-white/20 hover:bg-white/10 px-3 py-1.5 rounded-full">
                    {copied === stats.code ? 'Copied' : 'Copy code'}
                  </button>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                ['Barbers signed up', String(stats.signups)],
                ['Paying now', String(stats.activePayingBarbers)],
                ['Ever paid', String(stats.payingBarbers)],
                ['Earned', usd(stats.earnedUsd)],
                ['Paid to you', usd(stats.paidUsd)],
                ['Owed to you', usd(stats.owedUsd)],
              ].map(([label, value]) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
                  <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
              ))}
            </section>

            <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h2 className="font-semibold mb-4">Last 12 months</h2>
              <div className="flex items-end gap-1.5 h-32" aria-hidden="true">
                {stats.months.map((m) => (
                  <div key={m.month} className="flex-1 flex flex-col justify-end h-full">
                    <div
                      className="bg-blue-500 rounded-t"
                      style={{ height: `${Math.max(m.earnedUsd > 0 ? 4 : 1, (m.earnedUsd / maxEarned) * 100)}%`, opacity: m.earnedUsd > 0 ? 1 : 0.25 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 mt-2 text-[10px] text-gray-400">
                {stats.months.map((m) => (
                  <span key={m.month} className="flex-1 text-center">
                    {monthLabel(m.month)}
                  </span>
                ))}
              </div>
              <table className="w-full text-sm mt-5">
                <thead className="text-gray-400 text-left">
                  <tr>
                    <th className="py-1 font-medium">Month</th>
                    <th className="py-1 font-medium text-right">Sign-ups</th>
                    <th className="py-1 font-medium text-right">Earned</th>
                  </tr>
                </thead>
                <tbody>
                  {[...stats.months].reverse().filter((m, i) => i === 0 || m.signups > 0 || m.earnedUsd !== 0).map((m) => (
                    <tr key={m.month} className="border-t border-white/10">
                      <td className="py-2">
                        {monthLabel(m.month)} {m.month.slice(0, 4)}
                      </td>
                      <td className="py-2 text-right">{m.signups}</td>
                      <td className="py-2 text-right">{usd(m.earnedUsd)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {stats.payouts.length > 0 && (
              <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h2 className="font-semibold mb-3">Payouts</h2>
                <ul className="divide-y divide-white/10 text-sm">
                  {stats.payouts.map((p) => (
                    <li key={p.paidAt} className="py-2 flex justify-between gap-3">
                      <span className="text-gray-300">
                        {new Date(p.paidAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        {p.method && ` · ${p.method}`}
                      </span>
                      <span className="font-semibold">{usd(p.amountUsd)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="text-sm text-gray-400 leading-relaxed">
              A barber counts once they sign up with your code. You earn when they pay for Premium through the App Store or Google
              Play; free trials and free months don't pay out, and refunds come back off the total. Questions? Email
              support@thebarbersbook.com.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

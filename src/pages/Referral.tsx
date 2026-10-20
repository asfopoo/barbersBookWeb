import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { track } from '../lib/analytics'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const APP_STORE_URL = 'https://apps.apple.com/us/app/barbers-book/id6740193881'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.thebarbersbook.app'

// Landing page for barber-to-barber invites: thebarbersbook.com/r/CODE.
// There's no install attribution SDK, so the code travels by hand: we show it
// big, make it one tap to copy, and the signup screen has a field for it.
export default function Referral() {
  const { code: rawCode = '' } = useParams()
  const code = rawCode.toUpperCase().replace(/[^A-Z0-9]/g, '')
  const [referrerName, setReferrerName] = useState<string | null>(null)
  const [valid, setValid] = useState<boolean | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(`${API_URL}/api/referrals/lookup/${encodeURIComponent(code)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        if (cancelled) return
        setValid(!!body)
        setReferrerName(body?.firstName ?? null)
        track('referral_landing_viewed', { code, valid: !!body })
      })
      .catch(() => {
        if (!cancelled) setValid(null)
      })
    return () => {
      cancelled = true
    }
  }, [code])

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      track('referral_code_copied', { code })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked; the code is still selectable on the page.
    }
  }

  const playUrl = `${PLAY_STORE_URL}&referrer=${encodeURIComponent(`utm_source=referral&utm_medium=invite&utm_content=${code}`)}`
  const heading = referrerName
    ? `${referrerName} invited you to The Barber's Book`
    : "You're invited to The Barber's Book"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white">
      <nav className="container mx-auto px-4 sm:px-6 py-6">
        <a href="/" className="text-2xl font-bold">
          ✂️ Barber's Book
        </a>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 pb-20 pt-6 max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{heading}</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Log every cut and tip, take bookings online, and run a digital waitlist from one app.
          Sign up with this code and you both get a <strong className="text-white">free month of Premium</strong>.
        </p>

        {valid !== false && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center mb-8">
            <p className="text-sm uppercase tracking-wide text-gray-400 font-semibold">Your invite code</p>
            <p className="text-4xl font-extrabold tracking-widest my-3 select-all break-all">{code}</p>
            <button
              onClick={copyCode}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition w-full sm:w-auto"
            >
              {copied ? 'Copied' : 'Copy code'}
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Tap <span className="text-white">"Have an invite code?"</span> when you create your account and paste it in.
            </p>
          </div>
        )}
        {valid === false && (
          <p className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 rounded-xl p-4 mb-8">
            We couldn't find that invite code. You can still download the app and try Premium free for 14 days.
          </p>
        )}

        <ol className="space-y-3 mb-10 text-gray-200">
          <li>
            <span className="text-blue-400 font-bold mr-2">1.</span>
            Download the app and create your account with the code.
          </li>
          <li>
            <span className="text-blue-400 font-bold mr-2">2.</span>
            Log your cuts as you go. After 5 cuts on 2 different days, you're in.
          </li>
          <li>
            <span className="text-blue-400 font-bold mr-2">3.</span>
            You both get a free month of Premium, added automatically.
          </li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
          <a href={APP_STORE_URL} onClick={() => track('referral_store_clicked', { code, store: 'ios' })}>
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1617926400"
              alt="Download on the App Store"
              className="h-[52px]"
            />
          </a>
          <a href={playUrl} onClick={() => track('referral_store_clicked', { code, store: 'android' })}>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[70px]"
            />
          </a>
        </div>
        <a
          href={`barbersbook://register?ref=${encodeURIComponent(code)}`}
          className="text-sm text-gray-400 underline"
        >
          Already have the app installed? Open it
        </a>
      </main>
    </div>
  )
}

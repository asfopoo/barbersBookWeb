import { Link } from 'react-router-dom'
import { useLang, useT } from '../i18n'

export default function Hero() {
  const t = useT();
  const lang = useLang();
  const m = t.hero.mock;
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,rgba(59,130,246,0.15),transparent)]"></div>
      <nav className="relative container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">✂️ Barber's Book</div>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#features" className="hover:text-white transition">
              {t.nav.features}
            </a>
            <a href="#booking" className="hover:text-white transition">
              {t.nav.booking}
            </a>
            <a href="#how-it-works" className="hover:text-white transition">
              {t.nav.howItWorks}
            </a>
            <a href="#pricing" className="hover:text-white transition">
              {t.nav.pricing}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={lang === "es" ? "/" : "/es"}
              hrefLang={lang === "es" ? "en" : "es"}
              lang={lang === "es" ? "en" : "es"}
              className="text-sm font-semibold text-gray-300 hover:text-white border border-white/20 rounded-full px-3 py-1.5 transition"
            >
              {lang === "es" ? "EN" : "ES"}
            </Link>
            <a
              href="https://apps.apple.com/us/app/barbers-book/id6740193881"
              className="hidden md:inline-block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition"
            >
              {t.nav.download}
            </a>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>📅</span>
              <span>{t.hero.pill}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.line1}
              <br />
              {t.hero.line2}
              <br />
              <span className="text-blue-400">{t.hero.line3}</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              {t.hero.bodyBefore}{" "}
              <span className="line-through text-gray-500">$24.99</span>{" "}
              {t.hero.bodyAfter}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 items-start sm:items-center">
              <a
                href="https://apps.apple.com/us/app/barbers-book/id6740193881"
                className="inline-block transform hover:scale-105 transition"
              >
                <img
                  src={t.badges.appStoreImg}
                  alt={t.badges.appStoreAlt}
                  className="h-[52px]"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.thebarbersbook.app"
                className="inline-block transform hover:scale-105 transition"
              >
                <img
                  src={t.badges.playImg}
                  alt={t.badges.playAlt}
                  className="h-[70px]"
                />
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-2 rounded-lg">
                <span>💰</span>
                <span className="font-semibold text-gray-200">{t.hero.chips[0]}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-2 rounded-lg">
                <span>📅</span>
                <span className="font-semibold text-gray-200">
                  {t.hero.chips[1]}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-2 rounded-lg">
                <span>🧾</span>
                <span className="font-semibold text-gray-200">
                  {t.hero.chips[2]}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-2 rounded-lg">
                <span>⏰</span>
                <span className="font-semibold text-gray-200">
                  {t.hero.chips[3]}
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-gray-800 rounded-3xl shadow-2xl p-5 border border-gray-700/60">
              <div className="flex items-center gap-2 mb-4 px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                <span className="text-gray-500 text-xs ml-2">
                  Barber's Book
                </span>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 text-white">
                  <p className="text-blue-200 text-xs mb-1">{m.todayEarnings}</p>
                  <p className="text-3xl font-bold">$487.00</p>
                  <div className="flex justify-between mt-3 text-xs text-blue-200">
                    <span>{m.services}</span>
                    <span>{m.tips}</span>
                    <span className="text-green-300 font-semibold">↗ +18%</span>
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{m.nextAppt}</p>
                    <p className="font-semibold text-white text-sm">
                      {m.nextApptValue}
                    </p>
                    <p className="text-xs text-green-400 mt-0.5 flex items-center gap-1">
                      <span>📅</span> {m.bookedOnline}
                    </p>
                  </div>
                  <div className="bg-green-500/15 text-green-400 text-xs px-2 py-1 rounded-full font-semibold border border-green-500/20">
                    {m.confirmed}
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">
                      {m.taxEstimate}
                    </p>
                    <p className="font-semibold text-white text-sm">
                      {m.setAside}
                    </p>
                    <p className="text-xs text-yellow-400 mt-0.5">
                      {m.rate}
                    </p>
                  </div>
                  <div className="text-xl">🧾</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{m.waitlist}</p>
                    <p className="font-semibold text-white text-sm">
                      {m.waiting}
                    </p>
                    <p className="text-xs text-blue-400 mt-0.5">
                      {m.next}
                    </p>
                  </div>
                  <div className="text-xl">✂️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

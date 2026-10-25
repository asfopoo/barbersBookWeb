import { useT } from '../i18n'

export default function CTA() {
  const t = useT();
  const c = t.cta;
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span>🎁</span>
          <span>{c.pill}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {c.title}
        </h2>
        <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
          {c.bodyBefore}{" "}
          <span className="line-through text-gray-400">$24.99</span> {c.bodyAfter}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/barbers-book/id6740193881"
            className="inline-block transform hover:scale-105 transition"
          >
            <img
              src={t.badges.appStoreImgWhite}
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
        <p className="mt-8 text-gray-500 text-sm">
          {c.footBefore} &nbsp;•&nbsp; {c.footAfter}
        </p>
      </div>
    </section>
  );
}

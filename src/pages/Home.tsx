import Nav from '../components/home/Nav'
import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import Story from '../components/home/Story'
import Calculator from '../components/home/Calculator'
import Bento from '../components/home/Bento'
import HowItWorks from '../components/home/HowItWorks'
import Pricing from '../components/home/Pricing'
import Testimonials from '../components/home/Testimonials'
import FinalCTA from '../components/home/FinalCTA'
import Footer from '../components/home/Footer'
import { LangContext, type Lang } from '../i18n'

// Home page. Served in English at / and in Spanish at /es, and prerendered at
// build time, so components must render without touching window.
export default function HomePage({ lang = 'en' }: { lang?: Lang }) {
  return (
    <LangContext.Provider value={lang}>
      <div className="relative overflow-x-clip bg-ink font-sans text-zinc-100 selection:bg-[#0a84ff]/40">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Story />
          <Calculator />
          <Bento />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  )
}

import Hero from '../components/Hero'
import KeyFeatures from '../components/KeyFeatures'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { LangContext, type Lang } from '../i18n'

// home page with hero, features, pricing, testimonials, and CTA sections.
// Served in English at / and in Spanish at /es.
export default function HomePage({ lang = 'en' }: { lang?: Lang }) {
  return (
    <LangContext.Provider value={lang}>
      <Hero />
      <KeyFeatures />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </LangContext.Provider>
  )
}

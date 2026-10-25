import Hero from '../components/Hero'
import KeyFeatures from '../components/KeyFeatures'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

// home page with hero, features, pricing, testimonials, and CTA sections
export default function HomePage() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

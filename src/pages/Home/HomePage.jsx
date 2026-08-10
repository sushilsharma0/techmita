import { SEO } from '@/components/common/SEO'
import { CTABand } from '@/components/common/CTABand'
import { company } from '@/data/company'
import Hero from './sections/Hero'
import TrustStrip from './sections/TrustStrip'
import Intro from './sections/Intro'
import ServicesOverview from './sections/ServicesOverview'
import WhyUs from './sections/WhyUs'
import IndustriesPreview from './sections/IndustriesPreview'
import FeaturedWork from './sections/FeaturedWork'
import TechEcosystem from './sections/TechEcosystem'
import ProcessPreview from './sections/ProcessPreview'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'

export default function HomePage() {
  return (
    <>
      <SEO
        title="TechMitra — Technology That Moves Business Forward"
        description={company.description}
        path="/"
      />
      <Hero />
      <TrustStrip />
      <Intro />
      <ServicesOverview />
      <WhyUs />
      <IndustriesPreview />
      <FeaturedWork />
      <TechEcosystem />
      <ProcessPreview />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  )
}

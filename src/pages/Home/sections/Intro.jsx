import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { Reveal } from '@/pages/shared/Reveal'
import { company } from '@/data/company'

export default function Intro() {
  return (
    <section className="section-y border-b border-border">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr_0.55fr] lg:gap-12 lg:items-start">
          <Reveal>
            <SectionHeading
              title="Software built for real operations"
              description="We partner with organizations that need more than a vendor — teams that value clarity, thoughtful engineering, and software that holds up after launch."
              className="mb-0 lg:sticky lg:top-28"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6 prose-tech text-lg">
              <p>{company.mission}</p>
              <p>{company.vision}</p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent transition-colors"
              >
                Our story and approach
                <ArrowRight weight="bold" className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="hidden lg:block lg:sticky lg:top-28">
            <Section3D scene="nodes" size="md" align="center" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

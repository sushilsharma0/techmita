import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { industries } from '@/data/industries'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

export default function IndustriesPage() {
  const [lead, ...others] = industries

  return (
    <>
      <SEO
        title="Industries"
        description="Sector-aware software delivery for healthcare, finance, retail, logistics, education, government, and more."
        path="/industries"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId="globe" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Industries we serve
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">
              We adapt delivery to sector constraints — compliance, workflow fit, and operational
              reality — without generic one-size-fits-all templates.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page section-y py-16 md:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-display font-bold tracking-tight">{lead.title}</h2>
                <p className="mt-4 prose-tech text-lg">{lead.summary}</p>
                <Link
                  to={`/industries/${lead.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
                >
                  {lead.cta}
                  <ArrowRight weight="bold" className="size-4" />
                </Link>
              </div>
              <Section3D scene="compass" size="md" className="hidden lg:block" />
              <ul className="space-y-3 lg:col-span-1">
                {lead.useCases.slice(0, 4).map((useCase) => (
                  <li key={useCase} className="flex gap-3 border-l-2 border-cta/40 pl-4 text-sm text-muted">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="All sectors" />
          </Reveal>
          <Section3D scene="nodes" size="wide" bleed className="mb-8 h-36" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {others.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.03}>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col bg-surface p-8 no-underline transition-colors hover:bg-surface-elevated"
                >
                  <h3 className="text-xl font-display font-semibold group-hover:text-accent transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{industry.summary}</p>
                  <span className="mt-6 text-sm font-semibold text-cta">Explore →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Your industry not listed?"
        description="We regularly work in adjacent sectors. Describe your context and we will confirm fit."
        primaryTo="/contact"
        secondaryTo="/services"
        secondaryLabel="View services"
      />
    </>
  )
}

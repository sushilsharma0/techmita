import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { Button } from '@/components/buttons/Button'
import { getIndustryBySlug } from '@/data/industries'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

export default function IndustryDetailPage() {
  const { slug } = useParams()
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return (
      <>
        <SEO
          title="Industry Not Found"
          description="The requested industry page could not be found."
          path={`/industries/${slug}`}
        />
        <section className="section-y">
          <div className="container-page max-w-xl text-center">
            <h1 className="font-display text-3xl font-bold">Industry not found</h1>
            <p className="mt-4 text-muted">
              No industry profile matches &ldquo;{slug}&rdquo;.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/industries">All industries</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <SEO
        title={industry.title}
        description={industry.summary}
        path={`/industries/${industry.slug}`}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId="neural" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-surface via-surface/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm text-muted no-underline hover:text-text"
            >
              <ArrowLeft weight="bold" className="size-4" />
              All industries
            </Link>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              {industry.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">{industry.summary}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-8">
        <div className="container-page flex justify-center">
          <Section3D scene="shield" size="md" />
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="Common challenges" className="mb-0" />
            <ul className="mt-6 space-y-4">
              {industry.challenges.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading title="How we help" className="mb-0" />
            <ul className="mt-6 space-y-4">
              {industry.solutions.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Use cases" description="Representative project types we deliver in this sector." />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {industry.useCases.map((useCase, i) => (
              <Reveal key={useCase} delay={i * 0.04}>
                <p className="rounded-lg border border-border bg-bg/40 px-5 py-4 text-sm text-muted">
                  {useCase}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Security & compliance notes"
              description="Foundational practices we apply — formal certification handled with accredited assessors when required."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="space-y-4">
              {industry.securityNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm text-muted">
                  <ShieldCheck weight="fill" className="size-5 shrink-0 text-cta" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand
        title={industry.cta}
        description="Tell us about your sector requirements and project goals."
        primaryTo="/contact"
        secondaryTo="/portfolio"
        secondaryLabel="Sample case studies"
      />
    </>
  )
}

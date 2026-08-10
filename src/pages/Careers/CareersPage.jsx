import { Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { jobs } from '@/data/jobs'
import { Reveal } from '@/pages/shared/Reveal'

export default function CareersPage() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join TechMitra — placeholder job listings to update when hiring begins."
        path="/careers"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page relative section-y pb-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal>
              <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
                Careers at TechMitra
              </h1>
              <p className="mt-6 max-w-2xl text-lg prose-tech">
                We value clear communication, thoughtful engineering, and teams that take ownership.
                Open roles below are placeholders — update or remove when real hiring begins.
              </p>
            </Reveal>
            <Section3D scene="briefcase" size="md" className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Open positions" description="Sample listings for layout demonstration." />
          </Reveal>
          <Section3D scene="grid" size="wide" bleed className="mb-8 h-32" />
          <ul className="divide-y divide-border border-y border-border">
            {jobs.map((job, i) => (
              <Reveal key={job.slug} delay={i * 0.04}>
                <li className="py-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-xl font-semibold">{job.title}</h2>
                        {job.isPlaceholder && (
                          <span className="rounded bg-bg px-2 py-0.5 text-[10px] uppercase text-muted">
                            Placeholder
                          </span>
                        )}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
                        <span className="flex items-center gap-1.5">
                          <MapPin weight="duotone" className="size-4 text-cta" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase weight="duotone" className="size-4 text-cta" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock weight="duotone" className="size-4 text-cta" />
                          {job.department}
                        </span>
                      </div>
                      <p className="mt-4 max-w-2xl text-sm text-muted">{job.description}</p>
                    </div>
                  </div>
                  <details className="mt-6 group">
                    <summary className="cursor-pointer text-sm font-semibold text-cta hover:text-accent">
                      View requirements
                    </summary>
                    <div className="mt-4 grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-sm font-display font-semibold">Requirements</h3>
                        <ul className="mt-2 space-y-1.5 text-sm text-muted">
                          {job.requirements.map((r) => (
                            <li key={r}>• {r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-semibold">Nice to have</h3>
                        <ul className="mt-2 space-y-1.5 text-sm text-muted">
                          {job.niceToHave.map((r) => (
                            <li key={r}>• {r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page max-w-2xl">
          <Reveal>
            <SectionHeading
              title="How to apply"
              description="Send your resume and a brief note about what you are looking for. We review every application thoughtfully."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={0.06} className="text-center">
            <Link
              to="/contact"
              className="font-display text-sm font-semibold text-cta no-underline hover:text-accent"
            >
              Apply via contact form →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Don't see a fit?"
        description="We are always interested in hearing from talented people. Reach out and tell us about yourself."
        primaryTo="/contact"
        primaryLabel="Introduce yourself"
        secondaryTo="/about"
        secondaryLabel="About TechMitra"
      />
    </>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { industries } from '@/data/industries'
import { Reveal, revealFromIndex } from '@/pages/shared/Reveal'

const PREVIEW = industries.slice(0, 6)

export default function IndustriesPreview() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal from="left">
            <SectionHeading
              title="Industries we serve"
              description="Sector-aware delivery with attention to compliance, workflow fit, and operational reality."
              className="mb-0"
            />
            <Link
              to="/industries"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
            >
              All industries
              <ArrowRight weight="bold" className="size-4" />
            </Link>
            <Section3D scene="compass" size="md" className="mt-8" />
          </Reveal>

          <ul className="divide-y divide-border border-y border-border">
            {PREVIEW.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.04} from={revealFromIndex(i)}>
                <li>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group flex items-start justify-between gap-4 py-5 no-underline transition-colors hover:bg-surface-elevated/50 px-2 -mx-2 rounded-lg"
                  >
                    <div>
                      <h3 className="font-display font-semibold text-text group-hover:text-accent transition-colors">
                        {industry.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted line-clamp-2">{industry.summary}</p>
                    </div>
                    <ArrowRight
                      weight="bold"
                      className="mt-1 size-4 shrink-0 text-muted opacity-0 transition-all group-hover:opacity-100 group-hover:text-cta"
                    />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

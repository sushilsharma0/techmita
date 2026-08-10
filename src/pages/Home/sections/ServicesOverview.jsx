import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { featuredServices } from '@/data/services'
import { Reveal } from '@/pages/shared/Reveal'
import { ServiceIcon } from '@/pages/shared/ServiceIcon'

export default function ServicesOverview() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="What we deliver"
            description="From customer-facing products to internal platforms and cloud foundations — scoped to your stage and constraints."
          />
        </Reveal>

        <Reveal delay={0.04} className="mb-12">
          <Section3D scene="chip" size="wide" bleed className="h-44 md:h-52" />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col bg-surface p-8 transition-colors hover:bg-surface-elevated no-underline"
              >
                <ServiceIcon
                  name={service.icon}
                  className="size-8 text-accent transition-transform group-hover:scale-105"
                />
                <h3 className="mt-5 text-xl font-display font-semibold tracking-tight text-text">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cta group-hover:text-accent">
                  Learn more
                  <ArrowRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
          >
            All services
            <ArrowRight weight="bold" className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

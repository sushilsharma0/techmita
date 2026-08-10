import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { services } from '@/data/services'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'
import { ServiceIcon } from '@/pages/shared/ServiceIcon'

export default function ServicesPage() {
  const [hero, ...rest] = services
  const featured = rest.slice(0, 3)
  const listGroup = rest.slice(3, 8)
  const compact = rest.slice(8)

  return (
    <>
      <SEO
        title="Services"
        description="Web, mobile, cloud, AI, custom software, and IT consulting — end-to-end delivery from discovery through launch and support."
        path="/services"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[42%] opacity-95">
          <LazyCanvas sceneId="services" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">
              Practical engineering across the stack — scoped to your stage, team, and constraints.
              Each engagement starts with understanding before building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero service — split editorial */}
      <section className="border-b border-border bg-surface">
        <div className="container-page section-y py-16 md:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_auto_1fr] lg:items-center">
              <div>
                <ServiceIcon name={hero.icon} className="size-10 text-accent" />
                <h2 className="mt-6 text-3xl font-display font-bold tracking-tight md:text-4xl">
                  {hero.title}
                </h2>
                <p className="mt-4 prose-tech text-lg">{hero.longDescription}</p>
                <Link
                  to={`/services/${hero.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
                >
                  Explore {hero.title}
                  <ArrowRight weight="bold" className="size-4" />
                </Link>
              </div>
              <Section3D scene="chip" size="md" align="center" className="hidden lg:block" />
              <ul className="space-y-3 rounded-xl border border-border bg-bg/40 p-8 lg:col-span-1">
                {hero.capabilities.slice(0, 5).map((cap) => (
                  <li key={cap} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cta" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured trio — asymmetric grid */}
      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Core capabilities" description="High-demand practices we deliver regularly." />
          </Reveal>
          <Reveal delay={0.04} className="mb-8">
            <Section3D scene="grid" size="wide" bleed className="h-36" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-12">
            {featured.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 0.05}
                className={i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-8 no-underline transition-colors hover:border-cta/40 hover:bg-surface-elevated"
                >
                  <div>
                    <ServiceIcon name={service.icon} className="size-8 text-accent" />
                    <h3 className="mt-5 text-xl font-display font-semibold group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{service.shortDescription}</p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-cta">View service →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* List-style block */}
      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Platform & operations" description="Infrastructure, security, and integration services." />
          </Reveal>
          <ul className="divide-y divide-border border-y border-border">
            {listGroup.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.03}>
                <li>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group grid gap-4 py-6 md:grid-cols-[280px_1fr_auto] md:items-center no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <ServiceIcon name={service.icon} className="size-6 text-cta" />
                      <h3 className="font-display font-semibold group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted">{service.shortDescription}</p>
                    <ArrowRight
                      weight="bold"
                      className="hidden size-4 text-muted md:block group-hover:text-cta"
                    />
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Compact grid for remaining */}
      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Advisory & ongoing support" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {compact.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block rounded-lg border border-border px-5 py-4 no-underline transition-colors hover:bg-surface"
                >
                  <h3 className="font-display text-sm font-semibold">{service.title}</h3>
                  <p className="mt-1 text-xs text-muted line-clamp-2">{service.shortDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which service fits?"
        description="Describe your project and we will recommend an engagement model and scope outline."
        primaryTo="/contact"
        secondaryTo="/process"
      />
    </>
  )
}

import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CaretDown, Check } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { Button } from '@/components/buttons/Button'
import { getServiceBySlug } from '@/data/services'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'
import { ServiceIcon } from '@/pages/shared/ServiceIcon'
import { getServiceSceneId } from '@/pages/shared/serviceScene'
import { cn } from '@/utils/cn'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found"
          description="The requested service could not be found."
          path={`/services/${slug}`}
        />
        <section className="section-y">
          <div className="container-page max-w-xl text-center">
            <h1 className="font-display text-3xl font-bold">Service not found</h1>
            <p className="mt-4 text-muted">
              We could not find a service matching &ldquo;{slug}&rdquo;. Browse our full services
              catalog or contact us to discuss your needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/services">All services</Link>
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

  const sceneId = getServiceSceneId(service.slug)

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId={sceneId} />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-16">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted no-underline hover:text-text"
            >
              <ArrowLeft weight="bold" className="size-4" />
              All services
            </Link>
            <div className="mt-8 max-w-2xl">
              <ServiceIcon name={service.icon} className="size-10 text-accent" />
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg prose-tech">{service.longDescription}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-8">
        <div className="container-page flex justify-center">
          <Section3D scene="chip" size="md" />
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="The challenge" className="mb-0" />
            <p className="mt-6 prose-tech">{service.businessChallenge}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading title="Our solution" className="mb-0" />
            <p className="mt-6 prose-tech">{service.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Capabilities" />
          </Reveal>
          <Section3D scene="grid" size="wide" bleed className="mb-8 h-32" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.03}>
                <li className="flex gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm">
                  <Check weight="bold" className="mt-0.5 size-4 shrink-0 text-cta" />
                  {cap}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="Technology stack" className="mb-0" />
            <div className="mt-6 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-bg/50 px-3 py-1.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading title="Delivery workflow" className="mb-0" />
            <ol className="mt-6 space-y-3">
              {service.workflow.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm">
                  <span className="font-display font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Benefits" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.04}>
                <p className="border-l-2 border-cta/50 pl-5 text-sm leading-relaxed text-muted">
                  {benefit}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.faqs?.length > 0 && (
        <section className="section-y border-b border-border bg-surface">
          <div className="container-page max-w-3xl">
            <Reveal>
              <SectionHeading title="Frequently asked questions" align="center" className="mx-auto" />
            </Reveal>
            <Reveal delay={0.06}>
              <Accordion.Root type="single" collapsible className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <Accordion.Item
                    key={faq.q}
                    value={`faq-${i}`}
                    className="overflow-hidden rounded-xl border border-border bg-bg/40"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-sm font-semibold">
                        {faq.q}
                        <CaretDown
                          weight="bold"
                          className="size-4 shrink-0 text-muted transition-transform group-data-[state=open]:rotate-180"
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className={cn('overflow-hidden text-sm text-muted')}>
                      <div className="px-6 pb-5">{faq.a}</div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Reveal>
          </div>
        </section>
      )}

      <CTABand
        title={`Discuss ${service.title.toLowerCase()} for your organization`}
        description="Share your context and timeline. We will respond with a practical next step."
        primaryTo="/contact"
        secondaryTo="/portfolio"
        secondaryLabel="See sample work"
      />
    </>
  )
}

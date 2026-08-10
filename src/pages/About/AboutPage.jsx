import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { company } from '@/data/company'
import { team } from '@/data/team'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

export default function AboutPage() {
  const leadership = team.slice(0, 3)

  return (
    <>
      <SEO
        title="About TechMitra"
        description="Learn about TechMitra — our mission, values, delivery approach, and the team behind reliable software for growing businesses."
        path="/about"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-1/2 opacity-95">
          <LazyCanvas sceneId="network" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-16 md:pb-20">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              About {company.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">{company.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <SectionHeading title="Our story" className="mb-0" />
            <p className="mt-6 prose-tech text-lg">
              {company.name} was founded to give growing organizations a technology partner they
              could rely on — one that communicates clearly, documents decisions, and builds software
              meant to last beyond the initial launch.
            </p>
            <p className="mt-4 prose-tech">
              We work across web, mobile, cloud, and custom business systems. Our clients range from
              product teams shipping SaaS to operations leaders modernizing internal workflows.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="hidden lg:flex lg:items-center lg:justify-center">
            <Section3D scene="stack" size="md" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-8 rounded-xl border border-border bg-surface p-8 md:p-10">
              <div>
                <h2 className="text-xl font-display font-semibold">Mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{company.mission}</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <h2 className="text-xl font-display font-semibold">Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{company.vision}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Values" description="Principles that guide how we work with clients and each other." />
          </Reveal>
          <Section3D scene="pulse" size="wide" bleed className="mb-8 h-32" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.04}>
                <li className="rounded-xl border border-border bg-bg/30 p-6">
                  <h3 className="font-display font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Our approach" description="How we translate goals into delivered software." />
          </Reveal>
          <div className="space-y-4">
            {company.approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="grid gap-4 border-b border-border py-6 md:grid-cols-[240px_1fr] md:gap-8">
                  <h3 className="font-display font-semibold text-accent">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="Company timeline" description="Key milestones in our growth as a delivery partner." />
          </Reveal>
          <ol className="relative max-w-3xl space-y-0 border-l border-border pl-8">
            {company.timeline.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 0.05}>
                <li className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[2.05rem] top-0 rounded bg-cta px-2 py-0.5 text-xs font-semibold text-white">
                    {entry.year}
                  </span>
                  <h3 className="font-display font-semibold">{entry.title}</h3>
                  <p className="mt-2 text-sm text-muted">{entry.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Leadership"
              description="Placeholder profiles — replace with your actual leadership team before publishing."
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.06}>
                <article className="rounded-xl border border-border bg-surface p-6">
                  <div
                    className={`flex size-14 items-center justify-center rounded-full font-display text-lg font-bold text-white ${member.photo.color}`}
                  >
                    {member.photo.value}
                  </div>
                  <h3 className="mt-5 font-display font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                  {member.isPlaceholder && (
                    <span className="mt-4 inline-block text-[10px] uppercase tracking-wider text-muted">
                      Placeholder profile
                    </span>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
            >
              Meet the full team
              <ArrowRight weight="bold" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Culture"
              description="We invest in craftsmanship, honest communication, and continuous learning — because reliable delivery depends on how teams work day to day."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-center prose-tech mx-auto">
              Remote-friendly collaboration, documented decisions, and code review as standard practice.
              We respect client constraints and timelines while pushing back constructively when scope or
              architecture choices need reconsideration.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Want to work with us?"
        description="Tell us about your organization and what you are building. We will respond with a clear next step."
        primaryTo="/contact"
        secondaryTo="/careers"
        secondaryLabel="View careers"
      />
    </>
  )
}

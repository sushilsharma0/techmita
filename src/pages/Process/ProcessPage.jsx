import { useState } from 'react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { process } from '@/data/process'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'
import { cn } from '@/utils/cn'

export default function ProcessPage() {
  const [activeId, setActiveId] = useState(process[0].id)
  const active = process.find((p) => p.id === activeId) ?? process[0]

  return (
    <>
      <SEO
        title="Our Process"
        description="TechMitra delivery framework — discovery through maintenance with clear milestones and documentation."
        path="/process"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId="cloud" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              How we deliver
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">
              Nine phases from discovery through ongoing maintenance — structured enough for
              accountability, flexible enough for real-world projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-8">
        <div className="container-page flex justify-center">
          <Section3D scene="stack" size="lg" />
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr_auto]">
            <Reveal>
              <nav aria-label="Process phases" className="space-y-1">
                {process.map((phase, i) => (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setActiveId(phase.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-colors',
                      activeId === phase.id
                        ? 'bg-cta/15 font-semibold text-text border border-cta/30'
                        : 'text-muted hover:bg-surface-elevated hover:text-text',
                    )}
                  >
                    <span className="font-display text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {phase.title}
                  </button>
                ))}
              </nav>
            </Reveal>

            <Reveal delay={0.06} key={active.id}>
              <div className="rounded-xl border border-border bg-bg/40 p-8 md:p-10">
                <h2 className="text-2xl font-display font-bold tracking-tight">{active.title}</h2>
                <p className="mt-4 prose-tech text-lg">{active.summary}</p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                      Activities
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {active.activities.map((a) => (
                        <li key={a} className="text-sm text-muted">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                      Deliverables
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {active.deliverables.map((d) => (
                        <li key={d} className="flex gap-2 text-sm text-muted">
                          <span className="text-cta">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="hidden xl:block">
              <Section3D scene="bolt" size="md" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Full timeline"
              description="Click any phase above for detail, or scan the complete flow below."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <ol className="relative mx-auto max-w-2xl border-l border-border pl-8">
            {process.map((phase, i) => (
              <Reveal key={phase.id} delay={i * 0.03}>
                <li className="relative pb-10 last:pb-0">
                  <button
                    type="button"
                    onClick={() => setActiveId(phase.id)}
                    className="absolute -left-[2.05rem] top-0 flex size-4 items-center justify-center rounded-full border-2 border-cta bg-bg"
                  >
                    <span className="size-1.5 rounded-full bg-cta" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveId(phase.id)}
                    className="text-left"
                  >
                    <h3 className="font-display font-semibold hover:text-accent transition-colors">
                      {phase.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{phase.summary}</p>
                  </button>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTABand
        title="See this process applied to your project"
        description="Start with a discovery conversation — we will map phases to your timeline and constraints."
        primaryTo="/contact"
        secondaryTo="/about"
        secondaryLabel="About us"
      />
    </>
  )
}

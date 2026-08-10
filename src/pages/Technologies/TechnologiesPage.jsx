import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { CTABand } from '@/components/common/CTABand'
import { technologyGroups } from '@/data/technologies'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

const GROUP_META = {
  frontend: { title: 'Frontend', desc: 'Interfaces users touch every day.' },
  backend: { title: 'Backend', desc: 'APIs, services, and business logic.' },
  mobile: { title: 'Mobile', desc: 'Cross-platform and native experiences.' },
  database: { title: 'Data', desc: 'Storage, search, and retrieval patterns.' },
  cloud: { title: 'Cloud', desc: 'Scalable infrastructure and managed services.' },
  devops: { title: 'DevOps', desc: 'Delivery pipelines and observability.' },
  ai: { title: 'AI & ML', desc: 'Practical intelligence in product workflows.' },
}

export default function TechnologiesPage() {
  const groups = Object.entries(technologyGroups)

  return (
    <>
      <SEO
        title="Technologies"
        description="Modern technology stack for web, mobile, cloud, DevOps, and AI — chosen for maintainability and team fit."
        path="/technologies"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-1/2 opacity-95">
          <LazyCanvas sceneId="orbit" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-16">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Technologies
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">
              We select tools based on project constraints, team skills, and long-term
              maintainability — not hype cycles.
            </p>
          </Reveal>
        </div>
      </section>

      {groups.map(([key, items], gi) => (
        <section
          key={key}
          className={`section-y border-b border-border ${gi % 2 === 1 ? 'bg-surface' : ''}`}
        >
          <div className="container-page">
            <Reveal>
              <SectionHeading
                title={GROUP_META[key]?.title ?? key}
                description={GROUP_META[key]?.desc}
              />
            </Reveal>
            <div
              className={
                key === 'ai' || key === 'cloud'
                  ? 'grid gap-4 md:grid-cols-2'
                  : 'space-y-0 divide-y divide-border border-y border-border'
              }
            >
              {items.map((tech, i) => (
                <Reveal key={tech.name} delay={i * 0.03}>
                  {key === 'ai' || key === 'cloud' ? (
                    <article className="rounded-xl border border-border bg-bg/30 p-6">
                      <h3 className="font-display font-semibold">{tech.name}</h3>
                      <p className="mt-2 text-sm text-muted">{tech.description}</p>
                    </article>
                  ) : (
                    <article className="grid gap-4 py-5 md:grid-cols-[220px_1fr] md:items-start">
                      <h3 className="font-display font-semibold text-accent">{tech.name}</h3>
                      <p className="text-sm text-muted">{tech.description}</p>
                    </article>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand
        title="Need help choosing a stack?"
        description="We will recommend technologies aligned with your team, timeline, and compliance needs."
        primaryTo="/contact"
        secondaryTo="/services/consulting"
        secondaryLabel="IT consulting"
      />
    </>
  )
}

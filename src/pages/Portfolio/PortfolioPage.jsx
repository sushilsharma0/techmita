import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Funnel } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import {
  projects,
  projectCategories,
  projectTechnologies,
} from '@/data/projects'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'
import { cn } from '@/utils/cn'

export default function PortfolioPage() {
  const [category, setCategory] = useState('All')
  const [tech, setTech] = useState('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = category === 'All' || p.category === category
      const techMatch = tech === 'All' || p.technologies.includes(tech)
      return catMatch && techMatch
    })
  }, [category, tech])

  return (
    <>
      <SEO
        title="Portfolio"
        description="Sample case studies demonstrating TechMitra delivery approach — labeled as illustrative until replaced with verified client work."
        path="/portfolio"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId="device" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">
              Sample case studies illustrating our research, architecture, and delivery practices.
              All entries are labeled as illustrative — replace with verified client work before
              publishing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-10">
        <div className="container-page">
          <Section3D scene="layers" size="wide" bleed className="h-40" />
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page">
          <Reveal delay={0.06} className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-2 text-sm font-display font-semibold">
              <Funnel weight="duotone" className="size-5 text-accent" />
              Filter projects
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex flex-col gap-1.5 text-xs text-muted">
                Category
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text"
                >
                  <option value="All">All categories</option>
                  {projectCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-xs text-muted">
                Technology
                <select
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                  className="rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text"
                >
                  <option value="All">All technologies</option>
                  {projectTechnologies.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <p className="mb-8 text-sm text-muted">
            Showing {filtered.length} of {projects.length} projects
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.04}>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-bg/40 no-underline transition-colors hover:border-cta/30"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Section3D
                      scene={['chip', 'grid', 'layers'][i % 3]}
                      size="hero"
                      bleed
                      className="!absolute !inset-0 !h-full !w-full !max-w-none !rounded-none !border-0"
                    />
                    {project.isSample && (
                      <span className="absolute left-4 top-4 z-10 rounded-md bg-bg/80 px-2 py-1 text-xs text-muted backdrop-blur-sm">
                        Sample
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-accent">{project.category}</p>
                    <h2 className="mt-2 font-display text-lg font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted">No projects match the selected filters.</p>
          )}
        </div>
      </section>

      <CTABand
        title="Ready to build something real?"
        description="These are sample narratives — your project deserves the same structured delivery."
        primaryTo="/contact"
        secondaryTo="/process"
      />
    </>
  )
}

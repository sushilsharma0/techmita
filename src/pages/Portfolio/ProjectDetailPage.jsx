import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Quotes } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { Button } from '@/components/buttons/Button'
import { getProjectBySlug } from '@/data/projects'
import { getIndustryBySlug } from '@/data/industries'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const industry = project ? getIndustryBySlug(project.industry) : null

  if (!project) {
    return (
      <>
        <SEO
          title="Project Not Found"
          description="The requested case study could not be found."
          path={`/portfolio/${slug}`}
        />
        <section className="section-y">
          <div className="container-page max-w-xl text-center">
            <h1 className="font-display text-3xl font-bold">Case study not found</h1>
            <p className="mt-4 text-muted">No project matches &ldquo;{slug}&rdquo;.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/portfolio">All projects</Link>
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

  const sections = [
    { title: 'Challenge', content: project.challenge },
    { title: 'Research', content: project.research },
    { title: 'Strategy', content: project.strategy },
    { title: 'Design', content: project.design },
    { title: 'Architecture', content: project.architecture },
    { title: 'Development', content: project.development },
  ]

  return (
    <>
      <SEO
        title={project.title}
        description={project.summary}
        path={`/portfolio/${project.slug}`}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId="device" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-surface via-surface/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted no-underline hover:text-text"
            >
              <ArrowLeft weight="bold" className="size-4" />
              All projects
            </Link>
            {project.isSample && (
              <span className="ml-4 rounded-md border border-border bg-bg/60 px-2 py-1 text-xs text-muted">
                Sample case study
              </span>
            )}
            <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm text-accent">{project.client}</p>
            <p className="mt-6 max-w-2xl text-lg prose-tech">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md border border-border px-3 py-1 text-xs">{project.category}</span>
              {industry && (
                <Link
                  to={`/industries/${industry.slug}`}
                  className="rounded-md border border-border px-3 py-1 text-xs text-cta no-underline hover:text-accent"
                >
                  {industry.title}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page grid gap-4 py-12 md:grid-cols-3">
          {project.screenshots.map((shot, i) => (
            <Reveal key={shot.id} delay={i * 0.05}>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                <Section3D
                  scene={['layers', 'chip', 'grid'][i % 3]}
                  size="hero"
                  bleed
                  className="!absolute !inset-0 !h-full !w-full !max-w-none !rounded-none !border-0"
                />
                <span className="absolute bottom-3 left-3 z-10 rounded bg-bg/70 px-2 py-1 text-xs text-muted backdrop-blur-sm">
                  {shot.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y border-b border-border">
        <div className="container-page max-w-3xl">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.03}>
              <div className="border-b border-border py-10 first:pt-0 last:border-0">
                <h2 className="font-display text-xl font-semibold">{section.title}</h2>
                <p className="mt-4 prose-tech">{section.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="Technologies" className="mb-0" />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-md border border-border bg-bg/50 px-3 py-1.5 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading title="Results" className="mb-0" />
            <ul className="mt-6 space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cta" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {project.feedback && (
        <section className="section-y border-b border-border">
          <div className="container-page max-w-2xl">
            <Reveal>
              <blockquote className="rounded-xl border border-border bg-surface p-8">
                <Quotes weight="fill" className="size-8 text-cta/60" />
                <p className="mt-5 text-lg leading-relaxed">&ldquo;{project.feedback.quote}&rdquo;</p>
                <footer className="mt-6 text-sm text-muted">
                  — {project.feedback.author}
                  {project.feedback.isSample && (
                    <span className="ml-2 rounded bg-surface-elevated px-1.5 py-0.5 text-[10px] uppercase">
                      Sample
                    </span>
                  )}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>
      )}

      <CTABand
        title="Interested in similar outcomes?"
        description="Describe your project and we will outline a realistic delivery path."
        primaryTo="/contact"
        secondaryTo="/services"
        secondaryLabel="Our services"
      />
    </>
  )
}

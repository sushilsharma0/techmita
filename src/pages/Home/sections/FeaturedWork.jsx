import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { getFeaturedProjects } from '@/data/projects'
import { Reveal, revealFromIndex } from '@/pages/shared/Reveal'

export default function FeaturedWork() {
  const projects = getFeaturedProjects().slice(0, 3)

  return (
    <section className="section-y border-b border-border">
      <div className="container-page">
        <Reveal from="left">
          <SectionHeading
            title="Featured work"
            description="Sample case studies illustrating our approach — labeled as illustrative until replaced with verified client work."
          />
        </Reveal>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05} from={revealFromIndex(i)}>
              <article
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
                  <Section3D
                    scene={['layers', 'chip', 'grid'][i % 3]}
                    size="hero"
                    bleed
                    className="!absolute !inset-0 !h-full !w-full !max-w-none !rounded-none !border-0"
                  />
                  {project.isSample && (
                    <span className="absolute left-4 top-4 z-10 rounded-md bg-bg/80 px-2 py-1 text-xs font-medium text-muted backdrop-blur-sm">
                      Sample case study
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-display font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-4 prose-tech">{project.summary}</p>
                  <ul className="mt-6 space-y-2">
                    {project.results.slice(0, 2).map((result) => (
                      <li key={result} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cta" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
                  >
                    Read case study
                    <ArrowRight weight="bold" className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal from="up" className="mt-14 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
          >
            Full portfolio
            <ArrowRight weight="bold" className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

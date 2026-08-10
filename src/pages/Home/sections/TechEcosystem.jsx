import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { technologyGroups } from '@/data/technologies'
import { Reveal } from '@/pages/shared/Reveal'

const GROUP_LABELS = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  cloud: 'Cloud',
  devops: 'DevOps',
  ai: 'AI & Data',
}

export default function TechEcosystem() {
  const groups = ['frontend', 'backend', 'mobile', 'cloud', 'devops', 'ai']

  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="Technology ecosystem"
            description="Modern stacks chosen for maintainability — not trend-chasing. We match tools to your team and constraints."
          />
        </Reveal>

        <Reveal delay={0.04} className="mb-10">
          <Section3D scene="bolt" size="wide" bleed className="h-40 md:h-48" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((key, i) => (
            <Reveal key={key} delay={i * 0.04}>
              <div className="rounded-xl border border-border bg-bg/40 p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                  {GROUP_LABELS[key]}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {technologyGroups[key].slice(0, 5).map((tech) => (
                    <li
                      key={tech.name}
                      className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs text-text"
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            to="/technologies"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
          >
            Full technology overview
            <ArrowRight weight="bold" className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

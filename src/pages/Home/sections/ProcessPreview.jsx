import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { process } from '@/data/process'
import { Reveal, revealFromIndex } from '@/pages/shared/Reveal'

const PREVIEW = process.slice(0, 5)

export default function ProcessPreview() {
  return (
    <section className="section-y border-b border-border">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal from="left">
            <SectionHeading
              title="How we work"
              description="A structured delivery framework from discovery through launch and ongoing support."
              className="mb-0"
            />
            <Link
              to="/process"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-cta no-underline hover:text-accent"
            >
              Full process
              <ArrowRight weight="bold" className="size-4" />
            </Link>
          </Reveal>

          <div className="space-y-8">
            <Section3D scene="stack" size="wide" bleed className="h-36 md:h-40 lg:hidden" />
            <ol className="relative space-y-0 border-l border-border pl-8">
              {PREVIEW.map((phase, i) => (
                <Reveal key={phase.id} delay={i * 0.05} from={revealFromIndex(i)}>
                  <li className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[2.05rem] top-1 flex size-4 items-center justify-center rounded-full border-2 border-cta bg-bg">
                      <span className="size-1.5 rounded-full bg-cta" />
                    </span>
                    <h3 className="font-display font-semibold">{phase.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{phase.summary}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

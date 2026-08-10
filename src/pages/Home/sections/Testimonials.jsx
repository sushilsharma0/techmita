import { Quotes } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { testimonials } from '@/data/testimonials'
import { Reveal, revealFromIndex } from '@/pages/shared/Reveal'

export default function Testimonials() {
  const samples = testimonials.slice(0, 3)

  return (
    <section className="section-y border-b border-border">
      <div className="container-page">
        <Reveal from="left">
          <SectionHeading
            title="What clients say"
            description="Sample testimonials for layout demonstration — replace with verified quotes before production."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal from="up" delay={0.06} className="mb-10 flex justify-center">
          <Section3D scene="pulse" size="sm" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {samples.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} from={revealFromIndex(i)}>
              <blockquote className="flex h-full flex-col rounded-xl border border-border bg-surface p-8">
                <Quotes weight="fill" className="size-8 text-cta/60" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-text/90">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-sm font-semibold">{item.author}</p>
                  <p className="mt-1 text-xs text-muted">
                    {item.role}
                    {item.isSample && (
                      <span className="ml-2 rounded bg-surface-elevated px-1.5 py-0.5 text-[10px] uppercase">
                        Sample
                      </span>
                    )}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

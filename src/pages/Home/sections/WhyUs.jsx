import { Handshake, Lock, Rocket, Wrench } from '@phosphor-icons/react'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { company } from '@/data/company'
import { Reveal, revealFromIndex } from '@/pages/shared/Reveal'

const ICONS = [Handshake, Rocket, Lock, Wrench]

export default function WhyUs() {
  return (
    <section className="section-y border-b border-border">
      <div className="container-page">
        <Reveal from="left">
          <SectionHeading
            title="Why teams choose TechMitra"
            description="Practical engineering with the communication and documentation mature organizations expect."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal from="up" delay={0.06} className="mb-10 flex justify-center">
          <Section3D scene="shield" size="md" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {company.values.slice(0, 4).map((value, i) => {
            const Icon = ICONS[i] ?? Handshake
            return (
              <Reveal key={value.title} delay={i * 0.06} from={revealFromIndex(i)}>
                <div className="border-l-2 border-cta/40 pl-6">
                  <Icon weight="duotone" className="size-7 text-accent" />
                  <h3 className="mt-4 text-lg font-display font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

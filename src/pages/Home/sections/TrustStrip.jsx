import { CheckCircle } from '@phosphor-icons/react'
import { Section3D } from '@/components/common/Section3D'
import { Reveal, revealFromIndex } from '@/pages/shared/Reveal'

const TRUST_ITEMS = [
  'Discovery-led delivery',
  'Documented architecture',
  'Security-aware practices',
  'Long-term maintainability',
  'Remote-friendly collaboration',
]

export default function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface py-8 md:py-10">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-start">
            {TRUST_ITEMS.map((item, i) => (
              <Reveal key={item} delay={i * 0.04} from={revealFromIndex(i)}>
                <li className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle weight="fill" className="size-4 text-cta" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal from="right" delay={0.1}>
            <Section3D scene="ring" size="sm" align="right" className="hidden lg:block" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

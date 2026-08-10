import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { stats } from '@/data/stats'
import { Reveal } from '@/pages/shared/Reveal'

export default function Stats() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            title="By the numbers"
            description="Placeholder metrics below — replace with verified figures before publishing. Not presented as factual claims."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.04} className="mb-10 flex justify-center">
          <Section3D scene="chart" size="md" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 0.05}>
              <div className="rounded-xl border border-dashed border-border bg-bg/30 px-6 py-8 text-center">
                <p className="font-display text-3xl font-bold tracking-tight text-text/90">
                  {stat.value}
                </p>
                <p className="mt-2 font-display text-sm font-semibold">{stat.label}</p>
                <p className="mt-2 text-xs text-muted">{stat.note}</p>
                {stat.isPlaceholder && (
                  <span className="mt-3 inline-block rounded bg-surface-elevated px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                    Placeholder
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section3D } from '@/components/common/Section3D'
import { CTABand } from '@/components/common/CTABand'
import { team } from '@/data/team'
import { Reveal } from '@/pages/shared/Reveal'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

export default function TeamPage() {
  return (
    <>
      <SEO
        title="Team"
        description="Meet the TechMitra team — placeholder profiles to replace with your actual leadership and delivery staff."
        path="/team"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 lg:left-[45%] opacity-95">
          <LazyCanvas sceneId="network" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
        </div>
        <div className="container-page relative section-y pb-12">
          <Reveal>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Our team
            </h1>
            <p className="mt-6 max-w-2xl text-lg prose-tech">
              Cross-functional delivery — engineering, design, QA, DevOps, and analysis working as
              one accountable unit. Profiles below are placeholders until you add your team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-8">
        <div className="container-page flex justify-center">
          <Section3D scene="nodes" size="lg" />
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page">
          <Reveal>
            <SectionHeading title="People behind the work" />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.04}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-bg/40 p-6">
                  <div
                    className={`flex size-16 items-center justify-center rounded-full font-display text-xl font-bold text-white ${member.photo.color}`}
                  >
                    {member.photo.value}
                  </div>
                  <h2 className="mt-5 font-display font-semibold">{member.name}</h2>
                  <p className="mt-1 text-sm text-accent">{member.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{member.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {member.expertise.slice(0, 3).map((skill) => (
                      <li
                        key={skill}
                        className="rounded bg-surface-elevated px-2 py-0.5 text-[10px] text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <LinkedinLogo weight="fill" className="size-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors"
                        aria-label={`${member.name} on GitHub`}
                      >
                        <GithubLogo weight="fill" className="size-5" />
                      </a>
                    )}
                  </div>
                  {member.isPlaceholder && (
                    <span className="mt-4 text-[10px] uppercase tracking-wider text-muted">
                      Placeholder profile
                    </span>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Join our team"
        description="We are building a practice focused on craftsmanship and client partnership."
        primaryTo="/careers"
        primaryLabel="View open roles"
        secondaryTo="/contact"
        secondaryLabel="Get in touch"
      />
    </>
  )
}

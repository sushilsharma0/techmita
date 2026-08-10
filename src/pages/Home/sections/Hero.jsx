import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/buttons/Button'
import { company } from '@/data/company'
import { LazyCanvas } from '@/pages/shared/LazyCanvas'

const EASE = [0.23, 1, 0.32, 1]

function HeroLine({ children, from = 'left', delay = 0, className }) {
  const reduced = useReducedMotion()
  const hidden =
    from === 'left'
      ? 'translate3d(-40px, 0, 0)'
      : from === 'right'
        ? 'translate3d(40px, 0, 0)'
        : 'translate3d(0, 20px, 0)'

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: hidden }}
      animate={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
      transition={{ duration: 1.3, ease: EASE, delay }}
      style={{ backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 z-0 lg:left-[42%]">
        <LazyCanvas sceneId="tech-core" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent lg:from-bg lg:via-bg/35 lg:to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20"
        />
      </div>

      <div className="container-page relative z-10 py-28 md:py-32 lg:py-36">
        <div className="max-w-2xl lg:max-w-[36rem]">
          <HeroLine from="left" delay={0.15}>
            <p className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-text">
              {company.name}
            </p>
          </HeroLine>
          <HeroLine from="right" delay={0.38} className="mt-5">
            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-display font-semibold leading-[1.12] tracking-[-0.03em] text-text/95">
              Technology that moves business forward
            </h1>
          </HeroLine>
          <HeroLine from="left" delay={0.6} className="mt-6">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {company.tagline}. We design, build, and maintain software for organizations that need
              clarity, craftsmanship, and long-term partnership.
            </p>
          </HeroLine>
          <HeroLine from="up" delay={0.82} className="mt-10">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a project
                  <ArrowRight weight="bold" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/portfolio">View our work</Link>
              </Button>
            </div>
          </HeroLine>
          <HeroLine from="right" delay={1.02} className="mt-10">
            <p className="flex items-center gap-2 text-sm text-muted">
              <ShieldCheck weight="fill" className="size-4 shrink-0 text-accent" />
              Trusted delivery partner for web, mobile, cloud, and custom software
            </p>
          </HeroLine>
        </div>
      </div>
    </section>
  )
}

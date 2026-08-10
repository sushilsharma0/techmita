import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/buttons/Button'
import { cn } from '@/utils/cn'

export function CTABand({
  title = 'Ready to discuss your next initiative?',
  description = 'Share your goals, constraints, and timeline. We will respond with a clear next step — no pressure pitch.',
  primaryTo = '/contact',
  primaryLabel = 'Start a conversation',
  secondaryTo = '/process',
  secondaryLabel = 'See how we work',
  className,
}) {
  return (
    <section className={cn('section-y', className)}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated px-8 py-12 md:px-14 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(ellipse at 20% 0%, rgb(3 105 161 / 0.28), transparent 55%)',
            }}
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl tracking-[-0.03em] leading-tight">
              {title}
            </h2>
            <p className="mt-4 prose-tech text-lg">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to={primaryTo}>
                  {primaryLabel}
                  <ArrowRight weight="bold" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

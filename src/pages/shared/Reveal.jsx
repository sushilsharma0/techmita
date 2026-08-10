import { useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/utils/cn'

/** Strong ease-out from design tokens / animate skill */
const EASE_OUT = [0.23, 1, 0.32, 1]

const OFFSET = {
  left: 'translate3d(-48px, 0, 0)',
  right: 'translate3d(48px, 0, 0)',
  up: 'translate3d(0, 28px, 0)',
  down: 'translate3d(0, -28px, 0)',
  fade: 'translate3d(0, 0, 0)',
}

/**
 * Stable left/right alternation across the page without forcing every call site
 * to pass `from`. Resets naturally on remount (route change).
 */
let revealSeq = 0

function resolveFrom(from) {
  if (from && from !== 'auto') return from
  const dir = revealSeq % 2 === 0 ? 'left' : 'right'
  revealSeq += 1
  return dir
}

/**
 * Scroll reveal — GPU-only (transform + opacity).
 * Default `from="auto"` alternates left/right for text that enters as you scroll.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  from = 'auto',
  duration = 1.3,
  once = true,
  amount = 0.2,
}) {
  const reduced = useReducedMotion()
  const Component = motion[as] ?? motion.div
  const directionRef = useRef(null)

  if (directionRef.current === null) {
    directionRef.current = resolveFrom(from)
  }

  const direction = directionRef.current
  const hiddenTransform = OFFSET[direction] ?? OFFSET.left

  // Allow longer stagger so cascades feel paced, not rushed
  const safeDelay = reduced ? 0 : Math.min(Math.max(delay, 0), 0.7)

  if (reduced) {
    const Static = as === 'div' ? 'div' : as
    return <Static className={cn(className)}>{children}</Static>
  }

  return (
    <Component
      initial={{ opacity: 0, transform: hiddenTransform }}
      whileInView={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{
        duration,
        ease: EASE_OUT,
        delay: safeDelay,
      }}
      className={cn(className)}
      style={{ backfaceVisibility: 'hidden' }}
    >
      {children}
    </Component>
  )
}

/**
 * Staggered group — children alternate left/right with a short cascade.
 */
export function RevealGroup({ children, className, stagger = 0.16 }) {
  const items = Array.isArray(children) ? children : [children]

  return (
    <div className={cn(className)}>
      {items.map((child, i) => {
        if (!child) return null
        const key = child.key ?? i
        return (
          <Reveal key={key} delay={i * stagger} from={i % 2 === 0 ? 'left' : 'right'}>
            {child}
          </Reveal>
        )
      })}
    </div>
  )
}

/** Convenience: pick direction from list index */
export function revealFromIndex(index) {
  return index % 2 === 0 ? 'left' : 'right'
}

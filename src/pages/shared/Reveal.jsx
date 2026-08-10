import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/utils/cn'

export function Reveal({ children, className, delay = 0, as = 'div' }) {
  const reduced = useReducedMotion()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      initial={reduced ? false : { opacity: 0, transform: 'translateY(12px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: reduced ? 0 : 0.35,
        ease: [0.23, 1, 0.32, 1],
        delay: reduced ? 0 : delay,
      }}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}

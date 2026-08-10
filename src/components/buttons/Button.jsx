import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display text-sm font-semibold tracking-tight transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-[var(--ease-out-strong)] cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'bg-cta text-white shadow-[0_10px_30px_rgb(3_105_161/0.35)] hover:bg-cta-hover',
        secondary:
          'surface-elevated text-text hover:border-[color-mix(in_oklab,var(--color-cta)_45%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-surface-elevated)_85%,var(--color-cta))]',
        ghost: 'bg-transparent text-text hover:bg-white/5',
        link: 'rounded-none px-0 text-cta hover:text-accent underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3.5',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}

import { cn } from '@/utils/cn'

export function SectionHeading({
  title,
  description,
  align = 'left',
  className,
  children,
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-[-0.03em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 prose-tech mx-auto text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  )
}

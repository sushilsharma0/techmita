import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/cn'

const SectionCanvas = lazy(() =>
  import('@/three/scenes/SectionCanvas.jsx').then((mod) => ({ default: mod.SectionCanvas })),
)

const GlobalCanvas = lazy(() =>
  import('@/three/scenes/GlobalCanvas.jsx').then((mod) => ({ default: mod.GlobalCanvas })),
)

const SIZE_CLASS = {
  sm: 'h-36 w-36',
  md: 'h-48 w-full max-w-[280px]',
  lg: 'h-56 w-full max-w-[360px]',
  wide: 'h-52 w-full max-w-none',
  hero: 'absolute inset-0',
}

/**
 * Section 3D accent — mounts WebGL only while near viewport for fast scrolling.
 */
export function Section3D({
  scene = 'ring',
  size = 'md',
  className,
  align = 'center',
  bleed = false,
}) {
  const hostRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const el = hostRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setMounted(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setMounted(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={hostRef}
      className={cn(
        'relative overflow-hidden',
        !bleed && 'rounded-2xl border border-border/60 bg-surface/40',
        SIZE_CLASS[size],
        align === 'left' && 'mr-auto',
        align === 'right' && 'ml-auto',
        align === 'center' && 'mx-auto',
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgb(34 211 238 / 0.18), rgb(3 105 161 / 0.1), transparent 72%)',
        }}
      />
      {mounted ? (
        <Suspense fallback={null}>
          <SectionCanvas sceneId={scene} />
        </Suspense>
      ) : null}
    </div>
  )
}

export function LazyCanvas(props) {
  return (
    <Suspense fallback={null}>
      <GlobalCanvas {...props} />
    </Suspense>
  )
}

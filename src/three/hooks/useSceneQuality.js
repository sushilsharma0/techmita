import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion.js'

const WIDTH_BREAKPOINTS = {
  low: 640,
  medium: 1024,
}

/**
 * Desktop → high (retina DPR + antialias + denser meshes).
 * Tablet / high-DPR mid widths → medium.
 * Mobile / reduced motion → low.
 */
function resolveQuality(width, dpr, reducedMotion) {
  if (reducedMotion) return 'low'
  if (width < WIDTH_BREAKPOINTS.low) return 'low'
  if (width < WIDTH_BREAKPOINTS.medium) return 'medium'
  return 'high'
}

export function useSceneQuality() {
  const reducedMotion = useReducedMotion()
  const [quality, setQuality] = useState(() =>
    resolveQuality(
      typeof window !== 'undefined' ? window.innerWidth : 1440,
      typeof window !== 'undefined' ? window.devicePixelRatio : 2,
      reducedMotion,
    ),
  )

  useEffect(() => {
    const update = () => {
      setQuality(
        resolveQuality(window.innerWidth, window.devicePixelRatio, reducedMotion),
      )
    }

    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [reducedMotion])

  return quality
}

/** Pixel density for crisp edges on retina displays. */
export function getQualityDpr(quality) {
  if (typeof window === 'undefined') return 2
  const native = window.devicePixelRatio || 1
  if (quality === 'high') return Math.min(native, 2)
  if (quality === 'medium') return Math.min(native, 1.75)
  return Math.min(native, 1.5)
}

export function getSegmentCount(quality, high, medium, low) {
  if (quality === 'high') return high
  if (quality === 'medium') return medium
  return low
}

export function shouldAntialias(quality) {
  return quality !== 'low'
}

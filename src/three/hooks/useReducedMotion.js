import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function getInitialReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(QUERY).matches
}

/** Returns true when the user prefers reduced motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(getInitialReducedMotion)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = (event) => setReduced(event.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/** Non-hook check for use inside R3F or utilities. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(QUERY).matches
}

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { damp } from '../utils/lerp.js'
import { mouseStore } from '../utils/mouseStore.js'

const DEFAULT_SMOOTHING = 5

/**
 * Returns damped normalized mouse values for subtle parallax in R3F.
 * Never follows the cursor literally — small influence only.
 */
export function useMouseParallax(options = {}) {
  const { smoothing = DEFAULT_SMOOTHING, influence = 0.08 } = options
  const parallax = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    mouseStore.dampedX = damp(mouseStore.dampedX, mouseStore.targetX, smoothing, delta)
    mouseStore.dampedY = damp(mouseStore.dampedY, mouseStore.targetY, smoothing, delta)

    parallax.current.x = mouseStore.dampedX * influence
    parallax.current.y = mouseStore.dampedY * influence
  })

  return parallax
}

export function useMouseParallaxOffset(influenceX = 0.08, influenceY = 0.06) {
  const parallax = useMouseParallax({ influence: 1 })
  const offset = useRef([0, 0, 0])

  useFrame(() => {
    offset.current[0] = parallax.current.x * influenceX
    offset.current[1] = parallax.current.y * influenceY
  })

  return offset
}

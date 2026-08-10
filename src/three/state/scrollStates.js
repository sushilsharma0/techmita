import { lerp, lerpArray } from '../utils/lerp.js'

const makeState = (position, rotation = [0, 0, 0], scale = 1) => ({
  position: [...position],
  rotation: [...rotation],
  scale,
})

/** Ordered homepage scroll keyframes for coordinated 3D transitions. */
export const heroState = makeState([0, 0, 0], [0, 0, 0], 1)
export const aboutState = makeState([0.4, -0.15, -0.6], [0.08, -0.35, 0.02], 0.95)
export const servicesState = makeState([-0.35, 0.1, -0.8], [-0.05, 0.45, 0], 0.9)
export const technologyState = makeState([0.2, 0.25, -1.1], [0.12, 0.85, -0.04], 0.88)
export const portfolioState = makeState([-0.15, -0.2, -1.4], [-0.08, 1.25, 0.03], 0.85)
export const teamState = makeState([0.3, -0.05, -1.7], [0.05, 1.65, -0.02], 0.82)
export const contactState = makeState([0, 0, -2], [0, 2.1, 0], 0.8)

export const scrollStateOrder = [
  heroState,
  aboutState,
  servicesState,
  technologyState,
  portfolioState,
  teamState,
  contactState,
]

export const scrollStateKeys = [
  'hero',
  'about',
  'services',
  'technology',
  'portfolio',
  'team',
  'contact',
]

export function interpolateStates(a, b, t) {
  return {
    position: lerpArray(a.position, b.position, t, [0, 0, 0]),
    rotation: lerpArray(a.rotation, b.rotation, t, [0, 0, 0]),
    scale: lerp(a.scale, b.scale, t),
  }
}

/** Map global progress 0–1 across ordered states. */
export function getScrollStateAtProgress(progress, states = scrollStateOrder) {
  const clamped = Math.min(1, Math.max(0, progress))
  const segments = states.length - 1
  if (segments <= 0) return { ...states[0], position: [...states[0].position], rotation: [...states[0].rotation] }

  const scaled = clamped * segments
  const index = Math.min(segments - 1, Math.floor(scaled))
  const localT = scaled - index

  return interpolateStates(states[index], states[index + 1], localT)
}

/**
 * External mouse store — refs/object, not React state.
 * Updated from DOM listeners; read inside useFrame for parallax.
 */

export const mouseStore = {
  /** Normalized pointer -1..1 */
  x: 0,
  y: 0,
  /** Raw target before damping */
  targetX: 0,
  targetY: 0,
  /** Damped values for rendering */
  dampedX: 0,
  dampedY: 0,
  active: false,
}

export function setMouseTarget(clientX, clientY, width, height) {
  const nx = (clientX / width) * 2 - 1
  const ny = -(clientY / height) * 2 + 1
  mouseStore.targetX = nx
  mouseStore.targetY = ny
  mouseStore.active = true
}

export function resetMouseStore() {
  mouseStore.targetX = 0
  mouseStore.targetY = 0
  mouseStore.active = false
}

export function getMouseStore() {
  return mouseStore
}

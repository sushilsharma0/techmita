/**
 * Linear interpolation and exponential damping helpers for R3F useFrame loops.
 */

export function lerp(a, b, t) {
  return a + (b - a) * t
}

export function lerpArray(a, b, t, out = []) {
  for (let i = 0; i < a.length; i += 1) {
    out[i] = lerp(a[i], b[i], t)
  }
  return out
}

/** Exponential damp — smoothing ~4–6 feels subtle for mouse/camera inertia. */
export function damp(current, target, smoothing, delta) {
  const t = 1 - Math.exp(-smoothing * delta)
  return lerp(current, target, t)
}

export function dampArray(current, target, smoothing, delta, out = current) {
  const t = 1 - Math.exp(-smoothing * delta)
  for (let i = 0; i < current.length; i += 1) {
    out[i] = lerp(current[i], target[i], t)
  }
  return out
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  const t = (value - inMin) / (inMax - inMin)
  return lerp(outMin, outMax, clamp(t, 0, 1))
}

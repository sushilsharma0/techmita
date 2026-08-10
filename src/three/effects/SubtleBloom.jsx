/**
 * Bloom placeholder — prefers emissive materials over postprocessing.
 * @react-three/postprocessing is intentionally not required.
 * Returns null; emissive accents in techMaterials provide subtle glow on high quality.
 */
export function SubtleBloom({ quality, reducedMotion }) {
  if (quality !== 'high' || reducedMotion) return null
  return null
}

import * as THREE from 'three'

/** TechMitra brand palette — lit for dark navy fields */
export const COLORS = {
  background: '#07111F',
  navy: '#1A3352',
  navyDeep: '#0F2238',
  steel: '#3D6A96',
  steelLight: '#5B8AB8',
  accent: '#0389C9',
  accentEmissive: '#22D3EE',
  muted: '#94A3B8',
  line: '#5BA3D4',
}

export function createTechMaterial(type = 'surface', overrides = {}) {
  const presets = {
    surface: {
      color: COLORS.navy,
      metalness: 0.28,
      roughness: 0.52,
      emissive: new THREE.Color(COLORS.navyDeep),
      emissiveIntensity: 0.12,
    },
    steel: {
      color: COLORS.steel,
      metalness: 0.48,
      roughness: 0.38,
      emissive: new THREE.Color(COLORS.accent),
      emissiveIntensity: 0.08,
    },
    accent: {
      color: COLORS.accent,
      metalness: 0.35,
      roughness: 0.28,
      emissive: new THREE.Color(COLORS.accentEmissive),
      emissiveIntensity: 0.45,
    },
    emissive: {
      color: COLORS.steelLight,
      metalness: 0.25,
      roughness: 0.32,
      emissive: new THREE.Color(COLORS.accentEmissive),
      emissiveIntensity: 0.7,
    },
    wire: {
      color: COLORS.line,
      metalness: 0.15,
      roughness: 0.55,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color(COLORS.accentEmissive),
      emissiveIntensity: 0.25,
    },
    glass: {
      color: COLORS.steelLight,
      metalness: 0.12,
      roughness: 0.12,
      transparent: true,
      opacity: 0.48,
      emissive: new THREE.Color(COLORS.accent),
      emissiveIntensity: 0.18,
    },
    node: {
      color: COLORS.steelLight,
      metalness: 0.4,
      roughness: 0.22,
      emissive: new THREE.Color(COLORS.accentEmissive),
      emissiveIntensity: 0.65,
    },
  }

  const base = presets[type] ?? presets.surface
  return new THREE.MeshStandardMaterial({ ...base, ...overrides })
}

export function disposeMaterial(material) {
  if (!material) return
  if (Array.isArray(material)) {
    material.forEach(disposeMaterial)
    return
  }
  material.dispose?.()
}

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

const DEVICES = [
  { position: [-0.7, 0.1, 0.1], rotation: [0, 0.3, 0], size: [0.5, 0.34, 0.04], screen: [0.44, 0.28] },
  { position: [0.65, -0.05, -0.1], rotation: [0, -0.35, 0], size: [0.32, 0.58, 0.03], screen: [0.28, 0.48] },
]

function DeviceFrame({ position, rotation, size, screen, frameMaterial, screenMaterial, reduced }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh material={frameMaterial}>
        <boxGeometry args={size} />
      </mesh>
      <mesh position={[0, 0, size[2] * 0.55]} material={screenMaterial}>
        <planeGeometry args={screen} />
      </mesh>
    </group>
  )
}

export function DeviceScene({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()

  const devices = useMemo(
    () => DEVICES.slice(0, getSegmentCount(quality, 2, 2, 1)),
    [quality],
  )

  const materials = useMemo(
    () => ({
      frame: createTechMaterial('steel'),
      screen: createTechMaterial('emissive', { emissiveIntensity: 0.55, color: '#1A3352' }),
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.02
  })

  return (
    <group ref={group}>
      {devices.map((device, i) => (
        <DeviceFrame key={i} {...device} frameMaterial={materials.frame} screenMaterial={materials.screen} reduced={reduced} />
      ))}
    </group>
  )
}

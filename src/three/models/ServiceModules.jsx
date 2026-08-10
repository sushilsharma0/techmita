import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

const MODULE_LAYOUT = [
  { position: [-0.9, 0.35, 0.2], size: [0.55, 0.35, 0.12], speed: 0.04 },
  { position: [0.85, 0.15, -0.15], size: [0.48, 0.28, 0.1], speed: 0.05 },
  { position: [0.1, -0.55, 0.35], size: [0.62, 0.22, 0.14], speed: 0.035 },
]

function ServiceModule({ position, size, speed, material, reduced }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current || reduced) return
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 8) * 0.03
  })

  return (
    <group ref={ref} position={position}>
      <mesh material={material}>
        <boxGeometry args={size} />
      </mesh>
    </group>
  )
}

export function ServiceModules({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()

  const modules = useMemo(
    () => MODULE_LAYOUT.slice(0, getSegmentCount(quality, 3, 2, 2)),
    [quality],
  )

  const material = useMemo(() => createTechMaterial('steel'), [])

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.025
  })

  return (
    <group ref={group}>
      {modules.map((mod, i) => (
        <ServiceModule key={i} {...mod} material={material} reduced={reduced} />
      ))}
    </group>
  )
}

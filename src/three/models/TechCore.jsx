import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

function OrbitingNode({ radius, speed, phase, size, material, reduced, sphereSeg }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current || reduced) return
    const t = state.clock.elapsedTime * speed + phase
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
  })

  return (
    <mesh ref={ref} material={material}>
      <sphereGeometry args={[size, sphereSeg, sphereSeg]} />
    </mesh>
  )
}

export function TechCore({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()
  const ringA = useRef()

  // Faceted crystal stays intentional; detail 1 on high softens silhouette without losing form
  const detail = getSegmentCount(quality, 1, 1, 0)
  const segments = getSegmentCount(quality, 96, 64, 32)
  const tubeSeg = getSegmentCount(quality, 16, 12, 8)
  const sphereSeg = getSegmentCount(quality, 24, 16, 12)

  const materials = useMemo(
    () => ({
      core: createTechMaterial('emissive', {
        color: '#3D6A96',
        emissiveIntensity: 0.55,
      }),
      ring: createTechMaterial('wire'),
      node: createTechMaterial('node'),
    }),
    [],
  )

  useFrame((_, delta) => {
    if (reduced || !group.current) return
    group.current.rotation.y += delta * 0.1
    if (ringA.current) ringA.current.rotation.x += delta * 0.06
  })

  const nodes = useMemo(
    () =>
      Array.from({ length: getSegmentCount(quality, 5, 4, 3) }, (_, i) => ({
        radius: 1.3 + (i % 2) * 0.15,
        speed: 0.3 + i * 0.04,
        phase: (i / 4) * Math.PI * 2,
        size: 0.05,
      })),
    [quality],
  )

  return (
    <group ref={group}>
      <mesh material={materials.core}>
        <icosahedronGeometry args={[0.55, detail]} />
      </mesh>

      <mesh ref={ringA} rotation={[Math.PI / 3, 0, 0]} material={materials.ring}>
        <torusGeometry args={[0.95, 0.012, tubeSeg, segments]} />
      </mesh>

      {nodes.map((node, i) => (
        <OrbitingNode
          key={i}
          {...node}
          material={materials.node}
          reduced={reduced}
          sphereSeg={sphereSeg}
        />
      ))}
    </group>
  )
}

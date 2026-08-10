import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

function OrbitRing({ radius, tube, tilt, speed, segments, tubeSeg, material, reduced, nodeMaterial, nodeCount, sphereSeg }) {
  const ring = useRef()

  useFrame((_, delta) => {
    if (!ring.current || reduced) return
    ring.current.rotation.y += delta * speed
    ring.current.rotation.x = tilt[0]
    ring.current.rotation.z = tilt[1]
  })

  return (
    <group>
      <mesh ref={ring} material={material}>
        <torusGeometry args={[radius, tube, tubeSeg, segments]} />
      </mesh>
      {Array.from({ length: nodeCount }, (_, i) => {
        const angle = (i / nodeCount) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            material={nodeMaterial}
          >
            <sphereGeometry args={[0.045, sphereSeg, sphereSeg]} />
          </mesh>
        )
      })}
    </group>
  )
}

export function TechOrbit({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const core = useRef()

  const segments = getSegmentCount(quality, 96, 64, 32)
  const tubeSeg = getSegmentCount(quality, 16, 12, 8)
  const sphereSeg = getSegmentCount(quality, 20, 14, 10)
  const ringCount = getSegmentCount(quality, 2, 2, 1)

  const materials = useMemo(
    () => ({
      ring: createTechMaterial('wire'),
      node: createTechMaterial('emissive', { emissiveIntensity: 0.55 }),
      core: createTechMaterial('accent'),
    }),
    [],
  )

  const rings = useMemo(
    () =>
      [
        { radius: 0.8, tube: 0.01, tilt: [Math.PI / 2.5, 0], speed: 0.05, nodes: 4 },
        { radius: 1.15, tube: 0.008, tilt: [Math.PI / 3.5, 0.2], speed: -0.04, nodes: 5 },
      ].slice(0, ringCount),
    [ringCount],
  )

  useFrame((_, delta) => {
    if (!core.current || reduced) return
    core.current.rotation.y += delta * 0.06
  })

  return (
    <group>
      <mesh ref={core} material={materials.core}>
        <dodecahedronGeometry args={[0.2, getSegmentCount(quality, 1, 0, 0)]} />
      </mesh>

      {rings.map((ring, i) => (
        <OrbitRing
          key={i}
          {...ring}
          segments={segments}
          tubeSeg={tubeSeg}
          sphereSeg={sphereSeg}
          material={materials.ring}
          nodeMaterial={materials.node}
          nodeCount={getSegmentCount(quality, ring.nodes, ring.nodes - 1, 3)}
          reduced={reduced}
        />
      ))}
    </group>
  )
}

import { useMemo, useRef } from 'react'
import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

function buildNetwork(count, spread) {
  const nodes = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2
    const layer = i % 3
    return {
      id: i,
      position: [
        Math.cos(angle) * spread * (0.6 + layer * 0.15),
        (layer - 1) * 0.35,
        Math.sin(angle) * spread * (0.6 + layer * 0.15),
      ],
    }
  })

  const edges = []
  for (let i = 0; i < nodes.length; i += 1) {
    edges.push([nodes[i].position, nodes[(i + 1) % nodes.length].position])
  }

  return { nodes, edges }
}

export function NetworkStructure({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()

  const count = getSegmentCount(quality, 8, 6, 5)
  const sphereSeg = getSegmentCount(quality, 24, 16, 12)
  const { nodes, edges } = useMemo(() => buildNetwork(count, 1.1), [count])

  const materials = useMemo(
    () => ({
      node: createTechMaterial('node'),
      hub: createTechMaterial('accent'),
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.04
  })

  return (
    <group ref={group}>
      {edges.map((points, i) => (
        <Line key={`edge-${i}`} points={points} color="#5BA3D4" lineWidth={1.25} transparent opacity={0.75} />
      ))}

      {nodes.map((node, i) => (
        <mesh key={node.id} position={node.position} material={i === 0 ? materials.hub : materials.node}>
          <sphereGeometry args={[i === 0 ? 0.1 : 0.06, sphereSeg, sphereSeg]} />
        </mesh>
      ))}
    </group>
  )
}

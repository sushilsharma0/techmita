import { useMemo, useRef } from 'react'
import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

function buildLayers(quality) {
  const counts =
    quality === 'high' ? [3, 4, 3] : quality === 'medium' ? [2, 3, 2] : [2, 2, 2]

  const nodes = []
  const edges = []
  let id = 0

  counts.forEach((count, layer) => {
    const y = (layer - 1) * 0.5
    const spread = 0.5 + layer * 0.2
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2
      nodes.push({ id: id++, position: [Math.cos(angle) * spread, y, Math.sin(angle) * spread], layer })
    }
  })

  return { nodes, edges }
}

export function NeuralNet({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()

  const { nodes } = useMemo(() => buildLayers(quality), [quality])
  const nodeSize = getSegmentCount(quality, 0.07, 0.06, 0.05)
  const sphereSeg = getSegmentCount(quality, 24, 16, 12)

  const materials = useMemo(
    () => ({
      node: createTechMaterial('node'),
      core: createTechMaterial('accent'),
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.035
  })

  return (
    <group ref={group}>
      {nodes.map((node) => (
        <mesh
          key={node.id}
          position={node.position}
          material={node.layer === 1 ? materials.core : materials.node}
        >
          <sphereGeometry args={[node.layer === 1 ? nodeSize * 1.3 : nodeSize, sphereSeg, sphereSeg]} />
        </mesh>
      ))}
    </group>
  )
}

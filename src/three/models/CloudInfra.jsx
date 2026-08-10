import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

export function CloudInfra({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()

  const layerCount = getSegmentCount(quality, 3, 2, 2)
  const nodeCount = getSegmentCount(quality, 4, 3, 2)

  const materials = useMemo(
    () => ({
      plane: createTechMaterial('glass'),
      node: createTechMaterial('node'),
    }),
    [],
  )

  const layers = useMemo(
    () =>
      Array.from({ length: layerCount }, (_, i) => ({
        y: (i - (layerCount - 1) / 2) * 0.4,
        width: 1.6 - i * 0.12,
        depth: 1.0 - i * 0.08,
      })),
    [layerCount],
  )

  const nodes = useMemo(
    () =>
      Array.from({ length: nodeCount }, (_, i) => ({
        x: -0.5 + (i / Math.max(nodeCount - 1, 1)) * 1,
        z: (i % 2) * 0.2 - 0.1,
        y: 0.1 + (i % 2) * 0.3,
      })),
    [nodeCount],
  )

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.03
  })

  return (
    <group ref={group}>
      {layers.map((layer, i) => (
        <mesh key={i} position={[0, layer.y, 0]} material={materials.plane} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[layer.width, layer.depth]} />
        </mesh>
      ))}

      {nodes.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, node.z]} material={materials.node}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
        </mesh>
      ))}
    </group>
  )
}

import { useMemo, useRef } from 'react'
import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { createTechMaterial } from '../materials/techMaterials.js'

function arcPoints(latA, lonA, latB, lonB, radius, segments) {
  const start = new THREE.Vector3().setFromSphericalCoords(radius, latA, lonA)
  const end = new THREE.Vector3().setFromSphericalCoords(radius, latB, lonB)
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.1)
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
  return curve.getPoints(segments)
}

function buildGlobeData(quality) {
  const pointCount = getSegmentCount(quality, 10, 8, 6)
  const arcCount = getSegmentCount(quality, 4, 3, 2)
  const arcSegments = getSegmentCount(quality, 32, 20, 12)

  const points = Array.from({ length: pointCount }, (_, i) => {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / pointCount)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    return new THREE.Vector3().setFromSphericalCoords(0.95, phi, theta)
  })

  const arcs = Array.from({ length: arcCount }, (_, i) => {
    const a = points[i % points.length]
    const b = points[(i * 3 + 5) % points.length]
    const sphA = new THREE.Spherical().setFromVector3(a)
    const sphB = new THREE.Spherical().setFromVector3(b)
    return arcPoints(sphA.phi, sphA.theta, sphB.phi, sphB.theta, 0.95, arcSegments)
  })

  return { points, arcs }
}

export function ConnectionGlobe({ quality: qualityProp, reducedMotion: reducedProp }) {
  const settings = useSceneSettings()
  const quality = qualityProp ?? settings.quality
  const reduced = reducedProp ?? settings.reducedMotion
  const group = useRef()

  const globeSegments = getSegmentCount(quality, 48, 32, 20)
  const sphereSeg = getSegmentCount(quality, 20, 14, 10)
  const { points, arcs } = useMemo(() => buildGlobeData(quality), [quality])

  const materials = useMemo(
    () => ({
      globe: createTechMaterial('surface', { transparent: true, opacity: 0.92 }),
      point: createTechMaterial('node'),
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!group.current || reduced) return
    group.current.rotation.y += delta * 0.035
  })

  return (
    <group ref={group}>
      <mesh material={materials.globe}>
        <sphereGeometry args={[0.95, globeSegments, globeSegments]} />
      </mesh>

      {arcs.map((pts, i) => (
        <Line key={`arc-${i}`} points={pts} color="#22D3EE" lineWidth={1.25} transparent opacity={0.72} />
      ))}

      {points.map((pos, i) => (
        <mesh key={`pt-${i}`} position={pos.toArray()} material={materials.point}>
          <sphereGeometry args={[0.03, sphereSeg, sphereSeg]} />
        </mesh>
      ))}
    </group>
  )
}

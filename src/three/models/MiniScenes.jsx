import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSceneSettings } from '../context/SceneSettingsContext.jsx'
import { getSegmentCount } from '../hooks/useSceneQuality.js'
import { createTechMaterial } from '../materials/techMaterials.js'

function useSpin(reduced, speed = 0.35) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (!ref.current || reduced) return
    ref.current.rotation.y += delta * speed
  })
  return ref
}

function useQualitySeg() {
  const { quality } = useSceneSettings()
  return {
    quality,
    sphere: getSegmentCount(quality, 24, 16, 12),
    torus: getSegmentCount(quality, 64, 40, 24),
    tube: getSegmentCount(quality, 14, 10, 8),
  }
}

function MiniChip({ reduced }) {
  const ref = useSpin(reduced, 0.4)
  const mat = useMemo(() => createTechMaterial('steel'), [])
  const accent = useMemo(() => createTechMaterial('accent'), [])
  return (
    <group ref={ref}>
      <mesh material={mat}>
        <boxGeometry args={[1.1, 0.12, 1.1]} />
      </mesh>
      <mesh position={[0, 0.1, 0]} material={accent}>
        <boxGeometry args={[0.35, 0.06, 0.35]} />
      </mesh>
    </group>
  )
}

function MiniShield({ reduced }) {
  const ref = useSpin(reduced, 0.28)
  const mat = useMemo(() => createTechMaterial('accent'), [])
  return (
    <group ref={ref}>
      <mesh material={mat} scale={[0.9, 1.1, 0.25]}>
        <octahedronGeometry args={[0.55, 0]} />
      </mesh>
    </group>
  )
}

function MiniNodes({ reduced }) {
  const ref = useSpin(reduced, 0.25)
  const mat = useMemo(() => createTechMaterial('node'), [])
  const { sphere } = useQualitySeg()
  const positions = [[-0.55, 0, 0], [0.55, 0.15, 0], [0, -0.35, 0.25]]
  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <mesh key={i} position={p} material={mat}>
          <sphereGeometry args={[0.14, sphere, sphere]} />
        </mesh>
      ))}
    </group>
  )
}

function MiniStack({ reduced }) {
  const ref = useSpin(reduced, 0.22)
  const mat = useMemo(() => createTechMaterial('steel'), [])
  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, i * 0.28 - 0.28, 0]} material={mat}>
          <boxGeometry args={[0.9 - i * 0.08, 0.14, 0.7 - i * 0.06]} />
        </mesh>
      ))}
    </group>
  )
}

function MiniRing({ reduced }) {
  const ref = useSpin(reduced, 0.45)
  const mat = useMemo(() => createTechMaterial('wire'), [])
  const core = useMemo(() => createTechMaterial('accent'), [])
  const { torus, tube, quality } = useQualitySeg()
  return (
    <group ref={ref}>
      <mesh material={core}>
        <icosahedronGeometry args={[0.28, getSegmentCount(quality, 1, 1, 0)]} />
      </mesh>
      <mesh rotation={[Math.PI / 2.2, 0, 0]} material={mat}>
        <torusGeometry args={[0.72, 0.018, tube, torus]} />
      </mesh>
    </group>
  )
}

function MiniGrid({ reduced }) {
  const ref = useSpin(reduced, 0.3)
  const mat = useMemo(() => createTechMaterial('node'), [])
  return (
    <group ref={ref}>
      {[-0.35, 0.35].flatMap((x) =>
        [-0.35, 0.35].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0, z]} material={mat}>
            <boxGeometry args={[0.28, 0.28, 0.28]} />
          </mesh>
        )),
      )}
    </group>
  )
}

function MiniPulse({ reduced }) {
  const ref = useRef()
  const mat = useMemo(() => createTechMaterial('emissive', { emissiveIntensity: 0.65 }), [])
  const { sphere } = useQualitySeg()
  useFrame((state) => {
    if (!ref.current || reduced) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.3
    const s = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.06
    ref.current.scale.setScalar(s)
  })
  return (
    <mesh ref={ref} material={mat}>
      <sphereGeometry args={[0.45, sphere, sphere]} />
    </mesh>
  )
}

function MiniLayers({ reduced }) {
  const ref = useSpin(reduced, 0.2)
  const mat = useMemo(() => createTechMaterial('glass'), [])
  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, i * 0.22 - 0.22, i * 0.08]} rotation={[-Math.PI / 2.4, 0, i * 0.15]} material={mat}>
          <planeGeometry args={[0.95, 0.55]} />
        </mesh>
      ))}
    </group>
  )
}

function MiniBolt({ reduced }) {
  const ref = useSpin(reduced, 0.38)
  const mat = useMemo(() => createTechMaterial('accent'), [])
  return (
    <group ref={ref}>
      <mesh position={[0, 0.2, 0]} material={mat}>
        <boxGeometry args={[0.18, 0.45, 0.18]} />
      </mesh>
      <mesh position={[0.12, -0.15, 0]} rotation={[0, 0, -0.5]} material={mat}>
        <boxGeometry args={[0.14, 0.35, 0.14]} />
      </mesh>
      <mesh position={[-0.1, -0.35, 0]} rotation={[0, 0, 0.45]} material={mat}>
        <boxGeometry args={[0.14, 0.3, 0.14]} />
      </mesh>
    </group>
  )
}

function MiniCompass({ reduced }) {
  const ref = useSpin(reduced, 0.32)
  const ring = useMemo(() => createTechMaterial('wire'), [])
  const node = useMemo(() => createTechMaterial('node'), [])
  const { torus, tube, sphere } = useQualitySeg()
  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={ring}>
        <torusGeometry args={[0.65, 0.015, tube, torus]} />
      </mesh>
      <mesh material={node}>
        <sphereGeometry args={[0.12, sphere, sphere]} />
      </mesh>
      {[0, 1, 2, 3].map((i) => {
        const a = (i / 4) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 0.65, 0, Math.sin(a) * 0.65]} material={node}>
            <sphereGeometry args={[0.05, sphere, sphere]} />
          </mesh>
        )
      })}
    </group>
  )
}

function MiniBriefcase({ reduced }) {
  const ref = useSpin(reduced, 0.24)
  const mat = useMemo(() => createTechMaterial('steel'), [])
  const accent = useMemo(() => createTechMaterial('accent'), [])
  return (
    <group ref={ref}>
      <mesh material={mat}>
        <boxGeometry args={[0.85, 0.55, 0.35]} />
      </mesh>
      <mesh position={[0, 0.38, 0]} material={accent}>
        <boxGeometry args={[0.85, 0.08, 0.35]} />
      </mesh>
    </group>
  )
}

function MiniChart({ reduced }) {
  const ref = useSpin(reduced, 0.26)
  const mat = useMemo(() => createTechMaterial('node'), [])
  const heights = [0.35, 0.65, 0.45, 0.8, 0.55]
  return (
    <group ref={ref}>
      {heights.map((h, i) => (
        <mesh key={i} position={[i * 0.22 - 0.44, h / 2 - 0.35, 0]} material={mat}>
          <boxGeometry args={[0.14, h, 0.14]} />
        </mesh>
      ))}
    </group>
  )
}

function MiniLock({ reduced }) {
  const ref = useSpin(reduced, 0.3)
  const mat = useMemo(() => createTechMaterial('steel'), [])
  const accent = useMemo(() => createTechMaterial('accent'), [])
  const { torus, tube } = useQualitySeg()
  return (
    <group ref={ref}>
      <mesh position={[0, -0.15, 0]} material={mat}>
        <boxGeometry args={[0.55, 0.45, 0.35]} />
      </mesh>
      <mesh position={[0, 0.28, 0]} material={accent}>
        <torusGeometry args={[0.22, 0.04, tube, torus, Math.PI]} />
      </mesh>
    </group>
  )
}

const MINI_MAP = {
  chip: MiniChip,
  shield: MiniShield,
  nodes: MiniNodes,
  stack: MiniStack,
  ring: MiniRing,
  grid: MiniGrid,
  pulse: MiniPulse,
  layers: MiniLayers,
  bolt: MiniBolt,
  compass: MiniCompass,
  briefcase: MiniBriefcase,
  chart: MiniChart,
  lock: MiniLock,
}

export function MiniScene({ type = 'ring' }) {
  const { reducedMotion } = useSceneSettings()
  const Scene = MINI_MAP[type] ?? MiniRing
  return <Scene reduced={reducedMotion} />
}

export { MINI_MAP }

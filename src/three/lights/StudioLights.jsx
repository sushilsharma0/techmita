import { useMemo } from 'react'

export function StudioLights({ intensity = 1 }) {
  const keyPosition = useMemo(() => [4, 6, 5], [])
  const fillPosition = useMemo(() => [-5, 2, 3], [])
  const rimPosition = useMemo(() => [-2, 3, -4], [])

  return (
    <>
      <ambientLight intensity={0.72 * intensity} color="#CBD5E1" />
      <directionalLight position={keyPosition} intensity={1.45 * intensity} color="#F8FAFC" />
      <directionalLight position={fillPosition} intensity={0.7 * intensity} color="#94A3B8" />
      <directionalLight position={rimPosition} intensity={0.55 * intensity} color="#22D3EE" />
      <pointLight
        position={[0, 2.2, 4]}
        intensity={0.65 * intensity}
        color="#22D3EE"
        distance={14}
        decay={2}
      />
      <pointLight
        position={[2.5, -1, 2]}
        intensity={0.35 * intensity}
        color="#0389C9"
        distance={10}
        decay={2}
      />
    </>
  )
}

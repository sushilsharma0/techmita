import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  useSceneQuality,
  getQualityDpr,
  shouldAntialias,
} from '../hooks/useSceneQuality.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'
import { SceneSettingsProvider } from '../context/SceneSettingsContext.jsx'
import { StudioLights } from '../lights/StudioLights.jsx'
import { SceneRouter } from './SceneRouter.jsx'

/**
 * Section accent canvas — full DPR + antialias when quality allows.
 * Mount only when visible (handled by Section3D wrapper).
 */
export function SectionCanvas({ sceneId = 'ring', className = '' }) {
  const containerRef = useRef(null)
  const quality = useSceneQuality()
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const dpr = getQualityDpr(quality)
  const antialias = shouldAntialias(quality)

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '40px', threshold: 0.01 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ position: 'absolute', inset: 0 }} aria-hidden>
      <Canvas
        dpr={dpr}
        frameloop={visible ? 'always' : 'never'}
        gl={{
          antialias,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 2.8], fov: 38, near: 0.1, far: 20 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#07111F', 0)
          gl.setPixelRatio(dpr)
        }}
      >
        <Suspense fallback={null}>
          <SceneSettingsProvider quality={quality} reducedMotion={reducedMotion}>
            <StudioLights intensity={1.35} />
            <SceneRouter sceneId={sceneId} quality={quality} reducedMotion={reducedMotion} />
          </SceneSettingsProvider>
        </Suspense>
      </Canvas>
    </div>
  )
}

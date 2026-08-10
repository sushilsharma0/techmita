import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useSceneQuality,
  getQualityDpr,
  shouldAntialias,
} from '../hooks/useSceneQuality.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'
import { setMouseTarget, resetMouseStore, mouseStore } from '../utils/mouseStore.js'
import { damp } from '../utils/lerp.js'
import { SceneSettingsProvider } from '../context/SceneSettingsContext.jsx'
import { StudioLights } from '../lights/StudioLights.jsx'
import { SceneRouter } from './SceneRouter.jsx'

function MouseDamping() {
  useFrame((_, delta) => {
    mouseStore.dampedX = damp(mouseStore.dampedX, mouseStore.targetX, 5, delta)
    mouseStore.dampedY = damp(mouseStore.dampedY, mouseStore.targetY, 5, delta)
  })
  return null
}

function CanvasScene({ sceneId, quality, reducedMotion, interactive, paused }) {
  return (
    <SceneSettingsProvider quality={quality} reducedMotion={reducedMotion}>
      <StudioLights intensity={paused ? 0.9 : 1.2} />
      {interactive && !paused ? <MouseDamping /> : null}
      {!paused ? (
        <SceneRouter sceneId={sceneId} quality={quality} reducedMotion={reducedMotion} />
      ) : null}
    </SceneSettingsProvider>
  )
}

export function GlobalCanvas({
  sceneId = 'tech-core',
  className = '',
  interactive = true,
  active: activeProp,
  style,
}) {
  const containerRef = useRef(null)
  const quality = useSceneQuality()
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const paused = activeProp !== undefined ? !activeProp : !visible
  const dpr = getQualityDpr(quality)
  const antialias = shouldAntialias(quality)
  const enableInteraction =
    interactive && !reducedMotion && typeof window !== 'undefined' && window.innerWidth >= 1024

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '80px', threshold: 0.01 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handlePointerMove = useCallback(
    (event) => {
      if (!enableInteraction || paused) return
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      setMouseTarget(event.clientX - rect.left, event.clientY - rect.top, rect.width, rect.height)
    },
    [enableInteraction, paused],
  )

  const handlePointerLeave = useCallback(() => {
    resetMouseStore()
  }, [])

  useEffect(() => () => resetMouseStore(), [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: enableInteraction ? 'auto' : 'none',
        ...style,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Canvas
        dpr={dpr}
        frameloop={paused ? 'never' : 'always'}
        performance={{ min: 0.5, max: 1, debounce: 250 }}
        gl={{
          antialias,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 4.5], fov: 42, near: 0.1, far: 40 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          gl.setClearColor('#07111F', 0)
          gl.setPixelRatio(dpr)
        }}
      >
        <Suspense fallback={null}>
          <CanvasScene
            sceneId={sceneId}
            quality={quality}
            reducedMotion={reducedMotion}
            interactive={enableInteraction}
            paused={paused}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

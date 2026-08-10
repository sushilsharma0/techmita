import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { getScrollStateAtProgress, scrollStateOrder } from './scrollStates.js'

/**
 * Maps homepage section progress (0–1) to interpolated scene transforms.
 */
export function useScrollScene(progress = 0, states = scrollStateOrder) {
  const sceneRef = useRef()
  const target = useMemo(() => getScrollStateAtProgress(progress, states), [progress, states])

  useFrame(() => {
    if (!sceneRef.current) return
    sceneRef.current.position.set(...target.position)
    sceneRef.current.rotation.set(...target.rotation)
    sceneRef.current.scale.setScalar(target.scale)
  })

  return { sceneRef, state: target }
}

export function useScrollSceneState(progress = 0, states = scrollStateOrder) {
  return useMemo(() => getScrollStateAtProgress(progress, states), [progress, states])
}

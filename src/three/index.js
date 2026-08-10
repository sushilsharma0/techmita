// Utils
export { lerp, lerpArray, damp, dampArray, clamp, mapRange } from './utils/lerp.js'
export { mouseStore, setMouseTarget, resetMouseStore, getMouseStore } from './utils/mouseStore.js'
export { scrollStore, setScrollProgress } from './utils/scrollStore.js'

// Hooks
export { useMouseParallax, useMouseParallaxOffset } from './hooks/useMouseParallax.js'
export { useReducedMotion, prefersReducedMotion } from './hooks/useReducedMotion.js'
export { useSceneQuality, getQualityDpr, getSegmentCount, shouldAntialias } from './hooks/useSceneQuality.js'

// Materials & colors
export { COLORS, createTechMaterial, disposeMaterial } from './materials/techMaterials.js'

// Lights
export { StudioLights } from './lights/StudioLights.jsx'

// Models
export { TechCore } from './models/TechCore.jsx'
export { NetworkStructure } from './models/NetworkStructure.jsx'
export { ServiceModules } from './models/ServiceModules.jsx'
export { NeuralNet } from './models/NeuralNet.jsx'
export { CloudInfra } from './models/CloudInfra.jsx'
export { TechOrbit } from './models/TechOrbit.jsx'
export { DeviceScene } from './models/DeviceScene.jsx'
export { ConnectionGlobe } from './models/ConnectionGlobe.jsx'

// Scenes
export { SceneRouter, SCENE_MAP } from './scenes/SceneRouter.jsx'
export { GlobalCanvas } from './scenes/GlobalCanvas.jsx'
export { SectionCanvas } from './scenes/SectionCanvas.jsx'

// Scroll state (reserved for future scroll-linked scenes)
export {
  heroState,
  aboutState,
  servicesState,
  technologyState,
  portfolioState,
  teamState,
  contactState,
  scrollStateOrder,
  scrollStateKeys,
  interpolateStates,
  getScrollStateAtProgress,
} from './state/scrollStates.js'

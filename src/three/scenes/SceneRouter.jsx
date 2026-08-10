import { Suspense } from 'react'
import { TechCore } from '../models/TechCore.jsx'
import { NetworkStructure } from '../models/NetworkStructure.jsx'
import { ServiceModules } from '../models/ServiceModules.jsx'
import { NeuralNet } from '../models/NeuralNet.jsx'
import { CloudInfra } from '../models/CloudInfra.jsx'
import { TechOrbit } from '../models/TechOrbit.jsx'
import { DeviceScene } from '../models/DeviceScene.jsx'
import { ConnectionGlobe } from '../models/ConnectionGlobe.jsx'
import { MiniScene, MINI_MAP } from '../models/MiniScenes.jsx'

const FULL_SCENE_MAP = {
  'tech-core': TechCore,
  core: TechCore,
  network: NetworkStructure,
  services: ServiceModules,
  neural: NeuralNet,
  cloud: CloudInfra,
  orbit: TechOrbit,
  device: DeviceScene,
  globe: ConnectionGlobe,
}

export function SceneRouter({ sceneId = 'tech-core', quality, reducedMotion, ...props }) {
  if (sceneId in MINI_MAP) {
    return <MiniScene type={sceneId} />
  }

  const Scene = FULL_SCENE_MAP[sceneId] ?? TechCore
  return <Scene quality={quality} reducedMotion={reducedMotion} {...props} />
}

export const SCENE_MAP = { ...FULL_SCENE_MAP, ...MINI_MAP }

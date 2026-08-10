import { createContext, useContext } from 'react'

const SceneSettingsContext = createContext({
  quality: 'medium',
  reducedMotion: false,
})

export function SceneSettingsProvider({ quality, reducedMotion, children }) {
  return (
    <SceneSettingsContext.Provider value={{ quality, reducedMotion }}>
      {children}
    </SceneSettingsContext.Provider>
  )
}

export function useSceneSettings() {
  return useContext(SceneSettingsContext)
}

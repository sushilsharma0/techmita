# 3D Models Directory

This folder is reserved for future GLB/GLTF assets.

**Current behavior:** The TechMitra site uses **procedural React Three Fiber geometry** defined in `src/three/models/`. No external model files are required for the 3D scenes to render.

When GLB assets are ready, place them here (e.g. `tech-core.glb`, `globe.glb`) and update the corresponding scene components to load via `@react-three/drei`'s `useGLTF`. Procedural fallbacks should remain as graceful degradation when files are missing.

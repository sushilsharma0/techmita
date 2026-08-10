# DESIGN.md — TechMitra

## Visual world
Midnight navy field with steel-blue CTA and restrained cyan emissive accents. Geometric React Three Fiber forms are the brand signature — infrastructure you can navigate, not card-grid SaaS marketing.

## Palette
| Token | Value | Role |
|-------|-------|------|
| bg | `#07111F` | Page field |
| surface | `#0D1726` | Sections |
| surface-elevated | `#111E30` | Raised panels |
| cta | `#0369A1` | Primary actions (UI/UX Pro Max Trust & Authority) |
| accent | `#22D3EE` | Sparse emissive / focus |
| text | `#F8FAFC` | Primary text |
| muted | `#94A3B8` | Secondary text |
| border | `rgba(148,163,184,0.18)` | Dividers |

## Typography
- Display / UI: Manrope Variable
- Body: Source Sans 3 Variable
- Tracking floor: about `-0.03em` on display
- Body measure: ~65ch

## Motion
- Dials: variance 7 / motion 7 / density 5
- UI easing: `cubic-bezier(0.23, 1, 0.32, 1)` under 300ms for controls
- Route transitions ~450ms blur/fade
- 3D: damped mouse parallax; scroll-state interpolation on home scene
- Honor `prefers-reduced-motion`

## Layout
- Max width ~1400px
- Editorial / asymmetric section rhythm — avoid repeating identical 3-card grids
- No kicker/eyebrow labels above headings
- Cards only when they aid interaction (filters, forms, selectable items)

## 3D
Procedural scenes: tech-core, network, services modules, neural, cloud, orbit, devices, globe. GLB placeholders live under `public/models/` for future assets.

## Source hierarchy
1. UI/UX Pro Max — Trust & Authority system (persisted in `design-system/techmitra/`)
2. Taste — composition & anti-slop
3. Emilkowalski skills — motion decisions
4. Impeccable — craft floor & finish audit

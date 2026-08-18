# 🎸 Interactive 3D Guitar Portfolio — Master Implementation Plan (`plan.md`)

> **Agent Instruction:** Read this entire document before executing any code. Execute **one phase at a time**. Do not attempt to complete the whole project in a single turn. You are required to update `progress.md` after every completed subtask.

---

## 🧭 Executive Directives & Agent Execution Protocol

### 1. The Step-by-Step Contract
* **Single-Phase Focus:** Work strictly within the active phase. Verify code compiles without TypeScript or Vite build errors before transitioning.
* **`progress.md` Maintenance:** Keep a living `progress.md` tracking completed milestones, ongoing tasks, known bugs, and next actions.
* **No Speculative Mass-Generation:** Do not generate dummy placeholder files for future phases until you reach that phase.

### 2. Anti-"AI Slop" Design Manifesto
To ensure this portfolio looks like an award-winning creative developer showcase (Awwwards/FWA style) rather than a generic AI-generated template:
* **Typography:** Use modern, editorial typography (`Inter`, `Satoshi`, or `Cabinet Grotesk` with tight tracking (`tracking-tight`), crisp font weights, and clear contrast).
* **Color Palette:** Deep obsidian/matte black canvas (`#08080a`, `#0f0f12`), muted warm wood/champagne accents (`#d4a373`, `#e2b17b`), and brushed steel/titanium highlights (`#94a3b8`). Strictly avoid overused neon purple/cyan gradients.
* **UI Structure:** Clean architectural HUD layout, subtle glassmorphism (`backdrop-blur-md` with low opacity borders `border-white/10`), minimalist micro-interactions, and floating contextual overlays linked spatially to 3D coordinates.

### 3. Performance & Memory Management Rules (WebGL Non-Negotiables)
* **DPR Capping:** Lock Device Pixel Ratio to `[1, 1.5]` (max `2`) to prevent GPU crashes on high-density displays (`dpr={[1, Math.min(window.devicePixelRatio, 1.5)]}`).
* **Demand-Based Rendering / Throttling:** Throttle frames during idle periods; avoid continuous expensive re-renders when static.
* **Garbage Collection & Disposal:** Always dispose of unused geometries, materials, and textures (`material.dispose()`, `geometry.dispose()`) on unmount.
* **Audio Gesture Compliance:** Tone.js / Web Audio API contexts must remain dormant/suspended until the user's first physical interaction.

---

## 🛠 Project Tech Stack

| Layer | Technology |
|---|---|
| **Framework & Language** | Vite + React 18/19 + TypeScript (Strict Mode) |
| **Styling & UI** | Tailwind CSS + Lucide React + clsx / tailwind-merge |
| **3D Rendering** | Three.js + `@react-three/fiber` + `@react-three/drei` |
| **Animation & Transitions**| Framer Motion (DOM) + GSAP / CameraControls (3D) |
| **Audio Engine** | Tone.js (Polyphonic plucked synthesis & UI sound design) |
| **Asset Pipeline** | GLTF/GLB with DRACO & Meshopt compression support |

---

## 📋 Phased Execution Roadmap

```text
Phase 0: Environment & Protocol Setup
   └── Phase 1: 3D Scene Foundation & Dynamic Camera Rig
         └── Phase 2: Asset Loading Pipeline & Procedural Fallback
               └── Phase 3: Raycasting, Mesh Hotspots & Spatial Coordinates
                     └── Phase 4: Tone.js Audio Engine & Tactile Feedback
                           └── Phase 5: Editorial 2D UI Overlay & HUD System
                                 └── Phase 6: Content Architecture & Modal Engine
                                       └── Phase 7: Performance Audit & Mobile Adaptation
```

---

### Phase 0: Environment & Protocol Setup
- [ ] Initialize Vite React + TypeScript project with strict compiler settings (`tsconfig.json`).
- [ ] Install dependencies:
  ```bash
  npm install three @types/three @react-three/fiber @react-three/drei lucide-react clsx tailwind-merge framer-motion tone gsap
  npm install -D tailwindcss postcss autoprefixer
  ```
- [ ] Configure Tailwind with custom luxury dark theme color tokens (`bg-canvas`, `accent-wood`, `accent-gold`, `surface-glass`).
- [ ] Create initial `progress.md` with phase tracking structure.

---

### Phase 1: 3D Scene Foundation & Dynamic Camera Rig
- [ ] Create `src/components/canvas/SceneCanvas.tsx` with optimized R3F canvas settings (shadows enabled, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping).
- [ ] Implement `CameraControls` wrapper with predefined camera coordinate vectors:
  - `home`: Full hero shot (`pos: [0, 0, 7]`, `target: [0, 0, 0]`)
  - `fretboard` (Projects): Macro angle looking along neck (`pos: [-0.6, 1.4, 2.2]`, `target: [0, 1.2, 0]`)
  - `soundhole` (About): Centered intimate view (`pos: [0, -0.6, 2.4]`, `target: [0, -0.6, 0]`)
  - `headstock` (Contact/Socials): Top hardware focus (`pos: [0, 3.1, 1.9]`, `target: [0, 3.1, 0]`)
- [ ] Set up studio lighting rig: soft warm key light, cool rim light, subtle directional shadow caster, and low-intensity environment map.
- [ ] Add smooth cinematic camera interpolation (easing duration: ~1.2s).

---

### Phase 2: Asset Loading Pipeline & Procedural Fallback
- [ ] Create `src/components/canvas/GuitarModel.tsx`.
- [ ] Implement dual-mode loader:
  1. **GLTF/GLB Loader:** Support loading high-detail custom guitar models via `useGLTF` with `Suspense` and fallback error boundaries.
  2. **Procedural Fallback Model:** Generate an elegant, stylized procedural guitar mesh (body, neck, fretboard with individual fret markers, pickups, bridge, and headstock) so the app functions fully even before an external 3D asset is loaded.
- [ ] Implement Draco decoder support (`/draco-gltf/`) for compressed 3D assets.
- [ ] Implement an editorial loading screen with a progress counter.

---

### Phase 3: Raycasting, Mesh Hotspots & Spatial Coordinates
- [ ] Isolate interactive mesh zones:
  - `fretboard_mesh` -> Triggers `Projects` mode.
  - `soundhole_mesh` / `body_mesh` -> Triggers `About` mode.
  - `headstock_mesh` / `tuning_pegs` -> Triggers `Contact` mode.
- [ ] Implement hover states: dynamic material emissions, cursor state change (`pointer`), and subtle mesh highlight glow without triggering React re-renders of the full scene.
- [ ] Implement bidirectional state synchronization (clicking a 3D part triggers the UI; clicking a 2D navbar link moves the 3D camera).

---

### Phase 4: Tone.js Audio Engine & Tactile Feedback
- [ ] Create `src/lib/audioEngine.ts` managing a singleton `Tone.PolySynth` / `Tone.PluckSynth` with custom reverb and EQ.
- [ ] Add user audio toggle (Mute / Unmute) with audio context unlock on first user click.
- [ ] Map guitar parts to distinct acoustic/electric notes:
  - Fretboard hover/clicks: Pentatonic scale plucks (`A2`, `C3`, `D3`, `E3`, `G3`, `A3`).
  - Body / Soundhole click: Warm resonant acoustic body tap / low chord.
  - Tuning peg clicks: Metallic string wind / harmonics (`E4`, `B4`).
- [ ] Add a subtle HUD sound visualizer (mini canvas or SVG waveform in the corner).

---

### Phase 5: Editorial 2D UI Overlay & HUD System
- [ ] Create top navigation bar with minimal branding, section selectors, audio mute switch, and active camera state indicators.
- [ ] Build contextual 3D-anchored markers using Drei's `<Html>` component with occlusion (`occlude="blended"`).
- [ ] Create a custom magnetic cursor that reacts to hoverable 3D hotspots.
- [ ] Implement keyboard navigation (Arrow keys / `1`, `2`, `3`, `4` to jump between camera zones; `Esc` to reset to Overview).

---

### Phase 6: Content Architecture & Modal Engine
- [ ] **Projects Drawer (Fretboard Mode):**
  - Slide-in glassmorphism panel displaying project cards with tech tags, live links, and GitHub links.
  - Interactive project switcher that shifts the camera slightly down the neck.
- [ ] **About & Philosophy Modal (Soundhole Mode):**
  - Bio, full-stack architectural focus, background story, and interactive skill tags.
- [ ] **Contact & Terminal Panel (Headstock Mode):**
  - Clean contact form, direct email copy button, social links (GitHub, LinkedIn), and status pill ("Open to Opportunities").

---

### Phase 7: Performance Audit & Mobile Adaptation
- [ ] Add responsive mobile layout:
  - On mobile/touch screens, switch to intuitive touch swipes or streamlined orbital rotation with fixed 2D bottom-sheet drawers.
  - Reduce shadow resolution and disable postprocessing bloom on low-tier mobile devices.
- [ ] Check for WebGL memory leaks on frequent unmounts/navigation.
- [ ] Conduct performance audit targeting 60 FPS on mid-tier hardware.

---

## 📝 `progress.md` Template (AI Agent must initialize this file)

```markdown
# 📊 Implementation Progress

## Current Status: [Phase 0 - Setup]

### Completed Tasks
- [x] Initial plan created

### In Progress
- [ ] Setting up Vite + Tailwind + Three.js dependencies

### Blockers / Notes
- None currently.

### Next Immediate Steps
1. Execute Phase 0 setup commands.
2. Initialize Tailwind config with luxury dark theme tokens.
```

---

## ⚡ Execution Instructions for the AI Model
1. Begin immediately with **Phase 0**.
2. Create `progress.md` before writing application code.
3. Once Phase 0 is verified, proceed to **Phase 1**. Stop and report progress after completing each phase.

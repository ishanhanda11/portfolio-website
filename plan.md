# 🎸 Interactive 3D Guitar Portfolio — Final Architecture & Implementation Plan (`plan.md`)

*Note: This document reflects the final architecture and design decisions made during the project, documenting the deviations from the initial conceptual plan.*

---

## 🧭 Executive Directives & Agent Execution Protocol

### 1. The Step-by-Step Contract
* **Single-Phase Focus:** Work strictly within the active phase. Verify code compiles without TypeScript or Vite build errors before transitioning.
* **`progress.md` Maintenance:** Keep a living `progress.md` tracking completed milestones, ongoing tasks, known bugs, and next actions.

### 2. Design Manifesto: Vintage Recording Studio
To ensure this portfolio looks like an award-winning creative developer showcase (Awwwards/FWA style):
* **Typography:** Classic, premium typography (`Cormorant Garamond` for headings, `Inter` for body, `IBM Plex Mono` for technical labels).
* **Color Palette:** Warm, cinematic studio colors: Mahogany (`#5B2413`), Burnt Amber (`#A84E1B`), Copper (`#B87333`), Muted gold (`#C8A96B`), and Soft ivory (`#E8E3DC`) against a deep background (`#0B0B0D`).
* **UI Structure:** Clean architectural HUD layout, subtle glassmorphism (`backdrop-blur-md` with low opacity borders `border-white/10`), minimalist micro-interactions, and floating contextual overlays linked spatially to 3D coordinates.

### 3. Performance & Memory Management Rules (WebGL Non-Negotiables)
* **DPR Capping:** Lock Device Pixel Ratio to `[1, 1.5]` (max `2`) to prevent GPU crashes on high-density mobile displays (`dpr={[1, Math.min(window.devicePixelRatio, 1.5)]}`).
* **GPU Optimization:** Utilize `@react-three/drei`'s `<BakeShadows />` to freeze shadow maps on load, and `<Preload all />` to compile materials early to prevent micro-stutters.

---

## 🛠 Project Tech Stack

| Layer | Technology |
|---|---|
| **Framework & Language** | Vite + React 18 + TypeScript |
| **Styling & UI** | Tailwind CSS + Framer Motion |
| **3D Rendering** | Three.js + `@react-three/fiber` + `@react-three/drei` |
| **Audio Engine** | **Native Web Audio API** (Custom Karplus-Strong string synthesis; *Note: Replaced Tone.js for zero-dependency performance*) |
| **Asset Pipeline** | GLTF/GLB via `useGLTF` |

---

## 📋 Phased Execution Roadmap (Completed)

```text
Phase 0: Environment & Protocol Setup
   └── Phase 1: 3D Scene Foundation & Dynamic Camera Rig
         └── Phase 2: Asset Loading Pipeline
               └── Phase 3: Spatial UI & 3D AR Cards
                     └── Phase 4: Native Web Audio Synthesizer
                           └── Phase 5: Project Detail Modal Engine
                                 └── Phase 6: Performance Audit & Mobile Adaptation
```

---

### Phase 0: Environment & Protocol Setup
- [x] Initialize Vite React + TypeScript project.
- [x] Configure Tailwind with custom Vintage Studio color tokens (`mahogany`, `amber`, `gold`, `canvas`, `ivory`).

### Phase 1: 3D Scene Foundation & Dynamic Camera Rig
- [x] Create `src/components/canvas/SceneCanvas.tsx` with optimized R3F canvas settings (`ACESFilmicToneMapping`).
- [x] Implement `CameraControls` wrapper with predefined camera coordinate vectors (`home`, `fretboard`, `soundhole`, `headstock`).
- [x] Set up studio lighting rig: soft warm key light, cool rim light, and subtle directional shadow caster.

### Phase 2: Asset Loading Pipeline
- [x] Create `src/components/canvas/GuitarModel.tsx`.
- [x] Load the Les Paul `.glb` model using `@react-three/drei`'s `useGLTF`.

### Phase 3: Spatial UI & 3D AR Cards
- [x] Build `ARCards.tsx` utilizing Drei's `<Html center>` to anchor HTML elements to 3D coordinates.
- [x] Isolate interactive mesh zones:
  - Fretboard -> Triggers `Projects` Floating Card.
  - Soundhole -> Triggers `About Me` Floating Card.
  - Headstock -> Triggers `Contact` Floating Card.
- [x] Implement responsive layout collapsing (`line-clamp`, `hidden sm:block`) to ensure cards don't overflow on mobile screens.

### Phase 4: Native Web Audio Synthesizer (Deviation from Tone.js)
- *Decision:* Tone.js was deemed too heavy for this specific use-case.
- [x] Create `src/utils/audio.ts` utilizing a custom **Karplus-Strong** algorithm on the native Web Audio API to simulate acoustic guitar plucks.
- [x] Map UI navigation to a soothing, ambient acoustic chord progression:
  - About Me -> `Cmaj7`
  - Projects -> `Fmaj7`
  - Contact -> `Am9`

### Phase 5: Project Detail Modal Engine
- [x] Create `ProjectDetailModal.tsx` overlay utilizing Framer Motion for entry/exit animations.
- [x] Implement a responsive Grid layout that dynamically collapses into a centered single-column layout if the project has no screenshots.
- [x] Connect "Home" navigation logic to unmount modals and return the camera to the overview state.

### Phase 6: Performance Audit & Mobile Adaptation
- [x] Add `<BakeShadows />` to freeze lighting calculations.
- [x] Add `<Preload all />` to prevent shader compilation stutter.
- [x] Ensure all typography and paddings scale down gracefully on mobile viewports.
- [x] Hide non-critical text paragraphs on mobile devices to preserve screen real estate.

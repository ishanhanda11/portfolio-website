# Ishan Handa - 3D Interactive Portfolio

An immersive, 3D interactive portfolio built with React Three Fiber, Framer Motion, and Tailwind CSS. The experience is designed around a **Vintage Recording Studio** aesthetic, featuring a fully interactive 3D guitar model that serves as the primary navigation interface.

## 🎸 Features

- **Interactive 3D Navigation:** A high-quality 3D guitar model (`react-three/drei`) anchors the spatial navigation. Users can explore different sections of the portfolio by interacting with specific parts of the guitar (Soundhole, Fretboard, Headstock).
- **Vintage Studio Aesthetic:** Custom lighting rigs, mahogany/gold/amber color palettes, and cinematic shadows recreate the warm, premium feel of a classic recording studio.
- **Procedural Acoustic Audio:** Custom-built Karplus-Strong string synthesis using the Web Audio API. Generates dynamic, soothing acoustic chord progressions (`Cmaj7`, `Fmaj7`, `Am9`) in real-time as users navigate, completely eliminating the need for heavy audio file downloads.
- **Immersive Modals:** Projects and detailed information are presented in frosted-glass, Framer Motion-animated overlays.
- **Responsive Design:** Fluidly adapts from desktop monitors down to mobile screens using dynamic typography, `line-clamp` truncations, and responsive grids.
- **Highly Optimized:** Utilizes `<BakeShadows />` and `<Preload all />` to lock in GPU operations on load, ensuring a silky-smooth 60fps experience even on lower-end devices.

## 🚀 Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **3D Graphics:** Three.js + `@react-three/fiber` + `@react-three/drei`
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS (Custom extended theme)
- **Audio:** Native Web Audio API (Karplus-Strong Synthesis)

## 💻 Running Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## 🏗️ Project Structure

- `/src/components/canvas/`: Contains all WebGL/Three.js related components (`SceneCanvas`, `GuitarModel`, `LightingRig`).
- `/src/components/ui/`: Contains all 2D overlay components (`ExhibitUI`, `ARCards`, `ProjectDetailModal`).
- `/src/utils/`: Contains the procedural Web Audio API synthesizers (`audio.ts`).
- `/public/models/`: Contains the base 3D assets (`scene.gltf`).

## 👨‍💻 Author

**Ishan Handa**
- **GitHub:** [ishanhanda11](https://github.com/ishanhanda11)
- **LinkedIn:** [ishanahanda10](https://www.linkedin.com/in/ishanhanda10)
- **LeetCode:** [ishanhanda10](https://leetcode.com/u/ishanhanda10/)

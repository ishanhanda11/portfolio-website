import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment, BakeShadows, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useEffect, Suspense } from 'react'
import { GuitarModel } from './GuitarModel'
import type { PartType } from '../../types'

function DynamicCamera({ activePart }: { activePart: PartType | null }) {
  const controlsRef = useRef<CameraControls>(null)

  useEffect(() => {
    if (controlsRef.current) {
      if (activePart === 'fretboard') {
        // Zoom tightly into the center of the fretboard so the user can look around at the spatial cards
        controlsRef.current.setLookAt(1.0, 0, 2.2, 1.0, 0, 0, true)
      } else if (activePart === 'headstock') {
        controlsRef.current.setLookAt(2.3, 0, 2.2, 2.3, 0, 0, true)
      } else if (activePart === 'body' || activePart === 'soundhole' || activePart === 'pickups' || activePart === 'bridge') {
        controlsRef.current.setLookAt(-1.5, 0, 3.5, -1.5, 0, 0, true)
      } else {
        controlsRef.current.setLookAt(0, 0, 6.0, 0, 0, 0, true)
      }
    }
  }, [activePart])

  return (
    <CameraControls 
      ref={controlsRef} 
      makeDefault 
      minDistance={2} 
      maxDistance={20} 
      enablePan={true}
    />
  )
}

function LightingRig() {
  return (
    <>
      <color attach="background" args={['#0B0B0D']} />
      
      {/* Dim ambient light for studio darkness */}
      <ambientLight intensity={0.15} />
      
      {/* Main warm spotlight from above/front */}
      <spotLight position={[5, 8, 5]} intensity={2.5} color="#fff5e6" angle={0.6} penumbra={0.8} castShadow />
      
      {/* Warm amber fill light from the side */}
      <pointLight position={[-5, 2, -2]} intensity={1.5} color="#A84E1B" distance={20} />
      
      {/* Subtle gold rim light from behind */}
      <pointLight position={[2, -5, -5]} intensity={1.0} color="#C8A96B" distance={20} />
      
      <Environment preset="studio" environmentIntensity={0.3} />
    </>
  )
}

export default function SceneCanvas({ activePart, onPartSelect, onProjectSelect }: { activePart: PartType | null, onPartSelect: (p: PartType | null) => void, onProjectSelect?: (project: any) => void }) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        shadows={{ type: THREE.PCFShadowMap }}
        gl={{
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          antialias: true
        }}
        dpr={[1, Math.min(window.devicePixelRatio, 1.5)]}
      >
        <Suspense fallback={null}>
          <LightingRig />
          <GuitarModel activePart={activePart} onPartSelect={onPartSelect} onProjectSelect={onProjectSelect} />
        </Suspense>
        <DynamicCamera activePart={activePart} />
        
        {/* Subtle floor to catch shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
        
        {/* Performance Optimizations */}
        <BakeShadows />
        <Preload all />
      </Canvas>
    </div>
  )
}

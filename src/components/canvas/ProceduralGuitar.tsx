import { useRef, useMemo } from 'react'
import * as THREE from 'three'

export function ProceduralGuitar() {
  const groupRef = useRef<THREE.Group>(null)

  const { bodyMaterial, woodMaterial, metalMaterial, fretMaterial, fretboardMaterial } = useMemo(() => {
    return {
      bodyMaterial: new THREE.MeshStandardMaterial({ color: '#111', roughness: 0.2, metalness: 0.4 }),
      woodMaterial: new THREE.MeshStandardMaterial({ color: '#4a3018', roughness: 0.8 }),
      metalMaterial: new THREE.MeshStandardMaterial({ color: '#cccccc', roughness: 0.2, metalness: 0.8 }),
      fretMaterial: new THREE.MeshStandardMaterial({ color: '#eeeeee', roughness: 0.1, metalness: 0.9 }),
      fretboardMaterial: new THREE.MeshStandardMaterial({ color: '#1a1a1a' })
    }
  }, [])

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
      {/* Body / Soundhole */}
      <group>
        <mesh position={[0, -1, 0]} castShadow receiveShadow material={bodyMaterial}>
          <boxGeometry args={[1.8, 2.5, 0.4]} />
        </mesh>
        <mesh position={[0, -0.5, 0.21]} material={new THREE.MeshBasicMaterial({ color: '#000' })}>
          <circleGeometry args={[0.3, 32]} />
        </mesh>
        {/* Bridge */}
        <mesh position={[0, -1.5, 0.21]} material={metalMaterial}>
          <boxGeometry args={[0.6, 0.1, 0.05]} />
        </mesh>
      </group>

      {/* Neck base */}
      <mesh position={[0, 1.25, 0.05]} castShadow receiveShadow material={woodMaterial}>
        <boxGeometry args={[0.3, 2.5, 0.1]} />
      </mesh>
      
      {/* Fretboard */}
      <group>
        <mesh position={[0, 1.25, 0.11]} castShadow receiveShadow material={fretboardMaterial}>
          <boxGeometry args={[0.32, 2.5, 0.02]} />
        </mesh>
        {/* Frets */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={`fret-${i}`} position={[0, 0.2 + i * 0.18, 0.125]} material={fretMaterial}>
            <boxGeometry args={[0.3, 0.01, 0.01]} />
          </mesh>
        ))}
      </group>

      {/* Headstock */}
      <group>
        <mesh position={[0, 2.8, 0.05]} castShadow receiveShadow material={woodMaterial}>
          <boxGeometry args={[0.4, 0.6, 0.1]} />
        </mesh>
        {/* Tuning Pegs */}
        <group>
          {[-1, 1].map((side) => 
            Array.from({ length: 3 }).map((_, i) => (
              <mesh key={`peg-${side}-${i}`} position={[side * 0.25, 2.6 + i * 0.15, 0.05]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
                <cylinderGeometry args={[0.04, 0.04, 0.2]} />
              </mesh>
            ))
          )}
        </group>
      </group>
    </group>
  )
}

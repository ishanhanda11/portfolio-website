import { Suspense } from 'react'
import { useGLTF, Center, Html } from '@react-three/drei'
import { ErrorBoundary } from '../ErrorBoundary'
import { ProceduralGuitar } from './ProceduralGuitar'
import type { PartType } from '../../types'
import { projectsData, SingleProjectCard, contactsData, SingleContactCard, AboutCard } from '../ui/ARCards'

function HotspotCard({ position, part, activePart }: { position: [number, number, number], part: PartType, activePart: PartType | null }) {
  const isActive = activePart === part
  if (!isActive) return null

  return (
    <group position={position}>
      <Html center zIndexRange={[100, 0]}>
        <div className="relative flex items-center justify-center pointer-events-auto">
          {part === 'soundhole' && <AboutCard />}
        </div>
      </Html>
    </group>
  )
}

function GLTFGuitar({ url, activePart, onProjectSelect }: { url: string, activePart: PartType | null, onPartSelect: (p: PartType | null) => void, onProjectSelect?: (project: any) => void }) {
  const { nodes, materials } = useGLTF(url) as any

  return (
    <group position={[0, -0.5, 0]}>
      <Center>
        {/* 
          TWEAK THESE 3 NUMBERS TO ROTATE THE GUITAR:
          rotation={[ X, Y, Z ]}
          
          X = Tilts it forward/backward (try values between -2.0 and 2.0)
          Y = Spins it left/right (try values between -2.0 and 2.0)
          Z = Rolls it like a steering wheel (try values between -2.0 and 2.0)
          
          Just change a number, hit Save (Ctrl+S), and look at your browser!
        */}
        <group rotation={[0.1, -1.4, 0.15]} scale={1.1} position={[0, -0.3, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.pCube64_Neck_0?.geometry} material={materials.Neck} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_Neck2_0?.geometry} material={materials.Neck2} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_neckFace_0?.geometry} material={materials.neckFace} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_SilverLace_0?.geometry} material={materials.SilverLace} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_mattBlack_0?.geometry} material={materials.mattBlack} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_sliver1_0?.geometry} material={materials.sliver1} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_lambert2_0?.geometry} material={materials.lambert2} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_Bronze_0?.geometry} material={materials.Bronze} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_DirtyBronze_0?.geometry} material={materials.DirtyBronze} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_Chrome_0?.geometry} material={materials.Chrome} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_wood2_0?.geometry} material={materials.wood2} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_Wood_2_0?.geometry} material={materials.Wood_2} />
          <mesh castShadow receiveShadow geometry={nodes.pCube64_wood_0?.geometry} material={materials.wood} />
        </group>
      </Center>

      {/* Render only the active AR card directly at these mapped coordinates */}
      <HotspotCard position={[-1.5, 0, 0.4]} part="soundhole" activePart={activePart} />

      {/* Spatial Contacts along the headstock/tuners */}
      {activePart === 'headstock' && contactsData.map((contact: any, i: number) => {
        // Distribute along the headstock (X from ~2.0 to ~2.5)
        const xPos = 2.0 + (i * 0.25)
        // Alternate top and bottom tuning pegs
        const isTop = i % 2 === 0
        let yPos = isTop ? 0.2 : -0.2
        if (i === 1) {
          yPos = 0.04 // Move GitHub card slightly more to touch the bottom string
        }
        
        return (
          <group key={`contact-${i}`} position={[xPos, yPos, 0.4]}>
            <Html center zIndexRange={[100, 0]}>
              <SingleContactCard contact={contact} index={i} isTop={isTop} />
            </Html>
          </group>
        )
      })}

      {/* Spatial Projects along the fretboard */}
      {activePart === 'fretboard' && projectsData.map((project: any, i: number) => {
        // Distribute along the neck (X from ~0.2 to ~1.8)
        const xPos = 0.3 + (i * 0.45)
        // Alternate top and bottom of the neck
        const isTop = i % 2 === 0
        
        // Offset Y slightly so the pointer line starts clearly outside the neck mesh
        let yPos = isTop ? 0.3 : -0.3
        if (i === 1) {
          yPos = -0.08 // TaskTrackerApp
        } else if (i === 3) {
          yPos = 0.0 // Real-Time Chat (moved a little more above)
        }
        
        return (
          <group key={i} position={[xPos, yPos, 0.4]}>
            <Html center zIndexRange={[100, 0]}>
              <SingleProjectCard project={project} index={i} isTop={isTop} onClick={() => onProjectSelect && onProjectSelect(project)} />
            </Html>
          </group>
        )
      })}
    </group>
  )
}

export function GuitarModel({ activePart, onPartSelect, onProjectSelect }: { activePart: PartType | null, onPartSelect: (p: PartType | null) => void, onProjectSelect?: (project: any) => void }) {
  const modelUrl = '/models/guitar.glb'

  return (
    <ErrorBoundary fallback={<ProceduralGuitar />}>
      <Suspense fallback={<ProceduralGuitar />}>
        <GLTFGuitar url={modelUrl} activePart={activePart} onPartSelect={onPartSelect} onProjectSelect={onProjectSelect} />
      </Suspense>
    </ErrorBoundary>
  )
}

useGLTF.preload('/models/guitar.glb')

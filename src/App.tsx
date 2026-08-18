import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SceneCanvas from './components/canvas/SceneCanvas'
import { Loader } from './components/ui/Loader'
import { ExhibitHeader } from './components/ui/ExhibitUI'
import { ProjectDetailModal } from './components/ui/ProjectDetailModal'
import type { PartType } from './types'

function App() {
  const [activePart, setActivePart] = useState<PartType | null>(null)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  return (
    <main className="w-full h-screen overflow-hidden relative bg-canvas text-white">
      <Loader />
      
      {/* 3D Background */}
      <SceneCanvas 
        activePart={activePart} 
        onPartSelect={setActivePart} 
        onProjectSelect={setSelectedProject}
      />
      
      {/* Exhibit Header */}
      <ExhibitHeader 
        activePart={activePart} 
        onPartSelect={setActivePart}
        selectedProject={selectedProject}
        onHomeClick={() => {
          setSelectedProject(null);
          setActivePart(null);
        }}
      />

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
           <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Small subtle deselect background overlay */}
      {activePart && !selectedProject && (
        <div 
          className="absolute inset-0 z-10"
          onClick={() => setActivePart(null)} 
        />
      )}
    </main>
  )
}

export default App

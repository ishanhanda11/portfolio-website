import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SceneCanvas from './components/canvas/SceneCanvas'
import { Loader } from './components/ui/Loader'
import { ExhibitHeader } from './components/ui/ExhibitUI'
import { ProjectDetailModal } from './components/ui/ProjectDetailModal'
import type { PartType } from './types'

function ResumeButton() {
  return (
    <a 
      href="/resume.pdf" 
      download="Ishan_Handa_Resume.pdf"
      className="fixed bottom-10 right-4 sm:bottom-8 sm:right-8 z-[2000] flex items-center gap-2 px-5 py-2.5 bg-canvas-light/80 backdrop-blur-xl border border-gold/40 rounded-full text-gold hover:bg-gold/10 hover:border-gold shadow-[0_0_15px_rgba(200,169,107,0.2)] hover:shadow-[0_0_20px_rgba(200,169,107,0.4)] transition-all duration-500 group pointer-events-auto cursor-pointer"
    >
      <span className="font-serif tracking-[0.15em] text-[10px] sm:text-xs uppercase font-bold">Resume</span>
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  )
}

function App() {
  const [activePart, setActivePart] = useState<PartType | null>(null)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  return (
    <main className="w-full h-[100dvh] overflow-hidden relative bg-canvas text-white">
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

      {/* Floating Resume Button */}
      <ResumeButton />

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

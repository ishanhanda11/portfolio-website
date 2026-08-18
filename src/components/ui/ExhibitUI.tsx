import { motion, AnimatePresence } from 'framer-motion'
import { type PartType, PART_DATA } from '../../types'
import { playChord } from '../../utils/audio'

export function ExhibitHeader({ activePart, onPartSelect, selectedProject, onHomeClick }: { activePart: PartType | null, onPartSelect: (p: PartType | null) => void, selectedProject?: any, onHomeClick?: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-0 left-0 right-0 p-4 sm:p-8 flex flex-col items-center justify-center pointer-events-none z-[1000] text-center"
    >
      {/* Navigation Bar */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pointer-events-auto">
        {selectedProject ? (
          <NavButton label="Home" active={true} onClick={() => { playChord('Cmaj7'); onHomeClick && onHomeClick(); }} />
        ) : (
          <>
            <NavButton label="About Me" active={activePart === 'soundhole'} onClick={() => { playChord('Cmaj7'); onPartSelect(activePart === 'soundhole' ? null : 'soundhole'); }} />
            <NavButton label="Projects" active={activePart === 'fretboard'} onClick={() => { playChord('Fmaj7'); onPartSelect(activePart === 'fretboard' ? null : 'fretboard'); }} />
            <NavButton label="Contact" active={activePart === 'headstock'} onClick={() => { playChord('Am9'); onPartSelect(activePart === 'headstock' ? null : 'headstock'); }} />
          </>
        )}
      </div>
    </motion.div>
  )
}

function NavButton({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 sm:px-8 py-2 rounded-sm border uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-serif transition-all duration-700 ${active ? 'bg-mahogany/20 border-gold text-gold shadow-[0_0_15px_rgba(200,169,107,0.1)]' : 'bg-canvas-light/80 backdrop-blur-md border-chrome/50 text-muted hover:bg-canvas-light hover:border-chrome hover:text-ivory'}`}
    >
      {label}
    </button>
  )
}

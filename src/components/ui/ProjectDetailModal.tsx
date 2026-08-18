import { motion } from 'framer-motion'

export function ProjectDetailModal({ project, onClose }: { project: any, onClose: () => void }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-[999] flex items-center justify-center p-4 sm:p-8 bg-canvas/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-canvas-light/95 border border-chrome/40 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] p-6 sm:p-10 pointer-events-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 border-b border-chrome/30 pb-4">
          <div className="w-2 h-2 bg-gold rounded-full shrink-0" />
          <h2 className="text-xl sm:text-3xl font-serif font-bold tracking-[0.1em] text-ivory">{project.title}</h2>
        </div>

        <div className={project.images && project.images.length > 0 ? "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10" : "max-w-2xl mx-auto"}>
          {/* Images Section */}
          {project.images && project.images.length > 0 && (
            <div className="flex flex-col gap-4">
              {project.images.map((img: string, i: number) => (
                <div key={i} className="w-full aspect-video bg-canvas rounded border border-chrome/30 overflow-hidden">
                  <img src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
                </div>
              ))}
            </div>
          )}

          {/* Content Section */}
          <div className="flex flex-col">
            <h3 className="font-serif text-base sm:text-lg text-gold mb-3 sm:mb-4 tracking-widest uppercase">Project Overview</h3>
            <div className="text-muted leading-relaxed font-sans font-light text-[13px] sm:text-sm space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {project.detailedContent ? (
                project.detailedContent.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))
              ) : (
                <p>{project.desc}</p>
              )}
            </div>

            {/* Links */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 border-t border-chrome/20">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 sm:py-2 border border-chrome/50 bg-canvas-light text-ivory font-serif tracking-widest uppercase text-xs text-center hover:border-gold hover:text-gold transition-colors duration-500">
                  View Repository
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 sm:py-2 border border-gold/50 bg-mahogany/20 text-gold font-serif tracking-widest uppercase text-xs text-center hover:border-gold hover:text-ivory hover:bg-mahogany/40 transition-all duration-500 shadow-[0_0_15px_rgba(200,169,107,0.1)]">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

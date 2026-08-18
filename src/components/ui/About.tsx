import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute top-1/2 left-16 md:left-24 -translate-y-1/2 w-[400px] max-w-[90vw] p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-black/40 shadow-2xl z-10"
    >
      <h2 className="text-4xl font-light tracking-tight mb-4">About Me</h2>
      <div className="h-[1px] w-12 bg-white/30 mb-6" />
      <p className="text-white/70 leading-relaxed mb-6">
        I'm a passionate full-stack developer blending creative design with deep technical architecture. 
        I believe that the best digital experiences are built at the intersection of robust engineering and beautiful, intuitive interfaces.
      </p>
      <div className="flex flex-wrap gap-2">
        {['React', 'TypeScript', 'Three.js', 'Node.js', 'Tailwind'].map(skill => (
          <span key={skill} className="px-3 py-1 rounded-full text-xs border border-white/20 bg-white/5 text-white/80">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

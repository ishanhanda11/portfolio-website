import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

export function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[800px] max-w-[95vw] p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-black/40 shadow-2xl z-10 flex flex-col gap-6"
    >
      <div className="flex justify-between items-end border-b border-white/10 pb-4">
        <h2 className="text-4xl font-light tracking-tight">Selected Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          title="E-Commerce Platform" 
          desc="High-performance headless storefront built with Next.js and Shopify."
          tags={['Next.js', 'GraphQL', 'Tailwind']}
        />
        <ProjectCard 
          title="Interactive Dashboard" 
          desc="Real-time data visualization tool for enterprise analytics."
          tags={['React', 'D3.js', 'WebSockets']}
        />
      </div>
    </motion.div>
  )
}

function ProjectCard({ title, desc, tags }: { title: string, desc: string, tags: string[] }) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/60 mb-6">{desc}</p>
      <div className="flex gap-2 mb-6">
        {tags.map(t => (
          <span key={t} className="px-2 py-1 rounded bg-white/5 text-[10px] uppercase tracking-wider text-white/40">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <a href="#" className="flex items-center gap-1 text-sm hover:text-white"><Code size={16} /> Code</a>
        <a href="#" className="flex items-center gap-1 text-sm hover:text-white"><ExternalLink size={16} /> Live</a>
      </div>
    </div>
  )
}

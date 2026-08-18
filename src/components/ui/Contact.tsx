import { motion } from 'framer-motion'
import { Mail, Terminal, User, Code2 } from 'lucide-react'

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute top-1/2 right-16 md:right-24 -translate-y-1/2 w-[350px] p-8 rounded-3xl backdrop-blur-xl border border-white/10 bg-black/40 shadow-2xl z-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-medium tracking-widest uppercase text-green-400/80">Available for work</span>
      </div>
      
      <h2 className="text-4xl font-light tracking-tight mb-8">Let's Connect</h2>
      
      <div className="flex flex-col gap-4">
        <ContactLink icon={<Mail size={20} />} label="hello@ishan.dev" href="mailto:hello@ishan.dev" />
        <ContactLink icon={<User size={20} />} label="LinkedIn" href="#" />
        <ContactLink icon={<Terminal size={20} />} label="GitHub" href="#" />
        <ContactLink icon={<Code2 size={20} />} label="LeetCode" href="#" />
      </div>
    </motion.div>
  )
}

function ContactLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
    >
      <div className="text-white/50 group-hover:text-white transition-colors">{icon}</div>
      <span className="font-medium text-white/80 group-hover:text-white transition-colors">{label}</span>
    </a>
  )
}

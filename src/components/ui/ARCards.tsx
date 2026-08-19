import { motion } from 'framer-motion'

// SVG Icons
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const LeetCodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

export const projectsData = [
  { 
    title: 'GenAI Interview Report Generator', 
    desc: 'AI app with auth that turns a resume & job description into a structured interview prep report using Google Gemini AI.', 
    github: 'https://github.com/ishanhanda11/GenAI-Project',
    detailedContent: [
      'A full-stack AI app that analyzes resumes and job descriptions using Google Gemini AI to generate structured interview prep reports.',
      'It provides match scores, tailored technical/behavioral questions, and personalized preparation plans.',
      'Built with secure JWT authentication, PDF parsing, Prisma/PostgreSQL, and Docker for AWS ECS deployment.'
    ],
    images: ['/projects/genai_app.png']
  },
  { 
    title: 'TaskTrackerApp', 
    desc: 'MERN-stack task tracker with authentication and a live deployed demo.', 
    github: 'https://github.com/ishanhanda11/TaskTrackerApp', 
    demo: 'https://task-tracker-app-red-omega.vercel.app/login',
    detailedContent: [
      'A MERN-stack task management application with a responsive interface for organizing personal tasks in real time.',
      'Features a secure client-server architecture with full user authentication to ensure data privacy.',
      'Fully deployed with a live, interactive demo.'
    ],
    images: []
  },
  { 
    title: 'Full-Authentication-System', 
    desc: 'Complete auth system with JWT cookies, OTP-based email verification, and password reset.', 
    github: 'https://github.com/ishanhanda11/Full-Authentication-System',
    detailedContent: [
      'A production-ready authentication system demonstrating secure user-management practices.',
      'Features registration and login using JWT in HTTP-only cookies, automated OTP email verification, and a secure password-reset flow.',
      'Built on Prisma ORM and PostgreSQL with comprehensive frontend and backend validation.'
    ],
    images: []
  },
  { 
    title: 'Real-Time Chat Application', 
    desc: 'MERN + Socket.io chat app with live messaging, presence tracking, typing indicators, and read receipts.', 
    github: 'https://github.com/ishanhanda11/real-time-chat-application', 
    demo: 'https://real-time-chat-application-lovat.vercel.app/',
    detailedContent: [
      'A high-performance real-time chat platform built with the MERN stack and Socket.io.',
      'Features instant message delivery, live presence tracking, typing indicators, read receipts, and optimistic UI updates.',
      'Styled with a custom Tailwind CSS design system and backed by MongoDB.'
    ],
    images: ['/projects/chat_app.png']
  }
]

export const contactsData = [
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/ishanhanda10', icon: <LinkedInIcon /> },
  { title: 'GitHub', link: 'https://github.com/ishanhanda11', icon: <GithubIcon /> },
  { title: 'LeetCode', link: 'https://leetcode.com/u/ishanhanda10/', icon: <LeetCodeIcon /> }
]

export function SingleProjectCard({ project, index, isTop, onClick }: { project: any, index: number, isTop: boolean, onClick?: () => void }) {
  return (
    <div className="relative pointer-events-auto">
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 60, opacity: 1 }}
        transition={{ duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
        className={`absolute left-1/2 -translate-x-1/2 w-px ${isTop ? 'bg-gradient-to-t from-gold/60 to-transparent bottom-0 origin-bottom' : 'from-gold/60 to-transparent top-0 origin-top bg-gradient-to-b'}`}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-gold to-amber rounded-full shadow-[0_0_8px_rgba(200,169,107,0.4)] border border-canvas" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: isTop ? 10 : -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
        className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'bottom-[60px]' : 'top-[60px]'} w-[180px] sm:w-[200px] bg-canvas-light/95 backdrop-blur-xl border border-chrome/40 rounded-sm p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer hover:border-gold/60 transition-all duration-700 group`}
        onClick={onClick}
      >
        <div className="flex items-center justify-between mb-3 border-b border-chrome/30 pb-2">
          <div className="text-sm font-serif font-bold text-ivory tracking-widest leading-tight">{project.title}</div>
          <div className="flex gap-3 pl-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted hover:text-gold transition-colors duration-500">
              <GithubIcon />
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted hover:text-gold transition-colors duration-500">
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
        <div className="text-xs text-muted leading-relaxed font-sans font-light line-clamp-2 sm:line-clamp-none">
          {project.desc}
        </div>
      </motion.div>
    </div>
  )
}

export function SingleContactCard({ contact, index, isTop }: { contact: any, index: number, isTop: boolean }) {
  return (
    <div className="relative pointer-events-auto">
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 50, opacity: 1 }}
        transition={{ duration: 1.2, delay: index * 0.2, ease: "easeInOut" }}
        className={`absolute left-1/2 -translate-x-1/2 w-px ${isTop ? 'bg-gradient-to-t from-gold/60 to-transparent bottom-0 origin-bottom' : 'from-gold/60 to-transparent top-0 origin-top bg-gradient-to-b'}`}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-gold to-amber rounded-full shadow-[0_0_8px_rgba(200,169,107,0.4)] border border-canvas" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: isTop ? 10 : -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
        className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'bottom-[50px]' : 'top-[50px]'} flex items-center gap-2 sm:gap-3 w-auto min-w-[120px] sm:min-w-[140px] bg-canvas-light/95 backdrop-blur-xl border border-chrome/40 rounded-sm p-2 sm:p-3 px-3 sm:px-5 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer hover:border-gold/60 transition-all duration-700 group`}
      >
        <a href={contact.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full text-muted group-hover:text-gold transition-colors duration-500">
          <div className="flex items-center justify-center">
            {contact.icon}
          </div>
          <span className="text-sm font-serif tracking-[0.15em]">{contact.title}</span>
        </a>
      </motion.div>
    </div>
  )
}

export function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] bg-canvas-light/95 backdrop-blur-xl border border-chrome/40 rounded-sm p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-auto"
    >
      <div className="flex items-center gap-3 mb-6 border-b border-chrome/30 pb-3">
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <h3 className="font-serif font-bold tracking-[0.2em] text-sm uppercase text-ivory">About Me</h3>
      </div>
      <div className="text-[13px] text-muted leading-relaxed font-sans font-light mb-4 sm:mb-8 space-y-3 sm:space-y-4">
        <p>
          Hi, I'm <strong className="font-medium text-ivory tracking-wide">Ishan Handa</strong>, a BCA graduate and full-stack developer passionate about building modern web applications and exploring new technologies.
        </p>
        <p className="hidden sm:block">
          I enjoy building projects that combine <strong className="font-medium text-ivory tracking-wide">backend development, real-time systems, authentication, AI integration, and databases</strong> to create interactive and meaningful user experiences.
        </p>
        <p>
          <strong className="font-medium text-ivory tracking-wide">Tech Stack:</strong> Node.js, Express, React, PostgreSQL
        </p>
        <p className="pt-1 sm:pt-2">
          <strong className="font-medium text-ivory tracking-wide">Let's connect.</strong>
          <br className="hidden sm:block" />
          <strong className="font-medium text-ivory tracking-wide sm:hidden"> Email:</strong>
          <strong className="font-medium text-ivory tracking-wide hidden sm:inline">Email:</strong> <a href="mailto:ishanahanda7733@gmail.com" className="text-gold hover:text-amber transition-colors ml-1">ishanahanda7733@gmail.com</a>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(168,78,27,0.6)]" />
        <span className="text-[10px] tracking-widest uppercase text-muted font-mono">System Online</span>
      </div>
    </motion.div>
  )
}

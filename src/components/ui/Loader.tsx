import { useProgress } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'

export function Loader() {
  const { active, progress } = useProgress()

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-canvas text-white pointer-events-none"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="text-sm font-medium tracking-[0.2em] text-white/50 uppercase">
              Initializing Assets
            </div>
            <div className="text-6xl font-light tracking-tighter">
              {Math.round(progress)}%
            </div>
            <div className="w-48 h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/providers/ScrollToTop'

export function RootLayout() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative min-h-[100dvh]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cta focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, transform: 'translate3d(0, 12px, 0)' }}
          animate={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          exit={reduceMotion ? undefined : { opacity: 0, transform: 'translate3d(0, -8px, 0)' }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

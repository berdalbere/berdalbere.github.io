import { m, useScroll, useSpring } from 'framer-motion'

// Fine barre en haut de l'écran qui suit la progression du scroll
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })
  return (
    <m.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-gradient-to-r from-accent to-amber"
      style={{ scaleX }}
    />
  )
}

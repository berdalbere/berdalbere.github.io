import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

// Compteur qui monte de 0 à `value` quand il devient visible
export default function Counter({ value, suffix = '', duration = 1400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  // Toujours 0 au départ pour que le HTML pré-rendu et le premier rendu client soient identiques
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value)
      return undefined
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3 // ralentit en fin de course
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

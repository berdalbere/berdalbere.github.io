import { m } from 'framer-motion'

// Apparition douce au scroll (désactivée automatiquement si prefers-reduced-motion)
export default function Reveal({ children, delay = 0, as = 'div', className, ...rest }) {
  const Component = m[as]
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </Component>
  )
}

import Reveal from './Reveal'

// Squelette commun des sections : sur-titre, titre H2, introduction facultative
export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  const titleId = `${id}-title`
  return (
    <section id={id} aria-labelledby={titleId} className={`py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={titleId} className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

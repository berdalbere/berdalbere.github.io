import { useLocalize } from '../../i18n'

// Liste des technologies d'un projet
export default function StackBadges({ stack, className = '' }) {
  const L = useLocalize()
  if (!stack?.length) return null
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {stack.map((tech) => (
        <li key={L(tech)} className="badge">
          {L(tech)}
        </li>
      ))}
    </ul>
  )
}

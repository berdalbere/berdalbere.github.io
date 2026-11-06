import {
  BarChart3,
  BriefcaseBusiness,
  Droplets,
  Globe,
  Smartphone,
  Sprout,
  UtensilsCrossed,
} from 'lucide-react'

// Icônes disponibles pour les vignettes (ajouter ici toute nouvelle icône utilisée dans projects.js)
const ICONS = { BarChart3, BriefcaseBusiness, Droplets, Globe, Smartphone, Sprout, UtensilsCrossed }

// Image du projet, ou vignette générée (dégradé + icône + outils principaux) s'il n'y en a pas
// fit="contain" : l'image est affichée en entier (utile pour un graphique qu'on ne veut pas recadrer)
export default function ProjectThumb({ image, alt, icon, label, variant = 'data', fit = 'cover', className = '', style }) {
  if (image) {
    return (
      <div style={style} className={`relative overflow-hidden bg-white ${className}`}>
        {/* Positionnée en absolu : la hauteur de l'image ne peut pas dépasser celle de la vignette */}
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`absolute transition-transform duration-500 group-hover:scale-[1.03] ${
            fit === 'contain' ? 'inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-contain' : 'inset-0 h-full w-full object-cover object-top'
          }`}
        />
      </div>
    )
  }

  const Icon = ICONS[icon] ?? Globe
  const gradient =
    variant === 'web'
      ? 'from-amber/25 via-surface-2 to-surface'
      : 'from-accent/30 via-surface-2 to-surface'

  return (
    <div aria-hidden="true" style={style} className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-br p-5 ${gradient} ${className}`}>
      <div className="dot-grid absolute inset-0 opacity-60" />
      <span className={`relative grid h-11 w-11 place-items-center rounded-xl ${variant === 'web' ? 'bg-amber/15 text-amber' : 'bg-accent/15 text-accent-ink'}`}>
        <Icon className="h-6 w-6" />
      </span>
      <p className="relative font-display text-lg font-semibold leading-snug text-ink/80">{label}</p>
    </div>
  )
}

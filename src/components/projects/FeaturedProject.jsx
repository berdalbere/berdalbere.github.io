import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Star } from 'lucide-react'
import { useLocalize } from '../../i18n'
import ProjectThumb from './ProjectThumb'
import ProjectLinks from './ProjectLinks'
import StackBadges from './StackBadges'

// Grande carte du projet phare : image en pleine largeur, puis texte (gauche) et chiffres clés (droite)
export default function FeaturedProject({ project }) {
  const { t } = useTranslation()
  const L = useLocalize()

  return (
    <article className="card group overflow-hidden">
      <ProjectThumb
        image={project.image}
        alt={L(project.image?.alt)}
        icon={project.thumbIcon}
        label={project.stack?.slice(0, 2).map(L).join(' · ')}
        fit={project.image?.fit}
        className="border-b border-line"
        // Proportions de l'image d'origine : aucune partie du dashboard n'est coupée
        style={project.image ? { aspectRatio: `${project.image.width} / ${project.image.height}` } : { aspectRatio: '21 / 9' }}
      />
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
        <div className="flex flex-col">
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            {t('projects.featured')}
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-ink sm:text-3xl">{L(project.title)}</h3>
          {project.kicker && <p className="mt-2 text-sm text-muted">{L(project.kicker)}</p>}
          <p className="mt-4 leading-relaxed text-muted">{L(project.summary)}</p>
          <StackBadges stack={project.stack} className="mt-6" />
          {(project.detailPage || project.github || project.demo) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.detailPage && (
                <Link to={`/projets/${project.slug}`} className="btn-primary">
                  {t('projects.caseStudy')}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
              <ProjectLinks project={project} />
            </div>
          )}
        </div>

        <div>
          {project.metrics && (
            <dl className="grid grid-cols-3 gap-3">
              {project.metrics.map((m) => (
                <div key={L(m.label)} className="flex min-w-0 flex-col rounded-xl border border-line bg-surface-2 px-1.5 py-3 text-center sm:p-3">
                  {/* hyphens-auto : césure des mots longs (« enregistrements ») sur petit écran */}
                  <dt className="hyphens-auto text-[11px] text-muted [overflow-wrap:anywhere] sm:text-xs">{L(m.label)}</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-accent-ink sm:text-2xl">{L(m.value)}</dd>
                </div>
              ))}
            </dl>
          )}
          {project.highlights && (
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
              {L(project.highlights).map((h) => (
                <li key={h} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  )
}

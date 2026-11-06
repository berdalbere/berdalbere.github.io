import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Info } from 'lucide-react'
import { useLocalize } from '../../i18n'
import ProjectThumb from './ProjectThumb'
import ProjectLinks from './ProjectLinks'
import StackBadges from './StackBadges'

// Carte standard (projets data) ; variant="web" = version compacte de la sous-section Web
export default function ProjectCard({ project, variant = 'data' }) {
  const { t } = useTranslation()
  const L = useLocalize()
  const compact = variant === 'web'

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/10 motion-reduce:hover:translate-y-0">
      <ProjectThumb
        image={project.image}
        alt={L(project.image?.alt)}
        icon={project.thumbIcon}
        label={project.stack?.length ? project.stack.slice(0, 2).map(L).join(' · ') : t(`projects.tag.${project.group}`, '')}
        fit={project.image?.fit}
        variant={variant}
        className={`border-b border-line ${compact ? 'aspect-[3/1]' : 'aspect-[16/9]'}`}
      />
      <div className={`flex flex-1 flex-col ${compact ? 'p-5' : 'p-6'}`}>
        {project.client && <p className="text-xs font-medium text-muted">{`${t('projects.client')}${L({ fr: ' : ', en: ': ' })}${project.client}`}</p>}
        <div className="mt-1 flex items-center gap-3">
          {/* alt vide : le nom du projet figure dans le titre juste à côté */}
          {project.logo && (
            <img src={project.logo} alt="" width="44" height="44" loading="lazy" decoding="async" className="h-11 w-11 shrink-0 rounded-xl border border-line" />
          )}
          <h3 className={`font-semibold leading-snug text-ink ${compact ? 'text-base' : 'text-lg'}`}>{L(project.title)}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{L(project.summary)}</p>

        {!compact && project.highlights && (
          <ul className="mt-4 space-y-1.5 text-sm text-muted">
            {L(project.highlights).map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {project.note && (
          <p className="mt-4 flex gap-2 rounded-lg bg-surface-2 p-3 text-xs leading-relaxed text-muted">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" aria-hidden="true" />
            {L(project.note)}
          </p>
        )}

        <StackBadges stack={project.stack} className="mt-5" />

        {(project.github || project.demo || project.detailPage || project.playStore || project.appStore || project.appStoreSoon) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.detailPage && (
              <Link to={`/projets/${project.slug}`} className="btn-ghost px-3 py-1.5 text-xs">
                {t('projects.caseStudy')}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            )}
            <ProjectLinks project={project} size="sm" />
          </div>
        )}
      </div>
    </article>
  )
}

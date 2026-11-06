import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import { AppleIcon, GitHubIcon, GooglePlayIcon } from '../BrandIcons'

// Boutons Code / Démo : affichés seulement si le lien est renseigné dans projects.js.
export default function ProjectLinks({ project, size = 'md' }) {
  const { t } = useTranslation()
  const pad = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2'
  const hasLinks = project.github || project.demo || project.playStore || project.appStore || project.appStoreSoon

  if (!hasLinks) return null

  return (
    <div className="flex flex-wrap gap-2">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`btn-ghost ${pad}`}>
          <GitHubIcon className="h-4 w-4" />
          {t('projects.code')}
          <span className="sr-only">{t('a11y.newTab')}</span>
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`btn-primary ${pad}`}>
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          {/* Site d'un client en ligne : « Voir le site » ; projet perso : « Démo » */}
          {project.group === 'freelance' ? t('projects.visit') : t('projects.demo')}
          <span className="sr-only">{t('a11y.newTab')}</span>
        </a>
      )}
      {project.playStore && (
        <a href={project.playStore} target="_blank" rel="noopener noreferrer" className={`btn-primary ${pad}`}>
          <GooglePlayIcon className="h-4 w-4" />
          {t('projects.playStore')}
          <span className="sr-only">{t('a11y.newTab')}</span>
        </a>
      )}
      {project.appStore ? (
        <a href={project.appStore} target="_blank" rel="noopener noreferrer" className={`btn-ghost ${pad}`}>
          <AppleIcon className="h-4 w-4" />
          {t('projects.appStore')}
          <span className="sr-only">{t('a11y.newTab')}</span>
        </a>
      ) : (
        project.appStoreSoon && (
          <span className={`btn border border-dashed border-line text-muted ${pad}`}>
            <AppleIcon className="h-4 w-4" />
            {t('projects.appStoreSoon')}
          </span>
        )
      )}
    </div>
  )
}

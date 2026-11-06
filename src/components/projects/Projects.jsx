import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { filters, projects, otherWorks } from '../../data/projects'
import { useLocalize } from '../../i18n'
import Section from '../Section'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import StackBadges from './StackBadges'

// Animation commune aux cartes lors du filtrage
const cardMotion = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
  transition: { duration: 0.25 },
}

export default function Projects() {
  const { t } = useTranslation()
  const L = useLocalize()
  const [filter, setFilter] = useState('all')

  const visible = projects.filter((p) => filter === 'all' || p.categories.includes(filter))
  // Le projet marqué « spotlight » devient la grande carte en tête de section
  const hero = visible.find((p) => p.spotlight)
  const dataProjects = visible.filter((p) => p.group === 'data' && p !== hero)
  const freelanceProjects = visible.filter((p) => p.group === 'freelance')
  const personalProjects = visible.filter((p) => p.group === 'personal')
  const showOthers = filter === 'all' || filter === 'web'

  return (
    <Section id="projects" eyebrow={t('projects.eyebrow')} title={t('projects.title')} intro={t('projects.intro')}>
      {/* Filtres */}
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <div role="group" aria-label={t('projects.filterLabel')} className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? 'border-accent bg-accent text-on-accent'
                  : 'border-line text-muted hover:border-accent/60 hover:text-ink'
              }`}
            >
              {L(f.label)}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="text-sm text-muted">
          {t('projects.count', { count: visible.length })}
        </p>
      </div>

      {visible.length === 0 && <p className="text-muted">{t('projects.empty')}</p>}

      {/* Projet phare */}
      <AnimatePresence initial={false}>
        {hero && (
          <m.div key={hero.slug} {...cardMotion} className="mb-8">
            <FeaturedProject project={hero} />
          </m.div>
        )}
      </AnimatePresence>

      {/* Projets Data / BI / ML */}
      {dataProjects.length > 0 && (
        <>
          {filter === 'all' && <h3 className="mb-5 mt-14 text-xl font-semibold text-ink">{t('projects.dataSection')}</h3>}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {dataProjects.map((p) => (
                <m.li key={p.slug} {...cardMotion}>
                  <ProjectCard project={p} />
                </m.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}

      {/* Projets freelance (sites clients), cartes compactes */}
      {freelanceProjects.length > 0 && (
        <>
          <h3 className="mb-5 mt-16 text-xl font-semibold text-ink">{t('projects.freelanceSection')}</h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {freelanceProjects.map((p) => (
                <m.li key={p.slug} {...cardMotion}>
                  <ProjectCard project={p} variant="web" />
                </m.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}

      {/* Projets personnels */}
      {personalProjects.length > 0 && (
        <>
          <h3 className="mb-5 mt-16 text-xl font-semibold text-ink">{t('projects.personalSection')}</h3>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {personalProjects.map((p) => (
                <m.li key={p.slug} {...cardMotion}>
                  <ProjectCard project={p} variant="web" />
                </m.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}

      {/* Autres réalisations (petits dépôts GitHub) */}
      {showOthers && (
        <div className="mt-14">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-ink">
            <FolderGit2 className="h-5 w-5 text-accent-ink" aria-hidden="true" />
            {t('projects.others')}
          </h3>
          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
            {otherWorks.map((w) => (
              <li key={w.url}>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-5 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-baseline gap-x-2 font-semibold text-ink">
                      <span className="font-mono text-sm">{w.nameEn ? L({ fr: w.name, en: w.nameEn }) : w.name}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted">{L(w.description)}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <StackBadges stack={w.stack} />
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent-ink" aria-hidden="true" />
                    <span className="sr-only">{t('a11y.newTab')}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react'
import { useLocalize } from '../i18n'
import Reveal from '../components/Reveal'
import ProjectLinks from '../components/projects/ProjectLinks'
import StackBadges from '../components/projects/StackBadges'

// Page projet générique : il suffit de renseigner `details` et `detailPage: true` dans projects.js
export default function ClientCaseStudy({ project }) {
  const { t } = useTranslation()
  const L = useLocalize()
  const { need, work, features, results, labels = {}, stack } = project.details
  // Titre propre au projet s'il existe, sinon titre standard
  const label = (key) => (labels[key] ? L(labels[key]) : t(`detail.${key}`))

  const list = (items) => (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )

  const block = (id, title, children) => (
    <Reveal as="section" aria-labelledby={`${id}-title`} className="border-t border-line py-10 first:border-t-0 sm:py-12">
      <h2 id={`${id}-title`} className="mb-5 text-2xl font-bold text-ink sm:text-3xl">
        {title}
      </h2>
      {children}
    </Reveal>
  )

  return (
    <article className="pb-20">
      <header className="relative isolate overflow-hidden border-b border-line pb-12 pt-10 sm:pt-14">
        <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />
        <div className="container-page">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-ink">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('detail.back')}
          </Link>
          {project.logo && (
            <img src={project.logo} alt="" width="72" height="72" className="mt-8 h-[72px] w-[72px] rounded-2xl border border-line shadow-lg" />
          )}
          <p className={`eyebrow ${project.logo ? 'mt-5' : 'mt-8'}`}>{t(`projects.tag.${project.group}`)}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">{L(project.title)}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{L(project.summary)}</p>
          <StackBadges stack={stack ?? project.stack} className="mt-6" />
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl">
        <figure className="mt-10 overflow-hidden rounded-2xl border border-line">
          <img
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={L(project.image.alt)}
            decoding="async"
            className="h-auto w-full"
          />
        </figure>

        <div className="mt-6">
          {need && block('need', label('need'), <p className="text-base leading-relaxed text-muted sm:text-lg">{L(need)}</p>)}
          {work && block('work', label('work'), <p className="text-base leading-relaxed text-muted sm:text-lg">{L(work)}</p>)}
          {block('features', label('features'), list(L(features)))}
          {results &&
            block(
              'results',
              label('results'),
              Array.isArray(L(results)) ? list(L(results)) : <p className="text-base leading-relaxed text-muted sm:text-lg">{L(results)}</p>,
            )}
        </div>

        <div className="card mt-6 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="font-display text-xl font-semibold text-ink">{t('detail.contactCta')}</p>
          <Link to="/#contact" className="btn-primary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t('hero.contactMe')}
          </Link>
        </div>
      </div>
    </article>
  )
}

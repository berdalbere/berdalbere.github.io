import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowLeftRight,
  CheckCircle2,
  Mail,
  MessagesSquare,
  MonitorSmartphone,
  ServerCog,
  Trees,
} from 'lucide-react'
import { projects } from '../data/projects'
import { agriBurkina as d } from '../data/agriBurkina'
import { useLocalize } from '../i18n'
import { usePageMeta } from '../hooks/usePageMeta'
import Reveal from '../components/Reveal'
import ProjectLinks from '../components/projects/ProjectLinks'
import StackBadges from '../components/projects/StackBadges'
import NotFound from './NotFound'
import ClientCaseStudy from './ClientCaseStudy'

const NODE_ICONS = { MonitorSmartphone, ServerCog, Trees, MessagesSquare }

// Bloc de section de l'étude de cas
function Block({ id, title, children }) {
  return (
    <Reveal as="section" aria-labelledby={`${id}-title`} className="border-t border-line py-12 first:border-t-0 sm:py-16">
      <h2 id={`${id}-title`} className="mb-6 text-2xl font-bold text-ink sm:text-3xl">
        {title}
      </h2>
      {children}
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const L = useLocalize()
  const project = projects.find((p) => p.slug === slug && p.detailPage)

  usePageMeta(project ? `${L(project.title)} · Alex BERE` : null, project ? L(project.summary) : null)

  // Seul Agri Burkina dispose d'une étude de cas pour l'instant
  if (!project) return <NotFound />
  // Projets clients : page générique alimentée par le champ `details`
  if (project.details) return <ClientCaseStudy project={project} />
  if (slug !== 'agri-burkina') return <NotFound />

  const nodes = Object.fromEntries(d.architecture.nodes.map((n) => [n.id, n]))
  const archNode = (n) => {
    const Icon = NODE_ICONS[n.icon]
    return (
      <div className="card p-5">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-ink">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-3 font-semibold text-ink">{L(n.name)}</p>
        <p className="mt-0.5 text-xs font-medium text-amber">{n.tech}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{L(n.text)}</p>
      </div>
    )
  }
  const arrow = (
    <span aria-hidden="true" className="flex justify-center text-muted">
      <ArrowDown className="h-5 w-5 md:hidden" />
      <ArrowLeftRight className="hidden h-5 w-5 md:block" />
    </span>
  )

  return (
    <article className="pb-20">
      {/* En-tête */}
      <header className="relative isolate overflow-hidden border-b border-line pb-12 pt-10 sm:pt-14">
        <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />
        <div className="container-page">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-ink">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t('detail.back')}
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="eyebrow">{L(project.kicker)}</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">{L(project.title)}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{L(project.summary)}</p>

              <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted">{t('detail.supervisor')}</dt>
                  <dd className="mt-0.5 font-medium text-ink">{d.supervisor}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="sr-only">{t('detail.stack')}</dt>
                  <dd>
                    <StackBadges stack={project.stack} />
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <ProjectLinks project={project} />
              </div>
            </div>

            {/* Illustration provisoire (à remplacer par une capture de l'application) */}
            <div className="mx-auto w-full max-w-xs rounded-3xl border border-line bg-gradient-to-br from-accent/15 via-surface to-amber/10 p-8">
              <img
                src="/images/projets/agri-burkina-hero.png"
                width="343"
                height="361"
                alt=""
                className="mx-auto h-auto w-full max-w-[220px]"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl">
        {/* Contexte */}
        <Block id="context" title={L(d.context.title)}>
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {L(d.context.body).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>

        {/* Données */}
        <Block id="data" title={L(d.data.title)}>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {d.data.facts.map((f) => (
              <div key={L(f.label)} className="card flex flex-col-reverse justify-end p-4">
                <dt className="mt-1 text-xs text-muted">{L(f.label)}</dt>
                <dd className="font-display text-2xl font-bold text-accent-ink">{L(f.value)}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {L(d.data.body).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 flex gap-3 rounded-xl border border-amber/40 bg-amber/10 p-4 text-sm leading-relaxed text-ink">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber" aria-hidden="true" />
            {L(d.data.transparency)}
          </p>
        </Block>

        {/* Méthodologie */}
        <Block id="method" title={L(d.method.title)}>
          <ol className="grid gap-4 sm:grid-cols-2">
            {d.method.steps.map((s, i) => (
              <li key={i} className="card p-5">
                <p className="flex items-center gap-3">
                  <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 font-display text-sm font-bold text-accent-ink">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-ink">{L(s.title)}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{L(s.text)}</p>
              </li>
            ))}
          </ol>
        </Block>

        {/* Résultats */}
        <Block id="results" title={L(d.results.title)}>
          <dl className="grid gap-4 sm:grid-cols-3">
            {d.results.kpis.map((k) => (
              <div key={L(k.label)} className="card flex flex-col-reverse p-6 text-center">
                <dt className="mt-2 text-sm text-muted">{L(k.label)}</dt>
                <dd className="font-display text-4xl font-bold text-accent-ink sm:text-5xl">{L(k.value)}</dd>
              </div>
            ))}
          </dl>

          {/* Tableau comparatif (défile horizontalement sur petit écran sans élargir la page) */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-surface-2 text-muted">
                <tr>
                  {L(d.results.comparison.headers).map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-surface">
                {d.results.comparison.rows.map((r) => (
                  <tr key={L(r.model)} className={r.best ? 'font-semibold text-ink' : 'text-muted'}>
                    <th scope="row" className="px-4 py-3 font-semibold">
                      <span className="inline-flex items-center gap-2">
                        {r.best && <CheckCircle2 className="h-4 w-4 text-accent-ink" aria-hidden="true" />}
                        {L(r.model)}
                      </span>
                    </th>
                    <td className="px-4 py-3">{L(r.r2)}</td>
                    <td className="px-4 py-3">{L(r.mae)}</td>
                    <td className="px-4 py-3">{L(r.rmse)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="mt-8 overflow-hidden rounded-2xl border border-line">
            <img
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={L(d.results.imageAlt)}
              loading="lazy"
              decoding="async"
              className="h-auto w-full bg-white"
            />
            <figcaption className="border-t border-line bg-surface px-4 py-3 text-sm text-muted">{t('detail.figureCaption')}</figcaption>
          </figure>

          <p className="mt-6 leading-relaxed text-muted">{L(d.results.body)}</p>

          <h3 className="mt-10 text-lg font-semibold text-ink">{L(d.results.risk.title)}</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-4">
            {d.results.risk.levels.map((lvl) => (
              <li key={lvl.range} className="card flex items-center gap-3 p-4 sm:flex-col sm:items-start">
                <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: lvl.color }} />
                <span>
                  <span className="block text-sm font-semibold text-ink">{L(lvl.label)}</span>
                  <span className="block text-xs text-muted">{lvl.range}</span>
                </span>
              </li>
            ))}
          </ul>
        </Block>

        {/* Architecture : Front ↔ API ↔ Modèle ↔ LLM */}
        <Block id="architecture" title={L(d.architecture.title)}>
          {/* Front ↔ API, puis l'API dialogue séparément avec le modèle et avec le LLM */}
          <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {archNode(nodes.front)}
            {arrow}
            {archNode(nodes.api)}
            {arrow}
            <div className="grid gap-3">
              {archNode(nodes.model)}
              {archNode(nodes.llm)}
            </div>
          </div>
        </Block>

        {/* Ce que j'ai appris */}
        <Block id="learnings" title={L(d.learnings.title)}>
          <ul className="space-y-3">
            {L(d.learnings.items).map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl bg-surface-2 p-4 text-sm leading-relaxed text-muted">{L(d.learnings.next)}</p>
        </Block>

        {/* Appel à l'action */}
        <div className="card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
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

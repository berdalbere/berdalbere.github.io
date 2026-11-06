import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications'
import { useLocalize } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

// « 2025-10 » → « octobre 2025 » / « October 2025 »
function formatDate(date, lang) {
  const [year, month] = date.split('-').map(Number)
  if (!month) return String(year)
  const label = new Date(year, month - 1).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { month: 'long', year: 'numeric' })
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export default function Certifications() {
  const { t, i18n } = useTranslation()
  const L = useLocalize()
  const lang = i18n.resolvedLanguage
  // Tri du plus récent au plus ancien
  const sorted = [...certifications].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <Section id="certifications" eyebrow={t('certs.eyebrow')} title={t('certs.title')}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((c, i) => {
          const link = c.url || c.file
          const issuer = lang === 'en' && c.issuerEn ? c.issuerEn : c.issuer
          return (
            <Reveal as="li" key={c.credentialId ?? L(c.name)} delay={(i % 3) * 0.05} className="card flex flex-col p-6 transition-colors hover:border-accent/50">
              <div className="flex items-start gap-4">
                {/* Logo de l'organisme, ou pastille d'initiales colorées à défaut */}
                {c.logo ? (
                  <span
                    aria-hidden="true"
                    className={`grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white ${c.logoFull ? '' : 'p-2.5'}`}
                  >
                    <img src={c.logo} alt="" width="48" height="48" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm font-bold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c.initials}
                  </span>
                )}
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug text-ink">{L(c.name)}</h3>
                  <p className="mt-1 text-sm text-muted">{issuer}</p>
                  <p className="mt-0.5 text-xs font-medium text-amber">
                    <time dateTime={c.date}>{formatDate(c.date, lang)}</time>
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {L(c.skills).map((s) => (
                  <li key={s} className="badge">
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-5">
                {c.credentialId ? (
                  <p className="min-w-0 break-all font-mono text-[11px] text-muted">
                    {t('certs.id')} : {c.credentialId}
                  </p>
                ) : (
                  <span />
                )}
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0 px-3 py-1.5 text-xs">
                    {t('certs.view')}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only">
                      , {L(c.name)} {t('a11y.newTab')}
                    </span>
                  </a>
                )}
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}

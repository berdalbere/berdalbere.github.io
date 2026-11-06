import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Languages, MapPin, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { useLocalize } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

// Transforme les passages **gras** du texte en <strong>
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export default function About() {
  const { t } = useTranslation()
  const L = useLocalize()

  return (
    <Section id="about" eyebrow={t('about.eyebrow')} title={t('about.title')}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {L(profile.about).map((p, i) => (
            <p key={i}>
              <RichText text={p} />
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div className="card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
              <Languages className="h-5 w-5 text-accent-ink" aria-hidden="true" />
              {t('about.languages')}
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.languages.map((lang) => (
                <li key={L(lang.name)} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                  <span className="font-medium text-ink">{L(lang.name)}</span>
                  <span className="text-right text-sm text-muted">{L(lang.level)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card space-y-3 p-6 text-sm text-muted">
            <p className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
              <span>Altınbaş University · ESMA Marrakech</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" aria-hidden="true" />
              <span>
                <span className="sr-only">{t('about.location')} : </span>
                {L(profile.location)}
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

import { useTranslation } from 'react-i18next'
import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { experiences, education } from '../data/experience'
import { useLocalize } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

// Timeline verticale : linéaire sur mobile, cartes alternées gauche / droite sur desktop
function Timeline({ items, icon: Icon }) {
  const L = useLocalize()
  return (
    <ol className="relative">
      {/* Ligne verticale : à gauche sur mobile, centrée sur desktop */}
      <span aria-hidden="true" className="absolute bottom-2 left-[19px] top-2 w-px bg-line md:left-1/2 md:-translate-x-1/2" />
      {items.map((item, i) => {
        const right = i % 2 === 1
        return (
          <li key={i} className="relative pb-8 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
            {/* Pastille sur la ligne */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-accent-ink md:left-1/2 md:-translate-x-1/2"
            >
              <Icon className="h-4 w-4" />
            </span>
            <Reveal className={`card p-5 sm:p-6 ${right ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
              <p className="text-sm font-semibold text-amber">{L(item.period)}</p>
              <h4 className="mt-1 text-lg font-semibold text-ink">{L(item.title)}</h4>
              <p className="mt-1 text-sm font-medium text-ink/80">{L(item.org)}</p>
              <p className={`mt-1 flex items-center gap-1.5 text-xs text-muted ${right ? '' : 'md:justify-end'}`}>
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {L(item.place)}
              </p>
              {item.note && <p className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-ink">{L(item.note)}</p>}
              {item.points && (
                <ul className={`mt-4 space-y-1.5 text-sm text-muted ${right ? '' : 'md:ml-auto'}`}>
                  {L(item.points).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}

export default function Journey() {
  const { t } = useTranslation()
  return (
    <Section id="journey" eyebrow={t('journey.eyebrow')} title={t('journey.title')} className="bg-surface/40">
      <div className="space-y-16">
        <div>
          <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold text-ink md:justify-center">
            <Briefcase className="h-5 w-5 text-accent-ink" aria-hidden="true" />
            {t('journey.experience')}
          </h3>
          <Timeline items={experiences} icon={Briefcase} />
        </div>
        <div>
          <h3 className="mb-8 flex items-center gap-2 text-xl font-semibold text-ink md:justify-center">
            <GraduationCap className="h-5 w-5 text-accent-ink" aria-hidden="true" />
            {t('journey.education')}
          </h3>
          <Timeline items={education} icon={GraduationCap} />
        </div>
      </div>
    </Section>
  )
}

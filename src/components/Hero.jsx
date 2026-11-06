import { useMemo } from 'react'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, MapPin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { useLocalize } from '../i18n'
import { useTypewriter } from '../hooks/useTypewriter'
import HeroDashboard from './HeroDashboard'
import Counter from './Counter'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const L = useLocalize()
  const lang = i18n.resolvedLanguage
  // useMemo : la liste ne change que lorsque la langue change (relance la machine à écrire)
  const roles = useMemo(() => profile.roles[lang] ?? profile.roles.fr, [lang])
  const role = useTypewriter(roles)

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-20">
      {/* Fond : grille de points + lignes de graphique discrètes */}
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />
      <svg aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 w-full opacity-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0 160 C 150 140, 250 170, 380 120 S 600 60, 760 90 S 1000 40, 1200 30" fill="none" stroke="rgb(var(--accent) / 0.5)" strokeWidth="1.5" />
        <path d="M0 185 C 200 175, 320 190, 480 150 S 760 130, 900 140 S 1100 100, 1200 95" fill="none" stroke="rgb(var(--amber) / 0.35)" strokeWidth="1.5" />
      </svg>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          {/* Badge de disponibilité */}
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-ink sm:text-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span title={L(profile.availabilityDetail)}>{L(profile.availability)}</span>
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            <span className="block text-lg font-medium text-muted sm:text-xl">{t('hero.hello')}</span>
            {profile.name}
          </h1>

          {/* Rôle animé : le lecteur d'écran lit le titre fixe, pas les lettres qui changent */}
          <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
            <span className="sr-only">{L(profile.title)}</span>
            <span aria-hidden="true">
              <span className="text-accent-ink">{role}</span>
              <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-amber align-middle motion-reduce:hidden" style={{ height: '1em' }} />
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">{L(profile.tagline)}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{L(profile.subtitle)}</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
            {L(profile.location)}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary py-3">
              {t('hero.seeProjects')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost py-3">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t('hero.contactMe')}
            </a>
          </div>

          {/* Chiffres clés */}
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6">
            {profile.stats.map((s, i) => (
              <div key={i} className="min-w-0">
                <dt className="sr-only">{L(s.label)}</dt>
                <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {s.text ?? <Counter value={s.value} suffix={s.suffix} />}
                </dd>
                <dd aria-hidden="true" className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                  {L(s.label)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <m.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <HeroDashboard />
        </m.div>
      </div>
    </section>
  )
}

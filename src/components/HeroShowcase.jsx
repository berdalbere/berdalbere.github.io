import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { useLocalize } from '../i18n'

// Couleur des mots mis en avant dans l'accroche
const TONES = { accent: 'text-accent-ink', amber: 'text-amber' }

// Hero : l'accroche est illustrée par deux vraies réalisations (la donnée, puis l'application)
export default function HeroShowcase() {
  const { t } = useTranslation()
  const L = useLocalize()
  const { headline, intro, proof, visual } = profile.showcase

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
      <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.12fr] lg:gap-14">
        <div>
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent-ink sm:text-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {L(profile.availability)}
          </p>

          <p className="mt-6 font-display text-lg font-semibold text-ink sm:text-xl">{profile.name}</p>
          <p className="mt-1 text-sm font-medium text-muted sm:text-base">{L(intro.role)}</p>

          <h1 id="hero-title" className="mt-4 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[2.6rem] xl:text-[2.9rem] 2xl:text-[3.25rem]">
            {L(headline).map((part) =>
              part.tone ? (
                <span key={part.text} className={TONES[part.tone]}>
                  {part.text}
                </span>
              ) : (
                part.text
              ),
            )}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{L(intro.text)}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary py-3">
              {t('hero.seeProjects')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost py-3">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t('hero.contactMe')}
            </a>
          </div>

          {/* Preuves : uniquement des faits vérifiables */}
          <dl className="mt-9 grid grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-6">
            {proof.map((item) => (
              <div key={L(item.label)} className="flex min-w-0 flex-col-reverse justify-end">
                <dt className="mt-1 text-xs leading-snug text-muted sm:text-sm">{L(item.label)}</dt>
                <dd className="font-display text-xl font-bold text-ink sm:text-2xl">{L(item.value)}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 flex items-start gap-2 text-sm text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
            {L(profile.location)}
          </p>
        </div>

        {/* Visuel : le vrai dashboard Power BI, puis la vraie application Wezou */}
        <figure className="relative mx-auto w-full max-w-2xl">
          <a href="#projects" className="group block w-[90%] overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0">
            <span aria-hidden="true" className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
            </span>
            <img
              src={visual.dashboard.src}
              width={visual.dashboard.width}
              height={visual.dashboard.height}
              alt={L(visual.dashboard.alt)}
              decoding="async"
              className="block h-auto w-full bg-white"
            />
          </a>

          <figcaption className="mt-4 grid grid-cols-2 gap-3 pr-[30%] text-xs leading-snug text-muted sm:gap-5 sm:text-sm">
            <span>
              <span className="block font-display font-semibold text-accent-ink">{L(visual.dashboard.title)}</span>
              {L(visual.dashboard.caption)}
            </span>
            <span>
              <span className="block font-display font-semibold text-amber">{L(visual.app.title)}</span>
              {L(visual.app.caption)}
            </span>
          </figcaption>

          <m.div
            className="absolute bottom-0 right-0 w-[27%]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Link
              to="/projets/wezou"
              className="block overflow-hidden rounded-[1.25rem] border-[5px] border-[#0F172A] bg-[#0F172A] shadow-2xl shadow-black/50 ring-1 ring-line transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 sm:rounded-[1.75rem] sm:border-[7px]"
            >
              <img
                src={visual.app.src}
                width={visual.app.width}
                height={visual.app.height}
                alt={L(visual.app.alt)}
                decoding="async"
                className="block h-auto w-full rounded-[0.9rem] sm:rounded-[1.25rem]"
              />
            </Link>
          </m.div>
        </figure>
      </div>
    </section>
  )
}

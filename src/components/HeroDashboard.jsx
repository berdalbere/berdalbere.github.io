import { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Activity } from 'lucide-react'
import { profile } from '../data/profile'
import { useLocalize } from '../i18n'

// Valeurs purement décoratives du mini graphique (hauteurs relatives)
const BARS = [38, 52, 44, 66, 58, 80, 72, 92]
const LINE = [62, 48, 55, 36, 42, 24, 30, 14]

export default function HeroDashboard() {
  const { t } = useTranslation()
  const L = useLocalize()
  const reduce = useReducedMotion()
  const [kpi, setKpi] = useState(0)

  // Les KPI défilent toutes les 2,8 s
  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setKpi((k) => (k + 1) % profile.heroKpis.length), 2800)
    return () => clearInterval(id)
  }, [reduce])

  const current = profile.heroKpis[kpi]
  const W = 320
  const H = 140
  const step = W / BARS.length
  const linePath = LINE.map((y, i) => `${i === 0 ? 'M' : 'L'} ${i * step + step / 2} ${(y / 100) * H}`).join(' ')

  return (
    <div role="img" aria-label={t('hero.dashboardLabel')} className="relative mx-auto w-full max-w-md">
      {/* Halo décoratif */}
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-amber/20 blur-2xl" />

      <div aria-hidden="true" className="card overflow-hidden p-5 shadow-2xl shadow-black/20 sm:p-6">
        {/* Barre de titre façon application */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent-ink">
            <Activity className="h-3 w-3" />
            {t('hero.live')}
          </span>
        </div>

        {/* KPI qui défile */}
        <div className="mt-5 h-[4.5rem]">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">{t('hero.dashboardTitle')}</p>
          <AnimatePresence mode="wait">
            <m.div
              key={kpi}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mt-1 font-display text-3xl font-bold text-ink sm:text-4xl">{L(current.value)}</p>
              <p className="text-sm text-muted">{L(current.label)}</p>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Mini graphique : barres + courbe qui se dessinent */}
        <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 h-auto w-full" preserveAspectRatio="none">
          {[0.25, 0.5, 0.75].map((r) => (
            <line key={r} x1="0" x2={W} y1={H * r} y2={H * r} stroke="rgb(var(--line))" strokeDasharray="3 5" />
          ))}
          {BARS.map((h, i) => {
            const bh = (h / 100) * H
            return (
              <m.rect
                key={i}
                x={i * step + step * 0.22}
                width={step * 0.56}
                y={H - bh}
                height={bh}
                rx="4"
                fill={i === BARS.length - 1 ? 'rgb(var(--accent))' : 'rgb(var(--accent) / 0.35)'}
                style={{ transformOrigin: `0px ${H}px`, transformBox: 'view-box' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
              />
            )
          })}
          <m.path
            d={linePath}
            fill="none"
            stroke="rgb(var(--amber))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: 'easeInOut' }}
          />
        </svg>

        {/* Indicateurs de pagination des KPI */}
        <div className="mt-4 flex gap-1.5">
          {profile.heroKpis.map((_, i) => (
            <span key={i} className={`h-1 rounded-full transition-all duration-300 ${i === kpi ? 'w-6 bg-accent' : 'w-3 bg-line'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

import { useTranslation } from 'react-i18next'
import { BarChart3, BrainCircuit, Code2, Database, Network, Palette, ServerCog, Users } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { useLocalize } from '../i18n'
import Section from './Section'
import Reveal from './Reveal'

// Correspondance nom → icône (ajouter ici toute nouvelle icône utilisée dans src/data/skills.js)
const ICONS = { BarChart3, BrainCircuit, Code2, Database, Network, Palette, ServerCog, Users }

export default function Skills() {
  const { t } = useTranslation()
  const L = useLocalize()

  return (
    <Section id="skills" eyebrow={t('skills.eyebrow')} title={t('skills.title')} intro={t('skills.intro')} className="bg-surface/40">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = ICONS[group.icon] ?? Code2
          // Grand écran : les deux groupes data en premier et en large, les deux derniers en large pour fermer la grille
          const wide = i < 2 || i >= skillGroups.length - 2 ? 'lg:col-span-2' : ''
          return (
            <Reveal as="li" key={group.id} delay={(i % 4) * 0.05} className={`card group p-6 transition-colors hover:border-accent/50 ${wide}`}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent-ink transition-colors group-hover:bg-accent group-hover:text-on-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-ink">{L(group.title)}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {L(group.items).map((item) => (
                  <li key={item} className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}

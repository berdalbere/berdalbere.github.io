import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Moon, Sun } from 'lucide-react'
import { profile } from '../data/profile'
import { LANGS, useLocalize } from '../i18n'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTIONS = ['about', 'skills', 'projects', 'journey', 'certifications', 'contact']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const L = useLocalize()
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const active = useActiveSection(SECTIONS, onHome)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Fond plus marqué une fois la page défilée
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Le menu mobile se ferme avec Échap et lors d'un changement de page
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  useEffect(() => setOpen(false), [pathname])

  const lang = i18n.resolvedLanguage
  const cvHref = L(profile.cv)

  // Sur l'accueil, simple ancre ; ailleurs, retour à l'accueil + ancre
  const navLink = ({ id, className, onClick }) => {
    const label = t(`nav.${id}`)
    const current = active === id
    const props = {
      // Lien de la section visible : couleur d'accent à la place de la couleur de base
      className: current ? className.replace(/\btext-(muted|ink)\b/, 'text-accent-ink') : className,
      'aria-current': current ? 'location' : undefined,
      onClick,
    }
    return onHome ? (
      <a key={id} href={`#${id}`} {...props}>
        {label}
      </a>
    ) : (
      <Link key={id} to={`/#${id}`} {...props}>
        {label}
      </Link>
    )
  }

  const langSwitch = () => (
    <div role="group" aria-label={t('a11y.language')} className="flex items-center rounded-lg border border-line p-0.5 text-xs font-semibold">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={lang === code}
          lang={code}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            lang === code ? 'bg-accent text-on-accent' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )

  const themeToggle = () => (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? t('a11y.themeToLight') : t('a11y.themeToDark')}
      className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:text-ink"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  )

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-bg/0'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label={L({ fr: 'Navigation principale', en: 'Main navigation' })}>
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink">
          {profile.monogram}
          <span className="text-accent-ink">.</span>
          <span className="sr-only"> {profile.shortName}, {L({ fr: 'accueil', en: 'home' })}</span>
        </Link>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              {navLink({ id, className: 'rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink' })}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            {langSwitch()}
          </div>
          {themeToggle()}
          <a href={cvHref} download className="btn-primary hidden px-4 py-2 md:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">{t('nav.cv')}</span>
            <span className="xl:hidden">{t('nav.cvShort')}</span>
          </a>

          {/* Bouton burger animé (mobile / tablette) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            className="relative grid h-9 w-9 place-items-center rounded-lg border border-line lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 rounded bg-ink transition-all duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-[5px] h-0.5 w-4 rounded bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-0.5 w-4 rounded bg-ink transition-all duration-300 ${open ? 'top-[5px] -rotate-45' : 'top-[10px]'}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {SECTIONS.map((id) =>
                navLink({
                  id,
                  onClick: () => setOpen(false),
                  className: 'rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-surface-2',
                }),
              )}
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-4">
                {langSwitch()}
                <a href={cvHref} download className="btn-primary px-4 py-2">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t('nav.cv')}
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

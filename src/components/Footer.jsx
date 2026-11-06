import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

export default function Footer() {
  const { t } = useTranslation()
  const socials = [
    { label: 'GitHub', href: profile.github, icon: GitHubIcon, external: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ]

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center gap-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="text-sm text-muted">
          <p>
            © 2026 {profile.name}. {t('footer.rights')}
          </p>
          <p className="mt-1">{t('footer.madeWith')}</p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={external ? `${label} ${t('a11y.newTab')}` : label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent-ink"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

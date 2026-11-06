import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, AlertCircle } from 'lucide-react'
import { profile } from '../data/profile'
import { useLocalize } from '../i18n'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import Section from './Section'
import Reveal from './Reveal'

// Identifiant Formspree (fichier .env : VITE_FORMSPREE_ID=xxxx). Absent → repli sur mailto:
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const EMPTY = { name: '', email: '', subject: '', message: '' }

function validate(values, t) {
  const errors = {}
  if (!values.name.trim()) errors.name = t('contact.required')
  if (!values.email.trim()) errors.email = t('contact.required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = t('contact.invalidEmail')
  if (!values.subject.trim()) errors.subject = t('contact.required')
  if (values.message.trim().length < 10) errors.message = t('contact.tooShort')
  return errors
}

export default function Contact() {
  const { t } = useTranslation()
  const L = useLocalize()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | mailto | error

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values, t)
    setErrors(found)
    if (Object.keys(found).length) {
      // Place le focus sur le premier champ en erreur
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus()
      return
    }

    // Pas de Formspree configuré : ouverture de la messagerie avec le message pré-rempli
    if (!FORMSPREE_ID) {
      const body = `${values.message}\n\n${values.name} (${values.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: values.subject }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const field = (name, label, props = {}) => {
    const Tag = props.as === 'textarea' ? 'textarea' : 'input'
    const { as, ...rest } = props
    const id = `contact-${name}`
    return (
      <div className={name === 'message' || name === 'subject' ? 'sm:col-span-2' : ''}>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
          {label} <span aria-hidden="true" className="text-amber">*</span>
        </label>
        <Tag
          id={id}
          name={name}
          value={values[name]}
          onChange={onChange}
          required
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${id}-error` : undefined}
          className={`w-full rounded-xl border bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent ${
            errors[name] ? 'border-red-500' : 'border-line'
          }`}
          {...rest}
        />
        {errors[name] && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {errors[name]}
          </p>
        )}
      </div>
    )
  }

  const contacts = [
    { icon: Mail, label: t('contact.email'), value: profile.email, href: `mailto:${profile.email}` },
    ...profile.phones.map((p) => ({ icon: Phone, label: `${t('contact.phone')} · ${L({ fr: p.label, en: p.labelEn })}`, value: p.value, href: p.href })),
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/alex-bere', href: profile.linkedin, external: true },
    { icon: GitHubIcon, label: 'GitHub', value: 'github.com/berdalbere', href: profile.github, external: true },
    { icon: MapPin, label: t('about.location'), value: L(profile.location) },
  ]

  return (
    <Section id="contact" eyebrow={t('contact.eyebrow')} title={t('contact.title')} intro={t('contact.intro')}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <Reveal>
          <p className="mb-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-ink">
            <span className="font-semibold text-accent-ink">{L(profile.availability)}</span>
            {L({ fr: ' : ', en: ': ' })}
            {L(profile.availabilityDetail)}
          </p>
          <ul className="space-y-3">
            {contacts.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block break-words font-medium text-ink">{value}</span>
                  </span>
                </>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-surface-2"
                    >
                      {content}
                      {external && <span className="sr-only">{t('a11y.newTab')}</span>}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form noValidate onSubmit={onSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
            {field('name', t('contact.name'), { autoComplete: 'name' })}
            {field('email', t('contact.email'), { type: 'email', autoComplete: 'email' })}
            {field('subject', t('contact.subject'))}
            {field('message', t('contact.message'), { as: 'textarea', rows: 6 })}

            <div className="sm:col-span-2">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full py-3 disabled:opacity-60 sm:w-auto">
                {status === 'sending' ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-4 w-4" aria-hidden="true" />
                )}
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </button>

              {/* Message de confirmation / d'erreur annoncé aux lecteurs d'écran */}
              <div aria-live="polite" className="mt-4">
                {(status === 'success' || status === 'mailto') && (
                  <p className="flex items-start gap-2 rounded-xl bg-accent/10 p-3 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    {status === 'success' ? t('contact.success') : t('contact.successMailto')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-start gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-ink">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                    <span>
                      {t('contact.error')}{' '}
                      <a href={`mailto:${profile.email}`} className="font-medium text-accent-ink underline">
                        {profile.email}
                      </a>
                    </span>
                  </p>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

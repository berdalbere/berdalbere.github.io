import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  const { t } = useTranslation()
  usePageMeta(`404 · ${t('notFound.title')} · Alex BERE`)

  return (
    <section aria-labelledby="nf-title" className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p aria-hidden="true" className="font-display text-7xl font-bold text-accent-ink sm:text-8xl">
        404
      </p>
      <h1 id="nf-title" className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
        {t('notFound.title')}
      </h1>
      <p className="mt-3 max-w-md text-muted">{t('notFound.text')}</p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {t('notFound.home')}
      </Link>
    </section>
  )
}

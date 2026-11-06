import { useEffect } from 'react'

// Met à jour le titre de l'onglet et la meta description (FR / EN selon la langue active)
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}

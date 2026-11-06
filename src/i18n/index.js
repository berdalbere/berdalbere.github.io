import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import { fr, en } from './locales'

export const LANGS = ['fr', 'en']

// Langue mémorisée dans localStorage, français par défaut
function storedLang() {
  try {
    const lang = localStorage.getItem('lang')
    return LANGS.includes(lang) ? lang : 'fr'
  } catch {
    return 'fr'
  }
}

i18n.use(initReactI18next).init({
  resources: { fr: { translation: fr }, en: { translation: en } },
  lng: storedLang(),
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
})

// À chaque changement : mémorisation + mise à jour de <html lang>, du titre et de la description
i18n.on('languageChanged', (lang) => {
  try {
    localStorage.setItem('lang', lang)
  } catch {
    /* stockage indisponible (navigation privée) : on ignore */
  }
  // Absent lors du pré-rendu au build (Node)
  if (typeof document !== 'undefined') document.documentElement.lang = lang
})

export default i18n

// Renvoie la bonne traduction d'une donnée { fr, en } (ou la chaîne telle quelle)
export function useLocalize() {
  const { i18n: instance } = useTranslation()
  const lang = instance.resolvedLanguage || 'fr'
  return (value) => {
    if (value == null) return ''
    if (typeof value === 'string' || Array.isArray(value)) return value
    return value[lang] ?? value.fr
  }
}

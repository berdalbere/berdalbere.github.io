import { useCallback, useEffect, useState } from 'react'

// Thème sombre par défaut ; le choix est mémorisé dans localStorage.
// index.html applique déjà la classe avant le rendu pour éviter un flash.
function initialTheme() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B1120' : '#F8FAFC')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* stockage indisponible : le thème reste valable pour la session */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}

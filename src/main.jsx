import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Polices Google (Inter, Space Grotesk) servies depuis le site : pas de connexion externe au chargement
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/space-grotesk/wght.css'
import './i18n'
import './index.css'
import App, { ROUTER_FUTURE } from './App'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter future={ROUTER_FUTURE}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Le HTML pré-rendu au build correspond à une route donnée, en français et en thème sombre.
// On ne l'hydrate que si l'URL et les préférences du visiteur correspondent ; sinon on refait le rendu.
function canHydrate() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (container.dataset.route !== path) return false
  try {
    return localStorage.getItem('lang') !== 'en' && localStorage.getItem('theme') !== 'light'
  } catch {
    return true
  }
}

if (container.hasChildNodes() && canHydrate()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  container.textContent = ''
  ReactDOM.createRoot(container).render(app)
}

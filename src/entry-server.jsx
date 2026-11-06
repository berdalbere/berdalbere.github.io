// Rendu côté serveur utilisé uniquement au moment du build (scripts/prerender.js) :
// génère le HTML des pages pour un affichage immédiat et un meilleur référencement.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import './i18n'
import App, { ROUTER_FUTURE } from './App'

export function render(url) {
  return renderToString(
    <StaticRouter location={url} future={ROUTER_FUTURE}>
      <App />
    </StaticRouter>,
  )
}

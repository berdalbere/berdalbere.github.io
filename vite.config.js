import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// GitHub Pages ne connaît pas les routes React Router :
// on copie index.html en 404.html pour que /projets/agri-burkina fonctionne en accès direct.
// (copie faite avant le pré-rendu : 404.html reste une coquille vide, rendue côté client)
function spaFallback() {
  let isSsrBuild = false
  return {
    name: 'spa-fallback-404',
    configResolved(config) {
      isSsrBuild = Boolean(config.build.ssr)
    },
    closeBundle() {
      if (isSsrBuild) return
      const dist = resolve(__dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

// Précharge les polices principales (sous-ensemble latin) : elles sont téléchargées en même temps
// que le CSS au lieu d'attendre sa lecture. Les noms de fichiers contiennent un hash, d'où le plugin.
function preloadFonts() {
  const wanted = [/^assets\/inter-latin-wght-normal-.*\.woff2$/, /^assets\/space-grotesk-latin-wght-normal-.*\.woff2$/]
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html
        const fonts = Object.keys(ctx.bundle).filter((file) => wanted.some((re) => re.test(file)))
        const links = fonts
          .map((file) => `<link rel="preload" href="/${file}" as="font" type="font/woff2" crossorigin />`)
          .join('\n    ')
        return html.replace('</title>', `</title>\n    ${links}`)
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback(), preloadFonts()],
  // Site servi à la racine de https://berdalbere.github.io
  base: '/',
})

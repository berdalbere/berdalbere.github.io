// Pré-rendu des pages au build : injecte le HTML de React dans dist/*.html.
// Lancé automatiquement par « npm run build » (voir package.json).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

// Pages à pré-générer (titre et description propres à chaque page pour le SEO)
const pages = [
  // preload : image principale du hero, téléchargée dès la lecture du HTML
  { url: '/', file: 'index.html', preload: '/images/projets/powerbi-hero.webp' },
  {
    url: '/projets/agri-burkina',
    file: 'projets/agri-burkina/index.html',
    title: 'Agri Burkina : prédiction du rendement agricole par IA · Alex BERE',
    description:
      "Étude de cas : application web full-stack qui prédit le rendement de 5 cultures dans 8 provinces du Burkina Faso (Random Forest, R² 73,2 %), avec un conseiller agricole IA bilingue.",
    canonical: 'https://berdalbere.github.io/projets/agri-burkina',
  },
  {
    url: '/projets/lumeo-advisory',
    file: 'projets/lumeo-advisory/index.html',
    title: "LUMEO Advisory : site vitrine bilingue d'un cabinet de conseil · Alex BERE",
    description:
      "Étude de cas : conception et développement du site bilingue de LUMEO Advisory, cabinet de conseil à Ouagadougou (Astro, Tailwind CSS, TypeScript, PHP, Pages CMS).",
    canonical: 'https://berdalbere.github.io/projets/lumeo-advisory',
  },
  {
    url: '/projets/luna',
    file: 'projets/luna/index.html',
    title: 'Luna Jewellery & Accessories : site vitrine de bijoux · Alex BERE',
    description:
      "Étude de cas : site vitrine d'une marque de bijoux basée en Chine et tournée vers l'Afrique de l'Ouest, catalogue filtrable et formulaire de devis (Astro, TypeScript, PHP).",
    canonical: 'https://berdalbere.github.io/projets/luna',
  },
  {
    url: '/projets/atelier-paul',
    file: 'projets/atelier-paul/index.html',
    title: 'Atelier Paul : e-commerce pour une marque de parfumerie de niche · Alex BERE',
    description:
      "Étude de cas : plateforme e-commerce complète pour une marque de parfums artisanaux, avec back-office et commande via WhatsApp (React, Node.js, Express, MySQL, Prisma).",
    canonical: 'https://berdalbere.github.io/projets/atelier-paul',
  },
  {
    url: '/projets/setraco',
    file: 'projets/setraco/index.html',
    title: "SETRACO SARL : site vitrine d'une entreprise de BTP à Kinshasa · Alex BERE",
    description:
      "Étude de cas : site de 21 pages pour une entreprise de BTP et de génie civil en RDC, avec réalisations filtrables et formulaire de devis (Astro, TypeScript, PHP).",
    canonical: 'https://berdalbere.github.io/projets/setraco',
  },
  {
    url: '/projets/wezou',
    file: 'projets/wezou/index.html',
    title: 'Wezou : la billetterie événementielle de Ouagadougou · Alex BERE',
    description:
      "Étude de cas : application mobile de billetterie pour Ouagadougou, paiement Mobile Money ou carte et billets QR code (Flutter, Supabase, LigdiCash, OneSignal). Disponible sur Google Play.",
    canonical: 'https://berdalbere.github.io/projets/wezou',
  },
]

for (const page of pages) {
  // data-route : le client n'hydrate ce HTML que si l'URL visitée est bien celle-ci
  let html = template.replace('<div id="root"></div>', `<div id="root" data-route="${page.url}">${render(page.url)}</div>`)
  if (page.preload) {
    html = html.replace('</title>', `</title>\n    <link rel="preload" as="image" href="${page.preload}" fetchpriority="high" />`)
  }
  if (page.title) {
    html = html
      .replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${page.description}$2`)
      .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/s, `$1${page.title}$2`)
      .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/s, `$1${page.description}$2`)
      .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/s, `$1${page.canonical}$2`)
      .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/s, `$1${page.canonical}$2`)
  }
  const out = resolve(dist, page.file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log(`  pré-rendu : ${page.url} → dist/${page.file}`)
}

// Le bundle serveur ne sert qu'au build
rmSync(ssrDir, { recursive: true, force: true })

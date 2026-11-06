# Portfolio — Charles Dalmace Alex BERE

Site vitrine bilingue (FR / EN) : **Data Analyst** d'abord, développeur web en complément.
Adresse prévue : <https://berdalbere.github.io>

**Stack** : React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · react-i18next · React Router · lucide-react.
Site 100 % statique, sans backend. Les pages sont pré-rendues en HTML au moment du build : affichage immédiat et meilleur référencement.

---

## 1. Installer et lancer en local

Prérequis : [Node.js](https://nodejs.org) 18 ou plus récent.

```bash
npm install        # une seule fois
npm run dev        # http://localhost:5173 — se recharge à chaque modification
```

Pour tester la version de production :

```bash
npm run build      # génère dist/ (avec le pré-rendu des pages)
npm run preview    # http://localhost:4173
```

## 2. Où se trouve quoi

```
src/
├── data/                  ← TOUT LE CONTENU (modifiable sans toucher aux composants)
│   ├── profile.js         identité, accroche, chiffres clés, à propos, langues, liens CV
│   ├── skills.js          groupes de compétences
│   ├── projects.js        projets + « Autres réalisations »
│   ├── agriBurkina.js     contenu de la page /projets/agri-burkina
│   ├── experience.js      expériences et formation (timeline)
│   └── certifications.js  certifications
├── i18n/locales.js        textes de l'interface (menus, boutons, titres) en FR et EN
├── components/            sections de la page (Hero, About, Skills, projects/…, Contact…)
├── pages/                 Accueil, page détail projet, page 404
└── index.css              couleurs du thème (variables CSS)
public/
├── cv/                    CV FR et EN (le bouton télécharge celui de la langue active)
├── certificats/           PDF des certificats
├── images/projets/        captures des projets (format .webp conseillé)
├── favicon.svg · og-image.png (image de partage) · robots.txt · sitemap.xml
```

Chaque texte traduit s'écrit `{ fr: '…', en: '…' }`.

## 3. Ajouter un projet

Dans `src/data/projects.js`, copier un bloc du tableau `projects` et l'adapter :

```js
{
  slug: 'mon-projet',                 // identifiant unique, sans espace
  group: 'data',                      // 'data' (en premier) ou 'web' (sous-section Web)
  categories: ['data'],               // filtres : 'data', 'ml', 'web'
  title: { fr: 'Titre', en: 'Title' },
  summary: { fr: 'Résumé en une ou deux phrases.', en: 'One or two sentence summary.' },
  highlights: { fr: ['Point clé 1', 'Point clé 2'], en: ['Key point 1', 'Key point 2'] }, // facultatif
  stack: ['Power BI', 'DAX'],
  image: { src: '/images/projets/mon-projet.webp', width: 1600, height: 900, alt: { fr: '…', en: '…' } }, // facultatif
  thumbIcon: 'BarChart3',             // icône de la vignette si pas d'image
  github: '',                         // le bouton « Code » apparaît dès que le lien est rempli
  demo: '',                           // idem pour « Démo »
},
```

- Sans `image`, une vignette (dégradé + icône + outils) est générée automatiquement.
  Les icônes disponibles sont listées en haut de `src/components/projects/ProjectThumb.jsx`
  ([catalogue lucide](https://lucide.dev/icons) ; une nouvelle icône doit être ajoutée à cette liste).
- `spotlight: true` fait d'un projet la grande carte en tête de la section (un seul projet ; actuellement
  le dashboard Power BI de la formation de Hamidou KABRE). Ajoutez-y `kicker` (sous-titre) et `metrics` (3 chiffres clés).
- Pensez à mettre à jour le chiffre « 10+ projets » dans `profile.js` (`stats`) si besoin.

**Convertir une capture en WebP** (plus léger) : [squoosh.app](https://squoosh.app), qualité ~80.

## 4. Ajouter une certification

Dans `src/data/certifications.js`, copier un bloc :

```js
{
  name: { fr: 'Nom de la formation', en: 'Course name' },
  issuer: 'Organisme',
  date: '2026-03',                    // AAAA-MM : sert au tri (plus récent en premier)
  credentialId: 'ABC123',             // facultatif
  url: 'https://…/verify/ABC123',     // lien de vérification (prioritaire)
  file: '/certificats/mon-certificat.pdf', // sinon, PDF placé dans public/certificats/
  skills: { fr: ['Compétence'], en: ['Skill'] },
  logo: '/images/logos/organisme.svg',     // facultatif : logo affiché sur fond blanc
  initials: 'AB',                     // pastille utilisée quand il n'y a pas de logo
  color: '#2A73CC',                   // couleur de la pastille (assez foncée pour du texte blanc)
},
```

Sans `url` ni `file`, le bouton « Voir le certificat » est masqué.

**Ajouter un logo** : déposer le fichier (SVG de préférence, sinon PNG carré d'au moins 96 px, fond transparent)
dans `public/images/logos/`, puis renseigner `logo` dans le bloc de la certification.
Si le logo est déjà un carré avec son propre fond (comme English Time ou Domestika), ajoutez `logoFull: true`
pour qu'il remplisse toute la pastille.
Logos présents : Coursera et Udemy (source : [Simple Icons](https://simpleicons.org), licence CC0),
Hamidou KABRE, English Time et Domestika.

## 5. Changer les couleurs

Tout est dans `src/index.css`, sous forme de variables (valeurs RVB séparées par des espaces) :

- bloc `:root, .dark` → mode sombre (par défaut) ;
- bloc `.light` → mode clair.

Exemple : `--accent: 16 185 129;` correspond à `#10B981`. Après un changement, vérifiez le contraste
(texte sur fond ≥ 4,5:1) avec [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).
En mode clair, l'accent est volontairement plus foncé (`#047857`) pour rester lisible sur fond blanc.

Polices : Space Grotesk (titres) et Inter (texte), servies depuis le site (paquets `@fontsource-variable`),
sans appel à Google au chargement.

## 6. Formulaire de contact (Formspree)

Les messages passent par [Formspree](https://formspree.io) et arrivent dans votre boîte mail.
L'identifiant du formulaire est dans `.env.production` (`VITE_FORMSPREE_ID`). Il n'est pas secret : il figure dans le code du site.

Pour changer de formulaire, modifiez cette valeur puis publiez. Sans identifiant, le bouton « Envoyer » ouvre la messagerie du visiteur (`mailto:`).

## 7. Mettre à jour le site en ligne (https://berdalbere.github.io)

Le dépôt `berdalbere.github.io` utilise trois branches :

- `source` : le code du site (c'est ici que l'on travaille) ;
- `main` : le site construit, servi par GitHub Pages. **Ne pas la modifier à la main** : elle est remplacée à chaque publication ;
- `archive-2022` : l'ancien site du lycée Clorivière, conservé.

Pour publier une modification :

```bash
git add .
git commit -m "Description de la modification"
git push origin source
```

Le workflow `.github/workflows/deploy.yml` construit le site et le publie sur `main`
(suivi dans l'onglet **Actions**, environ 1 à 2 minutes).

`sources/`, `SUIVI_PROJET.md` et `PROMPT_PORTFOLIO_VSCODE.md` sont exclus par `.gitignore` : ils ne sont pas publiés.

## 8. Alternative : Vercel

1. [vercel.com](https://vercel.com) → **Add New → Project** → importer le dépôt GitHub.
2. Vercel lit `vercel.json` (commande `npm run build`, dossier `dist`) : rien à régler.
3. Ajouter la variable d'environnement `VITE_FORMSPREE_ID` dans **Settings → Environment Variables**.

Si le domaine change, mettez à jour l'adresse dans `index.html` (balises canonical / Open Graph),
`public/sitemap.xml`, `public/robots.txt` et `scripts/prerender.js`.

## 9. À savoir

- **Pré-rendu** : `npm run build` génère le HTML de `/` et `/projets/agri-burkina` (`scripts/prerender.js`).
  Pour pré-rendre une nouvelle page, ajoutez-la à la liste `pages` de ce script et à `public/sitemap.xml`.
- **Image provisoire** : `public/images/projets/agri-burkina-hero.png` (en-tête de la page Agri Burkina)
  est à remplacer par une capture de l'application, en gardant le même nom.
- **Accessibilité** : navigation au clavier, lien d'évitement, contrastes AA, animations désactivées si le
  système demande moins de mouvement (`prefers-reduced-motion`).

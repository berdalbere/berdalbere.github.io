// Projets affichés dans la section « Projets ».
//
// Pour ajouter un projet : copier un bloc et adapter les champs.
//   group       : 'data' (Data / ML, en premier), 'freelance' (projets clients) ou 'personal' (projets personnels)
//   categories  : filtres auxquels il appartient : 'data', 'ml', 'web'
//   featured    : true = projet phare (projets 1 à 3)
//   spotlight   : true = grande carte en tête de la section (un seul projet)
//   image       : { src, width, height, fit? } d'un fichier de public/images/projets/ (sinon vignette générée)
//                 fit: 'contain' affiche l'image en entier (graphiques), sinon elle est recadrée
//   logo        : logo carré (public/images/logos/), affiché sur la carte et sur la page du projet
//   thumbIcon   : icône lucide-react de la vignette générée (BarChart3, Brain, Table2, Globe…)
//   github/demo : laisser '' tant que le lien n'existe pas : le bouton n'apparaît que s'il est rempli
//   detailPage  : true si une page /projets/<slug> existe (voir src/pages/ProjectDetail.jsx)

export const filters = [
  { id: 'all', label: { fr: 'Tous', en: 'All' } },
  { id: 'data', label: { fr: 'Data / BI', en: 'Data / BI' } },
  { id: 'ml', label: { fr: 'Machine Learning', en: 'Machine Learning' } },
  { id: 'web', label: { fr: 'Web & mobile', en: 'Web & mobile' } },
]

export const projects = [
  {
    slug: 'powerbi-performances-commerciales',
    group: 'data',
    categories: ['data'],
    featured: true,
    spotlight: true,
    kicker: {
      fr: 'Formation pratique Power BI · Hamidou KABRE, Data Scientist certifié Power BI',
      en: 'Hands-on Power BI training · Hamidou KABRE, certified Power BI Data Scientist',
    },
    title: {
      fr: 'Analyse des performances commerciales (Power BI)',
      en: 'Sales performance analysis (Power BI)',
    },
    summary: {
      fr: "Dashboard interactif sur les ventes e-commerce de 5 pays d'Afrique de l'Ouest : 10 073 clients, 121,4 M de chiffre d'affaires, panier moyen 8 063,62, NPS 5,06.",
      en: 'Interactive dashboard on e-commerce sales across 5 West African countries: 10,073 customers, 121.4M revenue, 8,063.62 average basket, NPS 5.06.',
    },
    highlights: {
      fr: [
        "CA par catégorie : Fashion en tête (68 M) devant Maison et meubles (33 M)",
        'Chute du CA mise en évidence : 64 M en 2021, 28 M en 2023',
        'Clients par tranche d’âge, NPS par genre, top 3 clients ; filtres année et pays',
      ],
      en: [
        'Revenue by category: Fashion leads (68M) ahead of Home & furniture (33M)',
        'Revenue drop highlighted: 64M in 2021 down to 28M in 2023',
        'Customers by age band, NPS by gender, top 3 customers; year and country filters',
      ],
    },
    metrics: [
      { value: { fr: '10 073', en: '10,073' }, label: { fr: 'clients', en: 'customers' } },
      { value: { fr: '121,4 M', en: '121.4M' }, label: { fr: "chiffre d'affaires", en: 'revenue' } },
      { value: { fr: '8 063,62', en: '8,063.62' }, label: { fr: 'panier moyen', en: 'average basket' } },
    ],
    stack: ['Power BI', 'Power Query', 'DAX'],
    image: {
      src: '/images/projets/powerbi-performances.webp',
      width: 1512,
      height: 845,
      alt: {
        fr: "Dashboard Power BI « Analyse des performances commerciales » : cartes KPI, clients par tranche d'âge, CA par catégorie, CA par année, NPS par genre et top 3 clients",
        en: 'Power BI "Sales performance analysis" dashboard: KPI cards, customers by age band, revenue by category, revenue by year, NPS by gender and top 3 customers',
      },
    },
    thumbIcon: 'BarChart3',
    github: '',
    demo: '',
  },
  {
    slug: 'agri-burkina',
    group: 'data',
    categories: ['ml', 'web'],
    featured: true,
    detailPage: true,
    title: {
      fr: 'Agri Burkina : prédiction du rendement agricole par IA',
      en: 'Agri Burkina: AI-powered crop yield prediction',
    },
    kicker: { fr: 'Projet de fin de Master · Altınbaş University', en: "Master's graduation project · Altınbaş University" },
    summary: {
      fr: "Application web full-stack qui prédit le rendement de 5 cultures dans 8 provinces du Burkina Faso à partir de 24 ans de données météo, avec un conseiller agricole IA bilingue.",
      en: 'Full-stack web app predicting yields for 5 crops across 8 provinces of Burkina Faso from 24 years of weather data, with a bilingual AI farming advisor.',
    },
    highlights: {
      fr: [
        '70 128 observations météo journalières (Open-Meteo), 2000–2023',
        'Random Forest retenu face à XGBoost : R² 73,2 %, MAE 160,7 kg/ha',
        'API FastAPI (5 endpoints) · front React + Vite · chatbot Groq / Llama 3.3',
      ],
      en: [
        '70,128 daily weather observations (Open-Meteo), 2000–2023',
        'Random Forest chosen over XGBoost: R² 73.2%, MAE 160.7 kg/ha',
        'FastAPI (5 endpoints) · React + Vite front end · Groq / Llama 3.3 chatbot',
      ],
    },
    metrics: [
      { value: { fr: '73,2 %', en: '73.2%' }, label: { fr: 'R²', en: 'R²' } },
      { value: { fr: '160,7', en: '160.7' }, label: { fr: 'MAE (kg/ha)', en: 'MAE (kg/ha)' } },
      { value: { fr: '960', en: '960' }, label: { fr: 'enregistrements', en: 'records' } },
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'FastAPI', 'React', 'Vite', 'Groq API'],
    image: {
      src: '/images/projets/agri-burkina-resultats.webp',
      width: 2083,
      height: 881,
      fit: 'contain', // graphique : affiché en entier, sans recadrage
      alt: {
        fr: "Graphiques du modèle Random Forest : nuage de points rendement réel contre prédit, et importance des variables dominée par le type de culture et les précipitations",
        en: 'Random Forest charts: actual vs predicted yield scatter plot, and feature importance led by crop type and rainfall',
      },
    },
    thumbIcon: 'Sprout',
    github: '',
    demo: '',
  },
  {
    slug: 'zomato-excel',
    group: 'data',
    categories: ['data'],
    featured: true,
    title: {
      fr: 'Analyse des commandes de restaurants Zomato (Excel)',
      en: 'Zomato restaurant order analysis (Excel)',
    },
    summary: {
      fr: "Projet du cours Data Analysis and Modeling : 9 551 restaurants de 141 villes (dataset Zomato de Kaggle) nettoyés avec Power Query, 4 modèles d'analyse et un dashboard Excel de pilotage.",
      en: 'Data Analysis and Modeling course project: 9,551 restaurants from 141 cities (Zomato dataset from Kaggle) cleaned with Power Query, 4 analytical models and an Excel management dashboard.',
    },
    highlights: {
      fr: [
        'Nettoyage Power Query : valeurs invalides, types, séparateurs décimaux, colonnes calculées',
        'Comparaison par catégorie, tendance, corrélation attente / note client, segmentation',
        'KPI : CA ≈ 34,4 M, panier moyen ≈ 3 600, attente moyenne ≈ 15 min',
      ],
      en: [
        'Power Query cleaning: invalid values, data types, decimal separators, calculated columns',
        'Category comparison, trend, waiting time vs rating correlation, segmentation',
        'KPIs: revenue ≈ 34.4M, average order ≈ 3,600, average wait ≈ 15 min',
      ],
    },
    note: {
      fr: 'Dataset Zomato de Kaggle, complété par des variables opérationnelles simulées (quantité, attente, paiement).',
      en: 'Zomato dataset from Kaggle, enriched with simulated operational variables (quantity, waiting time, payment).',
    },
    stack: ['Excel', 'Power Query', { fr: 'Tableaux croisés dynamiques', en: 'Pivot tables' }],
    image: {
      src: '/images/projets/zomato-excel.webp',
      width: 1917,
      height: 994,
      fit: 'contain',
      alt: {
        fr: "Fenêtre Excel ouverte sur le dashboard « Restaurant order data » : quatre KPI, segments par mode de paiement, catégorie et type de client, et graphiques croisés dynamiques",
        en: "Excel window showing the 'Restaurant order data' dashboard: four KPIs, slicers by payment method, category and customer type, and pivot charts",
      },
    },
    thumbIcon: 'UtensilsCrossed',
    github: '',
    demo: '',
  },
  {
    slug: 'water-consumption-excel',
    group: 'data',
    categories: ['data'],
    title: {
      fr: 'Consommation d’eau des bâtiments (Excel)',
      en: 'Building water consumption (Excel)',
    },
    summary: {
      fr: '840 relevés horaires sur 6 bâtiments (janvier – juin 2024) : nettoyage Power Query, tableaux croisés et dashboard de synthèse.',
      en: '840 hourly readings across 6 buildings (January – June 2024): Power Query cleaning, pivot tables and a summary dashboard.',
    },
    highlights: {
      fr: [
        'Pics le matin (24,3 m³) et le soir (22,5 m³) contre 1,9 m³ la nuit',
        'Écart de 1 à 6 entre bâtiments : la taille du bâtiment est le premier facteur',
        'Comparaison, tendance mensuelle et corrélation étages / consommation',
      ],
      en: [
        'Peaks in the morning (24.3 m³) and evening (22.5 m³) vs 1.9 m³ at night',
        'Up to 6× difference between buildings: building size is the main driver',
        'Comparison, monthly trend and floors vs consumption correlation',
      ],
    },
    note: {
      fr: "Jeu de données généré par IA à la demande de l'enseignante, pour les besoins du cours.",
      en: "Dataset generated by AI at the instructor's request, for the purposes of the course.",
    },
    stack: ['Excel', 'Power Query', { fr: 'Tableaux croisés dynamiques', en: 'Pivot tables' }],
    image: {
      src: '/images/projets/water-consumption.webp',
      width: 1919,
      height: 1020,
      fit: 'contain',
      alt: {
        fr: "Fenêtre Excel ouverte sur le dashboard de consommation d'eau : moyenne par bâtiment avec B005 en tête, moyenne par période avec des pics le matin et le soir, et courbe mensuelle",
        en: "Excel window showing the water consumption dashboard: average by building with B005 ahead, average by time period with morning and evening peaks, and a monthly line chart",
      },
    },
    thumbIcon: 'Droplets',
    github: '',
    demo: '',
  },
  {
    slug: 'superstore-excel',
    group: 'data',
    categories: ['data'],
    title: {
      fr: 'Analyse des ventes Superstore 2015-2018 (Excel)',
      en: 'Superstore sales analysis 2015-2018 (Excel)',
    },
    summary: {
      fr: "Dashboard Excel sur 4 ans de ventes : 2 261 536,78 $ de ventes, 4 922 commandes, 793 clients et un panier moyen de 459,48 $.",
      en: 'Excel dashboard on 4 years of sales: $2,261,536.78 in sales, 4,922 orders, 793 customers and a $459.48 average basket.',
    },
    highlights: {
      fr: [
        'Évolution mensuelle des ventes de 2015 à 2018',
        'Ventes par région : West et East en tête',
        'Ventes par catégorie et sous-catégorie, top 10 des clients',
      ],
      en: [
        'Monthly sales trend from 2015 to 2018',
        'Sales by region: West and East lead',
        'Sales by category and sub-category, top 10 customers',
      ],
    },
    stack: ['Excel', { fr: 'Tableaux croisés dynamiques', en: 'Pivot tables' }],
    image: {
      src: '/images/projets/superstore-excel.webp',
      width: 1919,
      height: 1022,
      fit: 'contain',
      alt: {
        fr: "Fenêtre Excel ouverte sur le dashboard des ventes Superstore 2015-2018 : indicateurs clés, évolution par mois, ventes par région et par catégorie, top 10 des clients",
        en: 'Excel window showing the Superstore 2015-2018 sales dashboard: key figures, monthly trend, sales by region and category, top 10 customers',
      },
    },
    thumbIcon: 'BarChart3',
    github: '',
    demo: '',
  },

  // ---------- Projets freelance (sous-section Web) ----------
  // client : nom du client affiché sur la carte · demo : adresse du site en ligne
  {
    slug: 'fasorecrutement',
    group: 'freelance',
    categories: ['web'],
    client: 'Kibanex Group SARL',
    title: {
      fr: 'Faso Recrutement : plateforme de recrutement',
      en: 'Faso Recrutement: recruitment platform',
    },
    summary: {
      fr: "Plateforme de recrutement et de placement de personnel au Burkina Faso : offres d'emploi, candidature en ligne avec CV, candidature spontanée, espace candidat, blog et FAQ.",
      en: 'Recruitment and staffing platform in Burkina Faso: job offers, online applications with CV upload, unsolicited applications, candidate area, blog and FAQ.',
    },
    highlights: {
      fr: [
        'Back-office complet : offres, candidatures, candidats, blog, FAQ, témoignages, partenaires, messages',
        'Gestion des utilisateurs et des rôles',
        'Front-end connecté à une API dédiée, contact WhatsApp',
      ],
      en: [
        'Full back office: job offers, applications, candidates, blog, FAQ, testimonials, partners, messages',
        'User and role management',
        'Front end connected to a dedicated API, WhatsApp contact',
      ],
    },
    stack: ['React', 'Vite', 'API REST'],
    image: {
      src: '/images/projets/fasorecrutement.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Page d'accueil de Faso Recrutement : « Le bon profil pour la bonne mission », boutons vers les offres d'emploi et le contact",
        en: 'Faso Recrutement home page: "The right profile for the right mission", buttons to job offers and contact',
      },
    },
    thumbIcon: 'BriefcaseBusiness',
    github: '',
    demo: 'https://www.fasorecrutement.bf',
  },
  {
    slug: 'lumeo-advisory',
    group: 'freelance',
    categories: ['web'],
    detailPage: true,
    title: {
      fr: "LUMEO Advisory : site vitrine bilingue d'un cabinet de conseil",
      en: 'LUMEO Advisory: bilingual website for a consulting firm',
    },
    summary: {
      fr: "Conception et développement du site institutionnel de LUMEO Advisory, cabinet de conseil basé à Ouagadougou, spécialisé en management de projets, intelligence actuarielle et finance. Un site bilingue français / anglais, rapide et responsive, avec un espace d'actualités que la cliente gère sans toucher au code.",
      en: 'Design and development of the corporate website of LUMEO Advisory, a consulting firm based in Ouagadougou specialising in project management, actuarial intelligence and finance. A fast, responsive, bilingual French / English site, with a news section the client manages without touching any code.',
    },
    details: {
      need: {
        fr: "LUMEO Advisory disposait d'une identité visuelle et d'une brochure, mais d'aucune présence en ligne. Le cabinet voulait un site crédible auprès des institutions, des bailleurs et des entreprises, qui présente clairement ses trois pôles d'expertise et facilite la prise de contact, y compris sur mobile avec une connexion limitée.",
        en: 'LUMEO Advisory had a visual identity and a brochure, but no online presence. The firm wanted a website that would be credible with institutions, donors and companies, clearly present its three areas of expertise and make it easy to get in touch, including on mobile with a limited connection.',
      },
      work: {
        fr: "J'ai pris en charge le projet de bout en bout, à partir du cahier des charges : direction graphique inspirée de la charte du cabinet, intégration, rédaction des contenus en français et en anglais, puis mise en ligne.",
        en: "I handled the project end to end, starting from the brief: art direction based on the firm's brand guidelines, front-end development, content writing in French and English, then deployment.",
      },
      features: {
        fr: [
          'Site bilingue, avec une adresse propre à chaque langue',
          "Une page par pôle d'expertise, avec demande d'accompagnement présélectionnée dans le formulaire",
          "Publication d'articles par la cliente, sans code, grâce à Pages CMS",
          'Formulaire de contact en PHP, avec validation côté serveur et protection anti-spam',
          'Contact en un clic par téléphone, WhatsApp ou e-mail',
          'Référencement soigné : sitemap, données structurées, balises de partage sur les réseaux sociaux',
        ],
        en: [
          'Bilingual site, with a dedicated URL for each language',
          'One page per area of expertise, with the matching request preselected in the form',
          'Article publishing by the client, with no code, thanks to Pages CMS',
          'PHP contact form with server-side validation and spam protection',
          'One-click contact by phone, WhatsApp or email',
          'Careful SEO: sitemap, structured data, social sharing tags',
        ],
      },
      results: {
        fr: 'Score Lighthouse mobile de 99 en performance et de 100 en accessibilité, bonnes pratiques et SEO. Chaque modification est mise en ligne automatiquement en quelques minutes.',
        en: 'Mobile Lighthouse score of 99 for performance and 100 for accessibility, best practices and SEO. Every change goes live automatically within minutes.',
      },
    },
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'PHP', 'Pages CMS', 'GitHub Actions', 'Hostinger'],
    image: {
      src: '/images/projets/lumeo-advisory.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Page d'accueil de LUMEO Advisory : « La précision au service de la performance », bouton de prise de rendez-vous et accès aux trois pôles d'expertise",
        en: "LUMEO Advisory home page: hero title, appointment button and links to the three areas of expertise",
      },
    },
    thumbIcon: 'Globe',
    github: '',
    // Adresse temporaire : la remplacer par https://lumeoadvisory.com/ dès que le domaine sera connecté
    demo: 'https://green-goldfish-731363.hostingersite.com/',
  },
  {
    slug: 'luna',
    group: 'freelance',
    categories: ['web'],
    detailPage: true,
    title: {
      fr: 'Luna Jewellery & Accessories : site vitrine de bijoux',
      en: 'Luna Jewellery & Accessories: jewellery showcase website',
    },
    summary: {
      fr: "Site vitrine pour une marque de bijoux basée en Chine et tournée vers l'Afrique de l'Ouest : catalogue de 18 bijoux filtrable, pages services et formulaire de devis. Univers lunaire et haut de gamme, conçu d'abord pour le mobile et accessible depuis la Chine.",
      en: 'Showcase website for a jewellery brand based in China and focused on West Africa: filterable catalogue of 18 pieces, service pages and a quote form. A premium, lunar-themed design built mobile-first and accessible from China.',
    },
    details: {
      // Titres propres à ce projet (remplacent « Le besoin », « Ma réalisation »…)
      labels: {
        need: { fr: 'Le projet', en: 'The project' },
        work: { fr: 'Le défi', en: 'The challenge' },
        features: { fr: "Ce que j'ai réalisé", en: 'What I built' },
      },
      stack: ['Astro', 'TypeScript', { fr: 'CSS natif', en: 'Native CSS' }, 'PHP', 'GitHub Actions', 'Playwright', 'Lighthouse', 'Hostinger'],
      need: {
        fr: "Luna est une marque de bijoux basée en Chine, avec des représentants en Afrique de l'Ouest. Elle avait besoin d'un site pour présenter ses créations et recevoir des demandes de devis, sans paiement en ligne.",
        en: 'Luna is a jewellery brand based in China, with representatives in West Africa. It needed a website to showcase its creations and receive quote requests, without online payment.',
      },
      work: {
        fr: 'Le site devait rester rapide sur téléphone et fonctionner depuis la Chine, où les services Google sont bloqués. Il n\'utilise donc ni Google Fonts, ni Google Maps, ni reCAPTCHA : tout est servi depuis le domaine de la marque.',
        en: "The site had to stay fast on phones and work from China, where Google services are blocked. It therefore uses no Google Fonts, Google Maps or reCAPTCHA: everything is served from the brand's own domain.",
      },
      features: {
        fr: [
          'Une direction artistique construite à partir du logo : arches, rayons fins et palette ivoire, beige et marron',
          'Un catalogue de 18 bijoux, avec des filtres par collection et par type de bijou, et une fiche et une galerie photo pour chaque produit',
          'Un formulaire de devis pré-rempli depuis les fiches produit, avec validation côté navigateur et côté serveur, et anti-spam sans reCAPTCHA',
          'Des boutons WhatsApp avec message pré-rempli et un QR code WeChat, pour contacter la marque par ses canaux habituels',
          "Une carte stylisée en SVG reliant la Chine à l'Afrique de l'Ouest",
          'Une mise en ligne automatique : chaque modification envoyée sur GitHub est publiée sur le site',
        ],
        en: [
          'Art direction built from the logo: arches, fine rays and an ivory, beige and brown palette',
          'A catalogue of 18 pieces, with filters by collection and jewellery type, plus a page and photo gallery for each product',
          'A quote form pre-filled from product pages, with browser and server validation, and spam protection without reCAPTCHA',
          "WhatsApp buttons with a pre-filled message and a WeChat QR code, to reach the brand through its usual channels",
          'A stylised SVG map linking China and West Africa',
          'Automatic deployment: every change pushed to GitHub is published on the site',
        ],
      },
      results: {
        fr: [
          'Scores Lighthouse sur mobile : 98 à 100 en performance et 100 en accessibilité',
          'Aucun défilement horizontal, testé de 320 à 1 920 px de large',
        ],
        en: [
          'Mobile Lighthouse scores: 98 to 100 for performance and 100 for accessibility',
          'No horizontal scrolling, tested from 320 to 1,920 px wide',
        ],
      },
    },
    stack: ['Astro', { fr: 'CSS natif', en: 'Native CSS' }, 'PHP', 'GitHub Actions', 'Hostinger'],
    image: {
      src: '/images/projets/luna.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Page d'accueil du site Luna, marque de bijoux basée en Chine et tournée vers l'Afrique de l'Ouest",
        en: 'Home page of the Luna website, a jewellery brand based in China and focused on West Africa',
      },
    },
    thumbIcon: 'Globe',
    github: '',
    demo: 'https://lunaunivers.com',
  },
  {
    slug: 'atelier-paul',
    group: 'freelance',
    categories: ['web'],
    detailPage: true,
    title: {
      fr: 'Atelier Paul : e-commerce pour une marque de parfumerie de niche',
      en: 'Atelier Paul: e-commerce for a niche perfume brand',
    },
    summary: {
      fr: "Plateforme e-commerce complète développée de zéro pour une marque de parfums et cosmétiques artisanaux, du site vitrine jusqu'au back-office de gestion.",
      en: 'Complete e-commerce platform built from scratch for an artisanal perfume and cosmetics brand, from the storefront to the management back office.',
    },
    details: {
      labels: { features: { fr: 'Points forts', en: 'Highlights' } },
      features: {
        fr: [
          'Modèle produit sur mesure : variantes (concentration × format) avec prix et stock indépendants par variante, et système de promotions dynamique',
          'Back-office multi-comptes avec rôles (administrateur / éditeur), chacun avec des droits distincts vérifiés côté serveur',
          "Stockage d'images résilient via Cloudinary (upload, redimensionnement, CDN)",
          "Statistiques de visite intégrées (visiteurs, pays d'origine), sans cookies ni service tiers",
          "Tunnel de commande pensé pour les marchés où le paiement en ligne n'est pas la norme : récapitulatif du panier envoyé directement via WhatsApp",
          'Multilingue (FR / EN / TR), accessibilité testée (WCAG 2 AA via axe-core)',
          'Sécurité : authentification JWT, hachage bcrypt, limitation de débit, en-têtes HTTP durcis (helmet)',
          'Déployé en production sur un nom de domaine dédié (Hostinger), CI/CD via push Git',
        ],
        en: [
          'Custom product model: variants (concentration × size) with independent price and stock per variant, and a dynamic promotion system',
          'Multi-account back office with roles (administrator / editor), each with distinct permissions enforced server-side',
          'Resilient image storage with Cloudinary (upload, resizing, CDN)',
          'Built-in visit statistics (visitors, country of origin), with no cookies or third-party service',
          'Checkout designed for markets where online payment is not the norm: the cart summary is sent directly via WhatsApp',
          'Multilingual (FR / EN / TR), accessibility tested (WCAG 2 AA with axe-core)',
          'Security: JWT authentication, bcrypt hashing, rate limiting, hardened HTTP headers (helmet)',
          'Deployed to production on a dedicated domain (Hostinger), CI/CD through Git push',
        ],
      },
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Prisma'],
    image: {
      src: '/images/projets/atelier-paul.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Page d'accueil de la boutique en ligne Atelier Paul, marque de parfums et cosmétiques artisanaux",
        en: 'Home page of the Atelier Paul online store, an artisanal perfume and cosmetics brand',
      },
    },
    thumbIcon: 'Globe',
    github: '',
    demo: 'https://atelierpaul.tr',
  },
  {
    slug: 'setraco',
    group: 'freelance',
    categories: ['web'],
    detailPage: true,
    title: {
      fr: "SETRACO SARL : site vitrine d'une entreprise de BTP à Kinshasa",
      en: 'SETRACO SARL: website for a construction company in Kinshasa',
    },
    summary: {
      fr: "Conception et développement du site institutionnel d'une entreprise de BTP et de génie civil en RDC : réalisations en photos, filtres par catégorie, formulaire de demande de devis. Pensé d'abord pour le mobile et les connexions variables.",
      en: 'Design and development of the corporate website of a construction and civil engineering company in the DRC: photo portfolio, category filters, quote request form. Built mobile-first for variable connections.',
    },
    details: {
      labels: {
        need: { fr: 'Le client', en: 'The client' },
        work: { fr: 'Ma mission', en: 'My role' },
        features: { fr: "Ce que j'ai réalisé", en: 'What I built' },
        results: { fr: 'Résultat', en: 'Result' },
      },
      stack: ['Astro', 'TypeScript', 'CSS', 'PHP (PHPMailer)', 'GitHub Actions', 'Hostinger'],
      need: {
        fr: "SETRACO SARL est une entreprise de BTP et de génie civil basée à Kinshasa (RDC). Elle n'avait pas de site web et souhaitait une présence professionnelle pour rassurer ses partenaires publics et privés.",
        en: 'SETRACO SARL is a construction and civil engineering company based in Kinshasa (DRC). It had no website and wanted a professional presence to reassure its public and private partners.',
      },
      work: {
        fr: "J'ai assuré le projet de bout en bout : cahier des charges, maquette, développement, mise en ligne et ajustements avec le client.",
        en: 'I handled the project end to end: brief, mock-up, development, deployment and adjustments with the client.',
      },
      features: {
        fr: [
          "Un site de 21 pages entièrement responsive, conçu d'abord pour le mobile",
          'Une section Réalisations avec filtres par catégorie, vue galerie et visionneuse photo',
          'Un formulaire de demande de devis et un formulaire de contact en PHP, protégés contre le spam',
          'Un référencement soigné : données structurées, sitemap, aperçus de partage sur WhatsApp et les réseaux',
          'Une mise en ligne automatique sur Hostinger via GitHub Actions',
        ],
        en: [
          'A fully responsive 21-page website, built mobile-first',
          'A Projects section with category filters, gallery view and photo lightbox',
          'Quote request and contact forms in PHP, protected against spam',
          'Careful SEO: structured data, sitemap, sharing previews on WhatsApp and social networks',
          'Automatic deployment to Hostinger with GitHub Actions',
        ],
      },
      results: {
        fr: 'Un site rapide et accessible, adapté aux connexions mobiles en RDC : scores Lighthouse mobile de 97 à 100 en performance et de 100 en accessibilité, bonnes pratiques et SEO.',
        en: 'A fast, accessible website suited to mobile connections in the DRC: mobile Lighthouse scores of 97 to 100 for performance and 100 for accessibility, best practices and SEO.',
      },
    },
    stack: ['Astro', 'TypeScript', 'CSS', 'PHP'],
    image: {
      src: '/images/projets/setraco.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Page d'accueil du site de SETRACO SARL, entreprise de BTP et de génie civil à Kinshasa",
        en: 'Home page of the SETRACO SARL website, a construction and civil engineering company in Kinshasa',
      },
    },
    thumbIcon: 'Globe',
    github: '',
    // Adresse temporaire : à remplacer dès que le client aura son nom de domaine
    demo: 'https://lightyellow-shrew-744407.hostingersite.com',
  },

  // ---------- Projets personnels ----------
  // playStore / appStore : liens des fiches ; appStoreSoon : true affiche « Bientôt sur l'App Store »
  {
    slug: 'wezou',
    logo: '/images/logos/wezou.webp',
    group: 'personal',
    categories: ['web'],
    detailPage: true,
    title: {
      fr: 'Wezou : la billetterie événementielle de Ouagadougou',
      en: 'Wezou: the event ticketing app for Ouagadougou',
    },
    summary: {
      fr: "Application mobile pour découvrir les événements culturels, musicaux et sportifs de Ouagadougou, acheter ses billets par Mobile Money ou carte, et les présenter sous forme de QR code à l'entrée.",
      en: 'Mobile app to discover cultural, music and sports events in Ouagadougou, buy tickets with Mobile Money or card, and show them as a QR code at the entrance.',
    },
    details: {
      labels: {
        need: { fr: 'Le projet', en: 'The project' },
        results: { fr: 'Technologies', en: 'Technologies' },
      },
      need: {
        fr: "Wezou connecte le public burkinabè aux événements culturels, musicaux et sportifs de Ouagadougou. L'application couvre tout le parcours, de la découverte de l'événement au contrôle du billet à l'entrée, avec des moyens de paiement adaptés au marché local. Je l'ai conçue et développée moi-même.",
        en: 'Wezou connects the Burkinabè public with cultural, music and sports events in Ouagadougou. The app covers the whole journey, from discovering an event to checking the ticket at the entrance, with payment methods suited to the local market. I designed and built it myself.',
      },
      features: {
        fr: [
          "Recherche d'événements et de lieux partenaires, favoris et avis",
          'Billets Standard et VIP, avec codes promo',
          'Paiement par Orange Money, Moov Money ou carte bancaire via LigdiCash',
          "Billets électroniques avec QR code, et scanner intégré pour le contrôle à l'entrée",
          "Notifications push et rappels d'événements",
          "Espace d'administration et mode sombre",
        ],
        en: [
          'Search for events and partner venues, favourites and reviews',
          'Standard and VIP tickets, with promo codes',
          'Payment by Orange Money, Moov Money or bank card through LigdiCash',
          'E-tickets with QR code, and a built-in scanner for entrance control',
          'Push notifications and event reminders',
          'Admin area and dark mode',
        ],
      },
      results: {
        fr: [
          'Mobile : Flutter (Dart)',
          'Backend : Supabase (authentification, base de données, Edge Functions)',
          'Paiement : LigdiCash',
          'Notifications : OneSignal et notifications locales',
        ],
        en: [
          'Mobile: Flutter (Dart)',
          'Backend: Supabase (authentication, database, Edge Functions)',
          'Payment: LigdiCash',
          'Notifications: OneSignal and local notifications',
        ],
      },
    },
    stack: ['Flutter', 'Supabase', 'LigdiCash', 'OneSignal'],
    image: {
      src: '/images/projets/wezou.webp',
      width: 1440,
      height: 900,
      alt: {
        fr: "Quatre écrans de l'application Wezou : accueil « Que faire ce soir ? », liste des lieux, présentation du paiement par Orange Money ou Moov Money, et découverte de Ouagadougou",
        en: 'Four screens of the Wezou app: home screen, list of venues, presentation of payment by Orange Money or Moov Money, and discovering Ouagadougou',
      },
    },
    thumbIcon: 'Smartphone',
    github: '',
    demo: '',
    playStore: 'https://play.google.com/store/apps/details?id=com.wezou.wezou_app',
    appStore: '',
    appStoreSoon: true,
  },
]

// Petits projets GitHub (liste compacte « Autres réalisations »)
export const otherWorks = [
  {
    name: 'hotel-guide',
    description: {
      fr: 'Guide numérique bilingue FR/EN pour les clients d’un hôtel : chambres, restaurant, services, Wi-Fi, guide vidéo, page urgences.',
      en: 'Bilingual FR/EN digital guide for hotel guests: rooms, restaurant, services, Wi-Fi, video guide, emergency page.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/berdalbere/hotel-guide',
  },
  {
    name: 'Movies',
    description: {
      fr: 'Site vitrine responsive de films et séries avec carrousels Swiper et page de lecture vidéo.',
      en: 'Responsive movies & shows showcase site with Swiper carousels and a video playback page.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/berdalbere/Movies',
  },
  {
    name: 'Site du lycée Clorivière',
    nameEn: 'Clorivière high school website',
    description: {
      fr: 'Maquette de site pour le lycée Pierre Joseph de Clorivière (Ouagadougou) : actualités, établissement, internat, événements.',
      en: 'Website mock-up for Pierre Joseph de Clorivière high school (Ouagadougou): news, school, boarding, events.',
    },
    stack: ['HTML', 'CSS'],
    // Ancien contenu du dépôt, conservé dans la branche archive-2022
    url: 'https://github.com/berdalbere/berdalbere.github.io/tree/archive-2022',
  },
]

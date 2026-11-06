// Informations personnelles et textes de présentation.
// Chaque texte traduit est un objet { fr, en }.

export const profile = {
  name: 'Charles Dalmace Alex BERE',
  shortName: 'Alex BERE',
  monogram: 'AB',
  email: 'alexcd.bere@gmail.com',
  // whatsapp: true = ouvre une conversation WhatsApp ; sinon, lance un appel
  phones: [
    { label: 'WhatsApp', labelEn: 'WhatsApp', value: '+226 71 78 23 10', href: 'https://wa.me/22671782310', whatsapp: true },
    { label: 'Appel direct', labelEn: 'Direct call', value: '+226 77 27 72 33', href: 'tel:+22677277233' },
  ],
  linkedin: 'https://www.linkedin.com/in/alex-bere/',
  github: 'https://github.com/berdalbere',
  location: {
    fr: 'Réside à Ouagadougou, Burkina Faso',
    en: 'Based in Ouagadougou, Burkina Faso',
  },
  cv: {
    fr: '/cv/Charles_Dalmace_Alex_BERE.pdf',
    en: '/cv/Charles_Dalmace_Alex_BERE_EN.pdf',
  },

  title: { fr: 'Data Analyst', en: 'Data Analyst' },
  subtitle: {
    fr: 'Power BI · Python · Machine Learning. Ingénieur Informatique avec une expertise en développement web.',
    en: 'Power BI · Python · Machine Learning. Computer Engineer with web development expertise.',
  },
  tagline: {
    fr: 'Je transforme les données en décisions, et les décisions en applications.',
    en: 'I turn data into decisions, and decisions into applications.',
  },
  // Rôles qui défilent avec l'effet machine à écrire
  roles: {
    fr: ['Data Analyst', 'Power BI Developer', 'Machine Learning', 'Développeur Web'],
    en: ['Data Analyst', 'Power BI Developer', 'Machine Learning', 'Web Developer'],
  },
  availability: {
    fr: 'Disponible pour opportunités',
    en: 'Open to opportunities',
  },
  availabilityDetail: {
    fr: 'CDI, CDD, stage ou freelance, en Turquie, au Burkina Faso ou en remote',
    en: 'Full-time, fixed-term, internship or freelance, in Türkiye, Burkina Faso or remote',
  },

  // Chiffres clés du hero (value = nombre animé, prefix/suffix = texte autour)
  stats: [
    { text: 'Master', label: { fr: 'Data Analytics (2026)', en: 'Data Analytics (2026)' } },
    { value: 10, suffix: '+', label: { fr: 'projets data & web', en: 'data & web projects' } },
    {
      value: 3,
      label: {
        fr: 'pays de formation (Burkina Faso · Maroc · Turquie)',
        en: 'countries of study (Burkina Faso · Morocco · Türkiye)',
      },
    },
  ],

  // Hero : accroche découpée pour colorer certains mots, preuves et visuels réels
  showcase: {
    headline: {
      fr: [
        { text: 'Je transforme les données en ' },
        { text: 'décisions', tone: 'accent' },
        { text: ', et les décisions en ' },
        { text: 'applications', tone: 'amber' },
        { text: '.' },
      ],
      en: [
        { text: 'I turn data into ' },
        { text: 'decisions', tone: 'accent' },
        { text: ', and decisions into ' },
        { text: 'applications', tone: 'amber' },
        { text: '.' },
      ],
    },
    intro: {
      role: {
        fr: 'Data Analyst · Power BI · Python · Machine Learning',
        en: 'Data Analyst · Power BI · Python · Machine Learning',
      },
      text: {
        fr: "Ingénieur informatique, j'analyse les données, je construis les tableaux de bord qui aident à décider, puis je livre les applications qui vont avec.",
        en: 'A computer engineer, I analyse data, build the dashboards that support decisions, then deliver the applications that go with them.',
      },
    },
    proof: [
      { value: { fr: 'Master', en: "Master's" }, label: { fr: 'Data Analytics, 2026', en: 'Data Analytics, 2026' } },
      { value: { fr: '5', en: '5' }, label: { fr: 'sites réalisés pour des clients', en: 'websites built for clients' } },
      { value: { fr: '1', en: '1' }, label: { fr: 'app mobile sur Google Play', en: 'mobile app on Google Play' } },
    ],
    visual: {
      dashboard: {
        src: '/images/projets/powerbi-hero.webp',
        width: 900,
        height: 503,
        title: { fr: '1. La donnée', en: '1. The data' },
        caption: { fr: 'Dashboard Power BI, 10 073 clients', en: 'Power BI dashboard, 10,073 customers' },
        alt: {
          fr: 'Mon dashboard Power BI « Analyse des performances commerciales » : voir mes projets',
          en: 'My Power BI "Sales performance analysis" dashboard: see my projects',
        },
      },
      app: {
        src: '/images/projets/wezou-ecran.webp',
        width: 420,
        height: 856,
        title: { fr: "2. L'application", en: '2. The application' },
        caption: { fr: 'Wezou, billetterie mobile', en: 'Wezou, mobile ticketing' },
        alt: {
          fr: "Écran de mon application Wezou listant des lieux à Ouagadougou : voir le projet Wezou",
          en: 'Screen of my Wezou app listing venues in Ouagadougou: see the Wezou project',
        },
      },
    },
  },

  // KPI qui défilent dans le mini-dashboard du hero
  heroKpis: [
    { value: { fr: '10 073', en: '10,073' }, label: { fr: 'clients analysés', en: 'customers analysed' } },
    { value: { fr: '73,2 %', en: '73.2%' }, label: { fr: 'R² du modèle Agri Burkina', en: 'Agri Burkina model R²' } },
    { value: { fr: '70 128', en: '70,128' }, label: { fr: 'observations météo', en: 'weather observations' } },
  ],

  about: {
    fr: [
      "Diplômé d'un **Master en Data Analytics** de l'Université Altınbaş d'Istanbul (juin 2026) et d'une **Licence en Génie Informatique** (ESMA Marrakech, 2023), je combine analyse de données et développement logiciel. Je sais collecter, nettoyer et modéliser des données, construire des tableaux de bord décisionnels sous Power BI et Excel, entraîner des modèles de Machine Learning, puis les intégrer dans des applications web complètes.",
      "Mon projet de fin d'études, **Agri Burkina**, illustre cette double compétence : une application web full-stack qui prédit le rendement agricole de 8 provinces du Burkina Faso à partir de 24 ans de données météo réelles, avec un assistant IA bilingue.",
      "Formé au Burkina Faso, au Maroc et en Turquie, j'apporte une vision internationale, une grande capacité d'adaptation et le goût du travail bien fait.",
    ],
    en: [
      "I hold a **Master's degree in Data Analytics** from Altınbaş University in Istanbul (June 2026) and a **Bachelor's degree in Computer Engineering** (ESMA Marrakech, 2023), and I combine data analysis with software development. I can collect, clean and model data, build decision-making dashboards in Power BI and Excel, train Machine Learning models, and then integrate them into complete web applications.",
      "My graduation project, **Agri Burkina**, illustrates this dual skill set: a full-stack web application that predicts crop yields for 8 provinces of Burkina Faso from 24 years of real weather data, with a bilingual AI assistant.",
      'Having studied in Burkina Faso, Morocco and Türkiye, I bring an international perspective, strong adaptability and a commitment to quality work.',
    ],
  },

  languages: [
    { name: { fr: 'Mooré', en: 'Mooré' }, level: { fr: 'Langue maternelle', en: 'Native' } },
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' } },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Intermédiaire / professionnel', en: 'Intermediate / professional' } },
  ],
}

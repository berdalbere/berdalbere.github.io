// Certifications & formations.
// Pour en ajouter une : copier un bloc et remplir les champs.
//   date  : 'AAAA-MM' (sert au tri, du plus récent au plus ancien)
//   url   : lien de vérification en ligne (prioritaire)
//   file  : chemin d'un PDF / d'une image placé dans public/certificats/
//   Sans url ni file, le bouton « Voir le certificat » est masqué.
//   logoFull : true = le logo remplit toute la pastille (logo déjà carré avec son propre fond)
//   initials + color : pastille affichée à la place d'un logo.

export const certifications = [
  {
    name: {
      fr: 'Prompt Engineering : IA générative pour le marketing et la publicité',
      en: 'Prompt Engineering Generative AI for Marketing & Advertising',
    },
    issuer: 'Coursera Project Network',
    logo: '/images/logos/coursera.svg',
    date: '2025-10',
    credentialId: 'Y8QLN17OUJLL',
    url: 'https://coursera.org/verify/Y8QLN17OUJLL',
    file: '/certificats/Coursera Y8QLN17OUJLL.pdf',
    skills: {
      fr: ['Prompt engineering', 'IA générative', 'Marketing'],
      en: ['Prompt engineering', 'Generative AI', 'Marketing'],
    },
    initials: 'C',
    color: '#2A73CC',
  },
  {
    name: { fr: 'Python Scripting for DevOps', en: 'Python Scripting for DevOps' },
    issuer: 'Coursera Project Network',
    logo: '/images/logos/coursera.svg',
    date: '2025-10',
    credentialId: 'R594VO96CP99',
    url: 'https://coursera.org/verify/R594VO96CP99',
    file: '/certificats/Coursera R594VO96CP99.pdf',
    skills: { fr: ['Python', 'Scripting', 'DevOps'], en: ['Python', 'Scripting', 'DevOps'] },
    initials: 'C',
    color: '#2A73CC',
  },
  {
    name: { fr: 'Formation pratique Microsoft Power BI', en: 'Hands-on Microsoft Power BI Training' },
    issuer: 'Hamidou KABRE, Data Scientist certifié Power BI',
    issuerEn: 'Hamidou KABRE, Certified Power BI Data Scientist',
    logo: '/images/logos/kabre.png',
    date: '2025-04',
    skills: {
      fr: ['Power Query', 'Modélisation', 'DAX', 'Visualisation', 'Publication'],
      en: ['Power Query', 'Data modelling', 'DAX', 'Visualisation', 'Publishing'],
    },
    initials: 'BI',
    color: '#A16207',
  },
  {
    name: { fr: 'Certificate of Completion : General English (A2)', en: 'Certificate of Completion: General English (A2)' },
    issuer: 'English Time, Istanbul',
    logo: '/images/logos/english-time.png',
    logoFull: true,
    date: '2024-10',
    credentialId: '1015466',
    file: '/certificats/Certificate English Time.pdf',
    skills: {
      fr: ['Compréhension écrite et orale', 'Communication de base'],
      en: ['Reading and listening', 'Basic communication'],
    },
    initials: 'ET',
    color: '#C2410C',
  },
  {
    name: {
      fr: 'Création d’un site web moderne de A à Z avec WordPress',
      en: 'Building a Modern Website from A to Z with WordPress',
    },
    issuer: 'Udemy',
    logo: '/images/logos/udemy.svg',
    date: '2024-07',
    credentialId: 'UC-61e200fb-1ea2-4d7f-8f2a-5518facde902',
    url: 'https://www.udemy.com/certificate/UC-61e200fb-1ea2-4d7f-8f2a-5518facde902/',
    file: '/certificats/UC-61e200fb-1ea2-4d7f-8f2a-5518facde902.pdf',
    skills: {
      fr: ['Développement WordPress', 'Gestion de domaine'],
      en: ['WordPress development', 'Domain management'],
    },
    initials: 'U',
    color: '#A435F0',
  },
  {
    name: {
      fr: 'Adobe Photoshop pour l’édition et la retouche de photographies',
      en: 'Adobe Photoshop for Photo Editing and Retouching',
    },
    issuer: 'Domestika',
    logo: '/images/logos/domestika.png',
    logoFull: true,
    date: '2022-04',
    credentialId: 'f94a8129275eca8d87d882305ca75d95',
    file: '/certificats/certificate.pdf',
    skills: {
      fr: ['Maîtrise des outils', 'Retouche photo', "Conception d'affiches"],
      en: ['Tool mastery', 'Photo retouching', 'Poster design'],
    },
    initials: 'D',
    color: '#E11D48',
  },
]

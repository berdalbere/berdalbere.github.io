// Compétences regroupées par domaine (ordre = ordre d'affichage : la data d'abord).
// `icon` = nom d'une icône lucide-react déclarée dans src/components/Skills.jsx.

export const skillGroups = [
  {
    id: 'bi',
    icon: 'BarChart3',
    title: { fr: 'Data Analysis & BI', en: 'Data Analysis & BI' },
    items: {
      fr: [
        'Power BI (Power Query, DAX, modélisation, LOOKUPVALUE, mesures)',
        'Excel avancé (Power Query, tableaux croisés dynamiques, dashboards)',
        'Data cleaning',
        'KPI & reporting',
      ],
      en: [
        'Power BI (Power Query, DAX, data modelling, LOOKUPVALUE, measures)',
        'Advanced Excel (Power Query, pivot tables, dashboards)',
        'Data cleaning',
        'KPIs & reporting',
      ],
    },
  },
  {
    id: 'ml',
    icon: 'BrainCircuit',
    title: { fr: 'Data Science & ML', en: 'Data Science & ML' },
    items: {
      fr: [
        'Python',
        'Pandas',
        'NumPy',
        'scikit-learn (Random Forest)',
        'XGBoost',
        'Matplotlib',
        'Jupyter Notebook',
        'Feature engineering',
        'Évaluation de modèles (R², MAE, RMSE)',
      ],
      en: [
        'Python',
        'Pandas',
        'NumPy',
        'scikit-learn (Random Forest)',
        'XGBoost',
        'Matplotlib',
        'Jupyter Notebook',
        'Feature engineering',
        'Model evaluation (R², MAE, RMSE)',
      ],
    },
  },
  {
    id: 'db',
    icon: 'Database',
    title: { fr: 'Bases de données', en: 'Databases' },
    items: { fr: ['SQL', 'MS Access'], en: ['SQL', 'MS Access'] },
  },
  {
    id: 'web',
    icon: 'Code2',
    title: { fr: 'Développement Web', en: 'Web Development' },
    items: {
      fr: ['React', 'Vite', 'Angular', 'JavaScript', 'HTML', 'CSS', 'PHP', 'WordPress'],
      en: ['React', 'Vite', 'Angular', 'JavaScript', 'HTML', 'CSS', 'PHP', 'WordPress'],
    },
  },
  {
    id: 'api',
    icon: 'ServerCog',
    title: { fr: 'Back-end & API', en: 'Back-end & APIs' },
    items: {
      fr: ['FastAPI (REST)', "Intégration d'API externes (Open-Meteo)", 'Intégration LLM (Groq / Llama 3.3)'],
      en: ['FastAPI (REST)', 'External API integration (Open-Meteo)', 'LLM integration (Groq / Llama 3.3)'],
    },
  },
  {
    id: 'design',
    icon: 'Palette',
    title: { fr: 'Design', en: 'Design' },
    items: {
      fr: ["Adobe Photoshop (retouche, conception d'affiches)"],
      en: ['Adobe Photoshop (photo retouching, poster design)'],
    },
  },
  {
    id: 'it',
    icon: 'Network',
    title: { fr: 'IT & Infrastructure', en: 'IT & Infrastructure' },
    items: {
      fr: ['GLPI (gestion de parc)', 'Câblage réseau', 'Installation de data centers', 'Maintenance & support'],
      en: ['GLPI (IT asset management)', 'Network cabling', 'Data centre installation', 'Maintenance & support'],
    },
  },
  {
    id: 'soft',
    icon: 'Users',
    title: { fr: 'Soft skills', en: 'Soft skills' },
    items: {
      fr: ['Communication', "Travail en équipe", 'Adaptabilité', 'Rigueur', 'Organisation'],
      en: ['Communication', 'Teamwork', 'Adaptability', 'Attention to detail', 'Organisation'],
    },
  },
]

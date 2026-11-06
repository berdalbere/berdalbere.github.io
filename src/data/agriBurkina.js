// Contenu de la page détail /projets/agri-burkina.
// Tous les chiffres proviennent des notebooks, de l'API et du mémoire de fin d'études.

export const agriBurkina = {
  supervisor: 'Doç. Dr. Abdullahi Abdu Ibrahim',

  context: {
    title: { fr: 'Contexte', en: 'Context' },
    body: {
      fr: [
        "L'agriculture emploie plus de 80 % de la population active du Burkina Faso, mais les agriculteurs manquent d'outils pour anticiper leurs récoltes et planifier la saison.",
        "Agri Burkina est mon projet de fin de Master en Data Analytics (Altınbaş University), réalisé sous la supervision du Doç. Dr. Abdullahi Abdu Ibrahim. Objectif : passer de données climatiques publiques à une prédiction de rendement exploitable, accessible depuis une application web.",
      ],
      en: [
        'Agriculture employs over 80% of the working population in Burkina Faso, yet farmers lack tools to anticipate their harvests and plan the season.',
        "Agri Burkina is my Master's graduation project in Data Analytics (Altınbaş University), supervised by Assoc. Prof. Dr. Abdullahi Abdu Ibrahim. Goal: turn public climate data into an actionable yield prediction, available through a web application.",
      ],
    },
  },

  data: {
    title: { fr: 'Données', en: 'Data' },
    facts: [
      { value: { fr: '70 128', en: '70,128' }, label: { fr: 'observations météo journalières', en: 'daily weather observations' } },
      { value: { fr: '8', en: '8' }, label: { fr: 'provinces', en: 'provinces' } },
      { value: { fr: '24 ans', en: '24 years' }, label: { fr: '2000 – 2023', en: '2000 – 2023' } },
      { value: { fr: '5', en: '5' }, label: { fr: 'cultures', en: 'crops' } },
    ],
    body: {
      fr: [
        "Les données météo journalières (précipitations, températures max / min, rayonnement solaire) ont été collectées via l'API Open-Meteo Archive pour Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora, Dédougou, Fada N'Gourma et Kaya.",
        "Elles sont agrégées par province et par année (précipitations totales, températures moyennes, rayonnement moyen, jours sans pluie, jours de forte pluie > 20 mm), puis croisées avec les rendements de 5 cultures (mil, sorgho, maïs, niébé, coton) pour obtenir 960 enregistrements. Chaque province est rattachée à une zone climatique (sahélienne, nord-soudanienne, sud-soudanienne) selon sa latitude.",
      ],
      en: [
        'Daily weather data (rainfall, max / min temperature, solar radiation) was collected from the Open-Meteo Archive API for Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora, Dédougou, Fada N’Gourma and Kaya.',
        'It was aggregated per province and year (total rainfall, mean temperatures, mean radiation, dry days, heavy-rain days > 20 mm), then joined with yields for 5 crops (millet, sorghum, maize, cowpea, cotton), giving 960 records. Each province is assigned a climate zone (Sahelian, North-Sudanian, South-Sudanian) based on its latitude.',
      ],
    },
    transparency: {
      fr: "Transparence : la météo est réelle, mais les rendements sont simulés. Faute de rendements officiels publiés à l'échelle province × année, ils ont été générés à partir des moyennes nationales FAO / DGPER par culture, ajustés selon la pluie, la chaleur et la sécheresse de chaque année, avec un bruit aléatoire. Le projet est donc une preuve de concept.",
      en: 'Transparency: the weather data is real, but yields are simulated. Since official province-by-year yields are not published, they were generated from FAO / DGPER national averages per crop, adjusted for each year’s rainfall, heat and drought, plus random noise. The project is therefore a proof of concept.',
    },
  },

  method: {
    title: { fr: 'Méthodologie', en: 'Methodology' },
    steps: [
      {
        title: { fr: 'Collecte', en: 'Collection' },
        text: {
          fr: "Appels à l'API Open-Meteo par province. Le premier essai avec NASA POWER a échoué ; les limites de débit (erreurs 429) ont été gérées par des relances temporisées.",
          en: 'Open-Meteo API calls per province. A first attempt with NASA POWER failed; rate limits (429 errors) were handled with timed retries.',
        },
      },
      {
        title: { fr: 'Préparation', en: 'Preparation' },
        text: {
          fr: 'Agrégation annuelle avec Pandas, feature engineering (jours secs, fortes pluies, zone climatique), encodage des variables catégorielles.',
          en: 'Yearly aggregation with Pandas, feature engineering (dry days, heavy rain, climate zone), categorical encoding.',
        },
      },
      {
        title: { fr: 'Modélisation', en: 'Modelling' },
        text: {
          fr: '12 variables explicatives, découpage entraînement / test 80 / 20 (768 / 192 lignes), Random Forest (200 arbres) comparé à XGBoost.',
          en: '12 features, 80 / 20 train / test split (768 / 192 rows), Random Forest (200 trees) compared with XGBoost.',
        },
      },
      {
        title: { fr: 'Mise en production', en: 'Deployment' },
        text: {
          fr: 'Modèle sérialisé et servi par une API FastAPI, consommée par un front-end React, avec un chatbot LLM.',
          en: 'Serialised model served by a FastAPI API, consumed by a React front end, alongside an LLM chatbot.',
        },
      },
    ],
  },

  results: {
    title: { fr: 'Résultats', en: 'Results' },
    kpis: [
      { value: { fr: '73,2 %', en: '73.2%' }, label: { fr: 'R² (Random Forest)', en: 'R² (Random Forest)' } },
      { value: { fr: '160,7', en: '160.7' }, label: { fr: 'MAE en kg/ha', en: 'MAE in kg/ha' } },
      { value: { fr: '210,6', en: '210.6' }, label: { fr: 'RMSE en kg/ha', en: 'RMSE in kg/ha' } },
    ],
    comparison: {
      headers: { fr: ['Modèle', 'R²', 'MAE (kg/ha)', 'RMSE (kg/ha)'], en: ['Model', 'R²', 'MAE (kg/ha)', 'RMSE (kg/ha)'] },
      rows: [
        { model: { fr: 'Random Forest (retenu)', en: 'Random Forest (selected)' }, r2: { fr: '73,2 %', en: '73.2%' }, mae: { fr: '160,7', en: '160.7' }, rmse: { fr: '210,6', en: '210.6' }, best: true },
        { model: { fr: 'XGBoost', en: 'XGBoost' }, r2: { fr: '68,2 %', en: '68.2%' }, mae: { fr: '174,5', en: '174.5' }, rmse: { fr: '229,4', en: '229.4' } },
      ],
    },
    body: {
      fr: "Les deux variables les plus influentes sont le type de culture (≈ 0,48 d'importance) et les précipitations totales (≈ 0,35) ; toutes les autres restent sous 0,05. La part non expliquée (26,8 %) tient surtout aux facteurs absents du modèle : sol, engrais, irrigation, maladies.",
      en: 'The two most influential features are crop type (≈ 0.48 importance) and total rainfall (≈ 0.35); all others stay below 0.05. The unexplained share (26.8%) mainly comes from factors outside the model: soil, fertiliser, irrigation, disease.',
    },
    imageAlt: {
      fr: 'À gauche, rendement réel contre rendement prédit par le Random Forest, proche de la diagonale ; à droite, importance des variables dominée par la culture et les précipitations',
      en: 'Left: actual vs Random Forest predicted yield, close to the diagonal; right: feature importance led by crop and rainfall',
    },
    risk: {
      title: { fr: 'Évaluation du risque sur 4 niveaux', en: '4-level risk assessment' },
      levels: [
        { color: '#EF4444', range: '< 400 kg/ha', label: { fr: 'Risque élevé', en: 'High risk' } },
        { color: '#F97316', range: '400 – 700', label: { fr: 'Attention requise', en: 'Caution' } },
        { color: '#EAB308', range: '700 – 1 000', label: { fr: 'Rendement moyen', en: 'Average yield' } },
        { color: '#22C55E', range: '≥ 1 000', label: { fr: 'Bon rendement', en: 'Good yield' } },
      ],
    },
  },

  architecture: {
    title: { fr: 'Architecture', en: 'Architecture' },
    nodes: [
      {
        id: 'front',
        icon: 'MonitorSmartphone',
        name: { fr: 'Front-end', en: 'Front end' },
        tech: 'React · Vite · Recharts',
        text: {
          fr: 'Formulaire de prédiction, carte de résultat, graphique des dernières prédictions, onglet conseiller.',
          en: 'Prediction form, result card, chart of recent predictions, advisor tab.',
        },
      },
      {
        id: 'api',
        icon: 'ServerCog',
        name: { fr: 'API REST', en: 'REST API' },
        tech: 'FastAPI · Pydantic',
        text: {
          fr: '5 endpoints : statut, provinces, cultures, prédiction, chat.',
          en: '5 endpoints: status, provinces, crops, prediction, chat.',
        },
      },
      {
        id: 'model',
        icon: 'Trees',
        name: { fr: 'Modèle ML', en: 'ML model' },
        tech: 'scikit-learn · Random Forest',
        text: {
          fr: 'Prédiction du rendement en kg/ha et niveau de risque.',
          en: 'Yield prediction in kg/ha and risk level.',
        },
      },
      {
        id: 'llm',
        icon: 'MessagesSquare',
        name: { fr: 'Conseiller IA', en: 'AI advisor' },
        tech: 'Groq · Llama 3.3 70B',
        text: {
          fr: 'Répond en français ou en anglais selon la question, avec des conseils agricoles adaptés au Sahel.',
          en: 'Answers in French or English depending on the question, with farming advice suited to the Sahel.',
        },
      },
    ],
  },

  learnings: {
    title: { fr: "Ce que j'ai appris", en: 'What I learned' },
    items: {
      fr: [
        "Construire une chaîne de données complète, de la collecte par API jusqu'à la mise à disposition dans une application.",
        "Gérer les aléas d'une API externe : changement de source (NASA POWER → Open-Meteo) et limites de débit.",
        'Comparer des modèles sur des métriques objectives (R², MAE, RMSE) plutôt que sur l’intuition.',
        'Encadrer un LLM par un prompt système métier pour obtenir des réponses courtes, utiles et dans la langue de l’utilisateur.',
        "Être transparent sur les limites des données : un modèle n'est fiable que si ses données le sont.",
      ],
      en: [
        'Building a complete data pipeline, from API collection to delivery inside an application.',
        'Handling external API issues: switching sources (NASA POWER → Open-Meteo) and rate limits.',
        'Comparing models on objective metrics (R², MAE, RMSE) rather than intuition.',
        'Steering an LLM with a domain-specific system prompt to get short, useful answers in the user’s language.',
        'Being transparent about data limitations: a model is only as reliable as its data.',
      ],
    },
    next: {
      fr: 'Pistes : rendements officiels DGPER, imagerie satellite NDVI (Sentinel-2), données de sol, alertes SMS sécheresse, extension aux 45 provinces, PWA pour les zones rurales.',
      en: 'Next steps: official DGPER yields, NDVI satellite imagery (Sentinel-2), soil data, drought SMS alerts, expansion to all 45 provinces, a PWA for rural areas.',
    },
  },
}

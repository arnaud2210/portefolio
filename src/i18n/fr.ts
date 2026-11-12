/**
 * Textes français du site. Source unique pour la langue par défaut.
 * `en.ts` doit avoir exactement les mêmes clés (typage via `Dictionary`).
 * Les données non traduisibles (liens, identifiants, icônes) sont dans `src/data/`.
 */
export const fr = {
  meta: {
    title: 'Arnaud Adjimon',
    description:
      "Arnaud Adjimon, développeur back-end Python / Fullstack. Je conçois des APIs et des applications web et mobile, de l'analyse du besoin à la mise en production.",
  },
  skip: 'Aller au contenu',
  nav: {
    ariaLabel: 'Navigation principale',
    projects: 'Projets',
    career: 'Parcours',
    skills: 'Compétences',
    contact: 'Contact',
    cta: 'Me contacter',
    menu: 'Menu',
    footerAriaLabel: 'Rappel de navigation',
  },
  lang: {
    groupLabel: 'Langue',
    fr: 'Français',
    en: 'English',
  },
  terms: {
    restApi: 'API REST',
  },
  hero: {
    role: 'Développeur back-end Python / Fullstack',
    pitch:
      "« Je conçois des APIs et des applications web et mobile, de l'analyse du besoin à la mise en production. »",
    seeProjects: 'Voir mes projets',
    cv: 'Télécharger mon CV',
    photoAlt: 'Arnaud Adjimon',
  },
  about: {
    title: 'À propos',
    text: "Développeur back-end avec 3 ans d'expérience, diplômé d'un Master Développement Web et Mobile (ÉSTIAM Metz, 2026). J'ai travaillé sur des produits éditeur (cybersécurité, cloud) comme sur des projets pour des clients indépendants. J'aime comprendre le besoin, concevoir une architecture propre, et livrer quelque chose qui tourne en production. Je transmets aussi ce que je sais : j'anime une formation Python pour débutants.",
  },
  projects: {
    title: 'Projets',
    stackLabel: 'Stack',
    liveSiteSr: '(site en production, nouvel onglet)',
    ctxAria: '{employer}, {range} : voir dans le parcours',
    featured: {
      meta: 'Projet mis en avant · 08/2026',
      title: 'Système de gestion de commandes',
      linkSr: '(site de commande, nouvel onglet)',
      lead: 'Application web et application mobile de gestion de commandes, conçues, développées et déployées seul pour une cliente indépendante (vente de jus naturels faits maison), en production. Dépôt GitLab privé.',
      context: {
        label: 'Contexte',
        text: 'Une cliente indépendante vend des jus naturels faits maison et veut gérer et faciliter ses ventes. La cliente gérait tout à la main : les commandes arrivaient par appel ou par message, et elle les notait dans un carnet.',
      },
      did: {
        label: "Ce que j'ai fait",
        text: 'Analyse du métier, cahier des charges, architecture, API et deux applications, pipeline CI/CD sécurisé, déploiement et documentation, seul, en 1 mois.',
      },
      solution: {
        label: 'Solution',
        text: "Une application web pour la clientèle (choix du jus, panier, paiement Wero ou espèces, mode de livraison) et une application mobile pour la gestionnaire (notification Discord à chaque commande avec reçu, validation et tri des commandes, gestion des produits, tableau de bord du chiffre d'affaires). Déploiement chez Wayhost via un pipeline GitLab CI/CD sécurisé.",
      },
      result: {
        label: 'Résultat',
        text: 'En production depuis août 2026.',
        figures: [
          { value: '32', label: 'commandes' },
          { value: '25', label: 'clients' },
          { value: '~10', label: 'commandes / mois' },
        ],
      },
      notes: [
        'Projet indépendant, hors poste salarié (hébergé chez Wayhost).',
        "Développement assisté par IA (Claude Code) : j'ai piloté le cadrage et l'architecture, puis relu, testé et corrigé le code produit.",
      ],
    },
    showcase: {
      webCaption: 'Site de commande (clientèle)',
      mobileCaption:
        'Application de gestion (PWA) : catalogue, suivi des commandes, tableau de bord',
      phonesAria: "Captures de l'application de gestion, à faire défiler",
      enlarge: 'Agrandir',
      shots: {
        vitrine: {
          caption: 'Site de commande (clientèle)',
          alt: "Site de commande pour la clientèle : bandeau « Jus naturels faits maison », recherche, filtres par catégorie et cartes de jus avec photo, prix et bouton d'ajout au panier",
        },
        catalogue: {
          caption: 'Application de gestion : catalogue',
          alt: "Catalogue de l'application de gestion : liste des jus avec photo, prix, contenance et statut, boutons Modifier et Supprimer",
        },
        commandes: {
          caption: 'Application de gestion : commandes',
          alt: "Liste des commandes de l'application de gestion (noms, téléphones et adresses floutés)",
        },
        tableauDeBord: {
          caption: 'Application de gestion : tableau de bord',
          alt: "Tableau de bord de l'application de gestion : commandes terminées, clients uniques et répartition des ventes par catégorie en anneau",
        },
      },
      lightbox: {
        defaultTitle: 'Capture',
        previous: 'Capture précédente',
        next: 'Capture suivante',
        close: 'Fermer',
      },
    },
    others: {
      wayhost: {
        title: 'Wayhost, plateforme cloud',
        text: 'Plateforme alors nommée Altara (2023-2024). Microservices FastAPI : noms de domaine et zones DNS via OpenStack, serveurs virtuels et physiques, paiement. Provisionnement automatisé (clés SSH déployées à la création des serveurs) et pipeline GitLab CI/CD sécurisé.',
        context: 'Chez AXETAG',
      },
      axmaril: {
        title: 'Axmaril, coffre-fort numérique',
        text: 'Partage sécurisé de coffres-forts, du cahier des charges à la mise en production, et agent sidecar en Go qui distribue les secrets aux applications tierces, avec cache pour la haute disponibilité.',
        context: 'Chez AXETAG',
      },
      dac: {
        title: 'DAC Advice, e-commerce multicanal',
        text: 'Bot Telegram et application web Angular sur une même API FastAPI (catalogue, panier), base MongoDB.',
        context: 'Chez DAC Advice',
      },
      exiola: {
        title: 'Exiola, chatbot juridique',
        text: "Assistant pour un cabinet d'avocats sur Telegram et WhatsApp (Botpress). API FastAPI / MongoDB pour indexer les documents, réponses via OpenAI, plateforme d'administration Angular.",
        context: 'Chez Exiola',
      },
      insight: {
        title: 'Insight, gestion de clinique',
        text: "Système de gestion pour une clinique : facturation des actes médicaux et délivrance des résultats d'analyses du laboratoire. Déployé en usage interne.",
        context: 'Chez Insight',
      },
    },
  },
  career: {
    title: 'Parcours',
    present: "aujourd'hui",
    experienceTitle: 'Expérience',
    educationTitle: 'Formation',
    projectLabel: 'Projet :',
    entries: {
      qavaa: {
        what: 'Formateur Python bénévole, Qavaa Innovate',
        where: 'Maryland, États-Unis (à distance)',
        note: "Formation hebdomadaire de 3 h pour une trentaine d'apprenants débutants : algorithmique, structures de données, POO.",
      },
      'axetag-devsecops': {
        what: 'Développeur DevSecOps, AXETAG SAS',
        where: 'Cergy, France',
        note: 'Agent sidecar Go (Axmaril), microservices Wayhost, étapes de sécurité dans les pipelines GitLab CI/CD.',
      },
      'axetag-2025': {
        what: 'Développeur Backend Python, AXETAG SAS',
        where: 'Cergy, France',
        note: "Partage sécurisé de coffres-forts d'Axmaril, API REST Flask et FastAPI, tests unitaires.",
      },
      'axetag-2023': {
        what: 'Développeur Backend Python, AXETAG SAS',
        where: 'Cotonou, Bénin (à distance)',
        note: 'Fonctionnalités API REST Flask / MongoDB pour Axmaril et Altara (devenu Wayhost), maintenance, tests unitaires.',
      },
      dac: {
        what: 'Développeur Fullstack freelance, DAC Advice',
        where: 'Lomé, Togo',
        note: 'Système e-commerce multicanal : API FastAPI, bot Telegram, interface Angular.',
      },
      exiola: {
        what: 'Stagiaire en ingénierie logicielle, Exiola',
        where: 'Lomé, Togo',
        note: "Chatbot de relation client (WhatsApp, Telegram), API d'indexation de documents, plateforme d'administration Angular.",
      },
      insight: {
        what: 'Stagiaire développeur logiciel, Insight',
        where: 'Lomé, Togo',
        note: "Système de gestion de clinique : facturation des actes et résultats d'analyses.",
      },
      estiam: {
        what: 'Master Développement Web et Mobile, cursus e-Industries, ÉSTIAM Metz',
        where: 'Metz, France',
        note: 'Développement web et mobile.',
      },
      iai: {
        what: "Licence pro Génie Logiciel et Systèmes d'Information, Institut Africain d'Informatique",
        where: 'Lomé, Togo',
        note: "Génie logiciel et systèmes d'information.",
      },
    },
  },
  skills: {
    title: 'Compétences',
    groups: {
      backend: 'Back-end',
      frontMobile: 'Front et mobile',
      data: 'Données',
      devsecops: 'DevSecOps et outils',
    },
    languagesTitle: 'Langues',
    languages: {
      fr: { name: 'Français', level: 'natif' },
      en: { name: 'Anglais', level: 'professionnel' },
    },
    notionsTitle: 'Notions',
    notionsNote: 'Projets académiques',
  },
  contact: {
    title: 'Contact',
    lead: 'Un projet, une opportunité ? Écrivez-moi.',
    emailAria: 'Envoyer un email à Arnaud',
    linkedinAria: "Profil LinkedIn d'Arnaud Adjimon",
    githubAria: 'Profil GitHub arnaud2210',
    emailHint: '(email)',
    linkedinHint: '(profil LinkedIn)',
    githubHint: '(profil GitHub)',
  },
  footer: {
    role: 'Développeur back-end Python / Fullstack',
    location: "Basé à Metz, mobile en France et à l'international.",
    toTop: 'Retour en haut',
  },
};

export type Dictionary = typeof fr;

/**
 * Textes français du site. Source unique pour la langue par défaut.
 * `en.ts` doit avoir exactement les mêmes clés (typage via `Dictionary`).
 * Les données non traduisibles (liens, identifiants, icônes) sont dans `src/data/`.
 */
export const fr = {
  meta: {
    title: 'Arnaud Adjimon',
    description:
      'Arnaud Adjimon, développeur back-end Python / Fullstack basé à Metz : API et applications web et mobiles, des enjeux métier à la mise en production.',
  },
  og: {
    locale: 'fr_FR',
    imageAlt: 'Arnaud Adjimon, développeur back-end Python / Fullstack',
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
      "Je conçois et pilote des solutions numériques en partant des enjeux métier, de la compréhension du besoin aux choix d'architecture, jusqu'au développement et à la mise en production d'API et d'applications web et mobiles. Mon objectif : des solutions fiables, évolutives et utiles aux métiers.",
    seeProjects: 'Voir mes projets',
    cv: 'Télécharger mon CV',
    photoAlt: 'Arnaud Adjimon',
  },
  about: {
    title: 'À propos',
    text: "Développeur back-end depuis 3 ans et diplômé d'un Master en développement web et mobile, j'ai travaillé sur des produits éditeur (cybersécurité, cloud) comme sur des projets pour des clients indépendants, avec une attention particulière à la sécurité applicative. Je transmets aussi ce que je sais : j'anime une formation Python pour débutants.",
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
    caseLabels: {
      background: 'Contexte',
      role: 'Mon rôle',
      achievements: 'Réalisations',
      result: 'Résultat',
      separator: ' : ',
    },
    cases: {
      wayhost: {
        title: 'Wayhost, plateforme cloud',
        context: 'Chez AXETAG',
        background:
          "Plateforme conçue par AXETAG avec ITNET TECHNOLOGIES, qui permet aux entreprises et aux professionnels de commander et de gérer au même endroit leurs services d'infrastructure (domaines, DNS, serveurs virtuels et physiques), avec une mise à disposition automatisée.",
        role: "Développeur back-end Python puis DevSecOps, dans l'équipe back-end d'une dizaine de développeurs, sur Altara (2023-2024), puis sur Wayhost, sa migration et refonte (2025-2026).",
        achievements: [
          {
            label: 'Noms de domaine',
            text: "conception de l'architecture de l'API REST, intégration d'OpenStack pour les zones DNS, créées automatiquement à l'achat.",
          },
          {
            label: 'Serveurs VPS',
            text: 'gestion des mots de passe et des clés SSH, déployées dès la création.',
          },
          {
            label: 'Facturation',
            text: 'génération des factures après paiement et envoi automatique par e-mail.',
          },
          {
            label: 'Sécurité et qualité',
            text: "analyse et correction des CVE (DefectDojo), analyse du code avec Bandit, proposition d'OWASP ZAP pour les tests de sécurité automatisés, tests unitaires et d'intégration du microservice d'authentification avec pytest.",
          },
        ],
        result:
          "En production sur wayhost.cloud. Achat d'un domaine de bout en bout (recherche, prix, suggestions, panier, paiement), zones DNS et détail des domaines, VPS et clés SSH, suivi des dépenses dans l'espace client.",
      },
      axmaril: {
        title: 'Axmaril, coffre-fort numérique',
        context: 'Chez AXETAG',
        background:
          "Solution conçue par AXETAG avec ITNET TECHNOLOGIES pour centraliser, protéger et partager les informations sensibles des organisations (identifiants, clés d'API, accès, fichiers). Les applications consomment leurs secrets sans les stocker dans leur code ni dans leur configuration.",
        role: "Développeur back-end Python puis DevSecOps. J'ai réalisé les travaux ci-dessous, des besoins et des exigences jusqu'à l'architecture, aux choix techniques et à la mise en production.",
        achievements: [
          {
            label: 'Agent Axgent (Go, serveurs Linux)',
            text: "agent sidecar qui sert de passerelle entre le coffre-fort et les applications tierces ; elles obtiennent leurs secrets sans dépendre directement de l'API REST centrale.",
          },
          {
            label: 'Cache',
            text: "moins d'appels au service central, et des secrets toujours disponibles en cas de panne temporaire.",
          },
          {
            label: 'Partage',
            text: 'secrets partagés avec des utilisateurs internes et externes ; coffres partagés entre utilisateurs, groupes et comptes LDAP, avec des droits prédéfinis.',
          },
          { label: 'Tests', text: "tests unitaires et d'intégration de l'API avec pytest." },
        ],
        result:
          "Produit commercialisé, utilisé par de grands groupes en France. Le partage de coffres et de secrets est en production, avec la gestion des groupes. Axgent est téléchargeable en binaire pour Linux : dans son espace client, on crée un agent et des applications, on affecte des coffres aux applications, puis on relie les applications à l'agent.",
        ia: "Axgent : cahier des charges et architecture conçus par mes soins, code rédigé avec l'assistance de Claude Code.",
      },
    },
    others: {
      dac: {
        title: 'DAC Advice, e-commerce multicanal',
        text: "Système e-commerce multicanal : un bot Telegram et une application web Angular s'appuient sur une même API REST FastAPI (catalogue, panier). J'ai conçu l'architecture back-end (modélisation UML, base MongoDB), développé l'API, puis je l'ai intégrée au bot et à l'interface web.",
        context: 'Chez DAC Advice',
      },
      exiola: {
        title: 'Exiola, chatbot juridique',
        text: "Chatbot d'assistance à la relation client pour un cabinet d'avocats, sur WhatsApp et Telegram (Botpress). J'ai conçu l'architecture (modélisation UML) et développé l'API REST FastAPI / MongoDB, qui indexe les documents juridiques exploités par le chatbot via OpenAI. J'ai aussi réalisé une plateforme d'administration Angular, pour soumettre les documents d'entraînement et envoyer des messages groupés aux clients.",
        context: 'Chez Exiola',
      },
      insight: {
        title: 'Insight, gestion de clinique',
        text: "Application web de gestion de clinique en deux modules : facturation des actes médicaux et suivi des analyses du laboratoire. Je l'ai développée avec Django et PostgreSQL, avec une interface Bootstrap et des interactions asynchrones en AJAX. Elle est déployée en usage interne.",
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
        note: 'Agent Axgent en Go (Axmaril), microservices Wayhost, analyse et correction des CVE dans les pipelines GitLab CI/CD.',
      },
      'axetag-2025': {
        what: 'Développeur Backend Python, AXETAG SAS',
        where: 'Cergy, France',
        note: "Partage de coffres-forts d'Axmaril (Flask), puis migration et refonte d'Altara en Wayhost (FastAPI), tests unitaires.",
      },
      'axetag-2023': {
        what: 'Développeur Backend Python, AXETAG SAS',
        where: 'Cotonou, Bénin (à distance)',
        note: "Fonctionnalités d'API REST Flask / MongoDB pour Axmaril (partage de secrets) et Altara (devenu Wayhost), maintenance, tests unitaires.",
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
        note: 'Système de gestion de clinique : facturation des actes et suivi des analyses du laboratoire.',
      },
      estiam: {
        what: 'Master Développement Web et Mobile, cursus e-Industries, ÉSTIAM Metz',
        where: 'Metz, France',
      },
      iai: {
        what: "Licence pro Génie Logiciel et Systèmes d'Information, Institut Africain d'Informatique",
        where: 'Lomé, Togo',
      },
    },
  },
  skills: {
    title: 'Compétences',
    groups: {
      backend: 'Back-end',
      frontMobile: 'Front et mobile',
      data: 'Données',
      devops: 'DevOps et cloud',
      security: 'Sécurité applicative',
      ai: 'IA et intégrations',
      quality: 'Qualité et méthodes',
    },
    languagesTitle: 'Langues',
    languages: {
      fr: { name: 'Français', level: 'natif' },
      en: { name: 'Anglais', level: 'professionnel' },
    },
    notionsTitle: 'Notions',
    notionsNote: 'Projets académiques, licence pro et master',
    learningTitle: "En cours d'apprentissage",
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

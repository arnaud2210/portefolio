import type { Dictionary } from './fr';

/** English texts. Same keys as `fr.ts`, enforced by the `Dictionary` type. */
export const en: Dictionary = {
  meta: {
    title: 'Arnaud Adjimon - Back-end Python / Full-stack Developer',
    description:
      'Arnaud Adjimon, Back-end Python / Full-stack Developer. I design APIs, web and mobile applications, from requirements analysis to production.',
  },
  skip: 'Skip to content',
  nav: {
    ariaLabel: 'Main navigation',
    projects: 'Projects',
    career: 'Career',
    skills: 'Skills',
    contact: 'Contact',
    cta: 'Contact me',
    menu: 'Menu',
    footerAriaLabel: 'Navigation reminder',
  },
  lang: {
    groupLabel: 'Language',
    fr: 'Français',
    en: 'English',
  },
  terms: {
    restApi: 'REST API',
  },
  hero: {
    role: 'Back-end Python / Full-stack Developer',
    pitch:
      '“I design APIs, web and mobile applications, from requirements analysis to production.”',
    seeProjects: 'View my projects',
    cv: 'Download my CV',
    photoAlt: 'Portrait of Arnaud Adjimon',
  },
  about: {
    title: 'About',
    text: "Back-end developer with 3 years of experience, holding a Master's degree in Web & Mobile Development (ÉSTIAM Metz, 2026). I have worked on vendor products (cybersecurity, cloud) as well as on projects for independent clients. I like understanding the need, designing a clean architecture, and delivering something that runs in production. I also share what I know: I teach a Python course for beginners.",
  },
  projects: {
    title: 'Projects',
    stackLabel: 'Stack',
    liveSiteSr: '(live site, opens in a new tab)',
    ctxAria: '{employer}, {range}: see in Career',
    featured: {
      meta: 'Featured project · 08/2026',
      title: 'Order Management System',
      linkSr: '(ordering site, opens in a new tab)',
      lead: 'Web and mobile order management applications, designed, built and deployed on my own for an independent client (homemade natural juices), in production. Private GitLab repository.',
      context: {
        label: 'Background',
        text: 'An independent client sells homemade natural juices and wants to manage and ease her sales. She handled everything by hand: orders came in by phone or by message, and she wrote them down in a notebook.',
      },
      did: {
        label: 'What I did',
        text: 'Business analysis, requirements specification, architecture, API and two applications, secured CI/CD pipeline, deployment and documentation, on my own, in 1 month.',
      },
      solution: {
        label: 'Solution',
        text: 'A web application for customers (juice selection, cart, payment by Wero or cash, delivery method) and a mobile application for the manager (Discord notification with receipt for each order, order validation and sorting, product management, revenue dashboard). Deployed on Wayhost through a secured GitLab CI/CD pipeline.',
      },
      result: {
        label: 'Result',
        text: 'In production since August 2026.',
        figures: [
          { value: '32', label: 'orders' },
          { value: '25', label: 'customers' },
          { value: '~10', label: 'orders / month' },
        ],
      },
      notes: [
        'Independent project, outside any salaried position (hosted on Wayhost).',
        'AI-assisted development (Claude Code): I led the scoping and architecture, then reviewed, tested and fixed the generated code.',
      ],
    },
    showcase: {
      webCaption: 'Ordering site (customers)',
      mobileCaption: 'Management app (PWA): catalogue, order tracking, dashboard',
      phonesAria: 'Management app screenshots',
      enlarge: 'Enlarge',
      shots: {
        vitrine: {
          caption: 'Ordering site (customers)',
          alt: 'Ordering site for customers: “Homemade natural juices” banner, search, category filters and juice cards with photo, price and add-to-cart button',
        },
        catalogue: {
          caption: 'Management app: catalogue',
          alt: 'Catalogue of the management app: list of juices with photo, price, volume and status, Edit and Delete buttons',
        },
        commandes: {
          caption: 'Management app: orders',
          alt: 'Order list of the management app (names, phone numbers and addresses blurred)',
        },
        tableauDeBord: {
          caption: 'Management app: dashboard',
          alt: 'Dashboard of the management app: completed orders, unique customers and sales breakdown by category as a donut chart',
        },
      },
      lightbox: {
        defaultTitle: 'Screenshot',
        previous: 'Previous screenshot',
        next: 'Next screenshot',
        close: 'Close',
      },
    },
    others: {
      wayhost: {
        title: 'Wayhost, cloud platform',
        text: 'Platform then called Altara (2023-2024). FastAPI microservices: domain names and DNS zones through OpenStack, virtual and physical servers, payment. Automated provisioning (SSH keys deployed when servers are created) and a secured GitLab CI/CD pipeline.',
        context: 'At AXETAG',
      },
      axmaril: {
        title: 'Axmaril, digital vault',
        text: 'Secure vault sharing, from requirements specification to production, and a Go sidecar agent that delivers secrets to third-party applications, with a cache for high availability.',
        context: 'At AXETAG',
      },
      dac: {
        title: 'DAC Advice, multichannel e-commerce',
        text: 'Telegram bot and Angular web application on a single FastAPI API (catalogue, cart), MongoDB database.',
        context: 'At DAC Advice',
      },
      exiola: {
        title: 'Exiola, legal chatbot',
        text: 'Assistant for a law firm on Telegram and WhatsApp (Botpress). FastAPI / MongoDB API to index documents, answers generated with OpenAI, Angular administration platform.',
        context: 'At Exiola',
      },
      insight: {
        title: 'Insight, clinic management',
        text: 'Management system for a clinic: billing of medical procedures and delivery of laboratory test results. Deployed for internal use.',
        context: 'At Insight',
      },
    },
  },
  career: {
    title: 'Career',
    present: 'present',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    projectLabel: 'Project:',
    entries: {
      qavaa: {
        what: 'Python Trainer (volunteer), Qavaa Innovate',
        where: 'Maryland, United States (remote)',
        note: 'Weekly 3-hour course for about thirty beginner learners: algorithms, data structures, OOP.',
      },
      'axetag-devsecops': {
        what: 'DevSecOps Developer, AXETAG SAS',
        where: 'Cergy, France',
        note: 'Go sidecar agent (Axmaril), Wayhost microservices, security stages in GitLab CI/CD pipelines.',
      },
      'axetag-2025': {
        what: 'Back-end Python Developer, AXETAG SAS',
        where: 'Cergy, France',
        note: 'Secure vault sharing for Axmaril, Flask and FastAPI REST APIs, unit tests.',
      },
      'axetag-2023': {
        what: 'Back-end Python Developer, AXETAG SAS',
        where: 'Cotonou, Benin (remote)',
        note: 'Flask / MongoDB REST API features for Axmaril and Altara (now Wayhost), maintenance, unit tests.',
      },
      dac: {
        what: 'Freelance Full-stack Developer, DAC Advice',
        where: 'Lomé, Togo',
        note: 'Multichannel e-commerce system: FastAPI API, Telegram bot, Angular interface.',
      },
      exiola: {
        what: 'Software Engineering Intern, Exiola',
        where: 'Lomé, Togo',
        note: 'Customer service chatbot (WhatsApp, Telegram), document indexing API, Angular administration platform.',
      },
      insight: {
        what: 'Software Developer Intern, Insight',
        where: 'Lomé, Togo',
        note: 'Clinic management system: billing of procedures and test results.',
      },
      estiam: {
        what: "Master's degree in Web & Mobile Development (e-Industries track), ÉSTIAM Metz",
        where: 'Metz, France',
        note: 'Web and mobile development.',
      },
      iai: {
        what: "Professional Bachelor's degree in Software Engineering and Information Systems (Licence pro Génie Logiciel et Systèmes d'Information), Institut Africain d'Informatique",
        where: 'Lomé, Togo',
        note: 'Software engineering and information systems.',
      },
    },
  },
  skills: {
    title: 'Skills',
    groups: {
      backend: 'Back-end',
      frontMobile: 'Front-end and mobile',
      data: 'Data',
      devsecops: 'DevSecOps and tools',
    },
    languagesTitle: 'Languages',
    languages: {
      fr: { name: 'French', level: 'native' },
      en: { name: 'English', level: 'professional' },
    },
    notionsTitle: 'Familiar with',
    notionsNote: 'Academic projects',
  },
  contact: {
    title: 'Contact',
    lead: 'Got a project or an opportunity? Get in touch.',
    emailAria: 'Email Arnaud',
    linkedinAria: "Arnaud Adjimon's LinkedIn profile",
    githubAria: "arnaud2210's GitHub profile",
    emailHint: '(email)',
    linkedinHint: '(LinkedIn profile)',
    githubHint: '(GitHub profile)',
  },
  footer: {
    role: 'Back-end Python / Full-stack Developer',
    location: 'Based in Metz, open to opportunities in France and abroad.',
    toTop: 'Back to top',
  },
};

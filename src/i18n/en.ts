import type { Dictionary } from './fr';

/** English texts. Same keys as `fr.ts`, enforced by the `Dictionary` type. */
export const en: Dictionary = {
  meta: {
    title: 'Arnaud Adjimon',
    description:
      'Arnaud Adjimon, back-end Python / full-stack developer based in Metz: APIs and web and mobile apps, from business needs to production.',
  },
  og: {
    locale: 'en_US',
    imageAlt: 'Arnaud Adjimon, back-end Python / full-stack developer',
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
      'I design and manage digital solutions, starting with business challenges, from understanding requirements and making architectural decisions right through to the development and deployment of APIs and web and mobile applications. My aim is to deliver reliable, scalable solutions that are useful to the business.',
    seeProjects: 'View my projects',
    cv: 'Download my CV',
    photoAlt: 'Portrait of Arnaud Adjimon',
  },
  about: {
    title: 'About',
    text: "A back-end developer for 3 years with a Master's degree in web and mobile development, I have worked on vendor products (cybersecurity, cloud) as well as on projects for independent clients, with a particular focus on application security. I also share what I know: I teach a Python course to beginners.",
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
      mobileCaption: 'Management app (PWA): catalog, order tracking, dashboard',
      phonesAria: 'Management app screenshots',
      enlarge: 'Enlarge',
      shots: {
        vitrine: {
          caption: 'Ordering site (customers)',
          alt: 'Ordering site for customers: “Homemade natural juices” banner, search, category filters and juice cards with photo, price and add-to-cart button',
        },
        catalogue: {
          caption: 'Management app: catalog',
          alt: 'Catalog of the management app: list of juices with photo, price, volume and status, Edit and Delete buttons',
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
    caseLabels: {
      background: 'Background',
      role: 'My role',
      achievements: 'Achievements',
      result: 'Result',
      separator: ': ',
    },
    cases: {
      wayhost: {
        title: 'Wayhost, cloud platform',
        context: 'At AXETAG',
        background:
          'A platform designed by AXETAG with ITNET TECHNOLOGIES that lets businesses and professionals order and manage their infrastructure services (domains, DNS, virtual and physical servers) in one place, with automated provisioning.',
        role: 'Back-end Python developer, then DevSecOps, in a back-end team of about ten developers, on Altara (2023-2024), then on Wayhost, its migration and redesign (2025-2026).',
        achievements: [
          {
            label: 'Domain names',
            text: 'design of the REST API architecture, OpenStack integration for DNS zones, created automatically on purchase.',
          },
          {
            label: 'VPS servers',
            text: 'management of passwords and SSH keys, deployed as soon as a server is created.',
          },
          {
            label: 'Billing',
            text: 'invoices generated after payment and sent automatically by email.',
          },
          {
            label: 'Security and quality',
            text: 'analysis and fixing of CVEs (DefectDojo), code analysis with Bandit, proposal of OWASP ZAP for automated security testing, unit and integration tests of the authentication microservice with pytest.',
          },
        ],
        result:
          'In production at wayhost.cloud. End-to-end domain purchase (search, pricing, suggestions, cart, payment), DNS zones and domain details, VPS and SSH keys, spending tracking in the customer area.',
      },
      axmaril: {
        title: 'Axmaril, digital vault',
        context: 'At AXETAG',
        background:
          "A solution designed by AXETAG with ITNET TECHNOLOGIES to centralize, protect and share organizations' sensitive information (credentials, API keys, access rights, files). Applications get their secrets without storing them in their code or configuration.",
        role: 'Back-end Python developer, then DevSecOps. I carried out the work below, from needs and requirements through to architecture, technical choices and production release.',
        achievements: [
          {
            label: 'Axgent agent (Go, Linux servers)',
            text: 'a sidecar agent that acts as a gateway between the vault and third-party applications; they get their secrets without depending directly on the central REST API.',
          },
          {
            label: 'Cache',
            text: 'fewer calls to the central service, and secrets that stay available during a temporary outage.',
          },
          {
            label: 'Sharing',
            text: 'secrets shared with internal and external users; vaults shared between users, groups and LDAP accounts, with predefined permissions.',
          },
          { label: 'Testing', text: 'unit and integration tests of the API with pytest.' },
        ],
        result:
          'A commercial product, used by large corporations in France. Vault and secret sharing is in production, with group management. Axgent can be downloaded as a Linux binary: in their customer area, users create an agent and applications, assign vaults to applications, then link the applications to the agent.',
        ia: 'Axgent: requirements specification and architecture designed by me, code written with the assistance of Claude Code.',
      },
    },
    others: {
      dac: {
        title: 'DAC Advice, multichannel e-commerce',
        text: 'Multichannel e-commerce system: a Telegram bot and an Angular web application rely on a single FastAPI REST API (catalog, cart). I designed the back-end architecture (UML modeling, MongoDB database), developed the API, then integrated it into the bot and the web interface.',
        context: 'At DAC Advice',
      },
      exiola: {
        title: 'Exiola, legal chatbot',
        text: 'Customer service chatbot for a law firm, on WhatsApp and Telegram (Botpress). I designed the architecture (UML modeling) and developed the FastAPI / MongoDB REST API, which indexes the legal documents the chatbot draws on through OpenAI. I also built an Angular administration platform to submit training documents and send bulk messages to clients.',
        context: 'At Exiola',
      },
      insight: {
        title: 'Insight, clinic management',
        text: 'Clinic management web application with two modules: billing of medical procedures and tracking of laboratory test results. I built it with Django and PostgreSQL, with a Bootstrap interface and asynchronous interactions in AJAX. It is deployed for internal use.',
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
        note: 'Axgent agent in Go (Axmaril), Wayhost microservices, CVE analysis and fixing in GitLab CI/CD pipelines.',
      },
      'axetag-2025': {
        what: 'Back-end Python Developer, AXETAG SAS',
        where: 'Cergy, France',
        note: 'Vault sharing for Axmaril (Flask), then migration and redesign of Altara into Wayhost (FastAPI), unit tests.',
      },
      'axetag-2023': {
        what: 'Back-end Python Developer, AXETAG SAS',
        where: 'Cotonou, Benin (remote)',
        note: 'Flask / MongoDB REST API features for Axmaril (secret sharing) and Altara (now Wayhost), maintenance, unit tests.',
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
        note: 'Clinic management system: billing of procedures and tracking of laboratory tests.',
      },
      estiam: {
        what: "Master's degree in Web & Mobile Development (e-Industries track), ÉSTIAM Metz",
        where: 'Metz, France',
      },
      iai: {
        what: "Professional Bachelor's degree in Software Engineering and Information Systems (Licence pro Génie Logiciel et Systèmes d'Information), Institut Africain d'Informatique",
        where: 'Lomé, Togo',
      },
    },
  },
  skills: {
    title: 'Skills',
    groups: {
      backend: 'Back-end',
      frontMobile: 'Front-end and mobile',
      data: 'Data',
      devops: 'DevOps and cloud',
      security: 'Application security',
      ai: 'AI and integrations',
      quality: 'Quality and methods',
    },
    languagesTitle: 'Languages',
    languages: {
      fr: { name: 'French', level: 'native' },
      en: { name: 'English', level: 'professional' },
    },
    notionsTitle: 'Familiar with',
    notionsNote: "Academic projects, professional bachelor's and master's",
    learningTitle: 'Currently learning',
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

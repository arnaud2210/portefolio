# Portfolio d'Arnaud Adjimon

Portfolio d'une page, bilingue (français / anglais), d'Arnaud Adjimon, développeur back-end Python / Fullstack. Il présente son profil, ses projets, son parcours et ses compétences, et permet de le contacter.

Site statique construit avec [Astro](https://astro.build), sans service tiers à l'exécution.

## Aperçu

- Une page en défilement, sections : accueil, à propos, projets, parcours, compétences, contact.
- Deux langues, une URL par langue : `/fr/` et `/en/`. La racine `/` redirige vers la langue préférée.
- Thème sombre « bleu nuit », piste de design « Sobre ».
- Lisible sans JavaScript ; le JavaScript n'ajoute que du confort (menu mobile, navigation active, agrandissement des captures, mémorisation de la langue).

## Technologies et justification

| Choix                                                  | Pourquoi                                                                                                                                              |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Astro, sortie statique** (`output: 'static'`)        | Génère du HTML pur : rapide, sans serveur, hébergeable n'importe où (Vercel, Netlify, GitHub Pages, hébergeur dédié). Peu de JavaScript livré.        |
| **Routing i18n natif d'Astro**                         | Une page statique par langue (`/fr/`, `/en/`), `hreflang` et `<html lang>` corrects, sans bibliothèque de traduction.                                 |
| **JavaScript vanilla en modules TypeScript**           | Pas de framework d'interface : les interactions sont simples (quelques dizaines de lignes par module), aucune dépendance d'exécution n'est justifiée. |
| **TypeScript strict**                                  | Les dictionnaires FR et EN partagent le même type : une clé manquante dans une langue fait échouer la vérification.                                   |
| **Inter auto-hébergée** (`@fontsource-variable/inter`) | Pas de requête vers un CDN de polices (vie privée, performance, CSP). Seuls les sous-ensembles latin et latin étendu sont déclarés.                   |
| **`astro:assets`**                                     | Images converties en AVIF / WebP aux tailles utiles (`srcset`), dimensions explicites, métadonnées retirées à la sortie.                              |
| **CSS natif avec variables**                           | Pas de framework CSS ni de préprocesseur : les tokens de design vivent dans `src/styles/tokens.css`.                                                  |

### Dépendances

Dépendances d'exécution (build) :

- `astro` : générateur de site statique.
- `@fontsource-variable/inter` : fichiers de police Inter (licence OFL).

Outils de développement :

- `typescript`, `@astrojs/check` : typage strict, y compris des fichiers `.astro`.
- `eslint`, `@eslint/js`, `typescript-eslint`, `eslint-plugin-astro`, `globals` : lint.
- `prettier`, `prettier-plugin-astro` : formatage.

Les versions exactes sont figées par `package-lock.json` (installation reproductible avec `npm ci`). Stylelint n'est pas utilisé : Prettier formate déjà le CSS et l'outil ajouterait une centaine de paquets pour un projet de cette taille.

## Décisions d'architecture

- **i18n** : tous les textes sont dans `src/i18n/fr.ts` et `src/i18n/en.ts` (mêmes clés, typées). Les composants ne contiennent aucun texte en dur. Les données non traduisibles (liens, identifiants, noms de technologies, icônes) sont dans `src/data/`.
- **Choix de langue** : la page racine lit la langue mémorisée (`localStorage`, avec `try/catch`), sinon `navigator.language` (français si la langue commence par `fr`, anglais sinon), puis redirige. Arriver directement sur `/fr/` ou `/en/` ne redirige jamais. Un clic sur le sélecteur de langue mémorise le choix. Sans JavaScript : la racine propose deux liens et redirige vers `/fr/` via `<noscript>`.
- **Thème** : bleu nuit uniquement, valeurs dans `src/styles/tokens.css`. Aucune couleur n'est écrite en dur ailleurs dans le CSS.
- **Composants** : un composant par section (`Hero`, `About`, `Projects`, `Career`, `Skills`, `Contact`) plus `Header` et `Footer`, et des briques (`FeaturedProject`, `OtherProject`, `Showcase`, `Lightbox`, `Timeline`, `TagList`, `LangSwitch`, `Icon`, `Sprite`). Composants `.astro` uniquement : rendu au build. Les styles de composant sont dans `src/styles/`.
- **Icônes** : sprite SVG inline (`src/components/Sprite.astro`) appelé par `<Icon name="…" />`.
- **Images** : sources dans `src/assets/`, optimisées au build. L'agrandissement des captures charge une version WebP pleine taille uniquement à l'ouverture.
- **Sécurité des ressources** : aucun script ni style inline généré par le site (feuilles de style et scripts toujours externes), donc compatible avec une CSP stricte. Liens externes en `rel="noopener noreferrer"`.
- **Pas de suivi** : aucun outil d'analyse, aucun cookie, aucune ressource tierce chargée à l'exécution.
- **Accessibilité** : contrastes WCAG AA, navigation clavier, focus visible, lien d'évitement, `prefers-reduced-motion` respecté, menu mobile avec focus piégé.
- **Hébergement** : prévu chez Wayhost (détails à venir). Le site est servi à la racine du domaine : les chemins sont donc absolus (`/favicon.svg`, `/cv/…`). Un déploiement dans un sous-dossier demanderait de configurer `base` dans Astro et d'adapter ces chemins. `SITE_URL` doit être défini au build de production (voir plus bas).
- **Limite connue du menu mobile** : le menu est replié par une feuille de style conditionnée à `(scripting: enabled)`. Si le JavaScript est actif mais que le bundle ne se charge pas (réseau coupé en cours de chargement), le bouton du menu ne répond pas. Risque faible, accepté.

## Structure des dossiers

```
.
├── astro.config.mjs        Configuration Astro (statique, i18n)
├── eslint.config.js        Configuration ESLint
├── public/                 Fichiers servis tels quels (favicon, cv/)
├── src/
│   ├── assets/             Images sources (optimisées au build)
│   ├── components/         Composants .astro (sections, briques, sprite d'icônes)
│   ├── data/               Données non traduisibles (liens, projets, parcours, compétences)
│   ├── i18n/               Dictionnaires fr.ts / en.ts et utilitaires de langue
│   ├── layouts/Base.astro  Gabarit : <head>, hreflang, sprite
│   ├── pages/
│   │   ├── index.astro     Racine : redirection vers la langue préférée
│   │   └── [lang]/         Page du site (une par langue)
│   ├── scripts/            JavaScript vanilla, modules TypeScript
│   └── styles/             tokens.css, base.css, fonts.css et styles de composant
├── CHANGELOG.md
└── THIRD_PARTY_NOTICES.md  Licences des icônes et de la police
```

## Prérequis

- Node.js 22.23.4 ou plus récent (exigence d'Astro 7, aligné sur `engines` de `package.json` ; `.nvmrc` fourni) et npm.

## Commandes

```sh
npm ci              # installe les dépendances aux versions figées
npm run dev         # serveur de développement (http://localhost:4321)
npm run build       # génère le site statique dans dist/
npm run preview     # sert dist/ en local
npm run lint        # ESLint + vérification des types (astro check)
npm run check       # vérification des types seule
npm run format      # formate le code avec Prettier
npm run format:check  # vérifie le formatage sans modifier
```

### Variable d'environnement

`SITE_URL` (facultative, par exemple `https://exemple.fr`) : lue à la compilation pour produire des URL absolues dans les balises `hreflang` et `canonical`. Sans elle, les liens sont relatifs. À définir pour le build de production.

## CV (PDF)

Les boutons « Télécharger mon CV » servent le CV de la langue de la page :

- `/cv/arnaud-adjimon-cv-fr.pdf` (page française),
- `/cv/arnaud-adjimon-cv-en.pdf` (page anglaise).

Les deux PDF sont versionnés dans `public/cv/` et publiés tels quels. Ils contiennent le numéro de téléphone (décision d'Arnaud) ; celui-ci ne figure jamais dans les pages HTML.

## Conventions

- **Commits** : [Conventional Commits](https://www.conventionalcommits.org/) en anglais (`feat:`, `fix:`, `style:`, `docs:`, `chore:`), petits et ciblés.
- **Branches** : `main` (production, stable), `dev` (intégration), branches courtes `feat/…`, `fix/…`, `docs/…` créées depuis `dev`.
- **Versions** : [SemVer](https://semver.org/lang/fr/) ; `0.x` pour les premiers jets, `1.0.0` à la mise en ligne. Historique dans `CHANGELOG.md`.
- **Mise en production** : toute mise en production de `main` est validée par Arnaud.
- **Qualité** : `npm run lint` et `npm run format:check` doivent passer avant chaque commit.

## Sécurité

Rien de confidentiel n'est versionné dans ce dépôt : pas de secret, de clé, de fichier `.env` ni de donnée personnelle superflue. Les images publiées ne contiennent aucune métadonnée (EXIF) et les captures de projets ont leurs données personnelles et commerciales floutées. Le numéro de téléphone n'apparaît pas sur le site ; il figure uniquement dans les CV PDF publiés (`public/cv/`), par décision d'Arnaud. Les coordonnées affichées (e-mail, LinkedIn, GitHub) sont publiques par choix.

Pour signaler un problème de sécurité, écrire à l'adresse indiquée dans la section Contact du site.

## Intégration et déploiement continus

À venir (PortOps).

## Licence

Tous droits réservés © Arnaud Adjimon, sauf avis contraire. Les icônes et la police tierces restent soumises à leurs propres licences (voir `THIRD_PARTY_NOTICES.md`).

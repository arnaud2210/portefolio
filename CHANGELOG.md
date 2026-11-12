# Changelog

Toutes les modifications notables de ce projet sont consignées ici.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le projet suit le [versionnement sémantique](https://semver.org/lang/fr/).

## [Unreleased]

### Ajouté

- Projet Astro statique avec TypeScript strict, ESLint, Prettier et vérification des types.
- Routing i18n `/fr/` et `/en/`, page racine qui redirige vers la langue préférée (choix mémorisé), balises `hreflang`.
- Dictionnaires `fr.ts` et `en.ts` typés ; aucun texte en dur dans les composants.
- Page d'une section par composant : en-tête (menu mobile, navigation active, barre de progression), accueil, à propos, projets (projet mis en avant, vitrine de captures, agrandissement), parcours, compétences, contact, pied de page.
- Thème bleu nuit, tokens de design dans `src/styles/tokens.css`.
- Images optimisées (AVIF / WebP) via `astro:assets`, police Inter auto-hébergée.
- Boutons de CV pointant vers `/cv/arnaud-adjimon-cv-fr.pdf` et `/cv/arnaud-adjimon-cv-en.pdf` (fichiers à fournir).
- README et notices des licences tierces.

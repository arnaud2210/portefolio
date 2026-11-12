import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['src/scripts/**/*.ts'],
    languageOptions: { globals: globals.browser },
  },
  {
    // Référence de types générée par Astro : la syntaxe triple slash est la forme documentée.
    files: ['src/env.d.ts'],
    rules: { '@typescript-eslint/triple-slash-reference': 'off' },
  },
  {
    files: ['*.mjs', '*.js'],
    languageOptions: { globals: globals.node },
  },
];

import type { EntryId } from './career';
import type { Dictionary } from '../i18n';
import { stackTags, type StackItem } from './stack';

export type ShortProjectId = keyof Dictionary['projects']['others'];
export type CaseProjectId = keyof Dictionary['projects']['cases'];
export type OtherProjectId = ShortProjectId | CaseProjectId;

export interface ProjectLink {
  entry: EntryId;
  /** Libellé de la période affiché dans la ligne de contexte. */
  period: string;
}

interface ProjectBase {
  /** Nom court utilisé dans les liens du parcours (« Projet : Axmaril »). */
  shortName: string;
  /** Nom de l'employeur ou du client, repris dans le libellé d'accessibilité des périodes. */
  employer: string;
  url?: string;
  domain?: string;
  when: string;
  stack: StackItem[];
  links: ProjectLink[];
}

/** Fiche courte : un paragraphe de description. */
export interface ShortProject extends ProjectBase {
  format: 'short';
  id: ShortProjectId;
}

/** Fiche au format B : contexte, rôle, réalisations, résultat. */
export interface CaseProject extends ProjectBase {
  format: 'case';
  id: CaseProjectId;
}

export type OtherProject = ShortProject | CaseProject;

export const featuredProject = {
  url: 'https://layoko-juice.onrender.com',
  domain: 'layoko-juice.onrender.com',
  stack: stackTags.commandes,
};

export const otherProjects: OtherProject[] = [
  {
    format: 'case',
    id: 'wayhost',
    shortName: 'Wayhost',
    employer: 'AXETAG',
    url: 'https://wayhost.cloud/fr',
    domain: 'wayhost.cloud',
    when: '2023-2026',
    stack: stackTags.wayhost,
    links: [
      { entry: 'axetag-2023', period: '2023-2024' },
      { entry: 'axetag-2025', period: '2025' },
      { entry: 'axetag-devsecops', period: '2025-2026' },
    ],
  },
  {
    format: 'case',
    id: 'axmaril',
    shortName: 'Axmaril',
    employer: 'AXETAG',
    url: 'https://axmaril.com/fr',
    domain: 'axmaril.com',
    when: '2023-2026',
    stack: stackTags.axmaril,
    links: [
      { entry: 'axetag-2023', period: '2023-2024' },
      { entry: 'axetag-2025', period: '2025' },
      { entry: 'axetag-devsecops', period: '2025-2026' },
    ],
  },
  {
    format: 'short',
    id: 'dac',
    shortName: 'DAC Advice',
    employer: 'DAC Advice',
    when: '2024',
    stack: stackTags.dac,
    links: [{ entry: 'dac', period: '2024' }],
  },
  {
    format: 'short',
    id: 'exiola',
    shortName: 'Exiola',
    employer: 'Exiola',
    when: '2023',
    stack: stackTags.exiola,
    links: [{ entry: 'exiola', period: '2023' }],
  },
  {
    format: 'short',
    id: 'insight',
    shortName: 'Insight',
    employer: 'Insight',
    when: '2022',
    stack: stackTags.insight,
    links: [{ entry: 'insight', period: '2022' }],
  },
];

export function getProjectShortName(id: OtherProjectId): string {
  const project = otherProjects.find((item) => item.id === id);
  if (!project) throw new Error(`Projet inconnu : ${id}`);
  return project.shortName;
}

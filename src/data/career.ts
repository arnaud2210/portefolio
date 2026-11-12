import type { Dictionary } from '../i18n';
import type { OtherProjectId } from './projects';

export type EntryId = keyof Dictionary['career']['entries'];

export interface CareerEntry {
  id: EntryId;
  from: string;
  /** Absent : poste en cours (affiche « aujourd'hui » / « present »). */
  to?: string;
  current?: boolean;
  /** Projets liés (liens parcours vers projets). */
  projects?: OtherProjectId[];
  /** Ancre `#t-…` posée sur l'élément : cible des liens depuis les projets. */
  anchor?: boolean;
}

export const experience: CareerEntry[] = [
  { id: 'qavaa', from: '10/2026', current: true, anchor: true },
  {
    id: 'axetag-devsecops',
    from: '10/2025',
    to: '09/2026',
    projects: ['axmaril', 'wayhost'],
    anchor: true,
  },
  { id: 'axetag-2025', from: '01/2025', to: '09/2025', projects: ['axmaril'], anchor: true },
  {
    id: 'axetag-2023',
    from: '10/2023',
    to: '09/2024',
    projects: ['axmaril', 'wayhost'],
    anchor: true,
  },
  { id: 'dac', from: '02/2024', to: '04/2024', projects: ['dac'], anchor: true },
  { id: 'exiola', from: '06/2023', to: '09/2023', projects: ['exiola'], anchor: true },
  { id: 'insight', from: '06/2022', to: '07/2022', projects: ['insight'], anchor: true },
];

export const education: CareerEntry[] = [
  { id: 'estiam', from: '2024', to: '2026' },
  { id: 'iai', from: '2020', to: '2023' },
];

/** Période « 10/2023 - 09/2024 » d'une entrée, avec `present` pour un poste en cours. */
export function formatRange(entry: CareerEntry, present: string): string {
  return `${entry.from} - ${entry.to ?? present}`;
}

export function getEntry(id: EntryId): CareerEntry {
  const entry = [...experience, ...education].find((item) => item.id === id);
  if (!entry) throw new Error(`Entrée de parcours inconnue : ${id}`);
  return entry;
}

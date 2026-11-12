import type { Dictionary } from '../i18n';
import type { IconName } from '../components/icon-names';

/**
 * Une pastille de technologie. `label` est un nom propre identique dans toutes
 * les langues ; `term` référence un terme traduit (`terms` des dictionnaires).
 */
export interface StackItem {
  icon?: IconName;
  label?: string;
  term?: keyof Dictionary['terms'];
}

export const stackTags = {
  commandes: [
    { icon: 'fastapi', label: 'FastAPI' },
    { icon: 'react', label: 'React Native' },
    { icon: 'docker', label: 'Docker' },
    { icon: 'gitlab', label: 'GitLab CI/CD' },
    { icon: 'discord', label: 'Discord' },
    { icon: 'mongodb', label: 'MongoDB' },
  ],
  wayhost: [
    { icon: 'fastapi', label: 'FastAPI' },
    { icon: 'openstack', label: 'OpenStack' },
    { icon: 'gitlab', label: 'GitLab CI/CD' },
    { icon: 'blocks', label: 'Microservices' },
  ],
  axmaril: [{ icon: 'go', label: 'Go' }, { label: 'Sidecar' }],
  dac: [
    { icon: 'fastapi', label: 'FastAPI' },
    { icon: 'angular', label: 'Angular' },
    { icon: 'mongodb', label: 'MongoDB' },
    { icon: 'telegram', label: 'Telegram' },
  ],
  exiola: [
    { icon: 'fastapi', label: 'FastAPI' },
    { icon: 'mongodb', label: 'MongoDB' },
    { icon: 'angular', label: 'Angular' },
    { icon: 'bot', label: 'Botpress' },
    { icon: 'openai', label: 'OpenAI' },
  ],
  insight: [
    { icon: 'django', label: 'Django' },
    { icon: 'postgresql', label: 'PostgreSQL' },
    { icon: 'sync', label: 'Ajax' },
    { icon: 'bootstrap', label: 'Bootstrap' },
  ],
} satisfies Record<string, StackItem[]>;

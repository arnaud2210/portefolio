import type { Dictionary } from '../i18n';
import type { StackItem } from './stack';

export type SkillGroupId = keyof Dictionary['skills']['groups'];

export const skillGroups: { id: SkillGroupId; items: StackItem[] }[] = [
  {
    id: 'backend',
    items: [
      { icon: 'python', label: 'Python' },
      { icon: 'go', label: 'Go' },
      { icon: 'fastapi', label: 'FastAPI' },
      { icon: 'flask', label: 'Flask' },
      { icon: 'django', label: 'Django' },
      { icon: 'api', term: 'restApi' },
      { icon: 'blocks', label: 'Microservices' },
    ],
  },
  {
    id: 'frontMobile',
    items: [
      { icon: 'angular', label: 'Angular' },
      { icon: 'react', label: 'React Native' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'sync', label: 'AJAX' },
      { icon: 'telegram', label: 'Telegram Bot API' },
      { icon: 'whatsapp', label: 'WhatsApp API' },
    ],
  },
  {
    id: 'data',
    items: [
      { icon: 'mongodb', label: 'MongoDB' },
      { icon: 'postgresql', label: 'PostgreSQL' },
      { icon: 'mysql', label: 'MySQL' },
      { icon: 'mariadb', label: 'MariaDB' },
    ],
  },
  {
    id: 'devsecops',
    items: [
      { icon: 'docker', label: 'Docker' },
      { icon: 'linux', label: 'Linux' },
      { icon: 'gitlab', label: 'GitLab CI/CD' },
      { icon: 'openstack', label: 'OpenStack' },
      { icon: 'terminal', label: 'SSH' },
      { icon: 'shield', label: 'Semgrep' },
      { icon: 'shield', label: 'Bandit' },
      { icon: 'trivy', label: 'Trivy' },
      { icon: 'owasp', label: 'OWASP ZAP' },
      { icon: 'shield', label: 'DefectDojo' },
      { icon: 'shield', label: 'Open Policy Agent' },
      { icon: 'pytest', label: 'pytest' },
      { icon: 'openai', label: 'OpenAI API' },
      { icon: 'bot', label: 'Botpress' },
      { icon: 'claude', label: 'Claude Code' },
      { icon: 'sync', label: 'Agile' },
      { icon: 'uml', label: 'UML' },
    ],
  },
];

/** Codes affichés dans les badges de langues (pas de drapeaux). */
export const spokenLanguages = [
  { id: 'fr', code: 'FR' },
  { id: 'en', code: 'EN' },
] as const;

export const notions: StackItem[] = [
  { icon: 'java', label: 'Java' },
  { icon: 'springboot', label: 'Spring Boot' },
];

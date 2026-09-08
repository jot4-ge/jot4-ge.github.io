import type { IconType } from 'react-icons';
import {
  SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiCss3,
  SiPython, SiC, SiSupabase, SiPostgresql,
  SiGooglecloud, SiDocker, SiLinux, SiGit, SiMarkdown,
  SiGooglegemini,
} from 'react-icons/si';
import { LuTerminal, LuInfinity } from 'react-icons/lu';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import type { TranslationKey } from '../i18n/translations';

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

interface Group {
  titleKey: TranslationKey;
  items: Tech[];
}

const GROUPS: Group[] = [
  {
    titleKey: 'st_ai',
    items: [
      { name: 'Google Gemini', icon: SiGooglegemini, color: '#8E75B2' },
      { name: 'Claude Code', icon: LuTerminal, color: '#D97757' },
    ],
  },
  {
    titleKey: 'st_front',
    items: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#e8e6e1' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    titleKey: 'st_back',
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'Supabase', icon: SiSupabase, color: '#3FCF8E' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    titleKey: 'st_devops',
    items: [
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'CI/CD', icon: LuInfinity, color: '#57c96a' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Markdown', icon: SiMarkdown, color: '#e8e6e1' },
    ],
  },
];

function TechBadge({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <span className="tech" style={{ ['--tech-color' as string]: tech.color }}>
      <span className="tech-ic"><Icon /></span>
      {tech.name}
    </span>
  );
}

function StackGroup({ group }: { group: Group }) {
  const { t } = useApp();
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="stack-group reveal" ref={ref}>
      <div className="grp-title">{t(group.titleKey)}</div>
      <div className="stack-items">
        {group.items.map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  const { t } = useApp();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="stack">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow"><b>#</b> {t('eb_stack')}</p>
          <h2 className="title">{t('stack_title')}</h2>
          <p className="stack-intro">{t('stack_intro')}</p>
        </div>

        <div className="stack-groups">
          {GROUPS.map((g) => (
            <StackGroup key={g.titleKey} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}

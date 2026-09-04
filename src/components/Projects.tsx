import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import { RichText } from './RichText';
import type { TranslationKey } from '../i18n/translations';

interface Project {
  nameKey: TranslationKey;
  tagKey: TranslationKey;
  descKey: TranslationKey;
  roleKey: TranslationKey;
  highlightKey: TranslationKey;
  contextKey: TranslationKey;
  stack: string[];
  shot: string | null;
  code: string;
  live: string;
  reverse?: boolean;
}

const PROJECTS: Project[] = [
  {
    nameKey: 'cd_name',
    tagKey: 'cd_tag',
    descKey: 'cd_desc',
    roleKey: 'cd_role',
    highlightKey: 'cd_highlight',
    contextKey: 'cd_context',
    stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'IA / NLP', 'Vercel'],
    shot: '/shots/contradito.png',
    code: 'https://github.com/unb-mds/2026.1-ContraDito',
    live: 'https://contradito.vercel.app/',
  },
  {
    nameKey: 'kn_name',
    tagKey: 'kn_tag',
    descKey: 'kn_desc',
    roleKey: 'kn_role',
    highlightKey: 'kn_highlight',
    contextKey: 'kn_context',
    stack: ['React', 'TypeScript', 'PWA', 'Vite', 'Vercel'],
    shot: '/shots/kinetic.png',
    code: 'https://github.com/jot4-ge/kinetic',
    live: 'https://kinetic-plum.vercel.app/hoje',
    reverse: true,
  },
];

function ProjectRow({ project }: { project: Project }) {
  const { t } = useApp();
  const rowRef = useReveal<HTMLDivElement>();
  const tiltRef = useTilt<HTMLDivElement>(5);

  return (
    <div className={`project reveal${project.reverse ? ' reverse' : ''}`} ref={rowRef}>
      <div className="project-media" ref={tiltRef}>
        {project.shot ? (
          <img className="project-shot" src={project.shot} alt={t(project.nameKey)} loading="lazy" />
        ) : (
          <div className="project-shot-ph">screenshot em breve</div>
        )}
      </div>

      <div className="project-body">
        <div className="project-context">{t(project.contextKey)}</div>
        <h3 className="project-name">{t(project.nameKey)}</h3>
        <div className="project-tag">{t(project.tagKey)}</div>
        <p className="project-desc"><RichText text={t(project.descKey)} /></p>

        <div className="project-block">
          <div className="lbl">{t('p_role')}</div>
          <div className="val">{t(project.roleKey)}</div>
        </div>

        <div className="project-highlight">
          <div className="lbl">{t('p_highlight')}</div>
          <div className="val">{t(project.highlightKey)}</div>
        </div>

        <div className="project-block">
          <div className="lbl">{t('p_stack')}</div>
          <div className="stack-badges">
            {project.stack.map((s) => (
              <span className="stack-badge" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          <a className="btn btn-line" href={project.code} target="_blank" rel="noopener noreferrer">
            <span className="prompt">&gt;_</span> {t('p_code')}
          </a>
          <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
            {t('p_live')}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useApp();
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects">
      <div className="wrap">
        <div className="reveal" ref={headRef}>
          <p className="eyebrow"><b>#</b> {t('eb_projects')}</p>
          <h2 className="title">{t('projects_title')}</h2>
        </div>

        <div className="projects-list">
          {PROJECTS.map((p) => (
            <ProjectRow key={p.nameKey} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

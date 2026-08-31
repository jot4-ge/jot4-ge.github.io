export type Lang = 'pt' | 'en';

export const translations = {
  pt: {
    nav_about: '// sobre',
    nav_proj: '// projetos',
    nav_ai: '// ia & dados',
    nav_stack: '// stack',
    nav_tl: '// trajetória',
    nav_contact: '// contato',

    status: 'disponível para estágio',
    k1: 'FULLSTACK',
    k2: 'IA & DADOS',
    k3: 'APIS',
    philosophy: 'planejo antes de codar — mas acredito que a gente aprende agindo',
    hero_sub:
      'Construo **aplicações web** e **sistemas de IA** — do frontend ao pipeline de dados. Estudante de Engenharia de Software na UnB, movido por curiosidade e código limpo.',
    cta_proj: 'ver projetos →',
    cta_contact: 'contato',
    m_projects: 'projetos_reais',
    m_tests: 'testes_auto',
    m_langs: 'linguagens',
    m_energy: 'energéticos_por_commit',
  },
  en: {
    nav_about: '// about',
    nav_proj: '// projects',
    nav_ai: '// ai & data',
    nav_stack: '// stack',
    nav_tl: '// journey',
    nav_contact: '// contact',

    status: 'open to internship',
    k1: 'FULLSTACK',
    k2: 'AI & DATA',
    k3: 'APIS',
    philosophy: 'I plan before I code — but I believe we learn by doing',
    hero_sub:
      'I build **web applications** and **AI systems** — from the frontend to the data pipeline. Software Engineering student at UnB, driven by curiosity and clean code.',
    cta_proj: 'see projects →',
    cta_contact: 'contact',
    m_projects: 'real_projects',
    m_tests: 'auto_tests',
    m_langs: 'languages',
    m_energy: 'energy_drinks_per_commit',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['pt'];

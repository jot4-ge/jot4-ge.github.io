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

    eb_about: 'um pouco sobre mim',
    about_title: 'Quem está por trás do código.',
    about_1:
      'Sou o **João Guilherme**, 21 anos, **estudante de Engenharia de Software na UnB**. Comecei a programar ainda na escola, na aula de robótica, entre um Arduino e minhas primeiras linhas de HTML, CSS e JavaScript. A curiosidade nunca mais parou.',
    about_2:
      'Atuo como **desenvolvedor fullstack**: fui **Product Owner e dev** no ContraDito, uma plataforma de dados real com pipeline de IA, e desenvolvo sozinho o **Kinetic**, do conceito à arquitetura. Também sou **monitor de Matemática Discreta** na UnB — ajudar os colegas a destravarem afia meu gosto por explicar e resolver problemas.',
    about_3:
      'Fora do código, me movo por **disciplina**: treino, pratico **artes marciais** e já joguei muitos esportes — campeão de futsal e medalhista no atletismo. Essa mentalidade de treino é a mesma que levo pra engenharia: consistência, evolução e vontade de vencer o próximo desafio.',
    sp_t: '// o que escuto enquanto codo',
    sp_m: 'meu perfil no Spotify →',
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

    eb_about: 'a bit about me',
    about_title: "Who's behind the code.",
    about_1:
      "I'm **João Guilherme**, 21, a **Software Engineering student at UnB**. I started coding back in school, in robotics class, between Arduino and my first lines of HTML, CSS and JavaScript. The curiosity never stopped since.",
    about_2:
      "I work as a **fullstack developer**: I was **Product Owner and dev** on ContraDito, a real data platform with an AI pipeline, and I solo-develop **Kinetic**, from concept to architecture. I'm also a **Discrete Mathematics teaching assistant** at UnB — helping classmates get unstuck sharpens my love for explaining and solving problems.",
    about_3:
      'Outside of code, I run on **discipline**: I train, practice **martial arts** and have played many sports — futsal champion and athletics medalist. That training mindset is the same one I bring to engineering: consistency, growth and the drive to beat the next challenge.',
    sp_t: '// what I listen to while coding',
    sp_m: 'my Spotify profile →',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['pt'];

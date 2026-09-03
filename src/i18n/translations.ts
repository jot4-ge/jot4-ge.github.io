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
      'Fora do código, me movo por **disciplina**: treino, pratico **artes marciais** e já joguei muitos esportes — campeão de futsal e medalhista no atletismo. E, seja no treino ou codando de madrugada, **sempre tem uma playlist rodando** — música é o combustível que mantém o ritmo. Essa mentalidade de treino é a mesma que levo pra engenharia: consistência, evolução e vontade de vencer o próximo desafio.',
    sp_t: '// no loop enquanto codo',
    sp_now: 'em destaque',
    sp_m: 'ver no Spotify →',

    eb_projects: 'o que eu construí',
    projects_title: 'Projetos que resolvem problemas reais.',
    p_role: 'meu papel',
    p_stack: 'stack',
    p_highlight: 'destaque técnico',
    p_code: 'ver código',
    p_live: 'ver ao vivo →',

    cd_name: 'ContraDito',
    cd_tag: 'Transparência parlamentar com dados e IA',
    cd_desc:
      'Plataforma que cruza o que os parlamentares brasileiros **dizem** com **como votam**. Reúne discursos, votações e proposições da Câmara e do Senado numa interface limpa e neutra — mais de **887 parlamentares**, **53 mil discursos** e **51 mil votos** abertos para consulta.',
    cd_role: 'Product Owner e desenvolvedor fullstack — conduzi o produto, a extração de dados e a API, e atuei no frontend.',
    cd_highlight:
      'Cruzar dezenas de milhares de discursos e votos estourava a memória do ambiente. Reestruturei o processamento em lotes, liberando memória a cada etapa e transformando um build que quebrava num fluxo estável e reprodutível.',

    kn_name: 'Kinetic',
    kn_tag: 'PWA de rotina, do conceito à arquitetura',
    kn_desc:
      'Meu laboratório de produto: um **PWA completo** para organizar rotina, instalável e com funcionamento offline como um app nativo. Nasceu de uma necessidade real e virou um projeto onde exercito produto, design e engenharia de ponta a ponta.',
    kn_role: 'Projeto solo — assumi todos os papéis: Product Owner, identidade visual, interface e toda a implementação.',
    kn_highlight:
      'Construí a camada offline que faz o app funcionar sem conexão e se comportar como nativo no celular, com estado persistente e experiência instalável (PWA).',
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
      'Outside of code, I run on **discipline**: I train, practice **martial arts** and have played many sports — futsal champion and athletics medalist. And whether training or coding late at night, **there is always a playlist going** — music is the fuel that keeps the rhythm. That training mindset is the same one I bring to engineering: consistency, growth and the drive to beat the next challenge.',
    sp_t: '// on loop while I code',
    sp_now: 'featured',
    sp_m: 'open in Spotify →',

    eb_projects: 'what I have built',
    projects_title: 'Projects that solve real problems.',
    p_role: 'my role',
    p_stack: 'stack',
    p_highlight: 'technical highlight',
    p_code: 'view code',
    p_live: 'view live →',

    cd_name: 'ContraDito',
    cd_tag: 'Parliamentary transparency with data and AI',
    cd_desc:
      'A platform that cross-references what Brazilian lawmakers **say** with **how they vote**. It gathers speeches, votes and bills from the House and Senate in a clean, neutral interface — over **887 lawmakers**, **53k speeches** and **51k votes** open to the public.',
    cd_role: 'Product Owner and fullstack developer — I led the product, data extraction and the API, and worked on the frontend.',
    cd_highlight:
      'Cross-referencing tens of thousands of speeches and votes was blowing past the environment memory. I restructured the processing into batches, freeing memory at each step and turning a failing build into a stable, reproducible pipeline.',

    kn_name: 'Kinetic',
    kn_tag: 'A routine PWA, from concept to architecture',
    kn_desc:
      'My product lab: a **full PWA** to organize routines, installable and working offline like a native app. It started from a real need and became where I exercise product, design and engineering end to end.',
    kn_role: 'Solo project — I took on every role: Product Owner, visual identity, interface and the entire implementation.',
    kn_highlight:
      'I built the offline layer that lets the app work without a connection and behave like a native app on mobile, with persistent state and an installable experience (PWA).',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['pt'];

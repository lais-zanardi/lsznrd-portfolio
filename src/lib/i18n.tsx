import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, string | string[]>;

const dictionaries: Record<Lang, Dict> = {
  pt: {
    "nav.intro": "Intro",
    "nav.curriculum": "Currículo",
    "nav.projects": "Projetos",
    "nav.skills": "Skills",
    "nav.academic": "Acadêmico",
    "nav.certs": "Certificados",
    "nav.events": "Eventos",
    "nav.contact": "Contato",

    "hero.tag": "Estudante · Desenvolvimento de Software · 2026",
    "hero.title.part1": "CONSTRUINDO O",
    "hero.title.future": "FUTURO",
    "hero.title.part2": "COM CÓDIGO.",
    "hero.desc":
      "Laís Zanardi Inocêncio — estudante de Desenvolvimento de Software na Fatec SJC e estagiária na Ericsson.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Entrar em contato",
    "hero.meta.status.label": "Status",
    "hero.meta.status.value": "Estagiária na Ericsson",
    "hero.meta.region.label": "Região",
    "hero.meta.region.value": "São José dos Campos/SP",

    "intro.tag": "// Apresentação",
    "intro.title": "Lógica, inovação e soluções eficientes.",
    "intro.desc":
      "Sou Laís Zanardi Inocêncio, estudante de Desenvolvimento de Software na Fatec São José dos Campos e estagiária na Ericsson. Possuo forte interesse na criação de soluções eficientes e gerenciamento de repositórios, buscando sempre aliar a lógica acadêmica às inovações e ferramentas do mercado corporativo.",
    "intro.info.course": "Curso",
    "intro.info.course.value": "Desenv. de Software",
    "intro.info.institution": "Instituição",
    "intro.info.institution.value": "Fatec SJC",
    "intro.info.period": "Período",
    "intro.info.period.value": "2025 — Atual",
    "intro.info.status": "Conclusão",
    "intro.info.status.value": "Em curso",
    "intro.goals.academic.title": "Objetivos Acadêmicos",
    "intro.goals.academic.desc":
      "Aprofundar conhecimentos em arquitetura de software e novas tecnologias, aplicando a teoria em projetos práticos e colaborativos.",
    "intro.goals.professional.title": "Objetivos Profissionais",
    "intro.goals.professional.desc":
      "Desenvolver soluções escaláveis e eficientes, evoluindo na carreira de desenvolvimento e contribuindo para o crescimento tecnológico da empresa.",
    "intro.areas.title": "Áreas de Interesse",

    "cv.tag": "// Currículo",
    "cv.title": "Formação & Trajetória.",
    "cv.section.academic": "Formação Acadêmica",
    "cv.section.courses": "Cursos Complementares",
    "cv.section.certs": "Certificações em Destaque",
    "cv.inProgress": "Em curso",

    "projects.tag": "// Projetos Selecionados",
    "projects.title": "Projetos acadêmicos.",
    "projects.featured": "(01) DESTAQUE · 2025",
    "projects.view": "Repositório",
    "projects.label.problem": "Problema",
    "projects.label.solution": "Solução",
    "projects.label.tech": "Tecnologias",
    "projects.label.challenges": "Desafios técnicos",
    "projects.label.results": "Resultados",
    "projects.p1.context": "Projeto 1 · 2025",
    "projects.p1.desc": "Sistema de Portfólio Dinâmico com Node.js e Sequelize.",
    "projects.p1.problem": "Necessidade de um sistema escalável para registrar o progresso acadêmico e portfólio.",
    "projects.p1.solution": "Criação de uma plataforma completa com painel de controle (dashboard) e formulários para edição e inclusão de novos projetos.",
    "projects.p1.challenges": "Estruturação das entidades de dados (Projetos e Disciplinas) e integração de rotas REST.",
    "projects.p1.results": "Sistema funcional e escalável para gerenciamento de projetos acadêmicos.",
    "projects.p2.context": "Papel: Arquitetura & Full-stack",
    "projects.p2.desc": "Atuei como Desenvolvedora conduzindo a migração de um modelo monolítico para microsserviços. Estruturei a base e dei suporte ativo ao desenvolvimento do front-end",
    "projects.p2.problem": "Necessidade de centralizar o registro de horas e gerenciar a produtividade da equipe de forma escalável",
    "projects.p2.solution": "Desenho da arquitetura em microsserviços usando Docker, RabbitMQ e Keycloak, com back-end em Java/Spring Boot e front-end em React com a biblioteca Daisy UI",
    "projects.p2.challenges": "Orquestrar a comunicação assíncrona entre os serviços e garantir que a aplicação suportasse pelo menos 1000 acessos simultâneos",
    "projects.p2.results": "Plataforma robusta entregue no prazo",
    "projects.p3.context": "",
    "projects.p3.desc": "",
    "projects.p3.problem": "",
    "projects.p3.solution": "",
    "projects.p3.challenges": "",
    "projects.p3.results": "",
    "projects.p4.context": "",
    "projects.p4.desc": "",
    "projects.p4.problem": "",
    "projects.p4.solution": "",
    "projects.p4.challenges": "",
    "projects.p4.results": "",

    "skills.tag": "// Habilidades",
    "skills.title": "Hard skills & soft skills.",
    "skills.hard": "Hard Skills",
    "skills.soft": "Soft Skills",
    "skills.group.languages": "Frontend",
    "skills.group.frameworks": "Backend",
    "skills.group.databases": "Banco de Dados",
    "skills.group.tools": "Ferramentas",
    "skills.soft.teamwork": "Trabalho em equipe",
    "skills.soft.teamwork.desc": "Colaboração efetiva em projetos e times.",
    "skills.soft.organization": "Organização",
    "skills.soft.organization.desc": "Gestão técnica e de tempo eficiente.",
    "skills.soft.problem": "Resolução de problemas",
    "skills.soft.problem.desc": "Abordagem analítica e soluções práticas.",
    "skills.soft.communication": "Comunicação",
    "skills.soft.communication.desc": "Comunicação clara e assertiva.",
    "skills.soft.critical": "Foco",
    "skills.soft.critical.desc": "Atenção aos detalhes e qualidade.",
    "skills.soft.learning": "Aprendizado",
    "skills.soft.learning.desc": "Busca constante por novos conhecimentos.",

    "docs.tag": "// Produção Acadêmica",
    "docs.title": "Documentos e trabalhos.",
    "docs.type.tcc": "TCC",
    "docs.type.article": "Artigo",
    "docs.type.report": "Relatório",
    "docs.type.research": "Pesquisa",
    "docs.tcc.title": "Sistema de Portfólio Dinâmico",
    "docs.tcc.desc": "Gerenciamento e exibição de projetos acadêmicos.",
    "docs.article.title": "",
    "docs.article.desc": "",
    "docs.report.title": "",
    "docs.report.desc": "",
    "docs.research.title": "",
    "docs.research.desc": "",
    "docs.view": "Ver documento",

    "certs.tag": "// Certificações",
    "certs.title": "Credenciais técnicas.",
    "certs.view": "Verificar",

    "events.tag": "// Eventos & Atividades",
    "events.title": "Vida além da sala de aula.",
    "events.type.competition": "Competição",
    "events.type.hackathon": "Hackathon",
    "events.type.workshop": "Workshop",
    "events.type.conference": "Congresso",
    "events.type.fair": "Feira",
    "events.type.lecture": "Palestra",
    "events.e1.title": "SIGA - Fatec SJC",
    "events.e1.desc": "Gestão ativa do histórico acadêmico.",
    "events.e2.title": "Google AI Pro",
    "events.e2.desc": "Organização de arquivos e projetos no ecossistema cloud.",
    "events.e3.title": "",
    "events.e3.desc": "",
    "events.e4.title": "",
    "events.e4.desc": "",
    "events.e5.title": "",
    "events.e5.desc": "",
    "events.e6.title": "",
    "events.e6.desc": "",
    "events.e7.title": "",
    "events.e7.desc": "",

    "contact.tag": "// Vamos Conversar",
    "contact.title.part1": "Pronta para construir",
    "contact.title.highlight": "algo excepcional?",
    "contact.desc":
      "Disponível para trocas de conhecimentos e projetos colaborativos.",
    "contact.cta": "Iniciar conversa",
    "contact.footer": "© 2026 Laís Zanardi Inocêncio · Construído com precisão",
    "contact.status": "Status: Ativa",

    "ui.theme.toLight": "Modo claro",
    "ui.theme.toDark": "Modo escuro",
    "ui.lang.switch": "Mudar idioma",
  },
  en: {
    "nav.intro": "Intro",
    "nav.curriculum": "Resume",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.academic": "Academic",
    "nav.certs": "Certs",
    "nav.events": "Events",
    "nav.contact": "Contact",

    "hero.tag": "Multiplataform Software Development Student · 2026",
    "hero.title.part1": "BUILDING THE",
    "hero.title.future": "FUTURE",
    "hero.title.part2": "WITH CODE.",
    "hero.desc":
      "Laís Zanardi Inocêncio — Multiplataform Software Development student at Fatec SJC and intern at Ericsson",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in touch",
    "hero.meta.status.label": "Status",
    "hero.meta.status.value": "Intern at Ericsson",
    "hero.meta.region.label": "Region",
    "hero.meta.region.value": "São José dos Campos/SP",

    "intro.tag": "// Introduction",
    "intro.title": "Logic, innovation, and efficient solutions.",
    "intro.desc":
      "I'm Laís Zanardi Inocêncio, a Multiplataform Software Development student at Fatec São José dos Campos and an intern at Ericsson. I have a strong interest in creating efficient solutions and repository management, always seeking to combine academic logic with corporate market innovations and tools.",
    "intro.info.course": "Major",
    "intro.info.course.value": "Software Dev.",
    "intro.info.institution": "Institution",
    "intro.info.institution.value": "Fatec SJC",
    "intro.info.period": "Period",
    "intro.info.period.value": "2025 — Present",
    "intro.info.status": "Status",
    "intro.info.status.value": "In progress",
    "intro.goals.academic.title": "Academic Goals",
    "intro.goals.academic.desc":
      "Deepen knowledge in software architecture and new technologies, applying theory in practical and collaborative projects.",
    "intro.goals.professional.title": "Professional Goals",
    "intro.goals.professional.desc":
      "Develop scalable and efficient solutions, evolving in the development career and contributing to the company's technological growth.",
    "intro.areas.title": "Areas of Interest",

    "cv.tag": "// Resume",
    "cv.title": "Education & path.",
    "cv.section.academic": "Academic Background",
    "cv.section.courses": "Complementary Courses",
    "cv.section.certs": "Featured Certifications",
    "cv.inProgress": "In progress",

    "projects.tag": "// Selected Projects",
    "projects.title": "Academic projects.",
    "projects.featured": "(01) FEATURED · 2025",
    "projects.view": "Repository",
    "projects.label.problem": "Problem",
    "projects.label.solution": "Solution",
    "projects.label.tech": "Tech",
    "projects.label.challenges": "Technical challenges",
    "projects.label.results": "Results",
    "projects.p1.context": "Project 1 · 2025",
    "projects.p1.desc": "Dynamic Portfolio System with Node.js and Sequelize.",
    "projects.p1.problem": "Need for a scalable system to record academic progress and portfolio.",
    "projects.p1.solution": "Creation of a complete platform with a dashboard and forms for editing and including new projects.",
    "projects.p1.challenges": "Structuring data entities (Projects and Courses) and integrating REST routes.",
    "projects.p1.results": "Functional and scalable system for managing academic projects.",
    "projects.p2.context": "Role: Architecture & Full-stack",
    "projects.p2.desc": "I worked as a Developer leading the migration from a monolithic model to microservices. I structured the foundation and actively supported the front-end development",
    "projects.p2.problem": "Need to centralize time tracking and manage team productivity in a scalable way",
    "projects.p2.solution": "Architecture design in microservices using Docker, RabbitMQ, and Keycloak, with a Java/Spring Boot back-end and a React front-end with the Daisy UI library",
    "projects.p2.challenges": "Orchestrating asynchronous communication between services and ensuring the application supported at least 1000 simultaneous accesses",
    "projects.p2.results": "Robust platform delivered on time",
    "projects.p3.context": "",
    "projects.p3.desc": "",
    "projects.p3.problem": "",
    "projects.p3.solution": "",
    "projects.p3.challenges": "",
    "projects.p3.results": "",
    "projects.p4.context": "",
    "projects.p4.desc": "",
    "projects.p4.problem": "",
    "projects.p4.solution": "",
    "projects.p4.challenges": "",
    "projects.p4.results": "",

    "skills.tag": "// Skills",
    "skills.title": "Hard skills & soft skills.",
    "skills.hard": "Hard Skills",
    "skills.soft": "Soft Skills",
    "skills.group.languages": "Frontend",
    "skills.group.frameworks": "Backend",
    "skills.group.databases": "Databases",
    "skills.group.tools": "Tools",
    "skills.soft.teamwork": "Teamwork",
    "skills.soft.teamwork.desc": "Effective collaboration in projects and teams.",
    "skills.soft.organization": "Organization",
    "skills.soft.organization.desc": "Efficient technical and time management.",
    "skills.soft.problem": "Problem solving",
    "skills.soft.problem.desc": "Analytical approach and practical solutions.",
    "skills.soft.communication": "Communication",
    "skills.soft.communication.desc": "Clear and assertive communication.",
    "skills.soft.critical": "Focus",
    "skills.soft.critical.desc": "Attention to detail and quality.",
    "skills.soft.learning": "Learning",
    "skills.soft.learning.desc": "Constant search for new knowledge.",

    "docs.tag": "// Academic Output",
    "docs.title": "Papers and reports.",
    "docs.type.tcc": "Thesis",
    "docs.type.article": "Article",
    "docs.type.report": "Report",
    "docs.type.research": "Research",
    "docs.tcc.title": "Dynamic Portfolio System",
    "docs.tcc.desc": "Management and display of academic projects.",
    "docs.article.title": "",
    "docs.article.desc": "",
    "docs.report.title": "",
    "docs.report.desc": "",
    "docs.research.title": "",
    "docs.research.desc": "",
    "docs.view": "View document",

    "certs.tag": "// Certifications",
    "certs.title": "Technical credentials.",
    "certs.view": "Verify",

    "events.tag": "// Events & Activities",
    "events.title": "Life beyond the classroom.",
    "events.type.competition": "Competition",
    "events.type.hackathon": "Hackathon",
    "events.type.workshop": "Workshop",
    "events.type.conference": "Conference",
    "events.type.fair": "Fair",
    "events.type.lecture": "Lecture",
    "events.e1.title": "SIGA - Fatec SJC",
    "events.e1.desc": "Active academic record management.",
    "events.e2.title": "Google AI Pro",
    "events.e2.desc": "Organization of files and projects in the cloud ecosystem.",
    "events.e3.title": "",
    "events.e3.desc": "",
    "events.e4.title": "",
    "events.e4.desc": "",
    "events.e5.title": "",
    "events.e5.desc": "",
    "events.e6.title": "",
    "events.e6.desc": "",
    "events.e7.title": "",
    "events.e7.desc": "",

    "contact.tag": "// Let's Talk",
    "contact.title.part1": "Ready to build",
    "contact.title.highlight": "something exceptional?",
    "contact.desc":
      "Available for knowledge exchange and collaborative projects.",
    "contact.cta": "Start a conversation",
    "contact.footer": "© 2026 Laís Zanardi Inocêncio · Built with precision",
    "contact.status": "Status: Active",

    "ui.theme.toLight": "Light mode",
    "ui.theme.toDark": "Dark mode",
    "ui.lang.switch": "Switch language",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "pt" || saved === "en") {
        setLangState(saved);
      } else if (typeof navigator !== "undefined") {
        setLangState(navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
      }
    } catch { }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch { }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((p) => (p === "pt" ? "en" : "pt")),
    [],
  );
  const t = useCallback(
    (key: string) => {
      const v = dictionaries[lang][key];
      return typeof v === "string" ? v : key;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
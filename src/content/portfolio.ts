export type Locale = "en" | "pt-BR";
export type LocalizedText = Record<Locale, string>;

export const portfolio = {
  name: "Geison Bruno",
  location: { en: "Sydney, Australia", "pt-BR": "Sydney, Austrália" },
  hero: {
    intro: { en: "Hey, I'm Geison.", "pt-BR": "Oi, sou o Geison." },
    title: {
      en: "Building, learning,\nrebuilding.",
      "pt-BR": "Construindo, aprendendo,\nreconstruindo.",
    },
    location: { en: "Based in Sydney, Australia.", "pt-BR": "Em Sydney, Austrália." },
  },
  sections: {
    projects: { en: "SELECTED PROJECTS", "pt-BR": "PROJETOS SELECIONADOS" },
    experience: { en: "EXPERIENCE", "pt-BR": "EXPERIÊNCIA" },
    about: { en: "ABOUT", "pt-BR": "SOBRE" },
  },
  experience: {
    company: "Flux Tecnologia",
    role: "Software Engineer",
    period: "Oct 2023 — Nov 2025",
    description: {
      en: "Worked across backend, frontend and mobile applications, contributing to the development and maintenance of multiple products.",
      "pt-BR": "Atuei em aplicações backend, frontend e mobile, contribuindo para o desenvolvimento e manutenção de diferentes produtos.",
    },
  },
  about: {
    en: [
      "I'm a Software Engineer focused on backend development, with experience across web, mobile and infrastructure.",
      "I enjoy building practical things, learning along the way and keeping solutions simple.",
    ],
    "pt-BR": [
      "Sou Software Engineer com foco em backend, com experiência também em web, mobile e infraestrutura.",
      "Gosto de construir coisas úteis, aprender durante o processo e manter as soluções simples.",
    ],
  },
  socialLabels: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
  languageLabels: { en: "EN", "pt-BR": "PT" },
} as const;

// Interface/accessibility instructions, not additional portfolio claims.
export const ui = {
  language: { en: "Language", "pt-BR": "Idioma" },
  lightTheme: { en: "Switch to light theme", "pt-BR": "Ativar tema claro" },
  darkTheme: { en: "Switch to dark theme", "pt-BR": "Ativar tema escuro" },
  skip: { en: "Skip to content", "pt-BR": "Pular para o conteúdo" },
  newTab: { en: "opens in a new tab", "pt-BR": "abre em uma nova aba" },
  unavailable: { en: "link unavailable", "pt-BR": "link indisponível" },
} satisfies Record<string, LocalizedText>;

export type Project = {
  number: string;
  name: string;
  year: string;
  description: LocalizedText;
  technologies: readonly string[];
  githubUrl: string | null;
};

// Replace only with destinations explicitly supplied by the owner.
export const externalLinks: Record<"returnFlow" | "ozRadar" | "github" | "linkedin" | "email", string | null> = {
  returnFlow: null,
  ozRadar: null,
  github: null,
  linkedin: null,
  email: null,
};

export const projects: readonly Project[] = [
  {
    number: "01",
    name: "ReturnFlow",
    year: "2026",
    description: {
      en: "Return management platform for drivers\nand warehouse operations.",
      "pt-BR": "Plataforma para gerenciamento de devoluções\nentre motoristas e operações de warehouse.",
    },
    technologies: ["Java", "Spring Boot", "React", "React Native", "PostgreSQL"],
    githubUrl: externalLinks.returnFlow,
  },
  {
    number: "02",
    name: "Oz Radar",
    year: "2026",
    description: {
      en: "Amazon deals monitoring and scoring platform.",
      "pt-BR": "Plataforma para monitoramento e classificação\nde ofertas da Amazon.",
    },
    technologies: ["Java 21", "Spring Boot", "PostgreSQL"],
    githubUrl: externalLinks.ozRadar,
  },
];

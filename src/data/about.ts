export const JOURNEY = [
  {
    title: "4+ years building high-performance web apps",
    body: "At Amnet Digital I design and ship enterprise applications with React.js, Angular, Next.js and TypeScript — from component architecture to production deploys.",
  },
  {
    title: "Figma to production, pixel for pixel",
    body: "I translate Figma designs into accessible, responsive production UI and turn repeated patterns into reusable component libraries the whole team builds on.",
  },
  {
    title: "Employee of the Month — Harword project",
    body: "Recognised for exceptional contribution to the Harword project, a high-visibility enterprise delivery.",
    award: true,
  },
];

export const ROADMAP = [
  {
    key: "frontend",
    status: "Mastered",
    title: "Frontend Mastery",
    body: "Reusable UI architectures, state management and performance optimisation.",
    points: ["Code-splitting", "Lazy loading", "Memoization", "State management"],
  },
  {
    key: "backend",
    status: "In progress",
    title: "Backend Transition",
    body: "Node.js, RESTful API design, SQL database structuring and server-side logic — on the path to robust full-stack engineering.",
    points: ["Node.js", "REST API design", "SQL schemas", "Server-side logic"],
  },
  {
    key: "devops",
    status: "Actively learning",
    title: "DevOps & Cloud Pipelines",
    body: "CI/CD automation, Dockerization and cloud deployment pipelines, building on hands-on Azure App Service experience.",
    points: ["CI/CD automation", "Docker", "Azure App Service", "Cloud pipelines"],
  },
  {
    key: "ai",
    status: "Daily practice",
    title: "AI-Driven Development",
    body: "Leveraging Cursor AI and GitHub Copilot to accelerate delivery and shorten debugging cycles.",
    points: ["Cursor AI", "GitHub Copilot", "Faster debugging"],
  },
];

export const SKILLS: { name: string; tip: string; core: boolean }[] = [
  { name: "React.js", tip: "Primary UI framework across enterprise projects", core: true },
  { name: "Next.js", tip: "SSR & routing for the Oman Gov and SeedWorks platforms", core: true },
  { name: "Angular", tip: "Customer Panorama & IKSA platforms", core: true },
  { name: "TypeScript", tip: "Typed, maintainable component APIs", core: true },
  { name: "Tailwind CSS", tip: "Utility-first design systems", core: true },
  { name: "MUI", tip: "Enterprise component theming", core: true },
  { name: "SASS", tip: "Scalable styling architecture", core: true },
  { name: "Azure App Service", tip: "Production deployments today", core: true },
  { name: "Node.js", tip: "Learning: server-side logic & APIs", core: false },
  { name: "SQL", tip: "Learning: relational schema design", core: false },
  { name: "Docker", tip: "Learning: containerized deployments", core: false },
  { name: "GitHub Actions", tip: "Learning: automated CI/CD workflows", core: false },
  { name: "Cursor AI", tip: "AI-assisted development, daily", core: true },
  { name: "GitHub Copilot", tip: "AI pair-programming, daily", core: true },
];

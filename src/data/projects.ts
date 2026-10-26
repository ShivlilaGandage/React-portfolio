export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  architecture: { heading: string; body: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "oman",
    title: "Oman Government Services Platform",
    category: "Government · FM & CAA",
    summary:
      "Citizen and administrative portals for Oman's FM and CAA services — real-time request tracking, notifications and role-aware workflows at government scale.",
    stack: ["Next.js", "React.js", "TypeScript", "MUI", "Tailwind CSS", "Azure App Service"],
    metrics: [
      { value: "10+", label: "citizen & admin workflows" },
      { value: "25+", label: "reusable UI components" },
      { value: "30+", label: "RESTful API endpoints" },
      { value: "RBAC", label: "role-based access control" },
    ],
    architecture: [
      {
        heading: "Modular component system",
        body: "25+ reusable UI components shared across modules, built on MUI and Tailwind with typed TypeScript APIs so new workflows assemble from existing parts.",
      },
      {
        heading: "API integration layer",
        body: "30+ RESTful endpoints integrated for real-time request tracking and notifications across 10+ citizen and administrative workflows.",
      },
      {
        heading: "Role-Based Access Control",
        body: "Routes, actions and UI surfaces gated by role so citizens and administrators each see only what they are permitted to act on.",
      },
      {
        heading: "Performance",
        body: "Memoization of expensive renders and lazy-loaded modules keep large administrative screens responsive.",
      },
      {
        heading: "Deployment",
        body: "Shipped to production on Azure App Service.",
      },
    ],
  },
  {
    id: "seedworks",
    title: "SeedWorks Enterprise Web App",
    category: "Agri-Research · Enterprise",
    summary: "Interactive research data dashboards built to stay fast while handling large-scale datasets.",
    stack: ["Next.js", "Tailwind CSS", "SASS"],
    metrics: [
      { value: "Dashboards", label: "interactive research data" },
      { value: "Large-scale", label: "data handling" },
    ],
    architecture: [
      {
        heading: "Research dashboards",
        body: "Interactive views that let researchers explore and compare datasets without leaving the page.",
      },
      {
        heading: "Large-scale data handling",
        body: "Rendering and data-loading strategies tuned so big result sets stay navigable.",
      },
      {
        heading: "Styling architecture",
        body: "Tailwind for layout and utilities, SASS for component-level theming.",
      },
    ],
  },
  {
    id: "panorama",
    title: "Customer Panorama",
    category: "Sales Analytics",
    summary: "Sales trend analytics with chart-driven views of customer performance over time.",
    stack: ["React.js", "Angular", "Bootstrap"],
    metrics: [
      { value: "Charts", label: "sales trend analytics" },
      { value: "Responsive", label: "Bootstrap layouts" },
    ],
    architecture: [
      {
        heading: "Trend analytics",
        body: "Chart components visualising sales trends so teams can read performance at a glance.",
      },
      {
        heading: "Responsive layouts",
        body: "Bootstrap grid keeps dense analytics usable from desktop down to tablet.",
      },
    ],
  },
  {
    id: "iksa",
    title: "IKSA Learning Platform",
    category: "E-Learning · Subscriptions",
    summary: "Responsive e-learning experience with clear subscription navigation across course tiers.",
    stack: ["React.js", "Angular", "Bootstrap"],
    metrics: [
      { value: "Subscriptions", label: "tiered course navigation" },
      { value: "Responsive", label: "e-learning UI" },
    ],
    architecture: [
      {
        heading: "Subscription navigation",
        body: "Navigation structured around subscription tiers so learners always know what they can access next.",
      },
      {
        heading: "Responsive learning UI",
        body: "Course and lesson screens that adapt cleanly across devices.",
      },
    ],
  },
];

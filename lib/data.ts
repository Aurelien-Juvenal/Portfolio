export const profile = {
  name: "Aurelien Juvenal",
  role: "Développeur Full-Stack",
  location: "Antananarivo, MG",
  tagline: "Je conçois des systèmes logiciels\ncomme on dresse des plans d'architecte.",
  summary:
    "Depuis six ans, je construis des interfaces et des architectures back-end pour des produits qui doivent tenir la charge — de la première maquette au déploiement en production. J'aime la précision : chaque composant a une raison d'être, chaque ligne de code un rôle mesuré.",
  email: "aurelienjuvenal@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://twitter.com/" },
  ],
};

export const skills = [
  { code: "FE-01", name: "React / Next.js", detail: "App Router, RSC, streaming" },
  { code: "FE-02", name: "TypeScript", detail: "Typage strict, architecture scalable" },
  { code: "FE-03", name: "Animation d'interface", detail: "Framer Motion, GSAP, WebGL léger" },
  { code: "BE-01", name: "Node.js / Express", detail: "APIs REST & GraphQL" },
  { code: "BE-02", name: "PostgreSQL", detail: "Modélisation, requêtes, indexation" },
  { code: "OPS-01", name: "CI/CD & Cloud", detail: "Vercel, Docker, GitHub Actions" },
];

export const projects = [
  {
    sheet: "01",
    title: "Atlas — Plateforme de gestion logistique",
    scale: "ÉCH. 1:50",
    year: "2025",
    stack: ["Next.js", "PostgreSQL", "Tailwind", "tRPC"],
    description:
      "Refonte complète d'un outil de suivi de flotte pour 200+ transporteurs : tableau de bord temps réel, cartographie interactive et système de notifications.",
    href: "#",
  },
  {
    sheet: "02",
    title: "Lumen — Éditeur de design collaboratif",
    scale: "ÉCH. 1:20",
    year: "2024",
    stack: ["React", "WebSockets", "Canvas API", "Node.js"],
    description:
      "Éditeur graphique multi-utilisateurs avec synchronisation en temps réel, historique des versions et rendu vectoriel optimisé.",
    href: "#",
  },
  {
    sheet: "03",
    title: "Ferro — Passerelle de paiement B2B",
    scale: "ÉCH. 1:10",
    year: "2023",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
    description:
      "Infrastructure de facturation et de paiement pour une marketplace industrielle : réconciliation automatique, exports comptables, audit trail complet.",
    href: "#",
  },
];

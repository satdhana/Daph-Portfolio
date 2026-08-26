export const LINKS = {
  cv: "/assets/CV-Satria-Dafa-Putra-Wardhana-2026.pdf",
  notion: "https://app.notion.com/p/Daph-s-Portofolio-2ba2e9097cfd80b5aeeee4873f0be296",
  notionShort: "https://bit.ly/PortofolioDafa2025",
  whatsapp: "https://wa.me/6285713090494",
  linkedin: "https://www.linkedin.com/in/satriadafaputra/",
  github: "https://github.com/satriadafa",
};

export const NAV_LINKS = [
  { label: "Overview", href: "#overview", id: "overview" },
  { label: "Case Studies", href: "#case-studies", id: "case-studies" },
  { label: "Hybrid Skills", href: "#hybrid-skills", id: "hybrid-skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const STATS = [
  { value: 6, prefix: "", suffix: "+", label: "Digital Products Launched", delta: "iOS, Android & Web", testid: "stat-products" },
  { value: 30, prefix: "+", suffix: "%", label: "Conversion Rate Uplift", delta: "Cococo App CRO", testid: "stat-cro" },
  { value: 100, prefix: "", suffix: "%", label: "Manual Input Eliminated", delta: "HCMS Integration", testid: "stat-automation" },
];

export const FILTERS = ["All", "Product Management", "UI/UX & Engineering", "Mobile (Android/iOS)"];

export const PROJECTS = [
  {
    id: "aralia",
    title: "Aralia Enhancement",
    subtitle: "Outsourcing Management System — PT Pegadaian × Sagara Asia Tech",
    role: "Junior Project Manager",
    categories: ["Product Management"],
    badge: "100% Manual Input Eliminated",
    overview:
      "As Junior Project Manager, Satria owned the full lifecycle of Aralia — PT Pegadaian's outsourcing (TAD) management system. The work spanned requirement gathering across five key areas, authoring the PRD, and coordinating System Analyst, Design, Engineering, and QA teams across eight sprints. The headline outcome was eliminating 100% of manual supervisor-assignment input through HCMS integration, alongside a restructured exit-management flow that closed offboarding gaps across regional offices.",
    highlights: [
      "Led 18 functional improvements across HCMS integration, payroll & exit management",
      "Managed 8 sprints end-to-end, from PRD authoring to QA sign-off",
    ],
    tags: ["PRD", "Project Management", "HCMS Integration", "Agile/Jira"],
    image:
      "https://images.pexels.com/photos/36950633/pexels-photo-36950633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "cococo",
    title: "Cococo App",
    subtitle: "Conversion Rate Optimization — Apple Developer Academy",
    role: "Project Manager & Product Strategist",
    categories: ["Product Management", "Mobile (Android/iOS)"],
    badge: "+30% CRO in 3 Months",
    overview:
      "Cococo was a conversion-focused product built at the Apple Developer Academy. Satria acted as PM and product strategist: diagnosing where users dropped off in the purchase funnel, then defining a dashboard and product-detail redesign supported by clearer informational labelling. Changes were validated through user testing and shipped via PRD-driven sprints, delivering a +30% conversion uplift within three months.",
    highlights: [
      "Diagnosed conversion bottlenecks across the purchase funnel",
      "Redesigned dashboard & product details with informational labels, validated via user testing",
    ],
    tags: ["CRO", "Product Strategy", "PRD", "User Testing", "iOS"],
    image:
      "https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB0ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWduJTIwVUklMjBjYXNlJTIwc3R1ZHklMjBtb2NrdXB8ZW58MHx8fHwxNzg3NDgyMjMyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "hms",
    title: "Hospital Management System",
    subtitle: "HMS Web App — ICANN Technologies Indonesia",
    role: "Freelance Product Designer",
    categories: ["UI/UX & Engineering"],
    badge: "End-to-End Product Design",
    overview:
      "For ICANN Technologies Indonesia, Satria delivered end-to-end UI/UX for a Hospital Management System web application — a clinical-operations platform where clarity and reliability matter. He owned the design system and hi-fi flows, and ran regular design-grooming sessions with engineering to keep iterations rapid, feasible, and faithful to the original specifications.",
    highlights: [
      "Owned end-to-end UI/UX design for a clinical operations web platform",
      "Ran design grooming sessions with engineering for rapid, functional iterations",
    ],
    tags: ["UI/UX Design", "Figma", "Design-to-Dev Hand-off", "Design System"],
    image:
      "https://images.pexels.com/photos/12882853/pexels-photo-12882853.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "nba",
    title: "Nusantara Bina Artha Platform",
    subtitle: "Enterprise Web Platform — PT Nusantara Bina Artha",
    role: "UI/UX Engineer",
    categories: ["UI/UX & Engineering"],
    badge: "Design-to-Code Ownership",
    overview:
      "At PT Nusantara Bina Artha, Satria worked as a UI/UX Engineer bridging research and implementation. He conducted user interviews and usability testing aligned to Business Requirements Documents, translated findings into high-fidelity prototypes, and then took ownership of the front-end build — closing the gap between design intent and shipped product.",
    highlights: [
      "Conducted user interviews & usability testing aligned to BRDs",
      "Produced high-fidelity prototypes and owned front-end implementation",
    ],
    tags: ["User Research", "Front-End Dev", "BRD Alignment", "Prototyping"],
    image:
      "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const HYBRID_COLUMNS = [
  {
    icon: "Target",
    title: "Product Strategy & Management",
    desc: "Turning business goals into shipped, measurable outcomes.",
    skills: ["PRD Authoring", "Backlog Prioritization", "Agile / Scrum Sprints", "Stakeholder Communication", "CRO Analysis"],
  },
  {
    icon: "Palette",
    title: "UI/UX Design & Research",
    desc: "Grounding every decision in real user evidence.",
    skills: ["User Testing", "Wireframing", "High-Fidelity Design (Figma, Framer)", "Design Systems", "Empathy Mapping"],
  },
  {
    icon: "Code2",
    title: "Engineering & Tech Empathy",
    desc: "Scoping what's feasible before a sprint ever starts.",
    skills: ["Front-End Development", "Android Development (Kotlin / Android Studio)", "Xcode / VSCode", "Git Workflow"],
  },
];

export const EXPERIENCE = [
  {
    role: "Junior Project Manager",
    company: "PT Sagara Asia Teknologi",
    period: "Feb 2026 — Sept 2026",
    location: "Jakarta",
    bullets: [
      "Led 18 functional improvements across HCMS integration, payroll & exit management for Aralia, PT Pegadaian's outsourcing management system",
      "Managed 8 sprints end-to-end from PRD to QA with Agile/Jira workflows",
      "Eliminated 100% of manual supervisor input through HCMS integration",
    ],
  },
  {
    role: "Project Manager Intern",
    company: "Apple Developer Academy @ BINUS",
    period: "Mar 2025 — Dec 2025",
    location: "Tangerang",
    bullets: [
      "Acted as PM & Product Strategist for Cococo App, driving +30% conversion uplift in 3 months",
      "Diagnosed funnel bottlenecks and redesigned dashboard & product detail experiences",
      "Ran user testing loops and PRD-driven sprint cycles with a cross-functional team",
    ],
  },
  {
    role: "Freelance Product Designer",
    company: "ICANN Technologies Indonesia",
    period: "Jun 2024 — Jun 2025",
    location: "Remote",
    bullets: [
      "Delivered end-to-end UI/UX design for a Hospital Management System web app",
      "Facilitated design grooming sessions with engineering for rapid functional iterations",
      "Built a clean design-to-dev hand-off process with a reusable design system",
    ],
  },
  {
    role: "Fulltime UI/UX Engineer",
    company: "PT Nusantara Bina Artha",
    period: "Feb 2022 — Nov 2024",
    location: "Jakarta",
    bullets: [
      "Conducted user interviews and usability testing aligned to business requirement documents",
      "Produced high-fidelity prototypes and took ownership of front-end implementation",
      "Bridged design and engineering across 2 years 9 months of product delivery",
    ],
  },
];

export const CERTIFICATIONS = [
  { name: "Product Management", issuer: "Apiary Academy" },
  { name: "UI Design", issuer: "Thinker Academy" },
  { name: "UI/UX Design", issuer: "Dibimbing.id" },
  { name: "Android Developer", issuer: "Glints Academy" },
];

export const TOOLS = [
  { name: "Figma", icon: "Figma" },
  { name: "Framer", icon: "Framer" },
  { name: "Jira", icon: "KanbanSquare" },
  { name: "Miro", icon: "PenTool" },
  { name: "GitHub", icon: "Github" },
  { name: "GitLab", icon: "Gitlab" },
  { name: "Xcode", icon: "Hammer" },
  { name: "VSCode", icon: "Code2" },
  { name: "Android Studio", icon: "Smartphone" },
];

export const MARQUEE_ITEMS = [
  "PRODUCT STRATEGY",
  "+30% CONVERSION UPLIFT",
  "UI/UX ENGINEERING",
  "TECHNICAL FEASIBILITY",
  "100% MANUAL INPUT ELIMINATED",
  "6+ PRODUCTS LAUNCHED",
  "DATA-DRIVEN EXECUTION",
];

export const SUBJECTS = [
  "Full-time Product Manager Role",
  "Product Design Lead",
  "Freelance Project / Consultation",
];

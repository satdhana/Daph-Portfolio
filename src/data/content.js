export const LINKS = {
  cv: "/assets/CV-Satria-Dafa-Putra-Wardhana(2026).pdf",
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
    id: "seefood",
    title: "SeeFood",
    subtitle: "Local Dining Discovery App — Apple Developer Academy",
    role: "Product Manager & UI/UX Engineer",
    categories: ["Product Management", "Mobile (Android/iOS)", "UI/UX & Engineering"],
    badge: "Dual-Role Product Ownership",
    overview:
      "SeeFood is a mobile app that helps newcomers in the Gading Operation Area (GOP) discover local dining options and menus. In a team of three, Satria held a dual role as Product Manager and UI/UX Engineer — scoping an MVP built around a recommendation list and a map view of tenant locations to minimise user confusion, then managing the design process from sketch to hi-fi and coordinating implementation with the coder. A solo Phase 2 followed: an independent overhaul introducing an immersive search experience and a native recommendation widget, executed end-to-end across design and front-end.",
    highlights: [
      "Defined the MVP (recommendation list + map view) to simplify first-time orientation",
      "Directed user testing and bridged design specs with development",
      "Phase 2 (solo): shipped an immersive search and native recommendation widget end-to-end",
    ],
    tags: ["Product Management", "UI/UX", "iOS", "User Testing", "Front-End"],
    links: [
      { label: "SeeFood — Phase 1", href: "https://www.figma.com/proto/FcZANRxbojcXNzw7OQaZOS/SeeFood?page-id=0:1&node-id=92-505&viewport=482,-821,0.51&t=cYM2I0SGIkolzmsm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=92:550&show-proto-sidebar=1" },
      { label: "SeeFood — Phase 2", href: "https://www.figma.com/proto/4ODrmD60poPEnfNy7tlgUN/SeeFood-Part-2?page-id=0:1&node-id=117-8702&viewport=-3508,-1566,0.48&t=Kxv3EKw6IADXOdEh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=66:2757&show-proto-sidebar=1" },
    ],
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "bebas",
    title: "Bebas App",
    subtitle: "AI Sign-Language Learning App — Apple Developer Academy",
    role: "UI/UX Designer",
    categories: ["Mobile (Android/iOS)", "UI/UX & Engineering"],
    badge: "AI-Powered Accessibility",
    overview:
      "Bebas is an app that lets hearing users learn sign language through an AI-powered hand-gesture reader. In a five-person team, Satria was one of two designers, leading the UX flow and UI so new learners could adapt quickly. The team resolved the core feasibility question — how to read hand gestures — by training a Machine Learning model on collected photo data, and Satria aligned the visual feedback loop and interface to the model's technical constraints. The functional ML prototype and adaptive UX were presented to AI mentors in Bali.",
    highlights: [
      "Defined an accessible, word-based learning structure for first-time users",
      "Aligned UI and visual feedback with the ML model's constraints",
      "Validated the approach with AI mentors; delivered a functional gesture-reading prototype",
    ],
    tags: ["UI/UX Design", "Accessibility", "Machine Learning", "Prototyping"],
    links: [
      { label: "Bebas App", href: "https://www.figma.com/design/BGMeVaUhZcrmJE2U9CMZ7E/Bebas-App?node-id=0-1&t=puFogS6jcfzT1dnF-1" },
    ],
    image:
      "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "san-n-dals",
    title: "San n Dals Game",
    subtitle: "Indonesian-Themed Platformer — Apple Developer Academy × Agate",
    role: "Game Artist",
    categories: ["UI/UX & Engineering"],
    badge: "Culturally-Rooted Game Art",
    overview:
      "San n Dals is a platformer built around a distinct Indonesian element — a game about a pair of sandals. In a six-person team, Satria was one of two game artists, hand-creating all environmental assets (sky, trees, bushes, road textures) in Sketch to establish the game's aesthetic foundation. He standardised colour tone and visual identity with the co-artist and structured assets for reusability to reduce technical debt and improve load performance. The vertical slice was presented to company partner Agate.",
    highlights: [
      "Created all environmental assets manually in Sketch",
      "Standardised colour tone and visual identity across the game",
      "Structured reusable assets to cut technical debt and improve performance",
    ],
    tags: ["Game Art", "Visual Design", "Sketch", "Asset Design"],
    links: [
      { label: "San n Dals — Assets", href: "https://drive.google.com/drive/folders/1m_sdDvz35aqmdIHnFu56Qm7HV1NTR_n6" },
    ],
    image:
      "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "cococo",
    title: "Cococo App",
    subtitle: "Conversion Rate Optimization — Apple Developer Academy",
    role: "Project Manager",
    categories: ["Product Management", "Mobile (Android/iOS)"],
    badge: "+30% CRO Target in 3 Months",
    overview:
      "Cococo was a conversion-focused product built with a six-person team. Satria, as Product Manager, led problem diagnosis and scoping — narrowing multiple potential causes of low conversion down to the dashboard and product-detail screens, and defining Family Travelers as the target segment. Solutions included a dashboard redesign showing multiple recommendations and enriched product-detail screens with labels and descriptions relevant to that segment. He authored the PRD, managed the backlog, and drove cross-functional execution, deployed with a target of +30% conversion within three months.",
    highlights: [
      "Diagnosed and scoped conversion bottlenecks; defined Family Travelers as the target segment",
      "Redesigned dashboard and product-detail screens around segment needs",
      "Authored the PRD and drove cross-functional execution",
    ],
    tags: ["CRO", "Product Strategy", "PRD", "User Testing", "iOS"],
    links: [
      { label: "Cococo App", href: "https://www.figma.com/design/X3q8fM8bqHTrtsPsZK5ovl/Double-Three---COCOCO-V1-TEAM-3?node-id=40580-7060&t=WPtXMp0XNBC61R0E-1" },
    ],
    image:
      "https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB0ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWduJTIwVUklMjBjYXNlJTIwc3R1ZHklMjBtb2NrdXB8ZW58MHx8fHwxNzg3NDgyMjMyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "kopling",
    title: "Kopling Game",
    subtitle: "Original Exhibition Game — Apple Developer Academy",
    role: "Game Director",
    categories: ["Product Management"],
    badge: "Directed a 7-Person Team",
    overview:
      "Kopling is an original game developed over three months by a seven-person team. As Game Director, Satria oversaw the full project lifecycle, facilitated a critical pivot after the initial concept received feedback for lacking uniqueness, and maintained vision and execution alignment across art, design, and development. He managed task assignments, led team discussions, kept progress moving across art style, concept, and technical work, and captured content for social-media marketing. Over-scoping was managed through constant discussion, rigorous testing, and clear communication.",
    highlights: [
      "Directed the full 3-month lifecycle and led the concept pivot",
      "Managed scope, scheduling, and cross-team communication",
      "Presented at an exhibition to strong feedback; validated a path to iPadOS/iOS",
    ],
    tags: ["Game Direction", "Team Leadership", "Scope Management", "Product Vision"],
    links: [
      { label: "Kopling — itch.io", href: "https://empat-mata-studio.itch.io/kopling-stories-in-a-cup" },
    ],
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "hms",
    title: "Hospital Management System",
    subtitle: "HMS Web App — ICANN Technologies Indonesia",
    role: "Freelance Product Designer",
    categories: ["UI/UX & Engineering"],
    badge: "100% UX-Spec Adherence",
    overview:
      "The Hospital Management System is an integrated platform managing a hospital's medical, financial, administrative, legal, and compliance operations — transforming complex manual processes into a seamless digital experience for staff and administrators. Satria executed the full UI/UX with a consistent design system across complex modules, delivering one complete hi-fi module every month with transparent weekly status updates. Regular design-grooming sessions with engineering bridged creative vision and technical feasibility, and rigorous validation minimised the gap between design intent and final product.",
    highlights: [
      "Delivered one complete hi-fi module per month with weekly status updates",
      "Ran design grooming with engineering to keep iterations feasible",
      "Validated output against specs, reaching 100% adherence to core UX specifications",
    ],
    tags: ["UI/UX Design", "Design System", "Design-to-Dev Hand-off", "Figma"],
    links: [
      { label: "HMS Web Project", href: "https://www.figma.com/design/IyD33wkvyE7PuyJhHQptqN/HMS-Final-Project?node-id=6297-54827&p=f" },
    ],
    image:
      "https://images.pexels.com/photos/4094199/pexels-photo-4094199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "nusaferol",
    title: "Nusaferol App",
    subtitle: "Operational Management Platform — PTPN Lampung",
    role: "UI/UX Designer",
    categories: ["UI/UX & Engineering"],
    badge: "Manual-to-Digital Transformation",
    overview:
      "Nusaferol is an operational management platform for PTPN Lampung that integrates business processes from upstream to downstream, replacing manual recording with a digital ecosystem that monitors production output, asset management, and distribution in real time. Satria conducted in-depth research into client needs and operational pain points, translating them into user flows, interface designs, and interactive prototypes tailored to field staff and management. Delivery followed measurable milestones with weekly reports, intensive coordination with engineering on complex features such as spatial data and asset tracking, and rapid feedback-driven iterations.",
    highlights: [
      "Researched operational pain points and translated them into tailored flows and prototypes",
      "Coordinated with engineering on spatial-data and asset-tracking feasibility",
      "Delivered milestone-based modules with weekly stakeholder reporting",
    ],
    tags: ["User Research", "UI/UX Design", "Prototyping", "Enterprise"],
    links: [
      { label: "Nusaferol App", href: "https://www.figma.com/proto/9UJX3tXwRiEaj71NXCdE6a/Nusaferol?page-id=0:1&node-id=7-42&viewport=658,1878,0.19&t=ciFEBbUsctqpelgJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=7:18&show-proto-sidebar=1" },
    ],
    image:
      "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "nusumma-go",
    title: "Nusumma Go App",
    subtitle: "Business Workflow Mobile App — PT Nusantara Bina Artha",
    role: "UI/UX Engineer",
    categories: ["UI/UX & Engineering", "Mobile (Android/iOS)"],
    badge: "Design-to-Code Ownership",
    overview:
      "Nusumma Go is a mobile app designed to streamline specific business workflows, balancing complex business requirements with intuitive interactions. Satria conducted comprehensive user research — stakeholder interviews and usability testing — and translated findings into design requirements and user stories. Working closely with Business Analysts and against the BRD, he produced high-fidelity interactive prototypes and detailed specs, then took full ownership of the front-end build to ensure design integrity. Serving as both designer and developer eliminated hand-off gaps, and iterative QA kept the final app technically sound and intuitive.",
    highlights: [
      "Ran stakeholder interviews and usability testing; synthesised BRD into user stories",
      "Produced hi-fi interactive prototypes and owned the front-end build",
      "Closed designer-developer hand-off gaps for full design integrity",
    ],
    tags: ["User Research", "Front-End Dev", "BRD Alignment", "Prototyping"],
    links: [
      { label: "Nusumma Go App", href: "https://www.figma.com/proto/pcMEhH0s1Sonyp9bLZnAqQ/Nusumma-Go?page-id=0:1&node-id=306-7508&viewport=1149,-112,0.19&t=0QnnYIaq2N5ZR6TM-1&scaling=min-zoom&content-scaling=fixed" },
    ],
    image:
      "https://images.pexels.com/photos/34578/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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

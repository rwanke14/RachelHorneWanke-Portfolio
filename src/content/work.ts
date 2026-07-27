export type WorkCategory = "production" | "builds" | "client";

export type WorkMetric = {
  label: string;
  value: string;
};

export type WorkItem = {
  id: string;
  title: string;
  org: string;
  role: string;
  overview: string;
  scope: string;
  outcome: string;
  stack: string[];
  metrics: WorkMetric[];
  featured: boolean;
  category: WorkCategory;
  migration?: boolean;
  image?: string;
  cover?: string;
  /** CSS object-position for crop-friendly action photos */
  coverPosition?: string;
  href?: string;
  prompt?: string;
};

export const work: WorkItem[] = [
  {
    id: "centric",
    title: "Global marketing site modernization",
    org: "Centric Software",
    role: "Website Specialist",
    overview:
      "Owned website infrastructure for a global digital marketing team through a full stack modernization — moving off WordPress to Contentful while keeping international sites live.",
    scope:
      "WordPress → Contentful CMS migration, AWS Lambda / API Gateway reverse proxy between Netlify and WP Engine, Figma-to-production page builds, GTM tracking, technical SEO, and sprint leadership across stakeholder requests.",
    outcome:
      "Completed CMS migration with a dual-stack cutover architecture, localized experiences maintained across 12+ languages, and clearer documentation for content owners.",
    stack: [
      "Contentful",
      "WordPress",
      "AWS Lambda",
      "API Gateway",
      "Netlify",
      "GTM",
      "SEO",
    ],
    metrics: [
      { value: "Completed", label: "WP → Contentful migration" },
      { value: "12+", label: "Locales supported" },
      { value: "Lambda proxy", label: "Zero-downtime routing" },
    ],
    featured: true,
    category: "production",
    migration: true,
    cover: "/images/case-centric.jpg",
    coverPosition: "center 30%",
    prompt: "Explore the migration story",
  },
  {
    id: "nscar",
    title: "National society website redesign",
    org: "N.S.C.A.R.",
    role: "Senior Webmaster (Volunteer)",
    overview:
      "Bring a national nonprofit website up to modern standards — readability, brand clarity, SEO, and a path off desktop-bound infrastructure.",
    scope:
      "Visual rebrand, information architecture, ongoing content updates, SEO improvements, and migration planning from desktop iMIS toward cloud hosting.",
    outcome:
      "A clearer visitor experience and a documented modernization path so the organization can sustain the site without relying on outdated desktop tooling.",
    stack: ["CMS", "SEO", "iMIS", "Content strategy"],
    metrics: [
      { value: "National", label: "Audience scale" },
      { value: "iMIS → cloud", label: "Platform path" },
      { value: "SEO", label: "Discoverability focus" },
    ],
    featured: true,
    category: "production",
    migration: true,
    cover: "/images/case-nscar.jpg",
    coverPosition: "center 40%",
    prompt: "See the redesign approach",
  },
  {
    id: "circleci",
    title: "Marketing site production & landing pages",
    org: "CircleCI",
    role: "Web Optimization Coordinator",
    overview:
      "Production engineer for CircleCI’s external marketing site — landing pages, Contentful publishing, and SEO health for go-to-market launches.",
    scope:
      "Jekyll and Next.js landing pages, GitHub + Contentful publishing, bug fixes, refactoring, backlink/404 remediation, and Agile ticket management with web production.",
    outcome:
      "Reliable launch support for new products with cleaner production workflows and improved technical SEO hygiene on the live site.",
    stack: ["Next.js", "Jekyll", "Contentful", "SEO", "GitHub"],
    metrics: [
      { value: "Jekyll + Next", label: "Landing stack" },
      { value: "Contentful", label: "Publishing CMS" },
      { value: "GTM launches", label: "Campaign support" },
    ],
    featured: true,
    category: "production",
    cover: "/images/case-circleci.jpg",
    coverPosition: "center 35%",
    prompt: "Open the production details",
  },
  {
    id: "wedding",
    title: "Sister’s wedding website",
    org: "Client build · Family",
    role: "Designer & developer",
    overview:
      "A custom wedding website for my sister — guest-facing information, schedule, travel, and RSVP flows designed to feel personal without relying on a cookie-cutter template.",
    scope:
      "Art direction, responsive layout, information architecture for wedding logistics, and a maintainable build the couple could update as details changed.",
    outcome:
      "A polished, on-brand microsite that guided guests through the weekend and showcased end-to-end client delivery — from brief to launch.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive design"],
    metrics: [
      { value: "1", label: "Custom microsite" },
      { value: "Mobile-first", label: "Guest experience" },
      { value: "Full delivery", label: "Brief → launch" },
    ],
    featured: true,
    category: "client",
    cover: "/images/case-wedding.jpg",
    coverPosition: "center 45%",
    // Swap in the live wedding URL when ready:
    // href: "https://your-sisters-wedding-site.com",
    prompt: "Open the wedding build story",
  },
  {
    id: "mindflo",
    title: "Mindflo",
    org: "Student project",
    role: "Full-stack developer",
    overview:
      "Self-care tracker for logging a wellness journey — React UI with a Node/Express API, MongoDB/Mongoose persistence, and both internal and external APIs.",
    scope: "React UI, Express API, MongoDB persistence, and habit-tracking flows.",
    outcome:
      "A full-stack product demo spanning auth-adjacent patterns, CRUD, and polished front-end UX.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Mongoose"],
    metrics: [
      { value: "Full stack", label: "Build type" },
      { value: "MongoDB", label: "Data layer" },
    ],
    featured: false,
    category: "builds",
    image: "/images/mindflo.png",
    href: "https://github.com/rwanke14/mindflo",
    prompt: "View on GitHub",
  },
  {
    id: "bechdel",
    title: "Bechdel Billboard",
    org: "Student project",
    role: "Backend lead",
    overview:
      "Movie database of films that pass the Bechdel Test, plus a community blog — Node/Express with MySQL/Sequelize, auth, search, and user interaction.",
    scope:
      "Node routes, MySQL/Sequelize models, auth, and front-end bug fixes across the CRUD app.",
    outcome:
      "A collaborative full-CRUD product with searchable catalog and community blog features.",
    stack: ["Node.js", "MySQL", "Sequelize", "Express", "Handlebars"],
    metrics: [
      { value: "Full CRUD", label: "Capability" },
      { value: "MySQL", label: "Database" },
    ],
    featured: false,
    category: "builds",
    image: "/images/bechdel.png",
    href: "https://github.com/rwanke14/BechdelBillboard",
    prompt: "View on GitHub",
  },
  {
    id: "tarot",
    title: "Ace of Pentacles",
    org: "Student project",
    role: "Team lead & design",
    overview:
      "Tarot site with two reading types and daily horoscopes — HTML/CSS/JS with jQuery and external APIs for cards and astrology data.",
    scope:
      "Team leadership, visual design, JavaScript interactions, and API-driven card/horoscope pages.",
    outcome:
      "A playful multi-page experience that demonstrated client-ready collaboration and front-end craft.",
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "APIs"],
    metrics: [
      { value: "Team lead", label: "Role" },
      { value: "APIs", label: "Data source" },
    ],
    featured: false,
    category: "builds",
    image: "/images/tarot.png",
    href: "https://github.com/rwanke14/AceOfPentacles",
    prompt: "View on GitHub",
  },
];

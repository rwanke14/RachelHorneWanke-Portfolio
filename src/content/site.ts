export const site = {
  name: "Rachel Wanke",
  title: "Rachel Wanke — Website Specialist & Web Producer",
  description:
    "Website specialist and contractor offering web development, CMS migration, WordPress & Contentful management, technical SEO, and tech stack optimization.",
  tagline: "CMS migrations · Web production · SEO",
  summary:
    "I modernize websites — CMS migrations, production builds, and marketing sites that stay healthy across locales and launches. Most recently Website Specialist at Centric Software.",
  availability: "Actively seeking full-time roles & freelance builds",
  email: "rkhorne09@gmail.com",
  location: "Arlington, VA",
  links: {
    linkedin: "https://www.linkedin.com/in/rachel-wanke",
    github: "https://github.com/rwanke14",
    resume: "https://www.linkedin.com/in/rachel-wanke",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const about = {
  heading: "About",
  lead:
    "Software engineer · web production · SEO — based in Arlington, VA.",
  bio: [
    "Most recently I was a Website Specialist on Centric Software's Digital Marketing team, where I oversaw website infrastructure, guided developers through sprint delivery, and turned stakeholder requests into production-ready builds — CMS modernization, Figma-to-live page work, technical SEO, and keeping a global marketing site healthy across locales.",
    "At Centric I helped complete a WordPress → Contentful migration and stack upgrade, including an AWS Lambda / API Gateway reverse proxy so Netlify and WP Engine could share traffic during cutover, plus Google Tag Manager instrumentation, localization across 12+ languages, and documentation so content owners could publish with confidence.",
    "I continue to serve as Senior Webmaster for the National Society of the Children of the American Revolution, redesigning the national website for modern design standards and stronger SEO, and migrating their iMIS platform from desktop toward the cloud.",
    "Earlier, I was a Web Optimization Coordinator at CircleCI — building landing pages in Jekyll and Next.js, publishing through Contentful, and supporting go-to-market launches with production and SEO work. I bring full-stack training (React, Next.js, Node, SQL/Mongo) and earlier careers in legal and nonprofit operations to every project: clear architecture, measurable SEO, and sites teams can actually maintain. I'm currently open to full-time web production roles and freelance site work.",
  ],
  capabilities: [
    {
      label: "Front end",
      items: ["React", "Next.js", "JavaScript", "HTML / CSS / SCSS", "Jekyll", "PHP", "TypeScript"],
    },
    {
      label: "CMS & migrations",
      items: ["Contentful", "WordPress", "WP Engine", "Netlify", "iMIS"],
    },
    {
      label: "Production & SEO",
      items: [
        "Technical SEO",
        "Google Tag Manager",
        "Localization",
        "Landing pages",
        "SEO Audits",
        "Website Optimization",
        "Website Refresh",
      ],
    },
    {
      label: "Backend & infra",
      items: ["Node.js", "AWS", "GraphQL", "RESTful APIs", "AI Automation", "MySQL", "MongoDB"],
    },
  ],
} as const;

/** Contractor offerings for companies hiring freelance / contract support. */
export const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    subtitle: "Front end & back end",
    blurb:
      "Full-stack builds and production work — React/Next.js front ends, Node APIs, and the day-to-day engineering that keeps marketing and product sites shipping.",
    points: [
      "React, Next.js, HTML/CSS/SCSS, and JavaScript UI builds",
      "Node.js APIs, Express, and database-backed features",
      "Figma-to-production components and landing pages",
      "Sprint collaboration, QA, and stakeholder delivery",
    ],
  },
  {
    id: "cms-migration",
    number: "02",
    title: "CMS Migration Strategy & Development",
    subtitle: "Plan, cut over, and ship",
    blurb:
      "End-to-end platform moves with a cutover plan that protects live traffic — from content modeling through dual-stack routing and publisher handoff.",
    points: [
      "WordPress → Contentful (and similar) migration architecture",
      "Zero-downtime cutovers with reverse proxies (e.g. AWS Lambda / API Gateway)",
      "Content modeling, redirects, and SEO preservation",
      "Documentation so your team owns the new stack",
    ],
    featured: true,
  },
  {
    id: "cms-management",
    number: "03",
    title: "CMS Management",
    subtitle: "WordPress or Contentful",
    blurb:
      "Ongoing CMS operations for marketing teams — publishing workflows, component upkeep, and reliable day-to-day management on WordPress or Contentful.",
    points: [
      "WordPress / WP Engine site operations and theme or block work",
      "Contentful models, entries, and publisher enablement",
      "Page builds, content updates, and release cadence",
      "Governance, QA, and handoff for content owners",
    ],
  },
  {
    id: "technical-seo",
    number: "04",
    title: "Technical SEO Resolution",
    subtitle: "Find it · fix it · verify it",
    blurb:
      "Resolve the technical issues that block discovery — crawl/index problems, broken routes, metadata, localization, and Core Web Vitals — so content can rank.",
    points: [
      "Technical audits and remediation roadmaps",
      "404s, redirects, metadata, and structured data fixes",
      "Multilingual / localized SEO health",
      "GTM, analytics, and tag-layer cleanup",
    ],
  },
  {
    id: "tech-stack",
    number: "05",
    title: "Tech Stack Optimization",
    subtitle: "Performance · architecture · maintainability",
    blurb:
      "Tighten the stack your site runs on — hosting, CMS, build pipeline, and front-end architecture — so the site is faster, cleaner, and easier to maintain.",
    points: [
      "Stack assessment (CMS, hosting, build, CDN)",
      "Performance and Core Web Vitals improvements",
      "Modernization paths (Jekyll/legacy → Next.js, headless CMS)",
      "Developer workflow, docs, and maintainability upgrades",
    ],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    detail:
      "Map goals, content owners, SEO risk, and what must survive the migration or redesign.",
  },
  {
    step: "02",
    title: "Architect",
    detail:
      "Define CMS models, routing, proxy strategy, and a cutover path that keeps the live site stable.",
  },
  {
    step: "03",
    title: "Build & migrate",
    detail:
      "Ship pages from Figma, move content, wire GTM, and validate across locales and devices.",
  },
  {
    step: "04",
    title: "Measure",
    detail:
      "Monitor SEO health, publishing velocity, and performance — then document so the team can own it.",
  },
] as const;

export const impactStats = [
  {
    value: 12,
    suffix: "+",
    label: "Language locales supported",
    icon: "globe",
  },
  {
    value: 2,
    suffix: "",
    label: "CMS migrations managed",
    icon: "migrate",
  },
  {
    value: 2,
    suffix: "",
    label: "Enterprise marketing sites maintained",
    icon: "building",
  },
  {
    value: 1,
    suffix: "",
    label: "National nonprofit redesign in flight",
    icon: "flag",
  },
] as const;

export const site = {
  name: "Rachel Wanke",
  title: "Rachel Wanke — Website Specialist & Web Producer",
  description:
    "Website specialist and web producer offering senior-level platform work plus freelance web development, WordPress support, CMS consulting, technical SEO, and website maintenance.",
  tagline: "Web Development · CMS · Technical SEO · Ongoing Support",
  summary:
    "I help marketing teams, nonprofits, and growing organizations build, fix, and improve their websites—from WordPress support and technical SEO to CMS migrations and modern web development.",
  positioning:
    "Most recently Website Specialist at Centric Software, with prior web production at CircleCI and ongoing nonprofit webmaster work — senior-level CMS, SEO, and digital experience delivery.",
  availability:
    "Available for full-time roles · contract projects · ongoing web support",
  email: "rkhorne09@gmail.com",
  location: "Arlington, VA",
  links: {
    linkedin: "https://www.linkedin.com/in/rachel-wanke",
    github: "https://github.com/rwanke14",
    resume: "https://www.linkedin.com/in/rachel-wanke",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const about = {
  heading: "About",
  lead:
    "Software engineer · web production · SEO — based in Arlington, VA.",
  bio: [
    "I build and improve websites at the intersection of development, content, marketing, and business needs. My experience spans enterprise web platforms, CMS architecture, technical SEO, analytics, and web operations — with a focus on creating sites that perform well and are practical for the teams responsible for them.",
    "Most recently, I was a Website Specialist on Centric Software's Digital Marketing team, where I managed website infrastructure, coordinated developer sprints, and translated stakeholder needs into production-ready solutions. I played a major role in Centric's WordPress-to-Contentful migration and web stack modernization, including building an AWS Lambda and API Gateway reverse proxy that allowed Netlify and WP Engine to share traffic during the transition. I also supported technical SEO, analytics, and localization across 12+ languages.",
    "I continue to serve as Senior Webmaster for the National Society of the Children of the American Revolution, helping modernize its national website, strengthen SEO and user experience, and support its iMIS cloud transition. Previously, at CircleCI, I built and maintained marketing experiences using Jekyll, Next.js, and Contentful while supporting launches, web production, and SEO.",
    "What ties my work together is the ability to bridge technical teams and the people who rely on the web to accomplish business goals. I care about choosing solutions that solve the underlying problem, perform well, and remain manageable after launch.",
    "I'm currently open to senior web platform, digital experience, website management, and web production opportunities, along with select freelance and contract projects involving development, CMS platforms, technical SEO, migrations, troubleshooting, and ongoing web support.",
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

export const servicePackages = [
  {
    id: "fix-tuneup",
    title: "Website Fix & Tune-Up",
    description:
      "For websites that are broken, outdated, slow, or just need some attention. I'll diagnose the problem, identify priorities, and fix the issues we agree on.",
    pricing: "Starting at $250",
  },
  {
    id: "technical-seo",
    title: "Technical SEO Cleanup",
    description:
      "Technical SEO support including broken links, redirects, indexing issues, metadata, schema, international SEO, and other problems affecting search visibility.",
    pricing: "Starting at $350",
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    description:
      "Responsive landing page implementation for campaigns, marketing initiatives, product launches, or new content.",
    pricing: "Starting at $500",
  },
  {
    id: "ongoing-support",
    title: "Ongoing Website Support",
    description:
      "Flexible support for organizations that need someone to handle updates, troubleshooting, publishing, QA, technical maintenance, and ongoing improvements.",
    pricing: "Monthly or hourly support available",
  },
  {
    id: "cms-consulting",
    title: "Website & CMS Consulting",
    description:
      "Strategic help with CMS selection, website architecture, migrations, rebuild decisions, technical requirements, and platform planning.",
    pricing: "Hourly or project-based",
  },
] as const;

export const audiences = [
  {
    id: "marketing",
    title: "Marketing Teams",
    description:
      "Extra development and CMS capacity for launches, campaigns, migrations, and production backlogs.",
  },
  {
    id: "small-business",
    title: "Small Businesses",
    description:
      "Professional web support without needing to retain a large agency.",
  },
  {
    id: "nonprofit",
    title: "Nonprofits & Associations",
    description:
      "Website modernization, content organization, SEO, CMS support, and ongoing maintenance.",
  },
  {
    id: "agencies",
    title: "Agencies",
    description:
      "Overflow or white-label support for development, CMS, technical SEO, website production, and troubleshooting.",
  },
] as const;

export const inquiryTopics = [
  "Website fix or troubleshooting",
  "WordPress support",
  "Technical SEO",
  "New website or landing page",
  "CMS migration",
  "Ongoing website support",
  "Consulting",
  "Full-time opportunity",
  "Other",
] as const;

export const inquiryBudgets = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000+",
  "Not sure yet",
  "Not applicable / full-time opportunity",
] as const;

/** Larger technical capabilities demonstrated in professional work. */
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

export const technicalCapabilities = [
  "CMS migration strategy and implementation",
  "WordPress",
  "Contentful",
  "Next.js",
  "CMS architecture",
  "Web production",
  "Technical SEO",
  "Analytics and GTM",
  "Website performance",
  "Integrations",
  "AWS / web infrastructure",
  "Content migrations",
  "Multilingual / global websites",
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

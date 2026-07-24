export const site = {
  name: "Rachel Wanke",
  title: "Rachel Wanke — Website Specialist & Web Producer",
  description:
    "Website specialist and web producer specializing in CMS migrations, site modernization, SEO, and production-ready web builds. Available for full-time roles and freelance projects.",
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
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
      items: ["React", "Next.js", "JavaScript", "HTML / CSS / SCSS", "Jekyll"],
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
      ],
    },
    {
      label: "Backend & infra",
      items: ["Node.js", "AWS Lambda", "API Gateway", "MySQL", "MongoDB"],
    },
  ],
} as const;

export const services = [
  {
    id: "migration",
    title: "CMS migrations & modernization",
    blurb:
      "Plan and execute platform moves — WordPress to Contentful, legacy CMS to cloud, dual-stack cutovers with reverse proxies so traffic never drops.",
    points: [
      "Migration architecture & cutover plans",
      "Content modeling & publisher handoff",
      "SEO preservation through the move",
    ],
  },
  {
    id: "production",
    title: "Web production & landing pages",
    blurb:
      "Figma-to-live builds, campaign pages, and day-to-day production for marketing teams that need reliable shipping cadence.",
    points: [
      "Component & page builds",
      "GTM / tracking instrumentation",
      "Sprint ownership & QA",
    ],
  },
  {
    id: "seo",
    title: "Technical SEO & site health",
    blurb:
      "Fix what blocks discovery — 404s, metadata, localization, Core Web Vitals — so redesigned sites actually perform.",
    points: [
      "Technical audits & remediation",
      "Multilingual / localized SEO",
      "Analytics & tag management",
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
  { value: 12, suffix: "+", label: "Language locales supported" },
  { value: 3, suffix: "", label: "Major CMS / platform migrations" },
  { value: 2, suffix: "", label: "Enterprise marketing sites delivered" },
  { value: 1, suffix: "", label: "National nonprofit redesign in flight" },
] as const;

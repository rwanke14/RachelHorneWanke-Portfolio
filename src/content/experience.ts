export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  volunteer?: boolean;
};

export type EducationItem = {
  school: string;
  credential: string;
  period: string;
};

export const experience: ExperienceItem[] = [
  {
    org: "Centric Software",
    role: "Website Specialist",
    period: "Mar 2023 — Jul 2026",
    location: "Arlington, VA",
    highlights: [
      "Completed WordPress → Contentful CMS migration and dual-stack cutover for the global marketing site",
      "Architected AWS Lambda / API Gateway reverse proxy so Netlify and WP Engine shared traffic without downtime",
      "Led developer sprints — planning, hour tracking, and delivery quality across web requests",
      "Shipped Figma-to-production components and maintained 12+ language locales with technical SEO hygiene",
      "Instrumented GTM, documented architecture, and unblocked stakeholder page builds at production speed",
    ],
  },
  {
    org: "National Society of the Children of the American Revolution",
    role: "Senior Webmaster",
    period: "Apr 2022 — Present",
    location: "Washington, DC",
    volunteer: true,
    highlights: [
      "Lead national website redesign: visual system, readability, and SEO for a public-facing nonprofit",
      "Drive iMIS desktop → cloud migration planning while keeping content operations running",
      "Own ongoing publishing, brand updates, and information architecture improvements",
    ],
  },
  {
    org: "CircleCI",
    role: "Web Optimization Coordinator",
    period: "Oct 2021 — Dec 2022",
    highlights: [
      "Built and maintained marketing landing pages in Jekyll and Next.js for product go-to-market launches",
      "Published through GitHub + Contentful; partnered with web production on Agile / Jira delivery",
      "Improved technical SEO — 404 remediation, backlinks, and production bug fixes on the live site",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "George Washington University",
    credential: "Full Stack Development Certificate",
    period: "2020 — 2021",
  },
  {
    school: "General Assembly",
    credential: "UX / UI Design",
    period: "2017",
  },
  {
    school: "Elon University",
    credential: "Bachelor of Arts",
    period: "2005 — 2009",
  },
];

import Link from "next/link";
import { AudienceCard } from "@/components/AudienceCard";
import { Cta } from "@/components/Cta";
import { PageBanner } from "@/components/PageBanner";
import { Process } from "@/components/Process";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { Services } from "@/components/Services";
import { audiences, servicePackages } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata(
  "Services",
  "Freelance web development, WordPress support, CMS consulting, technical SEO, and ongoing website maintenance for marketing teams, nonprofits, small businesses, and agencies.",
);

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Web help without the agency overhead."
        lead="I work with businesses, nonprofits, marketing teams, and agencies that need experienced web support without adding another full-time employee or retaining a large agency."
        wide
        actions={
          <Link className="btn btnPrimary" href="/contact">
            Tell Me About Your Project
          </Link>
        }
      />

      <section
        className={`section ${styles.paper}`}
        aria-labelledby="ways-heading"
      >
        <div className="container">
          <Reveal>
            <h2 id="ways-heading" className="sectionTitle">
              Ways I can help
            </h2>
            <p className="sectionLead">
              Clear starting points for common website needs. Scope and pricing
              are confirmed after we talk through the specifics.
            </p>
          </Reveal>
          <div className={styles.packageGrid}>
            {servicePackages.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                pricing={service.pricing}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      <Services showCta={false} />
      <Process />

      <section
        className={`section ${styles.mist}`}
        aria-labelledby="audience-heading"
      >
        <div className="container">
          <Reveal>
            <h2 id="audience-heading" className="sectionTitle">
              Who I work with
            </h2>
            <p className="sectionLead">
              Organizations that need experienced web help — whether you&apos;re
              improving what you already have, launching something new, or need
              extra technical capacity.
            </p>
          </Reveal>
          <div className={styles.audienceGrid}>
            {audiences.map((audience, index) => (
              <AudienceCard
                key={audience.id}
                title={audience.title}
                description={audience.description}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.paper}`}
        aria-labelledby="else-heading"
      >
        <div className="container">
          <Cta
            heading="Need something else?"
            headingId="else-heading"
            copy="Not every web problem fits neatly into a package. If you're dealing with a website, CMS, SEO, analytics, migration, or technical issue and aren't sure what you need, send me a note."
            primary={{ href: "/contact", label: "Tell Me What's Going On" }}
          />
        </div>
      </section>
    </>
  );
}

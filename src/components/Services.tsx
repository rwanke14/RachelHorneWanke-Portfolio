import Link from "next/link";
import { services } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Services.module.css";

type ServicesProps = {
  /** When true, show the website services and support CTA band under the list. */
  showCta?: boolean;
};

export function Services({ showCta = true }: ServicesProps) {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">What I offer companies</h2>
          <p className="sectionLead">
            Contract and freelance support for teams that need production
            engineering, CMS work, and technical SEO — without standing up a
            full in-house web org.
          </p>
        </Reveal>

        <div className={styles.list}>
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <article
                className={`${styles.card} ${service.id === "cms-migration" ? styles.featured : ""}`}
              >
                <div className={styles.header}>
                  <div className={styles.topRow}>
                    <span className={styles.number}>{service.number}</span>
                    {service.id === "cms-migration" ? (
                      <span className={styles.badge}>Specialty</span>
                    ) : null}
                  </div>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.subtitle}>{service.subtitle}</p>
                  <p className={styles.blurb}>{service.blurb}</p>
                </div>
                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta ? (
          <Reveal>
            <div className={styles.ctaBand}>
              <p>
                Need a contractor for a migration, CMS ops, or production
                sprint? Let&apos;s talk scope and timeline.
              </p>
              <div className={styles.ctaActions}>
                <Link className="btn btnPrimary" href="/contact">
                  Start a conversation
                </Link>
                <Link className="btn btnOutline" href="/work">
                  See selected work
                </Link>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

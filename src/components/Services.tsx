import Link from "next/link";
import { services, technicalCapabilities } from "@/content/site";
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
          <h2 className="sectionTitle">Larger technical projects</h2>
          <p className="sectionLead">
            Bigger engagements drawn from the same work in my portfolio —
            platform moves, production builds, and the technical groundwork
            underneath them.
          </p>
          <ul
            className={styles.capabilities}
            aria-label="Technical capabilities"
          >
            {technicalCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
                  See case studies
                </Link>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

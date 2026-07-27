import Link from "next/link";
import { services } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./ServicesPreview.module.css";

export function ServicesPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Website Services and Support</h2>
          <p className="sectionLead">
            What I offer companies — web development, CMS migration and
            management, technical SEO, and stack optimization.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 50}>
              <Link className={styles.card} href="/services">
                <span className={styles.number}>{service.number}</span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.subtitle}>{service.subtitle}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className={styles.footer}>
            <Link className="btn btnOutline" href="/services">
              View full offerings
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

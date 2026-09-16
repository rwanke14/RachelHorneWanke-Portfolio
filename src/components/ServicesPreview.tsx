import Link from "next/link";
import { servicePackages } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./ServicesPreview.module.css";

export function ServicesPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Website services and support</h2>
          <p className="sectionLead">
            Freelance and contract help for marketing teams and organizations —
            website fixes, WordPress, technical SEO, landing pages, and ongoing
            support.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {servicePackages.map((service, index) => (
            <Reveal key={service.id} delay={index * 50}>
              <Link className={styles.card} href="/services">
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.subtitle}>{service.pricing}</p>
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

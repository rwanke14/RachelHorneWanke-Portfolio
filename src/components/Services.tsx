import { services } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">What I deliver</h2>
          <p className="sectionLead">
            Accomplishment-focused services for teams that need migrations,
            production velocity, and sites that stay discoverable.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <article
                className={`${styles.card} ${service.id === "migration" ? styles.featured : ""}`}
              >
                {service.id === "migration" ? (
                  <span className={styles.badge}>Specialty</span>
                ) : null}
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.blurb}>{service.blurb}</p>
                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

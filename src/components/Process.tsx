import { processSteps } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section id="process" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">How I work</h2>
          <p className="sectionLead">
            A migration-aware production process — discover risk early, cut over
            safely, then measure what changed.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 70}>
              <article className={styles.step}>
                <p className={styles.num}>{item.step}</p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.detail}>{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

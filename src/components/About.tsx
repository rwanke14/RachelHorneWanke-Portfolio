import Image from "next/image";
import { about } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./About.module.css";

type AboutProps = {
  showIntro?: boolean;
};

export function About({ showIntro = true }: AboutProps) {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        {showIntro ? (
          <Reveal>
            <h2 className="sectionTitle">{about.heading}</h2>
            <p className="sectionLead">{about.lead}</p>
          </Reveal>
        ) : null}

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.portraitWrap}>
              <Image
                className={styles.portrait}
                src="/images/headshot.png"
                alt="Portrait of Rachel Wanke"
                fill
                sizes="(max-width: 800px) 100vw, 360px"
                priority={false}
              />
            </div>
          </Reveal>

          <div>
            <Reveal className={styles.bio}>
              {about.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <h3 className={styles.capsTitle}>Capabilities</h3>
              <ul className={styles.caps}>
                {about.capabilities.map((group) => (
                  <li key={group.label}>
                    <p className={styles.capLabel}>{group.label}</p>
                    <p className={styles.capItems}>{group.items.join(" · ")}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

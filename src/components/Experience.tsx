import { education, experience } from "@/content/experience";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Experience</h2>
          <p className="sectionLead">
            Web production leadership across SaaS marketing sites and a national
            nonprofit — with a résumé on LinkedIn for the full history.
          </p>
        </Reveal>

        <div className={styles.layout}>
          <ol className={styles.list}>
            {experience.map((job, index) => (
              <Reveal key={job.org} as="li" className={styles.item} delay={index * 70}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.org}>
                  {job.org}
                  {job.volunteer ? (
                    <span className={styles.badge}>Volunteer</span>
                  ) : null}
                </p>
                <p className={styles.period}>
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <ul className={styles.highlights}>
                  {job.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <Reveal className={styles.aside} delay={120}>
            <div>
              <h3 className={styles.asideTitle}>Education</h3>
              <ul className={styles.education}>
                {education.map((item) => (
                  <li key={item.school}>
                    <p className={styles.school}>{item.school}</p>
                    <p className={styles.credential}>{item.credential}</p>
                    <p className={styles.eduPeriod}>{item.period}</p>
                  </li>
                ))}
              </ul>
            </div>
            <a
              className="btn btnOutline"
              href={site.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé on LinkedIn
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

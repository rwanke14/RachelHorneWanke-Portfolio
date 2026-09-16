import { Reveal } from "./Reveal";
import styles from "./AudienceCard.module.css";

type AudienceCardProps = {
  title: string;
  description: string;
  delay?: number;
};

export function AudienceCard({
  title,
  description,
  delay = 0,
}: AudienceCardProps) {
  return (
    <Reveal delay={delay}>
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </article>
    </Reveal>
  );
}

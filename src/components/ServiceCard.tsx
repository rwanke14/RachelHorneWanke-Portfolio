import { Reveal } from "./Reveal";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  title: string;
  description: string;
  pricing: string;
  delay?: number;
};

export function ServiceCard({
  title,
  description,
  pricing,
  delay = 0,
}: ServiceCardProps) {
  return (
    <Reveal delay={delay}>
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.pricing}>{pricing}</p>
      </article>
    </Reveal>
  );
}

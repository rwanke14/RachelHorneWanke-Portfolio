import Image from "next/image";
import type { WorkItem } from "@/content/work";
import styles from "./Work.module.css";

export function ProjectCard({ item }: { item: WorkItem }) {
  return (
    <article className={styles.build}>
      {item.image ? (
        <div className={styles.thumb}>
          <Image
            src={item.image}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : null}
      <div className={styles.buildBody}>
        <p className={styles.buildMeta}>
          {item.org} · {item.role}
        </p>
        <h3 className={styles.buildTitle}>{item.title}</h3>
        <p className={styles.buildOutcome}>{item.overview}</p>
        <ul className={styles.buildStack} aria-label="Technologies used">
          {item.stack.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {item.href ? (
          <a
            className={styles.githubLink}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.prompt ?? "View on GitHub"}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

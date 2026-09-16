import Image from "next/image";
import type { WorkItem } from "@/content/work";
import styles from "./Work.module.css";

type CaseStudyProps = {
  item: WorkItem;
  open: boolean;
  onToggle: (id: string) => void;
};

export function CaseStudy({ item, open, onToggle }: CaseStudyProps) {
  const panelId = `work-panel-${item.id}`;
  const triggerId = `work-trigger-${item.id}`;
  const story =
    item.story ??
    [
      { label: "Overview", body: item.overview },
      { label: "Scope", body: item.scope },
      { label: "Impact", body: item.outcome },
    ];

  return (
    <article
      className={`${styles.case} ${open ? styles.caseOpen : ""} ${item.migration ? styles.caseMigration : ""}`}
    >
      <button
        type="button"
        id={triggerId}
        className={styles.caseTrigger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(item.id)}
      >
        <div
          className={`${styles.caseVisual} ${item.cover ? "" : styles.caseVisualPlain}`}
        >
          {item.cover ? (
            <div className={styles.cover}>
              <Image
                src={item.cover}
                alt={`${item.org} — ${item.title}`}
                fill
                sizes="144px"
                style={
                  item.coverPosition
                    ? { objectPosition: item.coverPosition }
                    : undefined
                }
              />
            </div>
          ) : null}
          <div className={styles.caseCopy}>
            <div className={styles.meta}>
              <span className={styles.org}>{item.org}</span>
              <span>{item.role}</span>
              {item.migration ? (
                <span className={styles.migrationTag}>CMS migration</span>
              ) : null}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <ul className={styles.metricPeek} aria-hidden={!open}>
              {item.metrics.slice(0, 3).map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
            <p className={styles.prompt}>
              {open ? "Click to collapse" : (item.prompt ?? "Click to expand")}
            </p>
          </div>
        </div>
        <span className={styles.chevron} aria-hidden="true">
          <Chevron />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
      >
        <div className={styles.panelInner}>
          <div className={styles.panelBody}>
            <div className={styles.storyGrid}>
              {story.map((section) => (
                <div key={section.label}>
                  <h4 className={styles.storyLabel}>{section.label}</h4>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div className={styles.metricRow}>
              {item.metrics.map((metric) => (
                <div key={metric.label} className={styles.metricCard}>
                  <p className={styles.metricValue}>{metric.value}</p>
                  <p className={styles.metricLabel}>{metric.label}</p>
                </div>
              ))}
            </div>

            <ul className={styles.stack} aria-label="Technologies used">
              {item.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            {item.href ? (
              <a
                className="btn btnOutline"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 5.75 8 10.25l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

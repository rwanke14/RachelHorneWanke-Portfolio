"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { work, type WorkCategory, type WorkItem } from "@/content/work";
import { Reveal } from "./Reveal";
import styles from "./Work.module.css";

type Filter = "all" | WorkCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "production", label: "Production" },
  { id: "client", label: "Client builds" },
  { id: "builds", label: "Selected builds" },
];

export function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>("centric");

  const featured = useMemo(
    () =>
      work.filter(
        (item) =>
          item.featured &&
          (filter === "all" || item.category === filter),
      ),
    [filter],
  );

  const builds = useMemo(
    () =>
      work.filter(
        (item) =>
          !item.featured &&
          (filter === "all" || item.category === filter),
      ),
    [filter],
  );

  function toggleCase(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className="sectionTitle">Selected work</h2>
          <p className="sectionLead">
            Case studies structured like peer portfolios — Overview, Scope,
            and Impact — with CMS migrations called out. Expand a project to
            dig in.
          </p>
          <p className={styles.hint} aria-hidden="true">
            ↓ Filter · expand · explore accomplishments
          </p>
        </Reveal>

        <Reveal>
          <div
            className={styles.filters}
            role="tablist"
            aria-label="Filter portfolio work"
          >
            {filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`${styles.filterBtn} ${active ? styles.filterActive : ""}`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {featured.length > 0 ? (
          <div className={styles.featured}>
            {featured.map((item, index) => {
              const open = openId === item.id;
              const panelId = `work-panel-${item.id}`;
              const triggerId = `work-trigger-${item.id}`;

              return (
                <Reveal key={item.id} delay={index * 70}>
                  <article
                    className={`${styles.case} ${open ? styles.caseOpen : ""} ${item.migration ? styles.caseMigration : ""}`}
                  >
                    <button
                      type="button"
                      id={triggerId}
                      className={styles.caseTrigger}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggleCase(item.id)}
                    >
                      <div className={styles.caseVisual}>
                        {item.cover ? (
                          <div className={styles.cover}>
                            <Image
                              src={item.cover}
                              alt=""
                              fill
                              sizes="144px"
                            />
                          </div>
                        ) : null}
                        <div className={styles.caseCopy}>
                          <div className={styles.meta}>
                            <span className={styles.org}>{item.org}</span>
                            <span>{item.role}</span>
                            {item.migration ? (
                              <span className={styles.migrationTag}>
                                CMS migration
                              </span>
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
                            {open
                              ? "Click to collapse"
                              : (item.prompt ?? "Click to expand")}
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
                            <div>
                              <h4 className={styles.storyLabel}>Overview</h4>
                              <p>{item.overview}</p>
                            </div>
                            <div>
                              <h4 className={styles.storyLabel}>Scope</h4>
                              <p>{item.scope}</p>
                            </div>
                            <div>
                              <h4 className={styles.storyLabel}>Impact</h4>
                              <p>{item.outcome}</p>
                            </div>
                          </div>

                          <div className={styles.metricRow}>
                            {item.metrics.map((metric) => (
                              <div key={metric.label} className={styles.metricCard}>
                                <p className={styles.metricValue}>
                                  {metric.value}
                                </p>
                                <p className={styles.metricLabel}>
                                  {metric.label}
                                </p>
                              </div>
                            ))}
                          </div>

                          <ul
                            className={styles.stack}
                            aria-label="Technologies used"
                          >
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
                </Reveal>
              );
            })}
          </div>
        ) : null}

        {builds.length > 0 ? (
          <>
            <Reveal>
              <h3 className={styles.buildsTitle}>Selected builds</h3>
              <p className={styles.buildsLead}>
                Hover a build, then open it on GitHub.
              </p>
            </Reveal>
            <div className={styles.builds}>
              {builds.map((item, index) => (
                <Reveal key={item.id} delay={index * 80}>
                  <BuildCard item={item} />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}

        {featured.length === 0 && builds.length === 0 ? (
          <p className={styles.empty}>No projects in this filter yet.</p>
        ) : null}
      </div>
    </section>
  );
}

function BuildCard({ item }: { item: WorkItem }) {
  const body = (
    <>
      {item.image ? (
        <div className={styles.thumb}>
          <Image
            src={item.image}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className={styles.overlay}>
            <span>{item.prompt ?? "Open project"}</span>
          </div>
        </div>
      ) : null}
      <div className={styles.buildBody}>
        <p className={styles.buildMeta}>
          {item.org} · {item.role}
        </p>
        <h4 className={styles.buildTitle}>{item.title}</h4>
        <p className={styles.buildOutcome}>{item.overview}</p>
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        className={styles.build}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return <article className={styles.build}>{body}</article>;
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

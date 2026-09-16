"use client";

import { useMemo, useState } from "react";
import { work, workGroups, type WorkCategory } from "@/content/work";
import { CaseStudy } from "./CaseStudy";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import styles from "./Work.module.css";

type Filter = "all" | WorkCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "production", label: "Professional" },
  { id: "client", label: "Freelance & client" },
  { id: "builds", label: "Earlier projects" },
];

export function Work({ showIntro = true }: { showIntro?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>("centric");

  const visibleGroups = useMemo(
    () =>
      workGroups
        .map((group) => ({
          ...group,
          items: work.filter(
            (item) =>
              item.category === group.id &&
              (filter === "all" || item.category === filter),
          ),
        }))
        .filter((group) => group.items.length > 0),
    [filter],
  );

  function toggleCase(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        {showIntro ? (
          <Reveal>
            <h2 className="sectionTitle">Selected work</h2>
            <p className="sectionLead">
              Case studies and projects — Overview, Scope, and Impact — with CMS
              migrations called out. Expand a project to dig in.
            </p>
            <p className={styles.hint} aria-hidden="true">
              ↓ Filter · expand · explore accomplishments
            </p>
          </Reveal>
        ) : (
          <Reveal>
            <p className={styles.hint} aria-hidden="true">
              ↓ Filter · expand · explore accomplishments
            </p>
          </Reveal>
        )}

        <Reveal>
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter portfolio work"
          >
            {filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  className={`${styles.filterBtn} ${active ? styles.filterActive : ""}`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {visibleGroups.map((group) => {
          const isBuilds = group.id === "builds";
          return (
            <section
              key={group.id}
              className={`${styles.group} ${isBuilds ? styles.groupMuted : ""}`}
              aria-labelledby={`work-group-${group.id}`}
            >
              <Reveal>
                <h2 id={`work-group-${group.id}`} className={styles.groupTitle}>
                  {group.title}
                </h2>
                <p className={styles.groupLead}>{group.lead}</p>
              </Reveal>

              {isBuilds ? (
                <div className={styles.builds}>
                  {group.items.map((item, index) => (
                    <Reveal key={item.id} delay={index * 80}>
                      <ProjectCard item={item} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className={styles.featured}>
                  {group.items.map((item, index) => (
                    <Reveal key={item.id} delay={index * 70}>
                      <CaseStudy
                        item={item}
                        open={openId === item.id}
                        onToggle={toggleCase}
                      />
                    </Reveal>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        {visibleGroups.length === 0 ? (
          <p className={styles.empty}>No projects in this filter yet.</p>
        ) : null}
      </div>
    </section>
  );
}

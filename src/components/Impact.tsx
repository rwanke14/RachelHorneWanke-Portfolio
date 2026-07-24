"use client";

import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Impact.module.css";

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const display = useCountUp(value, active);
  return (
    <div className={styles.stat}>
      <p className={styles.value}>
        {display}
        {suffix}
      </p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export function Impact() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={ref}
      className={`section ${styles.section}`}
      aria-label="Impact highlights"
    >
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Impact at a glance</h2>
          <p className="sectionLead">
            How peers showcase accomplishments — scale, migrations, and
            ownership — distilled into what I ship.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {impactStats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/content/site";
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

function StatIcon({ name }: { name: (typeof impactStats)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "migrate":
      return (
        <svg {...common}>
          <path d="M7 8h11" />
          <path d="M14 4l4 4-4 4" />
          <path d="M17 16H6" />
          <path d="M10 12l-4 4 4 4" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <path d="M6 20V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14" />
          <path d="M9 9h1.5M13.5 9H15M9 13h1.5M13.5 13H15M9 17h1.5M13.5 17H15" />
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path d="M5 21V4" />
          <path d="M5 4h10l-1.5 3.5L15 11H5" />
        </svg>
      );
    default:
      return null;
  }
}

function StatItem({
  value,
  suffix,
  label,
  icon,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: (typeof impactStats)[number]["icon"];
  active: boolean;
}) {
  const display = useCountUp(value, active);
  return (
    <div className={styles.stat}>
      <span className={styles.iconWrap}>
        <StatIcon name={icon} />
      </span>
      <div className={styles.copy}>
        <p className={styles.value}>
          {display}
          {suffix}
        </p>
        <p className={styles.label}>{label}</p>
      </div>
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
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={ref}
      className={styles.strip}
      aria-label="Impact highlights"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {impactStats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

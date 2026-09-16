import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.media} aria-hidden="true">
        <Image
          className={styles.mediaImage}
          src="/images/hero-art.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{site.tagline}</p>
        <h1 className={styles.brand}>{site.name}</h1>
        <p className={styles.summary}>{site.summary}</p>
        <p className={styles.positioning}>{site.positioning}</p>
        <div className={styles.actions}>
          <Link className="btn btnPrimary" href="/work">
            View My Work
          </Link>
          <Link className="btn btnGhost" href="/services">
            Hire Me for a Project
          </Link>
        </div>
        <p className={styles.availability}>{site.availability}</p>
      </div>
    </section>
  );
}

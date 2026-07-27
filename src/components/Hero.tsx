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
        <p className={styles.availability}>{site.availability}</p>
        <h1 className={styles.brand}>{site.name}</h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <p className={styles.summary}>{site.summary}</p>
        <div className={styles.actions}>
          <Link className="btn btnPrimary" href="/work">
            View selected work
          </Link>
          <Link className="btn btnGhost" href="/contact">
            Hire me
          </Link>
        </div>
        <Link className={styles.secondaryLink} href="/services">
          Or browse website services and support →
        </Link>
      </div>
    </section>
  );
}

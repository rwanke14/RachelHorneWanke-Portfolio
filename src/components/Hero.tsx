import Image from "next/image";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/hero-art.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.band} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.availability}>{site.availability}</p>
        <h1 className={styles.brand}>{site.name}</h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <p className={styles.summary}>{site.summary}</p>
        <div className={styles.actions}>
          <a className="btn btnPrimary" href="#work">
            View work
          </a>
          <a className="btn btnGhost" href="#services">
            CMS migrations
          </a>
          <a className="btn btnGhost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

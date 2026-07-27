import Image from "next/image";
import Link from "next/link";
import { work } from "@/content/work";
import { Reveal } from "./Reveal";
import styles from "./FeaturedWork.module.css";

export function FeaturedWork() {
  const featured = work.filter((item) => item.featured).slice(0, 3);

  return (
    <section id="explore" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Featured work</h2>
          <p className="sectionLead">
            Recent production outcomes — migrations, marketing sites, and
            client builds. Click through for the full case stories.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {featured.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <Link className={styles.card} href="/work">
                <div className={styles.thumb}>
                  {item.cover ? (
                    <Image
                      src={item.cover}
                      alt={`${item.org} — ${item.title}`}
                      fill
                      sizes="(max-width: 800px) 100vw, 33vw"
                      style={
                        item.coverPosition
                          ? { objectPosition: item.coverPosition }
                          : undefined
                      }
                    />
                  ) : null}
                  <div className={styles.overlay}>
                    <span>Open case study</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <p className={styles.org}>{item.org}</p>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.blurb}>{item.overview}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className={styles.footer}>
            <Link className="btn btnPrimary" href="/work">
              See all work
            </Link>
            <Link className="btn btnOutline" href="/services">
              Website Services and Support
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

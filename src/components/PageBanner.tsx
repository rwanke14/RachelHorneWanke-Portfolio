import styles from "./PageBanner.module.css";

type PageBannerProps = {
  eyebrow?: string;
  title: string;
  lead: string;
};

export function PageBanner({ eyebrow, title, lead }: PageBannerProps) {
  return (
    <header className={styles.banner}>
      <div className={styles.inner}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </header>
  );
}

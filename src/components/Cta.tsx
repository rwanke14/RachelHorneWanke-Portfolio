import Link from "next/link";
import { Reveal } from "./Reveal";
import styles from "./Cta.module.css";

type CtaLink = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
};

type CtaProps = {
  heading?: string;
  headingId?: string;
  copy: string;
  primary: CtaLink;
  secondary?: CtaLink;
};

export function Cta({ heading, headingId, copy, primary, secondary }: CtaProps) {
  return (
    <Reveal>
      <div className={styles.band}>
        {heading ? (
          <h2 id={headingId} className={styles.heading}>
            {heading}
          </h2>
        ) : null}
        <p>{copy}</p>
        <div className={styles.actions}>
          <Link
            className={`btn ${primary.variant === "outline" ? "btnOutline" : "btnPrimary"}`}
            href={primary.href}
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              className={`btn ${secondary.variant === "primary" ? "btnPrimary" : "btnOutline"}`}
              href={secondary.href}
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

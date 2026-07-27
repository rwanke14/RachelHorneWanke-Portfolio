"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.nav}>
            {site.nav.map((item) => {
              const normalizedPath = pathname.replace(/\/$/, "") || "/";
              const normalizedHref = item.href.replace(/\/$/, "") || "/";
              const active =
                normalizedPath === normalizedHref ||
                normalizedPath.startsWith(`${normalizedHref}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? styles.active : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link className={styles.cta} href="/contact">
          Hire me
        </Link>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
      <ul
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
      >
        {site.nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Hire me
          </Link>
        </li>
      </ul>
    </header>
  );
}

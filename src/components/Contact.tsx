"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!formspreeId) {
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const message = String(data.get("message") || "");
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\n— ${name}\n${email}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Contact</h2>
          <p className="sectionLead">
            Actively seeking full-time web production roles and freelance site
            builds, redesigns, and CMS work. Most recently Website Specialist at
            Centric Software.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal>
            <ul className={styles.channels}>
              <li>
                <span className={styles.label}>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span className={styles.label}>LinkedIn</span>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/rachel-wanke
                </a>
              </li>
              <li>
                <span className={styles.label}>GitHub</span>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/rwanke14
                </a>
              </li>
              <li>
                <span className={styles.label}>Location</span>
                <span>{site.location}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project"
                />
              </div>
              <button
                className="btn btnPrimary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {!formspreeId ? (
                <p className={styles.note}>
                  Opens your email client until Formspree is configured.
                </p>
              ) : null}
              {status === "success" ? (
                <p className={styles.status} role="status">
                  Thanks — I&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className={`${styles.status} ${styles.error}`} role="alert">
                  Something went wrong. Email me directly at {site.email}.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

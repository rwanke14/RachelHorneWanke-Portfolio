"use client";

import { FormEvent, useState } from "react";
import { inquiryBudgets, inquiryTopics, site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "success" | "error";

export function Contact({ showIntro = true }: { showIntro?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!formspreeId) {
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const company = String(data.get("company") || "");
      const topic = String(data.get("topic") || "");
      const budget = String(data.get("budget") || "");
      const message = String(data.get("message") || "");
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\nCompany / Organization: ${company}\nWhat I can help with: ${topic}\nApproximate project budget: ${budget}\n\n— ${name}\n${email}`,
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
        {showIntro ? (
          <Reveal>
            <h2 className="sectionTitle">Contact</h2>
            <p className="sectionLead">
              Full-time web platform and digital experience roles, plus
              freelance and contract projects — web development, CMS work,
              technical SEO, and website support.
            </p>
          </Reveal>
        ) : null}

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
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              action={
                formspreeId
                  ? `https://formspree.io/f/${formspreeId}`
                  : undefined
              }
              method="POST"
            >
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
                <label htmlFor="company">Company / Organization</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Optional"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="topic">What can I help with?</label>
                <select id="topic" name="topic" required defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  {inquiryTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="budget">Approximate project budget</label>
                <select id="budget" name="budget" required defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  {inquiryBudgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Tell me about what you need.</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Role details, site URL, timeline, or the problem you’re seeing"
                />
              </div>
              <button
                className="btn btnPrimary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Inquiry"}
              </button>
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

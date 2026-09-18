"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { inquiryBudgets, inquiryTopics, site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Contact.module.css";

const formName = "contact";
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`;

const channels = [
  {
    id: "email",
    href: `mailto:${site.email}`,
    icon: faEnvelope,
    label: "Email",
    text: site.email,
    external: false,
  },
  {
    id: "linkedin",
    href: site.links.linkedin,
    icon: faLinkedin,
    label: "LinkedIn",
    text: "linkedin.com/in/rachel-wanke",
    external: true,
  },
  {
    id: "github",
    href: site.links.github,
    icon: faGithub,
    label: "GitHub",
    text: "github.com/rwanke14",
    external: true,
  },
  {
    id: "location",
    href: mapsHref,
    icon: faLocationDot,
    label: "Location",
    text: site.location,
    external: true,
  },
];

type Status = "idle" | "sending" | "success" | "error";

export function Contact({ showIntro = true }: { showIntro?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    // Netlify identifies the form by this value in the payload, not by markup.
    data.set("form-name", formName);

    const body = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") body.append(key, value);
    }

    setStatus("sending");
    try {
      // Netlify accepts form posts on any path in the deploy; posting to the
      // current page keeps the no-JS fallback and this request identical.
      const response = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
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
            <ul className={styles.channels} aria-label="Contact links">
              {channels.map((channel) => (
                <li key={channel.id}>
                  <a
                    className={styles.channelLink}
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <FontAwesomeIcon
                      icon={channel.icon}
                      className={styles.icon}
                      aria-hidden
                    />
                    <span className={styles.detail}>
                      <span className={styles.label}>{channel.label}</span>
                      <span className={styles.channelText}>{channel.text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              name={formName}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" defaultValue={formName} />
              <p className={styles.honeypot} aria-hidden="true">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
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
                  maxLength={150}
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
                  maxLength={120}
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
                  minLength={10}
                  maxLength={2000}
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
                  Thanks — your message is on its way. I&apos;ll get back to you
                  as soon as I can.
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

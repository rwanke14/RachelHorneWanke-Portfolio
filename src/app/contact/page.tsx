import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rachel Wanke about full-time web production roles or freelance contract work — CMS migrations, WordPress, Contentful, and technical SEO.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Let's talk"
        title="Contact"
        lead="Actively seeking full-time web production roles and freelance / contract engagements for companies that need CMS, SEO, and production support."
      />
      <Contact showIntro={false} />
    </>
  );
}

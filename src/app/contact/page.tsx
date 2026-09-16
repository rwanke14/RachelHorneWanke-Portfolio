import { Contact } from "@/components/Contact";
import { PageBanner } from "@/components/PageBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Contact Rachel Wanke about a full-time web platform role or a freelance project — WordPress, CMS migrations, technical SEO, landing pages, and ongoing website support.",
);

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Let's talk"
        title="Contact"
        lead="Tell me about the role or the website problem. I’m open to senior full-time opportunities and select freelance or contract work."
      />
      <Contact showIntro={false} />
    </>
  );
}

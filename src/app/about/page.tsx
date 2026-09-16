import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { PageBanner } from "@/components/PageBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About",
  "About Rachel Wanke — website specialist and web producer experienced in CMS migrations, technical SEO, and marketing site production. Open to senior roles and select freelance projects.",
);

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Background"
        title="About"
        lead="Website specialist and web producer — CMS migrations, production engineering, and SEO for marketing and nonprofit teams."
      />
      <About showIntro={false} />
      <Experience />
    </>
  );
}

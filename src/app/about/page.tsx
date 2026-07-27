import type { Metadata } from "next";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { PageBanner } from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rachel Wanke — website specialist and web producer with experience in CMS migrations, SEO, and marketing site production.",
};

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

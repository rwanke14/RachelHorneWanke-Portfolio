import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website services and support for companies: web development, CMS migration strategy, WordPress & Contentful management, technical SEO, and tech stack optimization.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="For companies"
        title="Website Services and Support"
        lead="Engage me for contract or freelance support across web development, CMS migrations and management, technical SEO resolution, and tech stack optimization."
      />
      <Services />
      <Process />
    </>
  );
}

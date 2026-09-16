import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { ServicesPreview } from "@/components/ServicesPreview";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
  },
  twitter: {
    title: site.title,
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <FeaturedWork />
      <ServicesPreview />
    </>
  );
}

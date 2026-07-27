import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { ServicesPreview } from "@/components/ServicesPreview";

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

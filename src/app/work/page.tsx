import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Work } from "@/components/Work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work — CMS migrations, marketing site production, nonprofit redesigns, and client builds.",
};

export default function WorkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Portfolio"
        title="Selected work"
        lead="Case studies from enterprise marketing sites, nonprofit modernization, and client builds — with CMS migrations called out."
      />
      <Work showIntro={false} />
    </>
  );
}

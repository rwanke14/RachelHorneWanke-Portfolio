import { PageBanner } from "@/components/PageBanner";
import { Work } from "@/components/Work";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Work",
  "Case studies and projects from CMS migrations, marketing site production, nonprofit modernization, freelance client builds, and technical SEO.",
);

export default function WorkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Portfolio"
        title="Case studies & projects"
        lead="Professional production work first, then freelance client builds, with earlier projects available below."
      />
      <Work showIntro={false} />
    </>
  );
}

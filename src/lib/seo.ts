import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description: string): Metadata {
  const ogTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
    },
    twitter: {
      title: ogTitle,
      description,
    },
  };
}

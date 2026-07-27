import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://rachelwanke.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/services/", "/work/", "/about/", "/contact/"];

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route.replace(/\/$/, "")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}

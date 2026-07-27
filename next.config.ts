import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be served by GitHub Pages (and any static host).
  output: "export",
  // Prefer /services/ → services/index.html for GitHub Pages routing.
  trailingSlash: true,
  // GitHub Pages can't run the Next.js image optimizer; the custom loader
  // also prefixes the base path, which unoptimized images don't get for free.
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  // Set to "/reactportfolio" by the Pages workflow; empty for Vercel/local dev.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;

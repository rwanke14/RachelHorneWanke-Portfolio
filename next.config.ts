import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify / GitHub Pages / any static host.
  output: "export",
  // Prefer /services/ → services/index.html for static hosts.
  trailingSlash: true,
  // Static hosts can't run the Next.js image optimizer; the custom loader
  // also prefixes the base path, which unoptimized images don't get for free.
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  // Set for GitHub project Pages only; leave empty on Netlify / Vercel / local.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;

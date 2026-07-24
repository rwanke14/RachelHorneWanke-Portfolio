// Static-export image loader: serves images as-is, but honors the base path
// GitHub Pages project sites require (e.g. /reactportfolio/images/foo.jpg).
export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${basePath}${src}` : src;
}

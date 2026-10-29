// Set NEXT_PUBLIC_BASE_PATH (e.g. "/Architecture") to build a static export for GitHub Pages.
// Without it, the app builds and runs as a normal Next.js server (npm run dev / build / start).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(basePath && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;

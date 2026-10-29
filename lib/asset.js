// Prefixes public-folder paths with the deployment base path (e.g. "/Architecture" on GitHub Pages).
// next/link adds the base path by itself; plain <img src> and <link href> do not.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  return `${basePath}${path}`;
}

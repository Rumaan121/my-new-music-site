/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // disable image optimization for GitHub Pages
  ...(isProd && {
    output: "export",   // only export in production
    distDir: "docs",    // put build into /docs for GitHub Pages
  }),
};

module.exports = nextConfig;

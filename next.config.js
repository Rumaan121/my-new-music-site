/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static HTML export
  distDir: 'docs',         // put the build directly into /docs for GitHub Pages
  images: { unoptimized: true } // disables Next.js image optimization (not supported on Pages)
};

module.exports = nextConfig;

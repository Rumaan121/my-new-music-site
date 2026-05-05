//** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // enables static HTML export
  distDir: 'docs'     // puts the build directly into /docs for GitHub Pages
};

module.exports = nextConfig;


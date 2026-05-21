import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports on GitHub Pages
  },
  basePath: '/Exa-Energy-',
};

export default nextConfig;

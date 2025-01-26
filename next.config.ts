import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      "unsplash.com",
      "assets.aceternity.com"
    ],
  },
};

export default nextConfig;

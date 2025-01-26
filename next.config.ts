import type { NextConfig } from "next";
// output: "export",
// typescript: {
//   ignoreBuildErrors: true,
// },

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      "unsplash.com",
      "assets.aceternity.com"
    ],
  },
};

export default nextConfig;

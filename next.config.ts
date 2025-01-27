import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example2.net',
        pathname: '/static/**',
      },
    ]
  },
};

export default nextConfig;

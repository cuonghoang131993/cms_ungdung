import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 's3.amazonaws.com',
  //       port: '',
  //       pathname: '/my-bucket/**',
  //       search: '',
  //     },
  //   ],
  // },
  images: {
    domains: ['https://zesty-comfort-production.up.railway.app'],
  },
};

export default nextConfig;

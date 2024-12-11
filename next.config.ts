import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        hostname: 'files.stripe.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;

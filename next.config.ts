import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3001",
        
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.faceit-cdn.net",
        pathname: "/avatars/**",
        port: ''
      },
      {
        protocol: "https",
        hostname: "distribution.faceit-cdn.net",
        pathname: "/images/**",
        port: ''
      },
      {
        protocol: "https",
        hostname: "assets.faceit-cdn.net",
        pathname: "/users_covers/**",
        port: ''
      },
    ]
  }
};

export default nextConfig;

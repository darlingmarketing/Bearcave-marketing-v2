import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Essential for Cloudflare sub-page routing stability
  trailingSlash: true,

  // 2. Disable default Node.js image optimization (Not supported on Cloudflare Edge)
  images: {
    unoptimized: true,
  },

  // 3. Enable React Strict Mode for improved stability
  reactStrictMode: true,
};

export default nextConfig;

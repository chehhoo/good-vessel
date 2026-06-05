import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // static export → out/
  trailingSlash: true,     // S3-friendly URLs
  images: {
    unoptimized: true,     // required for static export
  },
};

export default nextConfig;

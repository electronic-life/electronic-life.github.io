import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,  // This ensures proper static export paths
  basePath: '',  // Remove the /electronic-life base path
  assetPrefix: ''  // Remove the asset prefix
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Reduce the number of 'Link' headers for prefetching to avoid REQUEST_HEADER_TOO_LARGE on Vercel
  experimental: {
    optimizePackageImports: ['lucide-react', '@react-three/drei'],
  },
};

export default nextConfig;

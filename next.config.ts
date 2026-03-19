import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: "qjaqtcdmpkltxfhf.public.blob.vercel-storage.com"
    }],
  }
};

export default nextConfig;

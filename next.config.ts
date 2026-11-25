import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
<<<<<<< HEAD
  experimental: {
    agentUpgrade: "security",
  },
=======
>>>>>>> aa67bf0c2867b63c1bc475882f1b039d85e58526
};

export default nextConfig;

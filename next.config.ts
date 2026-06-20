import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.alphaluxclean.com" }],
        destination: "https://alphaluxclean.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

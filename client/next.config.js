/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: {
  //     // !! WARN !!
  //     // Dangerously allow production builds to successfully complete even if
  //     // your project has type errors.
  //     // !! WARN !!
  //     ignoreBuildErrors: true,
  // },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8000/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

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
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${process.env.NEXT_PUBLIC_MY_TUBES_URL}:path*/`,
    },
  ],
  reactStrictMode: true,
};

module.exports = nextConfig;

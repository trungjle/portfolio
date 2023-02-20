/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  trailingSlash: true,
}

module.exports = nextConfig

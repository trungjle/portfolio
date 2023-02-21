/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  trailingSlash: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
}

module.exports = nextConfig

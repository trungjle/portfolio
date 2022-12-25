/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/portfolio-project",
  assetPrefix: "/portfolio-project",
}

module.exports = nextConfig

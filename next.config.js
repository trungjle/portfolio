/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
}

export default nextConfig

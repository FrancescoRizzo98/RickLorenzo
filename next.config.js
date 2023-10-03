/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-first-app",
  images: {
    unoptimized: true,
  }
  // reactStrictMode: true,
}

module.exports = nextConfig
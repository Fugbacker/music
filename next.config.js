/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    responseLimit: false,
  },
  images: {
    domains: ['cdn42.zvuk.com'],
  },
}

module.exports = nextConfig

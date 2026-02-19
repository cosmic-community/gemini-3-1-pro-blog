/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imgix.cosmicjs.com', 'cdn.cosmicjs.com'],
  },
  typescript: {
    ignoreBuildErrors: true, // We check types in prebuild script
  },
}

module.exports = nextConfig
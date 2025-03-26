/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'dexjfnlowfsajmamcfhh.supabase.co',
      'images.unsplash.com',
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com'
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  swcMinify: true,
}

module.exports = nextConfig 
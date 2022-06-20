/** @type {import('next').NextConfig} */
const { BLOG_URL, APP_URL } = process.env

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/app',
        destination: `${APP_URL}/app`,
      },
      {
        source: '/app/:path*',
        destination: `${APP_URL}/app/:path*`,
      },
    ]
  }
}

module.exports = nextConfig

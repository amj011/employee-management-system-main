/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
        return [
          {
            source: 'https://employee-management-system-main-4eua.vercel.app/:path*',
            destination: 'https://employee-management-system-main-4eua.vercel.app/:path*',
          },
        ]
      },
}

module.exports = nextConfig

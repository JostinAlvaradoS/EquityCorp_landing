/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Enable image optimization for Core Web Vitals
    formats: ['image/avif', 'image/webp'],
  },
  // SEO improvements
  compress: true,
  poweredByHeader: false,
  redirects: async () => {
    return [
      // Redirect old URLs if needed
    ]
  },
}

export default nextConfig

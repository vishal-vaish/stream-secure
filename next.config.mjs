/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["fs", "path"],
  },
  images: {
    domains: ['images.pexels.com'],
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["fs", "path"],
  },
  images: {
    domains: ['images.pexels.com', "192.168.1.114"],
  }
};

export default nextConfig;

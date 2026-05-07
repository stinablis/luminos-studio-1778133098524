/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/luminos-studio-1778133098524',
  assetPrefix: '/luminos-studio-1778133098524',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
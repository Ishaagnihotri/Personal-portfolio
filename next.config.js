/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // output: 'export', // Ensure static export mode is enabled
};

module.exports = nextConfig;

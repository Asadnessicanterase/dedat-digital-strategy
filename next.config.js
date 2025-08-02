const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export', // Enable static export for GitHub Pages
  trailingSlash: true, // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/dedat-digital-strategy' : '', // Replace with your repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dedat-digital-strategy' : '', // Replace with your repo name
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');

const nextConfig = optimizedImages({
  images: {
    disableStaticImages: true
  }
});

module.exports = nextConfig;


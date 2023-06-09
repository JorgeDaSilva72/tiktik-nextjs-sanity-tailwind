/** @type {import('next').NextConfig} */
const nextConfig = {
  // for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["d-clic.ca", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;

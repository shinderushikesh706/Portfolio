/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/resume.pdf",
        destination: "/static/resume.pdf",
      },
    ];
  },
};

export default nextConfig;

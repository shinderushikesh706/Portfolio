/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Rushikesh Shinde AI Engineer.pdf"',
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Rushikesh Shinde AI Engineer.pdf"',
          },
        ],
      },
    ];
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

import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role} — Generative & Agentic AI`,
  description:
    "Portfolio of an AI Engineer specializing in Generative AI, Agentic AI, Large Language Models, RAG architectures, and production-scale AI systems.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "Large Language Models",
    "RAG",
    "Vector Databases",
    "Python",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description:
      "Building intelligent systems with AI — Specializing in Agentic AI, Generative AI, LLMs, and scalable software solutions.",
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
    description:
      "Building intelligent systems with AI — Specializing in Agentic AI, Generative AI, LLMs, and scalable software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    description: portfolioData.personal.subheadline,
    knowsAbout: [
      "Generative AI",
      "Agentic AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "LangGraph",
      "LangChain",
      "Python",
      "Next.js",
    ],
    sameAs: [
      portfolioData.personal.socialLinks.github,
      portfolioData.personal.socialLinks.linkedin,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

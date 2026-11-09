"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black border border-slate-800 shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300">
            <Image
              src="/logo.png"
              alt={`${portfolioData.personal.name} Logo`}
              width={48}
              height={48}
              className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-black text-lg sm:text-xl lg:text-2xl text-slate-900 dark:text-slate-100 font-sans tracking-tight leading-none group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold text-brand-600 dark:text-cyan-400 uppercase tracking-wide mt-1">
              AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-brand-600 dark:text-cyan-400 bg-white dark:bg-slate-800/80 shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-800/40"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions: Theme Toggle + Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={portfolioData.personal.resumePath}
            download="Rushikesh Shinde AI Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
            >
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={portfolioData.personal.resumePath}
              download="Rushikesh Shinde AI Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="glow"
                size="sm"
                icon={<Download className="w-3.5 h-3.5" />}
                className="w-full"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

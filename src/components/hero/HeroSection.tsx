"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { NeuralCanvas } from "./NeuralCanvas";

const specialties = [
  "AI SOC & LLM Reasoning",
  "Zero Trust Integrations",
  "Python Backend Architecture",
  "Distributed Workflow Orchestration",
  "Vector Search & Retrieval",
];

export function HeroSection() {
  const { personal } = portfolioData;
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 dark:bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Intro & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status availability badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 shadow-xs mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              {personal.statusText}
            </span>
          </div>

          {/* Greeting */}
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium mb-3">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Hi, I&apos;m</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-brand-500/50 underline-offset-4">
              {personal.name}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 font-sans leading-[1.12] mb-5">
            Building{" "}
            <span className="text-gradient">Intelligent Systems</span>
            <br />
            with AI.
          </h1>

          {/* Animated Specialty Switcher */}
          <div className="flex items-center gap-2 font-mono text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 bg-slate-100/90 dark:bg-slate-900/60 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <Terminal className="w-4 h-4 text-brand-600 dark:text-cyan-400 shrink-0" />
            <span className="text-slate-500">focus:</span>
            <span className="text-brand-600 dark:text-cyan-300 font-semibold transition-all duration-300">
              {specialties[specialtyIndex]}
            </span>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
            {personal.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                variant="glow"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore My Work
              </Button>
            </a>

            <a
              href={personal.resumePath}
              download="Rushikesh_Shinde_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
              Connect:
            </span>
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.email}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Abstract AI Interactive Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <NeuralCanvas />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const { about } = portfolioData;

  const icons = [Workflow, Layers, ShieldCheck, Cpu];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        eyebrow="Engineering Philosophy"
        title="Architecting the Frontier of AI"
        subtitle="Bridging cutting-edge foundational model capabilities with resilient, enterprise-grade software engineering."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Narrative bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg"
        >
          <div className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 mb-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3 text-brand-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4 text-brand-600 dark:text-cyan-400" />
              <span>Core Mission</span>
            </div>
            <p className="text-slate-900 dark:text-slate-100 font-semibold text-lg sm:text-xl leading-snug">
              &ldquo;{about.intro}&rdquo;
            </p>
          </div>

          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Core Principles */}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-mono">01</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 mt-1">
                Deterministic Guardrails
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Enforcing strict validation schemas and safety boundaries on non-deterministic LLMs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="text-2xl font-bold text-brand-600 dark:text-cyan-400 font-mono">02</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 mt-1">
                Eval-Driven Iteration
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Systematic automated benchmarking to continuously quantify agent performance and accuracy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {about.pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 dark:bg-brand-500/10 dark:border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  <span>Pillar 0{index + 1}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

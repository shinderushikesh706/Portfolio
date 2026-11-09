"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Brain, Code2, Cpu, Cloud, CheckCircle2, Sparkles } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "AI & Machine Learning": <Brain className="w-4 h-4 text-brand-400" />,
    Development: <Code2 className="w-4 h-4 text-cyan-400" />,
    "AI Frameworks & Tools": <Cpu className="w-4 h-4 text-purple-400" />,
    "Cloud & Infrastructure": <Cloud className="w-4 h-4 text-emerald-400" />,
  };

  const filteredCategories =
    activeCategory === "All"
      ? skills
      : skills.filter((cat) => cat.title === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        eyebrow="Technical Stack"
        title="Specialized Capabilities"
        subtitle="Curated toolset honed for architecting reliable agentic frameworks, high-throughput RAG systems, and modern full-stack web applications."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
            activeCategory === "All"
              ? "bg-brand-600 text-white border-brand-400/40 shadow-glow-sm"
              : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800"
          }`}
        >
          All Technologies
        </button>
        {skills.map((cat) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(cat.title)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat.title
                ? "bg-brand-600 text-white border-brand-400/40 shadow-glow-sm"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800"
            }`}
          >
            {categoryIcons[cat.title]}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800/80 relative overflow-hidden group"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent group-hover:via-brand-500/80 transition-all duration-500" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {categoryIcons[category.title]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2.5 mt-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-brand-500/40 transition-all duration-200"
                  >
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        skill.highlight ? "text-cyan-400" : "text-slate-500"
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Verification note */}
      <div className="mt-10 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
        <Sparkles className="w-3.5 h-3.5 text-brand-400" />
        <span>
          Strictly verified skill set: Every listed technology reflects active, real-world development experience.
        </span>
      </div>
    </section>
  );
}


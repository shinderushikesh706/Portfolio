"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectArchitectureModal } from "./ProjectArchitectureModal";
import { Sparkles } from "lucide-react";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "Multi-Agent Systems & AI",
    "Zero Trust Architecture",
    "Retrieval-Augmented Generation",
    "API Security",
    "Distributed Systems",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        eyebrow="Key Systems & Architectures"
        title="Featured Engineering Projects"
        subtitle="Production-grade AI systems, Zero Trust integration frameworks, and distributed workflow orchestration."
      />

      {/* Engineering Highlights Banner */}
      <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center gap-2.5 text-brand-300 text-xs sm:text-sm text-center">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>
          Proven production systems delivering up to <strong>90% manual effort reduction</strong> in AI SOC operations and <strong>40% improvement</strong> in backend system reliability.
        </span>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
              filter === cat
                ? "bg-brand-600 text-white border-brand-400/40 shadow-glow-sm"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenArchitecture={setSelectedProject}
          />
        ))}
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

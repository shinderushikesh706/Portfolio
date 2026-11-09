"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectArchitectureModal } from "./ProjectArchitectureModal";
import { AlertCircle } from "lucide-react";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "Multi-Agent Systems",
    "Retrieval-Augmented Generation",
    "Intelligent Assistant",
    "Enterprise AI",
    "Document Intelligence",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        eyebrow="Case Studies & Prototypes"
        title="Featured AI Engineering Projects"
        subtitle="Architecting agentic loops, high-recall vector search, and resilient LLM enterprise solutions."
      />

      {/* Placeholder Notice Banner */}
      <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-amber-300 text-xs sm:text-sm">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
        <div>
          <span className="font-semibold text-amber-200">
            Note on Showcase Projects:
          </span>{" "}
          These featured projects represent realistic architectural templates covering the 5 core AI engineering domains (Agentic, RAG, Assistants, Enterprise Security, Document Processing). They are ready for you to replace with your exact repos and live URLs in{" "}
          <code className="text-amber-100 font-mono bg-amber-950/60 px-1 py-0.5 rounded">
            src/data/portfolioData.ts
          </code>
          .
        </div>
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

"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { ProjectIllustration } from "./ProjectIllustration";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenArchitecture: (project: Project) => void;
}

export function ProjectCard({ project, onOpenArchitecture }: ProjectCardProps) {
  return (
    <div className="rounded-2xl glass-panel border border-slate-800/80 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-brand-500/50 hover:shadow-glow-sm">
      {/* Top Graphic */}
      <div className="relative">
        <ProjectIllustration id={project.id} category={project.category} />
        {project.isPlaceholder && (
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="amber" size="sm" dot>
              Placeholder Project
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3 z-20">
          <Badge variant="brand" size="sm">
            {project.badge}
          </Badge>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-mono text-cyan-400 mb-1">
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Technical Highlights */}
          <div className="mt-4 space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
              Key Engineering Highlights:
            </span>
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-300"
              >
                <span className="text-brand-400 mt-0.5">•</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <button
              onClick={() => onOpenArchitecture(project)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline transition-colors py-1"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>System Deep Dive</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
                title="View Code on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-600/90 hover:bg-brand-500 text-white text-xs font-medium shadow-sm transition-colors"
                title="View Live Demo"
              >
                <span>Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

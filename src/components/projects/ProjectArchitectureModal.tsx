"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, CheckCircle2, Gauge, ExternalLink, Github, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectArchitectureModal({
  project,
  onClose,
}: ProjectArchitectureModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-10 overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/40">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="cyan" size="sm">
                  {project.category}
                </Badge>
                {project.isPlaceholder && (
                  <Badge variant="amber" size="sm">
                    Placeholder Project
                  </Badge>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* System Overview */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Architecture Overview</span>
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {project.architectureDetails.overview}
              </p>
            </div>

            {/* Architecture Components */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-brand-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Core Components & Data Flow</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architectureDetails.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Benchmarks & Metrics */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                <span>Target Engineering Metrics</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.architectureDetails.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-center"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/50 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Production Tested Architecture</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-600 hover:bg-brand-500 text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


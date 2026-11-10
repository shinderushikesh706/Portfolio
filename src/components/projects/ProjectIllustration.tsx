import React from "react";

interface ProjectIllustrationProps {
  id: string;
  category: string;
}

export function ProjectIllustration({ id }: ProjectIllustrationProps) {
  switch (id) {
    case "proj-1": // AI-Powered SOC Platform
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-100 via-indigo-50/60 to-slate-200/80 dark:from-slate-950 dark:via-slate-900/90 dark:to-indigo-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800 px-3 py-4">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="absolute w-36 h-36 bg-brand-500/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* SOC Architecture Visual Pipeline */}
          <div className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto py-2 max-w-full">
            <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs text-center shrink-0 min-w-[68px]">
              <span className="text-[9px] font-mono text-slate-500 uppercase block font-semibold">SOURCES</span>
              <span className="text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200">SIEM/EDR</span>
            </div>

            <div className="text-slate-400 dark:text-slate-600 font-mono text-xs shrink-0">→</div>

            <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-500/30 shadow-2xs text-center shrink-0 min-w-[72px]">
              <span className="text-[9px] font-mono text-cyan-600 dark:text-cyan-400 uppercase block font-semibold">FastAPI</span>
              <span className="text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200">Ingestion</span>
            </div>

            <div className="text-slate-400 dark:text-slate-600 font-mono text-xs shrink-0">→</div>

            <div className="p-2 rounded-xl bg-white dark:bg-brand-950/70 border border-brand-300 dark:border-brand-500/50 shadow-xs dark:shadow-glow-sm text-center shrink-0 min-w-[80px]">
              <span className="text-[9px] font-mono text-brand-600 dark:text-brand-400 uppercase font-bold block">Temporal</span>
              <span className="text-[10px] font-mono font-bold text-slate-900 dark:text-white">Workflow</span>
            </div>

            <div className="text-slate-400 dark:text-slate-600 font-mono text-xs shrink-0">→</div>

            <div className="p-2 rounded-xl bg-white dark:bg-indigo-950/70 border border-indigo-300 dark:border-indigo-500/50 shadow-xs dark:shadow-glow-sm text-center shrink-0 min-w-[80px]">
              <span className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400 uppercase font-bold block">LangChain</span>
              <span className="text-[10px] font-mono font-bold text-slate-900 dark:text-white">AI Agent</span>
            </div>

            <div className="text-slate-400 dark:text-slate-600 font-mono text-xs shrink-0">→</div>

            <div className="p-2 rounded-xl bg-white dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 shadow-2xs text-center shrink-0 min-w-[68px]">
              <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 uppercase block font-semibold">Triage</span>
              <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">Findings</span>
            </div>
          </div>

          <div className="absolute bottom-1.5 right-3 text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Temporal Stateful Workflow • LangChain Agent</span>
          </div>
        </div>
      );

    case "proj-2": // Deeptrust Security Integrations
    default:
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-100 via-cyan-50/50 to-slate-200/60 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10 flex items-center gap-3 sm:gap-4">
            <div className="space-y-1 text-center">
              <div className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-[10px] font-mono text-slate-700 dark:text-slate-300 shadow-2xs">
                Okta • SIEM • Duo
              </div>
              <div className="text-[9px] text-brand-600 dark:text-cyan-400 font-mono font-semibold">Heterogeneous</div>
            </div>
            <div className="text-slate-400 dark:text-slate-500 font-mono">→</div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-cyan-300 dark:border-cyan-500/50 shadow-sm dark:shadow-glow-cyan text-center">
              <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 font-bold block">
                INTEGRATION CONTRACT
              </span>
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">OAuth 2.0 • Normalizer</span>
            </div>
            <div className="text-slate-400 dark:text-slate-500 font-mono">→</div>
            <div className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 text-[10px] font-mono text-emerald-700 dark:text-emerald-300 text-center font-bold shadow-2xs">
              Zero Trust Core
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Standardized OOP Integration Engine
          </div>
        </div>
      );
  }
}

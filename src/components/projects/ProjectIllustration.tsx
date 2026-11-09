import React from "react";

interface ProjectIllustrationProps {
  id: string;
  category: string;
}

export function ProjectIllustration({ id }: ProjectIllustrationProps) {
  switch (id) {
    case "proj-1": // AI-Powered SOC Platform
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-100 via-indigo-50/50 to-slate-200/60 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          {/* SOC Workflow Visual */}
          <div className="relative z-10 flex items-center gap-2 sm:gap-5">
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-brand-500/40 shadow-xs dark:shadow-glow-sm text-center">
              <span className="text-[10px] font-mono text-brand-600 dark:text-cyan-400 font-bold block">ALERTS</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block animate-pulse mt-1" />
            </div>
            <div className="h-[2px] w-5 sm:w-8 bg-gradient-to-r from-brand-500 to-indigo-500" />
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-brand-950/60 border border-brand-300 dark:border-brand-400 shadow-sm dark:shadow-glow-md text-center">
              <span className="text-[10px] font-mono text-brand-700 dark:text-brand-300 font-bold block">TEMPORAL + LLM</span>
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">LangChain Triage</span>
            </div>
            <div className="h-[2px] w-5 sm:w-8 bg-gradient-to-r from-indigo-500 to-emerald-500" />
            <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/40 shadow-xs dark:shadow-glow-sm text-center">
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">INSIGHTS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mt-1" />
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Temporal &amp; LangChain Workflow
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

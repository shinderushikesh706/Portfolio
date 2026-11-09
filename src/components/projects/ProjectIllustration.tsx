import React from "react";

interface ProjectIllustrationProps {
  id: string;
  category: string;
}

export function ProjectIllustration({ id, category }: ProjectIllustrationProps) {
  switch (id) {
    case "proj-1": // Multi-Agent AI System
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          {/* Agent Workflow Visual */}
          <div className="relative z-10 flex items-center gap-3 sm:gap-6">
            <div className="p-3 rounded-xl bg-slate-900 border border-brand-500/40 shadow-glow-sm text-center">
              <span className="text-[10px] font-mono text-cyan-400 block">PLANNER</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse mt-1" />
            </div>
            <div className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-cyan-500 to-brand-500" />
            <div className="p-3 rounded-xl bg-brand-950/60 border border-brand-400 shadow-glow-md text-center">
              <span className="text-[10px] font-mono text-brand-300 block">LANGGRAPH</span>
              <span className="text-[9px] font-mono text-slate-400">State Loop</span>
            </div>
            <div className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-brand-500 to-purple-500" />
            <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/40 shadow-glow-sm text-center">
              <span className="text-[10px] font-mono text-purple-400 block">VERIFIER</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mt-1" />
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Multi-Agent State Graph
          </div>
        </div>
      );

    case "proj-2": // Enterprise RAG
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="space-y-1.5 text-center">
              <div className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-[10px] font-mono text-slate-300">
                Docs / PDFs
              </div>
              <div className="text-[9px] text-cyan-400 font-mono">Dense + BM25</div>
            </div>
            <div className="text-slate-500 font-mono">→</div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/50 shadow-glow-cyan text-center">
              <span className="text-[10px] font-mono text-cyan-300 font-bold block">
                VECTOR DB
              </span>
              <span className="text-[9px] font-mono text-slate-400">Rerank + Ground</span>
            </div>
            <div className="text-slate-500 font-mono">→</div>
            <div className="px-3 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 text-center">
              Verified Synthesis
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Hybrid RAG Pipeline
          </div>
        </div>
      );

    case "proj-3": // Intelligent Assistant
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10 w-4/5 max-w-sm space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-emerald-400">TOOL CALL:</span>
              <span className="text-slate-300">calendar.create_event()</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-brand-400">STREAMING:</span>
              <span className="text-slate-300">&lt; 180ms TTFT</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-2 py-1 rounded bg-slate-900/80 border border-slate-800">
              <span className="text-cyan-400">MEMORY:</span>
              <span className="text-slate-300">Hierarchical Summary</span>
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Function Calling Runtime
          </div>
        </div>
      );

    case "proj-4": // Enterprise Chatbot & Guardrails
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center">
              <span className="text-[10px] font-mono text-slate-300 block">User Prompt</span>
              <span className="text-[9px] text-amber-400 font-mono">Input Stream</span>
            </div>
            <div className="text-slate-500 font-mono">→</div>
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-400/80 shadow-glow-sm text-center">
              <span className="text-[10px] font-mono text-purple-300 font-bold block">
                GUARDRAIL GATE
              </span>
              <span className="text-[9px] font-mono text-emerald-400">PII Mask + Safe</span>
            </div>
            <div className="text-slate-500 font-mono">→</div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center">
              <span className="text-[10px] font-mono text-slate-300 block">Azure LLM</span>
              <span className="text-[9px] text-cyan-400 font-mono">Audit Log</span>
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Zero-Trust AI Gateway
          </div>
        </div>
      );

    case "proj-5": // Document Processing Platform
    default:
      return (
        <div className="w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 relative flex items-center justify-center overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="space-y-1.5 text-center">
              <div className="p-2 rounded-lg bg-slate-900 border border-amber-500/40 text-[10px] font-mono text-amber-300">
                PDF / Invoices
              </div>
            </div>
            <div className="text-slate-500 font-mono">→</div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-brand-500/60 shadow-glow-sm text-center">
              <span className="text-[10px] font-mono text-brand-300 font-bold block">
                LAYOUT OCR + LLM
              </span>
              <span className="text-[9px] font-mono text-slate-400">Table Extraction</span>
            </div>
            <div className="text-slate-500 font-mono">→</div>
            <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
              Validated JSON
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500">
            Document Intelligence
          </div>
        </div>
      );
  }
}

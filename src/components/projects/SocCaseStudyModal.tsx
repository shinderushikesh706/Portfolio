"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Cpu,
  Layers,
  Bot,
  Workflow,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Gauge,
  FileCode,
  ArrowRight,
  Database,
  Network,
  ChevronRight,
  Github,
  Sparkles,
  Server,
  Activity,
  Code,
  GitBranch,
  Check,
  HelpCircle,
  BarChart3,
  UserCheck,
} from "lucide-react";
import { Project, SocCaseStudyData, ArchitectureLayer, AgentCapability, EngineeringChallenge } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";

interface SocCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabType = "architecture" | "agent-engineering" | "orchestration" | "challenges" | "role-impact";

export function SocCaseStudyModal({ project, onClose }: SocCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("architecture");
  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer-agent");
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>("cap-task-boundaries");
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project || !project.caseStudy) return null;

  const caseStudy: SocCaseStudyData = project.caseStudy;
  const selectedLayer = caseStudy.systemArchitecture.layers.find((l) => l.id === selectedLayerId) || caseStudy.systemArchitecture.layers[3];
  const selectedCapability = caseStudy.aiAgentEngineering.capabilities.find((c) => c.id === selectedCapabilityId) || caseStudy.aiAgentEngineering.capabilities[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(caseStudy.aiAgentEngineering.outputSchemaExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: "architecture",
      label: "System Architecture",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: "agent-engineering",
      label: "AI Agent Engineering",
      icon: <Bot className="w-4 h-4" />,
      badge: "Core",
    },
    {
      id: "orchestration",
      label: "Workflow Orchestration",
      icon: <Workflow className="w-4 h-4" />,
    },
    {
      id: "challenges",
      label: "Challenges & Solutions",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      id: "role-impact",
      label: "My Role & Impact",
      icon: <UserCheck className="w-4 h-4" />,
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden text-slate-900 dark:text-slate-100 max-h-[92vh] flex flex-col"
        >
          {/* Header Section */}
          <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/60 shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="cyan" size="sm">
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-brand-600 dark:text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20">
                    Production AI Case Study
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {caseStudy.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                  {caseStudy.subtitle}
                </p>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Repository</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-2 -mb-2 pb-2 scrollbar-none border-t border-slate-200/70 dark:border-slate-800/70">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all shrink-0 select-none ${
                      isActive
                        ? "bg-brand-600 text-white shadow-glow-sm"
                        : "bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-md font-bold uppercase ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-cyan-300"
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-5 sm:p-6 lg:p-8 overflow-y-auto space-y-8 flex-1">
            {/* TAB 1: SYSTEM ARCHITECTURE & DATA FLOW */}
            {activeTab === "architecture" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Executive Summary & Business Problem */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Project Overview &amp; Business Problem</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {caseStudy.executiveSummary}
                  </p>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5 font-semibold">
                      Critical Operational Pain Points Addressed:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {caseStudy.businessProblem.painPoints.map((pain, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive 5-Layer Stack */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-slate-100 font-bold flex items-center gap-2">
                      <Layers className="w-4 h-4 text-brand-600 dark:text-cyan-400" />
                      <span>End-to-End System Architecture (Click Any Layer to Inspect)</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                      5 Decoupled Layers
                    </span>
                  </div>

                  {/* Architecture Diagram Nodes */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 mb-6">
                    {caseStudy.systemArchitecture.layers.map((layer, index) => {
                      const isSelected = selectedLayerId === layer.id;
                      return (
                        <button
                          key={layer.id}
                          onClick={() => setSelectedLayerId(layer.id)}
                          className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                            isSelected
                              ? "bg-brand-50/90 dark:bg-brand-950/70 border-brand-500 shadow-md ring-1 ring-brand-500/50"
                              : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span
                                className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                                  isSelected
                                    ? "bg-brand-600 text-white"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                                }`}
                              >
                                L{index + 1}
                              </span>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                              )}
                            </div>
                            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">
                              {layer.name}
                            </h4>
                          </div>
                          <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                            <span className="text-[10px] font-mono text-brand-600 dark:text-cyan-400 block truncate font-medium">
                              {layer.tech.split(",")[0]}
                            </span>
                            <span className="text-[9px] text-slate-500 block truncate">
                              {layer.role}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Layer Deep-Dive Inspector */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-brand-600 dark:text-cyan-400 uppercase">
                            Layer Inspector
                          </span>
                          <span className="text-slate-400">•</span>
                          <span className="text-xs font-mono text-slate-500">
                            {selectedLayer.role}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {selectedLayer.name}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {selectedLayer.tech.split(",").map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedLayer.description}
                    </p>

                    {/* Data Flow Specification */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                          Inbound Data Contract:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedLayer.dataFlow.inputs}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                          Outbound Transition:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedLayer.dataFlow.outputs}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold block mb-1">
                          Failure &amp; Resilience Strategy:
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedLayer.dataFlow.failureStrategy}
                        </p>
                      </div>
                    </div>

                    {/* Components in this layer */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                        Core Layer Modules:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedLayer.keyComponents.map((comp, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-cyan-400 shrink-0" />
                            <span>{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: AI AGENT ENGINEERING (CORE DEEP DIVE) */}
            {activeTab === "agent-engineering" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Agent Engineering Manifesto */}
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-50/80 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-brand-700 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Bot className="w-4 h-4" />
                    <span>AI Agent Architecture &amp; Task Boundaries</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {caseStudy.aiAgentEngineering.overview}
                  </p>
                  <p className="text-xs font-mono text-brand-900 dark:text-brand-300">
                    Rule: Every agent execution is bounded, idempotent, typed via Pydantic, and orchestrated as an activity within Temporal.
                  </p>
                </div>

                {/* Capability Selector */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                    Select Agent Capability to Inspect Engineering Dimensions:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
                    {caseStudy.aiAgentEngineering.capabilities.map((cap) => {
                      const isSelected = selectedCapabilityId === cap.id;
                      return (
                        <button
                          key={cap.id}
                          onClick={() => setSelectedCapabilityId(cap.id)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-brand-600 text-white border-brand-500 shadow-md"
                              : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-mono uppercase font-bold ${isSelected ? "text-cyan-200" : "text-brand-600 dark:text-cyan-400"}`}>
                              Capability
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                          </div>
                          <div className="text-xs font-bold leading-snug">
                            {cap.title}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* 4-Question Detailed Breakdown */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                    <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                      <span className="text-[11px] font-mono text-brand-600 dark:text-cyan-400 uppercase font-bold block mb-1">
                        Detailed Engineering Breakdown
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {selectedCapability.title}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Q1: What it does */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>1. What It Does</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedCapability.whatItDoes}
                        </p>
                      </div>

                      {/* Q2: Why it is needed */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>2. Why It Is Needed</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedCapability.whyNeeded}
                        </p>
                      </div>

                      {/* Q3: How it fits into the workflow */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                          <Workflow className="w-3.5 h-3.5" />
                          <span>3. Workflow Integration</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedCapability.workflowFit}
                        </p>
                      </div>

                      {/* Q4: Engineering challenge addressed */}
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>4. Engineering Challenge Addressed</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {selectedCapability.engineeringChallenge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Structured Output Schema Preview */}
                <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                      <FileCode className="w-4 h-4" />
                      <span>Production Structured Output Contract (Pydantic Schema)</span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      {copiedCode ? "Copied!" : "Copy Schema"}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed border border-slate-800/80">
                    <code>{caseStudy.aiAgentEngineering.outputSchemaExample}</code>
                  </pre>
                  <p className="text-[11px] font-mono text-slate-400">
                    Enforces deterministic typing: guarantees the LangChain agent produces valid JSON matching this schema before the Temporal activity finishes.
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 3: WORKFLOW ORCHESTRATION (TEMPORAL VS LANGCHAIN) */}
            {activeTab === "orchestration" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Workflow vs Agent Demarcation */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div>
                    <span className="text-xs font-mono text-brand-600 dark:text-cyan-400 uppercase font-bold block mb-1">
                      System Division of Concerns
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Workflow Orchestration vs. Agent Execution
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {caseStudy.orchestrationArchitecture.overview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-brand-50/80 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-500/30">
                      <div className="flex items-center gap-2 mb-2 text-brand-700 dark:text-cyan-300 font-mono text-xs font-bold">
                        <Workflow className="w-4 h-4" />
                        <span>{caseStudy.orchestrationArchitecture.workflowVsAgent.workflowTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {caseStudy.orchestrationArchitecture.workflowVsAgent.workflowRole}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30">
                      <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold">
                        <Bot className="w-4 h-4" />
                        <span>{caseStudy.orchestrationArchitecture.workflowVsAgent.agentTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {caseStudy.orchestrationArchitecture.workflowVsAgent.agentRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6-Step Execution Lifecycle */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                    Investigation Execution Lifecycle (Deterministic Path):
                  </h3>
                  <div className="space-y-2.5">
                    {caseStudy.orchestrationArchitecture.workflowSteps.map((step) => {
                      const badgeVariant =
                        step.type === "FastAPI"
                          ? "cyan"
                          : step.type === "Temporal"
                          ? "brand"
                          : step.type === "LangChain"
                          ? "amber"
                          : "emerald";

                      return (
                        <div
                          key={step.step}
                          className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              0{step.step}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                                  {step.name}
                                </h4>
                                <Badge variant={badgeVariant as any} size="sm">
                                  {step.type}
                                </Badge>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                                {step.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Fault Tolerance & Reliability Mechanisms */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-100 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Durable Execution &amp; Reliability Mechanisms</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {caseStudy.orchestrationArchitecture.reliabilityMechanisms.map((mech, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{mech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: CHALLENGES & SOLUTIONS */}
            {activeTab === "challenges" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1 font-semibold">
                    Real-World Engineering Challenges &amp; Architectural Solutions
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Concrete engineering difficulties encountered and solved in production environments.
                  </p>
                </div>

                <div className="space-y-4">
                  {caseStudy.engineeringChallenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-slate-100">
                        <span className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-cyan-400 flex items-center justify-center text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{item.challenge}</span>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-1">
                        <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-500/20">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block mb-1">
                            Operational Reality:
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item.operationalReality}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-brand-50/70 dark:bg-brand-950/20 border border-brand-200/80 dark:border-brand-500/20">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-brand-700 dark:text-cyan-400 font-bold block mb-1">
                            Engineering Solution:
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item.solution}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-500/20">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold block mb-1">
                            Technical Impact:
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            {item.technicalImpact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 5: MY ROLE & BUSINESS IMPACT */}
            {activeTab === "role-impact" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* My Role & Personal Contribution Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono text-brand-600 dark:text-cyan-400 uppercase font-bold block mb-1">
                        Individual Engineering Ownership
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {caseStudy.myRole.title}
                      </h3>
                    </div>
                    <Badge variant="brand" size="sm">
                      Hands-on AI Engineering
                    </Badge>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {caseStudy.myRole.summary}
                  </p>

                  {/* Core Contributions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {caseStudy.myRole.coreContributions.map((contrib, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
                      >
                        <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-cyan-400" />
                          <span>{contrib.title}</span>
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {contrib.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Team Demarcation */}
                  <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                      Demarcation of Responsibilities:
                    </span>
                    {caseStudy.myRole.teamDemarcation}
                  </div>
                </div>

                {/* Technology Responsibility Matrix */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                    Technology Architecture &amp; Responsibilities:
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono">
                        <tr>
                          <th className="p-3">Technology</th>
                          <th className="p-3">Category</th>
                          <th className="p-3">Primary Responsibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">
                        {caseStudy.techStackBreakdown.map((row) => (
                          <tr key={row.technology} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="p-3 font-mono font-bold text-slate-900 dark:text-white">
                              {row.technology}
                            </td>
                            <td className="p-3 font-mono text-brand-600 dark:text-cyan-400">
                              {row.category}
                            </td>
                            <td className="p-3 leading-relaxed">
                              {row.responsibility}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Verified Business Impact */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Gauge className="w-4 h-4" />
                    <span>Verified Production Metrics</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {caseStudy.businessImpact.headlineMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center shadow-2xs"
                      >
                        <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-1">
                          {metric.label}
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2 font-semibold">
                      Operational Meaning &amp; SOC Business Value:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {caseStudy.businessImpact.operationalMeaning.map((meaning, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{meaning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-slate-600 dark:text-slate-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Production Tested • Enterprise AI Architecture</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Close Case Study
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-brand-600 hover:bg-brand-500 text-white shadow-sm transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


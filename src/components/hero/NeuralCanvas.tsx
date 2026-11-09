"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  label?: string;
  pulse: number;
}

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 500;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    const labels = [
      "Agent Core",
      "LLM Planner",
      "Vector Memory",
      "Tool Sandbox",
      "RAG Retriever",
      "State Machine",
      "Guardrail",
      "Eval Stream",
    ];

    const colors = [
      "#6366f1", // indigo
      "#06b6d4", // cyan
      "#a855f7", // purple
      "#38bdf8", // sky
      "#818cf8", // light indigo
    ];

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const count = Math.min(Math.floor(width / 35), 22);

      for (let i = 0; i < count; i++) {
        const radius = i < labels.length ? 5.5 : Math.random() * 2.5 + 2;
        nodes.push({
          x: Math.random() * (width - 40) + 20,
          y: Math.random() * (height - 40) + 20,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius,
          color: colors[i % colors.length],
          label: i < labels.length ? labels[i] : undefined,
          pulse: Math.random() * Math.PI,
        });
      }
    };

    initNodes();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        // Bounce off walls
        if (node.x <= 15 || node.x >= width - 15) node.vx *= -1;
        if (node.y <= 15 || node.y >= height - 15) node.vy *= -1;

        // Mouse gentle repel/attract
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          node.x -= (dx / dist) * 0.6;
          node.y -= (dy / dist) * 0.6;
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            const grad = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            grad.addColorStop(0, `${nodes[i].color}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`);
            grad.addColorStop(1, `${nodes[j].color}${Math.floor(alpha * 255).toString(16).padStart(2, "0")}`);

            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = (1 - dist / maxDistance) * 1.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and labels
      for (const node of nodes) {
        const pulseEffect = Math.sin(node.pulse) * 1.5;
        const currentRadius = Math.max(2, node.radius + pulseEffect);

        // Outer glow
        const glowGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          1,
          node.x,
          node.y,
          currentRadius * 3.5
        );
        glowGrad.addColorStop(0, `${node.color}55`);
        glowGrad.addColorStop(1, `${node.color}00`);

        ctx.beginPath();
        ctx.fillStyle = glowGrad;
        ctx.arc(node.x, node.y, currentRadius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.fillStyle = node.color;
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // White core
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(node.x, node.y, currentRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Render labels for key architectural nodes
        if (node.label) {
          ctx.font = "10px JetBrains Mono, monospace";
          const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
          ctx.fillStyle = isDark ? "rgba(226, 232, 240, 0.75)" : "rgba(30, 41, 59, 0.85)";
          ctx.fillText(node.label, node.x + 10, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass-panel border border-slate-200 dark:border-slate-800/80 shadow-lg dark:shadow-2xl flex items-center justify-center group">
      <div className="absolute inset-0 bg-radial-gradient from-brand-500/10 via-transparent to-transparent pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair relative z-10"
      />
      {/* Decorative badge overlay */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <span>Live Autonomous Agent Simulation</span>
      </div>
      <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest shadow-xs">
        Graph • RAG • Tools
      </div>
    </div>
  );
}


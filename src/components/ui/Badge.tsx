import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "cyan" | "emerald" | "amber" | "neutral" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "brand",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-full select-none transition-colors";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    brand:
      "bg-brand-500/10 text-brand-400 border border-brand-500/25 hover:border-brand-500/40",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 hover:border-cyan-500/40",
    emerald:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:border-emerald-500/40",
    amber:
      "bg-amber-500/10 text-amber-400 border border-amber-500/25 hover:border-amber-500/40",
    neutral:
      "bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:border-slate-600",
    outline:
      "bg-transparent text-slate-400 border border-slate-800 hover:border-slate-700",
  };

  const dotColors = {
    brand: "bg-brand-400",
    cyan: "bg-cyan-400",
    emerald: "bg-emerald-400 animate-pulse",
    amber: "bg-amber-400",
    neutral: "bg-slate-400",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}


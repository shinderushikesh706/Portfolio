import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:pointer-events-none select-none rounded-xl active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-brand-600 hover:bg-brand-500 text-white shadow-md hover:shadow-brand-500/25 border border-brand-400/30",
      glow:
        "bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 text-white shadow-glow-sm hover:shadow-glow-md border border-white/20",
      secondary:
        "bg-slate-900/80 hover:bg-slate-800 text-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-700/60 shadow-sm",
      outline:
        "bg-transparent hover:bg-slate-800/40 text-slate-200 border border-slate-700/70 hover:border-slate-500",
      ghost:
        "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

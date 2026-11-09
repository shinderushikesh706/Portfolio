import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-14 md:mb-18",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3">
          <Badge variant="brand" size="sm" dot>
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

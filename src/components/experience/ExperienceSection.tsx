"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, MapPin, CheckCircle, Trophy } from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <SectionHeading
        eyebrow="Career Trajectory"
        title="Professional Experience"
        subtitle="Track record of engineering production-grade software and scaling AI architectures."
      />

      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-brand-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-xs dark:shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 dark:bg-brand-400" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all duration-300">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {item.role}
                    </h3>
                    {item.isPlaceholder && (
                      <Badge variant="amber" size="sm">
                        Placeholder
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm sm:text-base">
                    <Briefcase className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-700 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-cyan-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-2.5 flex items-center gap-2 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                  <span>Key Responsibilities</span>
                </h4>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-brand-500 mt-1 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Major Achievements */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/90 shadow-2xs">
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-700 dark:text-cyan-400 mb-2 flex items-center gap-2 font-semibold">
                  <Trophy className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Major Achievements</span>
                </h4>
                <ul className="space-y-1.5">
                  {item.achievements.map((achieve, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-2 font-medium"
                    >
                      <span className="text-cyan-600 dark:text-cyan-400 mt-1 font-bold">✓</span>
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

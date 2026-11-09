"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export function EducationSection() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        eyebrow="Academic & Professional Foundation"
        title="Education & Certifications"
        subtitle="Formal academic engineering degree and professional certifications in AI systems and Cloud."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-brand-50 border border-brand-200 text-brand-600 dark:bg-brand-500/10 dark:border-brand-500/20 dark:text-brand-400 shadow-2xs">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Academic Degrees
            </h3>
          </div>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all duration-300 relative group"
            >
              {edu.isPlaceholder && (
                <div className="absolute top-4 right-4">
                  <Badge variant="amber" size="sm">
                    Placeholder
                  </Badge>
                </div>
              )}
              <div className="text-xs font-mono text-brand-600 dark:text-cyan-400 mb-1 flex items-center gap-2 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{edu.year}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
              <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
                {edu.field}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {edu.institution}
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-200 dark:border-slate-800/60">
                {edu.details}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Industry Certifications
            </h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 shadow-xs transition-all duration-300 flex items-start justify-between gap-4 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </span>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                      {cert.issueDate}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                  {cert.credentialId && (
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      Credential: {cert.credentialId}
                    </div>
                  )}
                </div>

                {cert.isPlaceholder && (
                  <Badge variant="amber" size="sm" className="shrink-0">
                    Placeholder
                  </Badge>
                )}
              </div>
            ))}
          </div>

          {/* Quick learning ethos card */}
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Continuously benchmarking the latest advances in Generative AI, Vector Search, and distributed backend architectures.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

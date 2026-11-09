"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("Failed to send message. Please try emailing directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        eyebrow="Initiate Collaboration"
        title="Let's Build Something Intelligent"
        subtitle="Have an interesting project in mind or an engineering challenge to solve? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 space-y-6 shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-brand-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Direct Inquiries</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Start a Conversation
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you are exploring AI SOC architectures, optimizing backend services, or looking for senior engineering leadership, reach out directly.
              </p>
            </div>

            {/* Email Box with One-Click Copy */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 dark:bg-brand-500/10 dark:border-brand-500/20 dark:text-brand-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-900 dark:text-slate-200 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors truncate block font-medium"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors shrink-0 shadow-2xs"
                aria-label="Copy email address"
                title="Copy to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500/40 flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all group shadow-2xs"
              >
                <div className="p-2 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:border-brand-500/20 dark:text-brand-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                    LinkedIn
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    Connect
                  </div>
                </div>
              </a>

              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500/40 flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all group shadow-2xs"
              >
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-brand-600 group-hover:text-white dark:bg-slate-800 dark:text-slate-300 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                    GitHub
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    Repositories
                  </div>
                </div>
              </a>
            </div>

            {/* Timezone / Availability Note */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span>Location: {personal.location}</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Response &lt; 24h</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800/80 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Message Transmitted Successfully!
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out. I have received your message and will review your inquiry promptly.
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {serverError && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Name <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors shadow-2xs ${
                        errors.name ? "border-red-500/80" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-500 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                      Your Email <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@enterprise.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors shadow-2xs ${
                        errors.email ? "border-red-500/80" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-500 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Subject <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. AI SOC Architecture Consultation / Role Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors shadow-2xs ${
                      errors.subject ? "border-red-500/80" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-500 dark:text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-semibold">
                    Message <span className="text-brand-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your project scope, engineering requirements, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors resize-none shadow-2xs ${
                      errors.message ? "border-red-500/80" : "border-slate-200 dark:border-slate-800"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-500 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    * Required fields
                  </span>

                  <Button
                    type="submit"
                    variant="glow"
                    size="md"
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                    iconPosition="right"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

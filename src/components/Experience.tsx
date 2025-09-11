"use client"

import { motion } from "framer-motion"

type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
}

const timeline: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Freelance / Consulting",
    period: "2023 — Present",
    summary:
      "Built LLM apps, RAG chatbots, and automations for startups and SMEs.",
  },
  {
    role: "Data Engineer",
    company: "Tech Co.",
    period: "2021 — 2023",
    summary:
      "Designed ETL pipelines, analytics models, and monitoring for product teams.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="mt-6 relative">
        <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-[--foreground]/15" />
        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.role + item.company}
              className="relative pl-10 sm:pl-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="absolute left-1.5 sm:left-2.5 top-2 h-3 w-3 rounded-full bg-[--foreground]" />
              <div className="rounded-lg border border-black/10 dark:border-white/15 p-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-xs sm:text-sm text-[--foreground]/70">
                    {item.period}
                  </span>
                </div>
                <div className="mt-1 text-sm text-[--foreground]/80">
                  {item.company}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[--foreground]/80">
                  {item.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


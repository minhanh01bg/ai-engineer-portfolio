"use client"

import { motion } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"

type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

const timeline: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Freelance / Consulting",
    period: "2023 — Present",
    summary: "Partnering with teams to launch LLM copilots, automation workflows, and production RAG systems end-to-end.",
    highlights: ["Led 0→1 launches for 8 AI products", "Cut support time by 60% via tooling", "Scaled eval stack across clients"],
  },
  {
    role: "Data Engineer",
    company: "Tech Co.",
    period: "2021 — 2023",
    summary: "Built data platforms, experimentation pipelines, and monitoring dashboards powering product insights.",
    highlights: ["Owned dbt + Airflow stack", "Reduced ETL cost by 35%", "Rolled out governance guardrails"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#11121d] to-[#080910] p-8 sm:p-12"
      >
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Operating at the intersection of AI and systems</h2>
          <p className="text-base text-white/65 max-w-3xl">
            I lead multidisciplinary stacks: from data pipelines and MLOps foundations to interaction-rich surfaces that make AI approachable.
          </p>
        </header>

        <div className="mt-10 relative">
          <div className="absolute left-6 top-0 bottom-0 hidden sm:block w-px bg-gradient-to-b from-violet-400/40 via-white/10 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.article
                key={item.role}
                variants={cardItem}
                className="relative sm:pl-16"
              >
                <div className="hidden sm:block absolute left-6 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400 to-emerald-300 shadow-[0_0_20px_rgba(99,102,241,0.6)]" />

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.period}</p>
                      <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="text-white/70">{item.company}</p>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.03 }}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60"
                    >
                      {idx === 0 ? "Current" : "Past"}
                    </motion.span>
                  </div>

                  <p className="mt-4 text-white/70 leading-relaxed">{item.summary}</p>

                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}


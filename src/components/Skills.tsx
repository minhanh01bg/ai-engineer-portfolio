"use client"

import { motion } from "framer-motion"
import { sectionContainer, cardItem } from "@/lib/motion"

const skillGroups: { category: string; level: string; description: string; items: string[] }[] = [
  { category: "Core AI/ML", level: "Expert", description: "LLMs, RAG, eval automation, fine-tuning pipelines", items: ["LLMs", "Prompt Orchestration", "RAG Systems", "Evaluation", "Fine-tuning", "Vector Search"] },
  { category: "Backend Systems", level: "Advanced", description: "APIs, auth, async jobs, streaming inference", items: ["Next.js App Router", "FastAPI", "Postgres", "Redis", "gRPC/REST", "Celery"] },
  { category: "Data & Infra", level: "Advanced", description: "Batch/stream pipelines, monitoring, experimentation", items: ["Airflow", "dbt", "BigQuery", "DuckDB", "Pandas", "Grafana"] },
  { category: "Frontend & UX", level: "Advanced", description: "Interaction design, motion systems, design systems", items: ["React", "Tailwind", "shadcn/ui", "Framer Motion", "Highcharts"] },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#141726]/90 to-[#0d0f18]/90 p-8 sm:p-12 backdrop-blur"
      >
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Core stack</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Skills that ship production AI</h2>
          <p className="text-base text-white/65 max-w-2xl">
            Balanced expertise across research, engineering, and UX to take LLM ideas from whiteboard to shipping product.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardItem}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-inner shadow-black/20 transition-all hover:border-white/30"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-300">{group.level}</span>
              </div>
              <p className="mt-2 text-sm text-white/65">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


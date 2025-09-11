"use client"

import { motion } from "framer-motion"

const stack = [
  { group: "AI/LLM", items: ["OpenAI", "Llama", "LangChain", "vLLM", "Pinecone"] },
  { group: "Backend", items: ["Next.js App Router", "FastAPI", "Postgres", "Prisma", "Redis"] },
  { group: "Data", items: ["Airflow", "dbt", "BigQuery", "DuckDB", "Pandas"] },
  { group: "Frontend", items: ["React", "Tailwind", "shadcn/ui", "Framer Motion", "Charts"] },
]

export default function TechStack() {
  return (
    <section id="stack" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Tech stack
      </motion.h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stack.map((s, idx) => (
          <motion.div
            key={s.group}
            className="rounded-xl p-4 border border-black/10 dark:border-white/15 bg-black/[.02] dark:bg-white/[.02]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
          >
            <div className="text-base font-semibold">{s.group}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="text-xs rounded-md border border-black/10 dark:border-white/15 px-2 py-1 text-[--foreground]/80"
                >
                  {i}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


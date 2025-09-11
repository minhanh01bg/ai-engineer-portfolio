"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills: { category: string; items: string[] }[] = [
  { category: "Core AI/ML", items: ["LLMs", "RAG", "Prompt Engineering", "Fine-tuning", "Vector DBs"] },
  { category: "Backend", items: ["Node/Next", "FastAPI", "Postgres", "Redis", "gRPC/REST", "Flask", "Django"] },
  { category: "Data", items: ["Airflow", "dbt", "BigQuery", "Pandas", "ETL/ELT"] },
  { category: "Frontend", items: ["React", "Tailwind", "NextJS"] },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.p
        className="mt-2 text-sm sm:text-base text-[--foreground]/80"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        My main stack for AI apps and data products.
      </motion.p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            className="rounded-lg border border-black/10 dark:border-white/15 p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
          >
            <h3 className="text-base font-semibold">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


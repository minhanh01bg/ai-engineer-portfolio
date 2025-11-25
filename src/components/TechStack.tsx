"use client"

import { motion } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"

const stack = [
  {
    group: "LLM Platforms",
    note: "Model hosting, fine-tuning, evals",
    items: ["OpenAI", "Anthropic", "Llama.cpp", "vLLM", "Ollama"],
  },
  {
    group: "Orchestration",
    note: "Tools, routing, observability",
    items: ["LangChain", "LangGraph", "LlamaIndex", "OpenTelemetry", "Phoenix"],
  },
  {
    group: "Backend & APIs",
    note: "Edge-ready services & realtime",
    items: ["Next.js", "FastAPI", "tRPC", "Prisma", "Postgres", "Redis"],
  },
  {
    group: "Data & Infra",
    note: "Pipelines, analytics, monitoring",
    items: ["Airflow", "dbt", "BigQuery", "DuckDB", "Grafana", "S3"],
  },
  {
    group: "Frontend & UX",
    note: "Motion systems, rapid prototyping",
    items: ["React", "Tailwind", "shadcn/ui", "Framer Motion", "Three.js"],
  },
  {
    group: "Ops & Tooling",
    note: "CI/CD, containers, scripting",
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Bash", "Python"],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="w-full max-w-[72rem] mx-auto px-2 sm:px-4 lg:px-8 scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <header className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Tech stack</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Comprehensive toolchain for AI shipping</h2>
          <p className="text-base text-white/65 max-w-2xl">
            Every project gets the right mix of research tooling, production infra, and beautiful UX. This is the stack I deploy weekly.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {stack.map((section) => (
            <motion.article
              key={section.group}
              variants={cardItem}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-white/25"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{section.group}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">core</span>
              </div>
              <p className="mt-2 text-sm text-white/65">{section.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


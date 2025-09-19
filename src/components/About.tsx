"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm Vũ Minh Anh
      </motion.h2>
      <motion.div>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-violet-500 transition-transform duration-300 group-hover:scale-110">
            <path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>Ha Noi, Vietnam</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-500 transition-transform duration-300 group-hover:scale-110">
            <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>Open to work</span>
        </div>
        
      </motion.div>

      <motion.div
        className="mt-4 rounded-xl p-5 glass border border-black/10 dark:border-white/15"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <p className="text-sm sm:text-base text-[--foreground]/85 leading-relaxed">
          I craft AI-powered products end-to-end: ideation, data pipelines, model integration, and delightful UIs. My focus is rapid iteration, measurable impact, and clean engineering.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { title: "LLM Apps", desc: "Chatbots, agents, RAG, evals" },
            { title: "Data & MLOps", desc: "ETL/ELT, orchestration, monitoring" },
            { title: "Web UX", desc: "Accessible, fast, animated" },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="rounded-lg p-3 border border-black/10 dark:border-white/15"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="text-sm font-semibold text-[--foreground]">
                {item.title}
              </div>
              <div className="mt-1 text-xs text-[--foreground]/75">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"

type EducationItem = {
  degree: string
  institution: string
  period: string
  focus: string
}

const education: EducationItem[] = [
  {
    degree: "B.Eng Information Technology",
    institution: "PTIT",
    period: "2019 — 2024",
    focus: "Specialized in AI systems, distributed computing, and data platforms.",
  },
  {
    degree: "Algorithm & Data Structure Fellowship",
    institution: "Samsung",
    period: "2020 — 2021",
    focus: "Advanced graph theory, optimization, and large-scale problem solving.",
  },
]

export default function Education() {
  return (
    <section id="education" className="w-full max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="rounded-[32px] border border-white/10 bg-[#0d0f19]/90 p-8 sm:p-12"
      >
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Education</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Grounded in computer science fundamentals</h2>
          <p className="text-base text-white/65 max-w-3xl">
            Strong algorithmic thinking plus practical experience make it easy for me to collaborate with research, data, and product teams alike.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={item.degree}
              variants={cardItem}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between text-white/70">
                <span className="text-xs uppercase tracking-[0.3em]">{item.period}</span>
                <span className="text-xs rounded-full border border-white/20 px-3 py-1 text-white/60">Focus</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.degree}</h3>
              <p className="text-sm text-white/70">{item.institution}</p>
              <p className="mt-4 text-sm text-white/75">{item.focus}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


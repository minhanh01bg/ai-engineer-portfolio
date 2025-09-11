"use client"

import { motion } from "framer-motion"

type EducationItem = {
  degree: string
  institution: string
  period: string
}

const education: EducationItem[] = [
  {
    degree: "Information Technology",
    institution: "PTIT",
    period: "2019 — 2024",
  },
  {
    degree: "Algorithm and Data Structure",
    institution: "SAM SUNG",
    period: "2020 — 2021",
  }
]

export default function Education() {
  return (
    <section id="education" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <div className="mt-5 grid grid-cols-1 gap-4">
        {education.map((e, idx) => (
          <motion.div
            key={e.degree + e.institution}
            className="rounded-lg border border-black/10 dark:border-white/15 p-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                {e.degree}
              </h3>
              <span className="text-xs sm:text-sm text-[--foreground]/70">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[--foreground]/80">{e.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


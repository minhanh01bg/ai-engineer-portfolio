"use client"

import Image from "next/image"
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
    <section id="education" className="w-full max-w-[72rem] mx-auto px-2 sm:px-4 lg:px-8 scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="visible"
        className="space-y-10"
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

        <motion.div variants={cardItem} className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="lg:w-1/2 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Certification</p>
              <h3 className="text-2xl font-semibold text-white">Ubuntu with WSL</h3>
              <p className="text-white/70 text-sm">
                Official Ubuntu certification covering WSL setup, Linux tooling, and cross-platform developer environments.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl border border-white/15 bg-black/40">
                <Image
                  src="/certificates/Vu Minh Anh Ubuntu with WSL Certificate.png"
                  alt="Ubuntu with WSL certificate"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}


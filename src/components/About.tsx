"use client"

import { motion } from "framer-motion"
import { cardItem, fadeInUp, sectionContainer } from "@/lib/motion"

const badges = [
  { label: "Ha Noi, Vietnam", icon: LocationIcon },
  { label: "Open to work", icon: StatusIcon },
  { label: "AI Engineer", icon: SparkIcon },
]

const pillars = [
  { title: "LLM Apps", desc: "Agents, evals, custom tooling" },
  { title: "Data & MLOps", desc: "Pipelines, monitoring, infra" },
  { title: "UX Engineering", desc: "Motion-first, accessible UI" },
]

const metrics = [
  { label: "Projects shipped", value: "24+" },
  { label: "Latency gains", value: "-45%" },
  { label: "Automation hours saved", value: "1.2k" },
]

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#1c1d2b] via-[#11121d] to-[#090a11] p-8 sm:p-12 shadow-[0_20px_80px_-40px_rgba(15,15,30,0.8)]"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-violet-500/30 blur-[120px]" aria-hidden />
        <div className="absolute -right-20 -bottom-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-[120px]" aria-hidden />

        <motion.div variants={fadeInUp(0)} className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between relative">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              Portfolio 2025
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Hi, I'm Vũ Minh Anh — building AI products end-to-end.
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              I architect data pipelines, craft model workflows, and ship polished UX so AI ideas become measurable business wins. Rapid prototyping, production-grade reliability, and delightful motion design are my defaults.
            </p>
            <div className="flex flex-wrap gap-3">
              {badges.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 border border-white/10">
                  <Icon />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            variants={cardItem}
            className="relative mt-4 lg:mt-0"
          >
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <p className="text-white/60 text-sm">Currently available for</p>
              <p className="text-white text-2xl font-semibold mt-1">AI product engineering</p>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <span>Discovery → Deployment</span>
                  <span>4-6 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Preferred stack</span>
                  <span>Next.js · FastAPI · LLMs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp(0.1)}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={cardItem}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-center backdrop-blur hover:border-white/30 transition-colors"
            >
              <div className="text-3xl font-semibold text-white">{metric.value}</div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mt-1">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp(0.15)}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardItem}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-white/80 hover:border-white/30 transition-all"
            >
              <p className="text-sm font-semibold text-white">{pillar.title}</p>
              <p className="mt-2 text-sm text-white/70">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-violet-300">
      <path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function StatusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber-300">
      <path d="M5 12h14M12 5v14M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}


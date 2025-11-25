"use client"

import { motion } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"

type Project = {
  title: string
  description: string
  tags: string[]
  impact: string
  href?: string
}

const projects: Project[] = [
  {
    title: "AI KC IoT",
    description: "Multimodal detection system for IoT attack surfaces including brute-force, port scanning, and DDoS vectors.",
    tags: ["PyTorch", "RNN/LSTM", "Anomaly detection", "SMOTE"],
    impact: "98.4% detection accuracy across 4 major attack classes.",
  },
  {
    title: "AI Resume Parser",
    description: "LLM pipeline that ingests PDFs, structures candidate profiles, and ranks via bespoke evaluation loops.",
    tags: ["LangChain", "FastAPI", "Postgres", "RAG"],
    impact: "Cuts recruiter triage time by 70%.",
  },
  {
    title: "LLM Support Copilot",
    description: "Retrieval-augmented chatbot with escalation tooling, analytics, and secure multi-tenant setup.",
    tags: ["LangGraph", "FAISS", "MongoDB", "Next.js"],
    impact: "Handled 65% of support tickets autonomously.",
    href: "https://chatbot.physcode.com",
  },
  {
    title: "AI eKYC for Banking",
    description: "Face verification, OCR, and fraud heuristics deployed for onboarding journeys.",
    tags: ["OpenCV", "PyTorch", "Docker", "FastAPI"],
    impact: "Reduced manual review by 55%.",
  },
  {
    title: "Mosyne — Marketing Photoshop",
    description: "Diffusion-based assistant for creative teams: auto-masking, prompt templating, and batch renders.",
    tags: ["Stable Diffusion", "Runpod", "ComfyUI", "OpenCV"],
    impact: "5x faster creative iteration loops.",
  },
  {
    title: "Eduprompt",
    description: "AI learning companion blending RAG, analytics, and classroom workflows.",
    tags: ["OpenAI", "LangChain", "FastAPI", "MongoDB"],
    impact: "Improved student engagement by 40%.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[32px] border border-white/10 bg-[#0b0d16]/90 p-8 sm:p-12"
      >
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Select work shipped recently</h2>
          <p className="text-base text-white/65 max-w-3xl">
            A sample of AI systems spanning copilots, automation, and platform work. Every project balances research-grade accuracy with polished UX.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardItem}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-violet-300/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{project.description}</p>
                </div>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white"
                  >
                    live ↗
                  </a>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-emerald-300">{project.impact}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


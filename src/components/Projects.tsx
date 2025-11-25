"use client"

import { motion, type Variants } from "framer-motion"
import { cardItem } from "@/lib/motion"

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

const firstGroup = projects.slice(0, 3)
const secondGroup = projects.slice(3)

const slideShell = "w-full max-w-[72rem] mx-auto px-2 sm:px-4 lg:px-8"

const slideVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
}

export function ProjectsIntro() {
  return (
    <motion.div className={slideShell} variants={slideVariant} initial="hidden" animate="visible">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">AI products across industries</h2>
        <p className="text-base text-white/65 max-w-3xl">
          Shipping copilots, automation, and platform tooling with measurable impact.
        </p>
      </header>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {firstGroup.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.div>
  )
}

export function ProjectsShowcase() {
  return (
    <motion.div className={slideShell} variants={slideVariant} initial="hidden" animate="visible">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">More builds</p>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">Scale, compliance, and creativity</h3>
      </header>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {secondGroup.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p className="mt-8 text-sm text-white/50">
        Need details on a specific build? Happy to walk through architecture diagrams and results on a call.
      </p>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div className="space-y-12">
      <ProjectsIntro />
      <ProjectsShowcase />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
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
  )
}


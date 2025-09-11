"use client"

import Link from "next/link"
import { motion } from "framer-motion"

type Project = {
  title: string
  description: string
  tags?: string[]
  href?: string
}

export default function ProjectCard({ title, description, tags = [], href }: Project) {
  const Wrapper: any = href ? Link : (props: any) => <div {...props} />
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Wrapper
        href={href || "#"}
        className="group relative block rounded-xl border border-black/10 dark:border-white/15 p-4 sm:p-5 bg-black/[.02] dark:bg-white/[.02] hover:bg-black/[.04] dark:hover:bg-white/[.04] transition-colors"
      >
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 30px -15px rgba(0,0,0,0.35)" }} />
        <div className="flex items-start justify-between gap-4 relative">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight">
            {title}
          </h3>
        </div>
        <p className="mt-2 text-sm text-[--foreground]/80 leading-relaxed relative">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 relative">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs rounded-md border border-black/10 dark:border-white/15 px-2 py-1 text-[--foreground]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {href && (
          <div className="mt-3 text-sm text-primary group-hover:underline underline-offset-4 relative">
            View project →
          </div>
        )}
      </Wrapper>
    </motion.div>
  )
}


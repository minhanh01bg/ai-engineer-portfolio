"use client"

import { ProjectsIntro, ProjectsShowcase } from "@/components/Projects"
import { ContactIntro, ContactFormSlide } from "@/components/Contact"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Sidebar from "@/components/Sidebar"
import About from "@/components/About"
import TechStack from "@/components/TechStack"
import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const sections = [
  { id: "about", label: "About", slides: [About] },
  { id: "skills", label: "Skills", slides: [Skills] },
  { id: "stack", label: "Tech stack", slides: [TechStack] },
  { id: "experience", label: "Experience", slides: [Experience] },
  { id: "education", label: "Education", slides: [Education] },
  { id: "projects", label: "Projects", slides: [ProjectsIntro, ProjectsShowcase] },
  { id: "contact", label: "Contact", slides: [ContactIntro, ContactFormSlide] },
]

function SectionWrapper({ children, sectionId }: { children: React.ReactNode; sectionId: string }) {
  return (
    <motion.div
      key={sectionId}
      className="absolute inset-0 h-full w-full px-2 sm:px-6 lg:px-10"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="w-full">{children}</div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id)
  const [slideIndex, setSlideIndex] = useState(0)

  const activeConfig = useMemo(() => sections.find((section) => section.id === activeSection), [activeSection])
  const slides = activeConfig?.slides ?? []
  const ActiveSlide = slides[slideIndex] ?? slides[0]
  const hasPrevSlide = slideIndex > 0
  const hasNextSlide = slideIndex < slides.length - 1

  useEffect(() => {
    setSlideIndex(0)
  }, [activeSection])

  const goToSlide = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next" && hasNextSlide) {
        setSlideIndex((prev) => prev + 1)
      } else if (direction === "prev" && hasPrevSlide) {
        setSlideIndex((prev) => prev - 1)
      }
    },
    [hasNextSlide, hasPrevSlide]
  )

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToSlide("next")
      } else if (event.key === "ArrowLeft") {
        goToSlide("prev")
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [goToSlide])

  return (
    <div className="font-sans min-h-screen overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 sm:gap-6 min-h-screen">
        <Sidebar
          activeSection={activeSection}
          onSelect={(id) => {
            setActiveSection(id)
            setSlideIndex(0)
          }}
        />
        <main className="relative mx-2 sm:mx-4 lg:mx-2 min-h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <SectionWrapper key={`${activeSection}-${slideIndex}`} sectionId={`${activeSection}-${slideIndex}`}>
              {ActiveSlide ? <ActiveSlide /> : null}
            </SectionWrapper>
          </AnimatePresence>

          {slides.length > 1 && (
            <div className="pointer-events-none absolute bottom-6 right-4 flex items-center gap-3 text-white/70">
              <button
                type="button"
                onClick={() => goToSlide("prev")}
                disabled={!hasPrevSlide}
                className="pointer-events-auto rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] disabled:opacity-40"
              >
                Prev
              </button>
              <span className="text-sm">
                {slideIndex + 1}/{slides.length}
              </span>
              <button
                type="button"
                onClick={() => goToSlide("next")}
                disabled={!hasNextSlide}
                className="pointer-events-auto rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

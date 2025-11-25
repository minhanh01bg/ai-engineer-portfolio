"use client"

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function SectionWrapper({ children, id }: { children: React.ReactNode; id: string }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      id={`${id}-wrapper`}
      className="min-h-screen flex flex-col justify-center py-12 sm:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <div className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 sm:gap-6">
        <Sidebar />
        <main className="mx-5 flex flex-col items-stretch">
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
          
          <SectionWrapper id="stack">
            <TechStack />
          </SectionWrapper>
          
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
          
          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>
          
          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>
          
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
      </div>
    </div>
  );
}

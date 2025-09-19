import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <div className="w-full grid grid-cols-1 md:grid-cols-[300px_1fr] gap-2 sm:gap-6">
        <Sidebar />
        <main className="mx-5 flex flex-col gap-12 sm:gap-16 items-stretch">
          <div className="h-px bg-gradient-to-r from-transparent via-[--foreground]/20 to-transparent" />
          <About />
          <div className="h-px bg-gradient-to-r from-transparent via-[--foreground]/20 to-transparent" />
          <Skills />
          <div className="h-px bg-gradient-to-r from-transparent via-[--foreground]/20 to-transparent" />
          <TechStack />
          <div className="h-px bg-gradient-to-r from-transparent via-[--foreground]/20 to-transparent" />
          <Experience />
          <Education />
          <div className="h-px bg-gradient-to-r from-transparent via-[--foreground]/20 to-transparent" />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

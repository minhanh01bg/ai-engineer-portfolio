import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <div className="rounded-lg border border-black/10 dark:border-white/15 p-5 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Let's work together</h2>
        <p className="mt-2 text-sm sm:text-base text-[--foreground]/80">
          Have an AI project in mind? I can help with prototyping, integrations, and productionization.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link href="mailto:minhthuy@example.com">
            <Button>Email me</Button>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">LinkedIn</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


"use client"

import Link from "next/link"
import Image from "next/image"
import { useId } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type NavItem = { id: string; label: string }
const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "stack", label: "Tech stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function Sidebar() {
  const gradientSuffix = useId()
  const gradientSuffixSafe = gradientSuffix.replace(/[^a-zA-Z0-9_-]/g, "")
  const [active, setActive] = useState<string>("top")
  const [open, setOpen] = useState<boolean>(false)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [indicator, setIndicator] = useState<{ top: number; height: number }>({ top: 0, height: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") || ""
            if (id) setActive(id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Floating highlight indicator follows the active link
  useEffect(() => {
    const el = itemRefs.current[active]
    if (el) {
      const parent = el.parentElement as HTMLElement
      if (parent) {
        setIndicator({ top: parent.offsetTop, height: parent.offsetHeight })
      }
    }
  }, [active, itemRefs])

  useEffect(() => {
    const onResize = () => {
      const el = itemRefs.current[active]
      if (el) {
        const parent = el.parentElement as HTMLElement
        if (parent) setIndicator({ top: parent.offsetTop, height: parent.offsetHeight })
      }
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [active, itemRefs])

  // Close drawer when navigating (mobile)
  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  const InfoCard = (
    <div className="mb-4 rounded-lg p-5 glass ring-1 ring-black/10 dark:ring-white/10">
      <div className="flex items-start gap-3">
        <Image
          src="/a5f91e31-86b7-43d2-b1b7-9dcaab74b830.png"
          alt="Avatar"
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover shadow-sm motion-safe:animate-[scale-in_0.6s_ease-out]"
          priority
        />
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold truncate bg-gradient-to-r from-violet-500 to-emerald-400 bg-clip-text text-transparent">
            Minh Anh
          </p>
          <p className="text-sm text-[--foreground]/75 truncate">AI Engineer</p>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 bg-[--foreground]/5 text-[--foreground]/80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>Ha Noi, Vietnam</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 bg-gradient-to-r from-violet-500/15 to-emerald-400/15 text-[--foreground]/80">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5"/><path d="M12 3v18" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>Open to work</span>
            </span>
            <a href="tel:+84912345678" className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v2a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.46 19.46 0 01-6-6A19.8 19.8 0 012.92 4.18 2 2 0 014.86 2h2a2 2 0 012 1.72c.12.9.3 1.77.57 2.61a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.47-1.47a2 2 0 012.11-.45c.84.27 1.71.45 2.61.57A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>+84 877 829 956</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-[--foreground]/85 hover:text-[--foreground] hover:bg-[--foreground]/10 transition-colors"
          aria-label="Contact"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 group-hover:opacity-100 motion-safe:animate-[up-down_0.6s_ease-out]"><path d="M4 4h16v16H4z" fill="none"/><path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
          <span>Contact</span>
        </a>
        <a
          href="#"
          className="group inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-[--foreground]/85 hover:text-[--foreground] hover:bg-[--foreground]/10 transition-colors"
          aria-label="Resume"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 group-hover:opacity-100"><path d="M6 2h9l5 5v15a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/><path d="M15 2v5h5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 13h8M8 17h8M8 9h4" stroke="currentColor" strokeWidth="1.5"/></svg>
          <span>Resume</span>
        </a>
        <a
          href="https://github.com/minhanh01bg"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-[--foreground]/85 hover:text-[--foreground] hover:bg-[--foreground]/10 transition-colors"
          aria-label="GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80 group-hover:opacity-100 motion-safe:animate-[left-right_0.6s_ease-out]"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.49.35 1.92-1.32 2.76-1.05 2.76-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.49A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-[--foreground]/85 hover:text-[--foreground] hover:bg-[--foreground]/10 transition-colors"
          aria-label="LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80 group-hover:opacity-100 motion-safe:animate-[down-up_0.6s_ease-out]"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.43V23h-4V8.5z"/></svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  )

  const iconFor = (id: string, isActive: boolean) => {
    const common = cn(
      "h-5 w-5 transition-opacity drop-shadow-[0_1px_6px_rgba(124,58,237,0.25)]",
      isActive ? "opacity-100 text-white" : "opacity-95 text-[--foreground]/90 group-hover:text-[--foreground]"
    )
    const gradId = `grad-${id}-${gradientSuffixSafe}`;
    switch (id) {
      case "top":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <path d="M3 11l9-7 9 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case "about":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          </svg>
        )
      case "skills":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            <path d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h4M19 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
          </svg>
        )
      case "stack":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <path d="M12 2l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M21 12l-9 5-9-5" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M21 17l-9 5-9-5" stroke="currentColor" strokeWidth="1.7"/>
          </svg>
        )
      case "experience":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M8 7V6a3 3 0 013-3h2a3 3 0 013 3v1" stroke="currentColor" strokeWidth="1.7"/>
          </svg>
        )
      case "education":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path d="M3 9l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
            <path d="M7 12v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4" stroke="currentColor" strokeWidth="1.7"/>
          </svg>
        )
      case "projects":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7"/>
            <path d="M3 9h18" stroke="currentColor" strokeWidth="1.7"/>
          </svg>
        )
      case "contact":
        return (
          <svg viewBox="0 0 24 24" className={common} fill="none">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/>
          </svg>
        )
      default:
        return null
    }
  }

  const NavList = (
    <div className="relative">
      {/* Floating active pill */}
      <div
        className="pointer-events-none absolute left-1 right-1 rounded-md bg-gradient-to-r from-[--foreground]/10 to-transparent transition-all duration-300 ease-out"
        style={{ top: indicator.top + 3, height: indicator.height - 6 }}
        aria-hidden="true"
      />
      <ul className="space-y-1.5 relative z-10">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <Link
              href={`#${item.id}`}
              ref={(el) => {
                itemRefs.current[item.id] = el
              }}
              onClick={() => setActive(item.id)}
              className={cn(
                "group block rounded-md pl-8 pr-3 py-2 text-md",
                "transition-colors motion-safe:transition-transform motion-safe:duration-300",
                "outline-none focus-visible:ring-2 focus-visible:ring-[--foreground]/30",
                active === item.id
                  ? "text-[--foreground]"
                  : "text-[--foreground]/80 hover:text-[--foreground] hover:translate-x-[2px]"
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              <span className="relative inline-flex items-center gap-2">
                <span className={cn(
                  "rounded-full p-1.5 transition-transform duration-300 bg-gradient-to-br ring-1 shadow-sm",
                  active === item.id
                    ? "scale-105 from-violet-500/40 to-emerald-400/40 ring-violet-500/30 text-white"
                    : "group-hover:scale-105 from-violet-500/20 to-emerald-400/20 ring-[--foreground]/10 text-[--foreground]"
                )}>
                  {iconFor(item.id, active === item.id)}
                </span>
                <span className="relative">
                  {item.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--foreground]/40 to-transparent",
                      active === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-70 motion-safe:transition-opacity"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </span>
            </Link>
            {/* Left rail accent knob */}
            <span
              className={cn(
                "pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full transition-all duration-300 ease-out bg-gradient-to-br from-violet-500 to-emerald-400 shadow-[0_0_10px_rgba(139,92,246,0.35)]",
                active === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden sticky top-4 z-40 mb-2">
        <div className="flex justify-start">
          <Button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-sidebar"
            onClick={() => setOpen((v) => !v)}
            variant="outline"
            size="sm"
            className="backdrop-blur-sm bg-background/60 border-[--foreground]/15 text-[--foreground]"
          >
            {open ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        className={cn(
          "md:hidden fixed inset-0 z-40",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Panel */}
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-80 p-4",
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav
            className={cn(
              "relative rounded-xl p-3",
              "glass",
              "ring-1 ring-black/10 dark:ring-white/10"
            )}
          >
            {InfoCard}
            <div className="my-2 h-px bg-[--foreground]/10" />
            {NavList}
          </nav>
        </aside>
      </div>

      {/* Desktop / tablet sidebar */}
      <aside className="hidden md:block sticky top-0 self-start h-screen w-full sm:w-[280px] lg:w-[320px]">
        <nav
          className={cn(
            "relative h-full rounded-xl p-4 overflow-auto",
            "glass",
            "ring-1 ring-black/10 dark:ring-white/10"
          )}
          aria-label="Mục lục"
        >
          {InfoCard}
          <div className="my-3 h-px bg-[--foreground]/10" />
          {NavList}
        </nav>
      </aside>
    </>
  )
}


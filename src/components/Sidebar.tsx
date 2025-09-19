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
    <div className="p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          src="/a5f91e31-86b7-43d2-b1b7-9dcaab74b830.png"
          alt="Avatar"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-300 dark:ring-violet-600 shadow-md transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="text-center">
          <p className="text-xl font-semibold transition-all duration-300 hover:from-violet-500 hover:to-emerald-300">
            Minh Anh
          </p>
          <p className="text-xl text-gray-500 dark:text-gray-300 truncate">AI Engineer</p>
        </div>
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
    <div className="relative p-6">
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
      <div className="md:hidden sticky top-4 mx-5 z-40 mb-2">
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
              "relative rounded-xl p-3 bg-white h-full",
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
            "relative h-full rounded-xl overflow-auto",
            "glass",
            "ring-1 ring-black/10 dark:ring-white/10"
          )}
          aria-label="Mục lục"
        >
          {InfoCard}
          <div className="border-t w-full border-gray-200" />
          {NavList}
        </nav>
      </aside>
    </>
  )
}


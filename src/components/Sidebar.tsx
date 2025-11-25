"use client"

import Image from "next/image"
import { useId } from "react"
import { useRef, useState } from "react"
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

type SidebarProps = {
  activeSection: string
  onSelect: (id: string) => void
}

export default function Sidebar({ activeSection, onSelect }: SidebarProps) {
  const gradientSuffix = useId()
  const gradientSuffixSafe = gradientSuffix.replace(/[^a-zA-Z0-9_-]/g, "")
  const [open, setOpen] = useState<boolean>(false)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const InfoCard = (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.35),transparent_60%)] opacity-70" aria-hidden />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <Image
          src="/a5f91e31-86b7-43d2-b1b7-9dcaab74b830.png"
          alt="Avatar"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-violet-400/70 shadow-lg"
          priority
        />
        <div>
          <p className="text-lg font-semibold text-white">Minh Anh</p>
          <p className="text-sm text-white/70">AI Engineer · Product Builder</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-xs text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1">Ha Noi</span>
          <span className="rounded-full border border-white/20 px-3 py-1">Open to work</span>
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
    <div className="relative px-4 py-6">
      <div className="absolute left-6 top-6 bottom-6 hidden sm:block w-px bg-gradient-to-b from-violet-400/40 via-white/10 to-transparent" aria-hidden />
      <ul className="relative z-10 space-y-2">
        {navItems.map((item) => (
          <li key={item.id} className="relative pl-8">
            <button
              type="button"
              ref={(el) => {
                itemRefs.current[item.id] = el
              }}
              onClick={() => {
                onSelect(item.id)
                setOpen(false)
              }}
              className={cn(
                "group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 border border-transparent",
                activeSection === item.id
                  ? "text-white bg-white/8 shadow-[0_15px_30px_-20px_rgba(0,0,0,0.85)] border-white/20"
                  : "text-white/60 hover:text-white hover:translate-x-1 hover:border-white/10"
              )}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="relative inline-flex items-center gap-3">
                <span
                  className={cn(
                    "rounded-full p-2 transition-all duration-300 ring-1 shadow-sm",
                    activeSection === item.id
                      ? "scale-105 bg-gradient-to-br from-[#1f2933] via-[#151922] to-[#0c0f16] ring-white/15 text-white"
                      : "bg-[#0b0e15] ring-white/5 text-white/60 group-hover:scale-105 group-hover:bg-[#141824]"
                  )}
                >
                  {iconFor(item.id, activeSection === item.id)}
                </span>
                <span className={cn("relative text-base", activeSection === item.id ? "text-white" : "text-white/70")}>
                  {item.label}
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">0{navItems.indexOf(item) + 1}</span>
            </button>
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
          <nav className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[#05060d]">
            <div className="p-4">{InfoCard}</div>
            <div className="flex-1 overflow-auto">{NavList}</div>
          </nav>
        </aside>
      </div>

      {/* Desktop / tablet sidebar */}
      <aside className="hidden md:block sticky top-0 self-start h-screen w-full sm:w-[280px] lg:w-[320px]">
        <nav className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#05060d]/80 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.85)]">
          <div className="p-4">{InfoCard}</div>
          <div className="flex-1 overflow-auto">{NavList}</div>
          <div className="border-t border-white/10 px-6 py-5">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Current section</div>
            <div className="mt-2 flex items-center justify-between text-sm text-white">
              <span>{navItems.find((n) => n.id === activeSection)?.label}</span>
              <span>
                {navItems.findIndex((n) => n.id === activeSection) + 1}/{navItems.length}
              </span>
            </div>
            <div className="mt-3 flex gap-2 text-xs text-white/70">
              <button
                type="button"
                onClick={() => {
                  const currentIndex = navItems.findIndex((item) => item.id === activeSection)
                  const prevItem = navItems[currentIndex - 1]
                  if (prevItem) onSelect(prevItem.id)
                }}
                className="flex-1 rounded-xl border border-white/15 px-3 py-2 transition hover:border-white/40"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => {
                  const currentIndex = navItems.findIndex((item) => item.id === activeSection)
                  const nextItem = navItems[currentIndex + 1]
                  if (nextItem) onSelect(nextItem.id)
                }}
                className="flex-1 rounded-xl border border-white/15 px-3 py-2 transition hover:border-white/40"
              >
                Next
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}


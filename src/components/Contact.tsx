"use client"

import { Button } from "@/components/ui/button"
import { motion, type Variants } from "framer-motion"
import { useState } from "react"

const slideShell = "w-full max-w-[72rem] mx-auto px-2 sm:px-4 lg:px-8"

const fadeVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
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

const contactMethods = [
  {
    label: "Phone",
    value: "+84 877 829 956",
    href: "tel:+84877829956",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "vu.anh147852@gmail.com",
    href: "mailto:vu.anh147852@gmail.com",
    icon: MailIcon,
  },
  {
    label: "GitHub",
    value: "minhanh01bg",
    href: "https://github.com/minhanh01bg",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "your-linkedin-username",
    href: "https://www.linkedin.com/in/your-linkedin-username",
    icon: LinkedinIcon,
  },
]

export function ContactIntro() {
  return (
    <motion.div className={slideShell} variants={fadeVariant} initial="hidden" animate="visible">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">{"Let’s build something together"}</h2>
        <p className="text-base text-white/70 max-w-2xl">
          Prefer a quick call, async brief, or dropping me a note? Pick the channel that fits and we can dive into
          roadmaps, scoping, or demos.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {contactMethods.map(({ label, value, href, icon: Icon }) => (
          <motion.div key={label} variants={fadeVariant} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{label}</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{value}</p>
                <p className="text-sm text-white/60">Tap to connect</p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 text-white/80 hover:bg-white/10">
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function ContactFormSlide() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!formData.name.trim()) nextErrors.name = "Name is required"
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required"
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      nextErrors.email = "Invalid email address"
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required"
    return nextErrors
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  return (
    <motion.div className={slideShell} variants={fadeVariant} initial="hidden" animate="visible">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Message</p>
        <h3 className="text-3xl font-semibold text-white">Tell me about your idea</h3>
        <p className="text-sm text-white/60">Response within 24h weekdays.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <Field
          label="Name"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="Email"
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Field
          as="textarea"
          label="Message"
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={5}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-violet-600 text-white hover:bg-violet-500 transition-all duration-300 hover:scale-[1.02]"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </form>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <div className="space-y-12">
      <ContactIntro />
      <ContactFormSlide />
    </div>
  )
}

type FieldProps = {
  as?: "input" | "textarea"
  label: string
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  type?: string
  rows?: number
}

function Field({ as = "input", label, id, name, value, onChange, error, type = "text", rows }: FieldProps) {
  const Component = as
  return (
    <div>
      <label htmlFor={id} className="text-sm text-white/70">
        {label}
      </label>
      <Component
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        type={as === "input" ? type : undefined}
        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-white placeholder:text-white/30 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
      />
      {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
      <path
        d="M22 16.92v2a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.46 19.46 0 01-6-6A19.8 19.8 0 012.92 4.18 2 2 0 014.86 2h2a2 2 0 012 1.72c.12.9.3 1.77.57 2.61a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.47-1.47a2 2 0 012.11-.45c.84.27 1.71.45 2.61.57A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-300">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 6l10 6 10-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.49.35 1.92-1.32 2.76-1.05 2.76-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.49A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.43V23h-4V8.5z" />
    </svg>
  )
}


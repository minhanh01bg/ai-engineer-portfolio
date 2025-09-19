"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)
    console.log("Form data:", formData)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate async submission
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.2 
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto scroll-mt-28 py-12 px-4 sm:px-6">
      <motion.div 
        className="relative rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-6 sm:p-8 transition-shadow duration-300"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-8 h-8 text-primary" aria-hidden="true"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
          <h2 className="text-2xl bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contact
          </h2>
        </motion.div>
        <motion.p 
          className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          Got an AI project in mind? I'm here to assist with prototyping, integrations, and production-ready solutions.
        </motion.p>
        <motion.div 
          className="mt-12 border border-gray-200 dark:border-gray-700/50"
          variants={itemVariants}
        />
        
        <motion.div variants={itemVariants} className="mt-12">
          <div className="flex items-center gap-4 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-8 h-8 text-primary" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
            Choose your preferred way to connect
          </p>
          <div className="mt-8 flex justify-center space-x-4 max-w-6xl">
            <Button
              asChild
              variant="outline"
              className="group border-gray-400 flex items-center justify-center gap-3 rounded-lg bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-gray-500 p-10"
              aria-label="Phone Contact"
            >
              <a href="tel:+84877829956">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-transform duration-300 group-hover:scale-110" aria-label="Phone icon">
                  <path d="M22 16.92v2a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.46 19.46 0 01-6-6A19.8 19.8 0 012.92 4.18 2 2 0 014.86 2h2a2 2 0 012 1.72c.12.9.3 1.77.57 2.61a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.47-1.47a2 2 0 012.11-.45c.84.27 1.71.45 2.61.57A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex flex-col">
                  <span className="text-lg">Phone</span>
                  <span className="text text-gray-500 dark:text-gray-400">+84 877 829 956</span>
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group border-gray-400 flex items-center justify-center gap-3 rounded-lg bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-gray-500 p-10"
              aria-label="Email Contact"
            >
              <a href="mailto:vu.anh147852@gmail.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-violet-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-transform duration-300 group-hover:scale-110" aria-label="Email icon">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 6l10 6 10-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="flex flex-col">
                  <span className="text-xl">Email</span>
                  <span className="text text-gray-500 dark:text-gray-400">vu.anh147852@gmail.com</span>
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group flex items-center justify-center gap-3 rounded-lg bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-gray-500 p-10"
              aria-label="GitHub Profile"
            >
              <a href="https://github.com/minhanh01bg" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-transform duration-300 group-hover:scale-110" aria-label="GitHub icon">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.49.35 1.92-1.32 2.76-1.05 2.76-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.49A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
                <span className="flex flex-col">
                  <span className="text-xl">GitHub</span>
                  <span className="text-md text-gray-500 dark:text-gray-400">minhanh01bg</span>
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group border-gray-400 flex items-center justify-center gap-3 rounded-lg bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-gray-500 p-10"
              aria-label="LinkedIn Profile"
            >
              <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-300 group-hover:scale-110" aria-label="LinkedIn icon">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.43V23h-4V8.5z"/>
                </svg>
                <span className="flex flex-col">
                  <span className="text-xl">LinkedIn</span>
                  <span className="text-md text-gray-500 dark:text-gray-400">your-linkedin-username</span>
                </span>
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 border border-gray-200 dark:border-gray-700/50"
          variants={itemVariants}
        />
        <motion.div 
          className="w-full max-w-6xl border-gray-200 dark:border-gray-700/50 mt-12"
          variants={itemVariants}
        >
          <div>
            <div className="flex items-center gap-4 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-8 h-8 text-primary" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Send a Message
              </h3>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">Drop me a line and I'll get back to you</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5 border border-gray-200 p-8 rounded-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 px-4 py-2.5 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-violet-500 dark:focus:border-violet-400 dark:focus:ring-violet-400 transition-all duration-200"
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 px-4 py-2.5 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-violet-500 dark:focus:border-violet-400 dark:focus:ring-violet-400 transition-all duration-200"
                placeholder="your.email@example.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 px-4 py-2.5 text-gray-900 dark:text-white focus:border-violet-500 focus:ring-violet-500 dark:focus:border-violet-400 dark:focus:ring-violet-400 transition-all duration-200 resize-y"
                rows="5"
                placeholder="Your message..."
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-gray-600 text-white hover:bg-gray-700 dark:bg-violet-500 dark:hover:bg-violet-600 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-violet-500 py-2.5"
              aria-label="Send message"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
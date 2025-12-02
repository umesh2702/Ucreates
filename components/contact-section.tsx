"use client"

import type React from "react"
import { useState } from "react"

const quickOptions = ["Website or landing page", "MVP or small product", "Content / Reels", "Something else"]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - CTA */}
          <div className="space-y-8">
            <span className="text-sm font-medium text-accent-warm uppercase tracking-wider">Let's talk</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
              Got an idea?
              <br />
              <span className="text-muted-foreground">Let's build it.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Whether it's a polished project brief or just a rough thought — send it over. I'll get back with a simple
              plan and honest timeline.
            </p>

            {/* Quick info */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Response time</div>
                  <div className="font-medium text-foreground">Usually within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Timezone</div>
                  <div className="font-medium text-foreground">IST (UTC+5:30)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-8 md:p-10 rounded-3xl border border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-warm/50 focus:border-accent-warm transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium text-foreground">
                  Email or Instagram
                </label>
                <input
                  type="text"
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-warm/50 focus:border-accent-warm transition-colors"
                  placeholder="hello@example.com or @handle"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">What are you looking for?</label>
                <div className="flex flex-wrap gap-2">
                  {quickOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: option })}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        formData.projectType === option
                          ? "bg-foreground text-background border-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Tell me more
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-warm/50 focus:border-accent-warm transition-colors resize-none"
                  placeholder="What's the idea? Any timeline or budget in mind?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-foreground text-background rounded-xl font-medium hover:scale-[1.02] transition-transform"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-foreground">ucreates</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">Built by Umesh in Hyderabad</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-warm transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-warm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-warm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-warm transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ucreates. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.83a8.19 8.19 0 0 0 4.79 1.53V6.91a4.85 4.85 0 0 1-1.02-.22z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@honeybeedesigns.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section style={{ backgroundColor: "var(--color-background)" }} className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left — Email signup */}
          <div>
            <div className="mb-2 text-3xl">🐝</div>{/* TODO: replace with bee illustration */}
            <h2 className="text-[26px] font-black text-[var(--color-ink)]">
              ♥ JOIN THE HIVE!
            </h2>
            <p className="mt-1 text-[14px] text-[var(--color-secondary)]">
              Be the first to know about new arrivals, sales &amp; more!
            </p>

            {status === "success" ? (
              <p className="mt-6 rounded-full bg-[var(--color-coral)] py-3 text-center text-[14px] font-semibold text-white">
                You&apos;re in! Welcome to the hive 🐝
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-[13px] outline-none transition-colors focus:border-[var(--color-coral)] focus:ring-2 focus:ring-[var(--color-coral)]/20"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-[var(--color-coral)] px-7 py-3 text-[13px] font-bold text-white transition-all hover:bg-[var(--color-coral-dark)] disabled:opacity-60"
                >
                  {status === "loading" ? "Joining…" : "JOIN NOW"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-[12px] text-red-500">Something went wrong. Please try again!</p>
            )}
            <p className="mt-3 text-[11px] text-[var(--color-secondary)]">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* Right — Social follow */}
          <div className="lg:pl-10">
            <h3 className="text-[14px] font-black uppercase tracking-widest text-[var(--color-ink)]">
              FOLLOW US
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_ICONS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-secondary)] shadow-sm transition-all hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] hover:shadow-md"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

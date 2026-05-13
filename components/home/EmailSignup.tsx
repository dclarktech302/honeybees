"use client"

import { useState } from "react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )

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
    <section className="bg-[var(--color-cream)] py-16">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black text-[var(--color-ink)]">
          Join the Hive! 🐝
        </h2>
        <p className="mt-2 text-[15px] text-[var(--color-secondary)]">
          Be the first to know about new arrivals, sales &amp; more!
        </p>

        {status === "success" ? (
          <p className="mt-8 rounded-full bg-[var(--color-honey)]/10 py-3 text-[15px] font-semibold text-[var(--color-honey)]">
            You&apos;re in! Welcome to the hive 🐝
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full flex-1 rounded-full border border-[var(--color-border-soft)] bg-white px-5 py-3 text-[14px] outline-none transition-colors placeholder:text-[var(--color-secondary)] focus:border-[var(--color-honey)] focus:ring-2 focus:ring-[var(--color-honey)]/20"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[var(--color-honey)] px-7 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[var(--color-honey-dark)] disabled:opacity-60 sm:w-auto"
            >
              {status === "loading" ? "Joining…" : "Join Now"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-[13px] text-red-500">
            Something went wrong. Please try again!
          </p>
        )}

        <p className="mt-3 text-[12px] text-[var(--color-secondary)]">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

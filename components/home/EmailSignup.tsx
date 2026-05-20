"use client"

import { useState } from "react"

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    href: "#",
    bg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    bg: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    bg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.83a8.19 8.19 0 0 0 4.79 1.53V6.91a4.85 4.85 0 0 1-1.02-.22z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    bg: "#E60023",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@honeybeedesigns.com",
    bg: "var(--color-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden>
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
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "0" }}
        >
          {/* Left — email signup */}
          <div style={{ paddingRight: "clamp(0px, 5vw, 48px)" }}>
            {/* TODO: bee holding envelope illustration */}
            <div style={{ fontSize: "40px", color: "var(--color-primary)", marginBottom: "16px" }}>✉</div>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "var(--color-black)" }}>
              ♥ JOIN THE HIVE!
            </h2>
            <p style={{ fontSize: "13px", color: "var(--color-gray)", marginTop: "8px", marginBottom: "24px" }}>
              Be the first to know about new arrivals, sales &amp; more!
            </p>

            {status === "success" ? (
              <p
                className="text-center font-semibold text-white"
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "9999px",
                  padding: "12px",
                  fontSize: "14px",
                }}
              >
                You&apos;re in! Welcome to the hive 🐝
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row"
                style={{ gap: "0" }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 outline-none transition-colors"
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "9999px",
                    padding: "10px 18px",
                    fontSize: "13px",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-primary)" }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-border)" }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="font-bold text-white transition-colors disabled:opacity-60"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    padding: "10px 20px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    marginLeft: "8px",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-primary-dark)" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-primary)" }}
                >
                  {status === "loading" ? "Joining…" : "JOIN NOW"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p style={{ marginTop: "8px", fontSize: "12px", color: "#ef4444" }}>
                Something went wrong. Please try again!
              </p>
            )}
          </div>

          {/* Right — social follow */}
          <div
            className="lg:border-l mt-8 lg:mt-0"
            style={{
              borderColor: "var(--color-border)",
              paddingLeft: "clamp(0px, 5vw, 48px)",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "var(--color-primary)",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              FOLLOW US
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {SOCIAL_ICONS.map(({ label, href, bg, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center text-white transition-all"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: bg,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.opacity = "0.85"
                    el.style.transform = "scale(1.05)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.opacity = "1"
                    el.style.transform = "scale(1)"
                  }}
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

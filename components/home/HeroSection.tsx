"use client"

import Link from "next/link"
import type { Variants } from "motion/react"
import { motion } from "motion/react"

const BADGES = [
  { text: "Bee Kind",            top: "10%",  right: "-5%",  rotate: "8deg",   delay: 0 },
  { text: "You Are My Sunshine", top: "42%",  right: "-10%", rotate: "-5deg",  delay: 0.3 },
  { text: "good things take time",bottom: "20%",right: "-4%",rotate: "4deg",   delay: 0.6 },
  { text: "Radiate Kindness",    bottom: "6%",  left: "8%",  rotate: "-6deg",  delay: 0.9 },
]

const WORD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.13, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

const H1_LINES = [
  { text: "CUTE. CUSTOM.", coral: false },
  { text: "MADE",          coral: true  },
  { text: "TO MAKE YOU",   coral: false },
  { text: "SMILE! ♥ ♥",   coral: true  },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden"
      style={{ backgroundColor: "var(--color-topbar)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-20">

        {/* ── Left (60%) ── */}
        <div className="flex-[3] space-y-5">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block rounded-full bg-[var(--color-coral)] px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-white">
              MADE JUST FOR YOU!
            </span>
          </motion.div>

          {/* H1 */}
          <h1 className="space-y-1 font-black leading-tight tracking-tight">
            {H1_LINES.map(({ text, coral }, i) => (
              <motion.span
                key={text}
                custom={i}
                variants={WORD_VARIANTS}
                initial="hidden"
                animate="visible"
                className="block"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  color: coral ? "var(--color-coral)" : "var(--color-ink)",
                  lineHeight: 1.05,
                }}
              >
                {text}
              </motion.span>
            ))}
          </h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.45 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:bg-[oklch(0.2_0_0)] hover:scale-[1.03] active:scale-[0.98]"
            >
              SHOP NOW ♥
            </Link>
          </motion.div>
        </div>

        {/* ── Right (40%) ── */}
        <div className="relative w-full flex-[2]">
          <div className="relative min-h-[400px] rounded-2xl border-2 border-[var(--color-border)] bg-white shadow-sm">
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="text-6xl">🐝</span>
              <p className="text-[12px] text-[var(--color-secondary)]">
                {/* TODO: replace with real product photos from Drive */}
                Product collage coming soon
              </p>
            </div>
          </div>

          {/* Floating design badges */}
          {BADGES.map(({ text, delay, ...style }) => (
            <motion.div
              key={text}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
                delay,
              }}
              className="absolute hidden rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[var(--color-coral)] shadow-md ring-1 ring-[var(--color-border)] lg:block"
              style={style as React.CSSProperties}
            >
              {text}
            </motion.div>
          ))}

          {/* Bottom-right custom designs badge */}
          <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 items-center justify-center rounded-full bg-[var(--color-coral)] p-2 text-center text-[9px] font-bold uppercase leading-tight text-white shadow-lg lg:flex">
            CUSTOM DESIGNS, NAMES, PHOTOS & MORE!
          </div>
        </div>
      </div>
    </section>
  )
}

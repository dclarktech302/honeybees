"use client"

import type { Variants } from "motion/react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const BADGES = [
  { text: "Bee Kind",           style: { top: "12%",  right: "-8%",  rotate: "8deg"  } },
  { text: "Radiate Kindness",   style: { top: "48%",  right: "-12%", rotate: "-5deg" } },
  { text: "You Are My Sunshine",style: { bottom: "15%",right: "-6%", rotate: "4deg"  } },
]

const WORD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

// easeInOut as cubic-bezier — Motion 12 requires Easing type, not plain strings
const FLOAT_VARIANTS = (delay: number) => ({
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
      delay,
    },
  },
})

const H1_WORDS = [
  { text: "Cute. Custom.", gold: true },
  { text: "Made to Make",  gold: false },
  { text: "You Smile!",    gold: false },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--color-cream)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-24">
        {/* ── Left (60%) ── */}
        <div className="flex-[3] space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[13px] font-semibold uppercase tracking-widest text-[var(--color-honey)]"
          >
            Custom Designs, Names, Photos &amp; More!
          </motion.p>

          <h1 className="space-y-1 text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight tracking-tight">
            {H1_WORDS.map(({ text, gold }, i) => (
              <motion.span
                key={text}
                custom={i}
                variants={WORD_VARIANTS}
                initial="hidden"
                animate="visible"
                className={`block ${gold ? "text-[var(--color-honey)]" : "text-[var(--color-ink)]"}`}
              >
                {text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[16px] text-[var(--color-secondary)]"
          >
            Handmade with love, shipped with care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.45 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--color-honey)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[var(--color-honey-dark)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Shop Now ❤
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-[var(--color-ink)] underline decoration-[var(--color-honey)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-honey)]"
            >
              See Custom Orders <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* ── Right (40%) ── */}
        <div className="relative flex-[2]">
          {/* Placeholder product showcase */}
          <div className="relative min-h-[400px] rounded-2xl border-2 border-[var(--color-border-soft)] bg-white shadow-sm">
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="text-5xl">🐝</span>
              <p className="text-[13px] text-[var(--color-secondary)]">
                {/* TODO: replace with product images from Drive */}
                Product images coming soon
              </p>
            </div>

            {/* Floating design badges */}
            {BADGES.map(({ text, style }, i) => (
              <motion.div
                key={text}
                {...FLOAT_VARIANTS(i * 0.3)}
                className="absolute hidden rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[var(--color-honey)] shadow-md ring-1 ring-[var(--color-border-soft)] lg:block"
                style={style as React.CSSProperties}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[var(--color-honey-light)] opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[var(--color-honey-light)] opacity-15 blur-3xl"
      />
    </section>
  )
}

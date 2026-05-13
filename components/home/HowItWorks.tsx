"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ShoppingBag, Upload, Package } from "lucide-react"

const STEPS = [
  {
    number: 1,
    Icon: ShoppingBag,
    title: "Choose Your Product & Add to Cart",
    description: "Browse our collections and pick what you love.",
  },
  {
    number: 2,
    Icon: Upload,
    title: "Upload Your Image or Design at Checkout",
    description: "Share your ideas, text, colors, or inspiration.",
  },
  {
    number: 3,
    Icon: Package,
    title: "We Print, Pack & Ship Your Order with Love!",
    description: "We make any tweaks until it's perfect for you!",
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="bg-[var(--color-cream)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-[var(--color-ink)]">
            Custom is Easy as 1-2-3!
          </h2>
        </div>

        <div ref={ref} className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
          {STEPS.map(({ number, Icon, title, description }, i) => (
            <div key={number} className="relative flex flex-1 flex-col items-center text-center">
              {/* Dashed connector line (desktop only, between steps) */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(50%+48px)] top-10 hidden h-px w-[calc(100%-96px)] border-t-2 border-dashed border-[var(--color-honey)] opacity-50 lg:block"
                />
              )}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.18, ease: "easeOut" }}
                className="flex flex-col items-center gap-4"
              >
                {/* Number circle */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-honey)] shadow-md">
                  <span className="text-2xl font-black text-white">{number}</span>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-honey)]/10">
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--color-honey)" }}
                    strokeWidth={1.75}
                  />
                </div>

                <div className="max-w-[220px]">
                  <p className="text-[15px] font-semibold text-[var(--color-ink)]">
                    {title}
                  </p>
                  <p className="mt-1 text-[13px] text-[var(--color-secondary)]">
                    {description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

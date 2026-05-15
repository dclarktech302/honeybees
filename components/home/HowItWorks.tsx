"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ShoppingCart, Upload, Truck } from "lucide-react"

const STEPS = [
  {
    number: 1,
    Icon: ShoppingCart,
    title: "CHOOSE YOUR PRODUCT & ADD TO CART",
  },
  {
    number: 2,
    Icon: Upload,
    title: "UPLOAD YOUR IMAGE OR DESIGN AT CHECKOUT",
  },
  {
    number: 3,
    Icon: Truck,
    title: "WE PRINT, PACK & SHIP YOUR ORDER WITH LOVE!",
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-[28px] font-black text-[var(--color-ink)]">
          ♥ CUSTOM IS EASY AS 1-2-3! ♥
        </h2>

        <div ref={ref} className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
          {STEPS.map(({ number, Icon, title }, i) => (
            <div key={number} className="relative flex flex-1 flex-col items-center text-center">

              {/* Arrow connector (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(50%+56px)] top-7 hidden text-3xl font-black text-[var(--color-coral)] lg:block"
                  style={{ transform: "translateY(-50%)" }}
                >
                  →
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4"
              >
                {/* Number circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-coral)] shadow-md">
                  <span className="text-xl font-black text-white">{number}</span>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-coral-light)] bg-[var(--color-topbar)]">
                  <Icon className="h-5 w-5 text-[var(--color-coral)]" strokeWidth={1.75} />
                </div>

                <p className="max-w-[200px] text-[13px] font-bold uppercase tracking-wide text-[var(--color-ink)]">
                  {title}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

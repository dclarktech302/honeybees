"use client"

import { ShoppingCart, Upload, Truck } from "lucide-react"

const STEPS = [
  {
    number: 1,
    Icon: ShoppingCart,
    label: "CHOOSE YOUR PRODUCT & ADD TO CART",
  },
  {
    number: 2,
    Icon: Upload,
    label: "UPLOAD YOUR IMAGE OR DESIGN AT CHECKOUT",
  },
  {
    number: 3,
    Icon: Truck,
    label: "WE PRINT, PACK & SHIP YOUR ORDER WITH LOVE!",
  },
]

export function HowItWorks() {
  return (
    <section style={{ backgroundColor: "var(--color-surface)", padding: "64px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <h2
          className="text-center font-bold"
          style={{ fontSize: "24px", color: "var(--color-black)", marginBottom: "48px" }}
        >
          ♥ CUSTOM IS EASY AS 1-2-3! ♥
        </h2>

        {/* Steps row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
          {STEPS.map(({ number, Icon, label }, i) => (
            <div key={number} className="flex flex-col md:flex-row items-center">
              {/* Step */}
              <div
                className="flex flex-col items-center text-center"
                style={{ width: "200px" }}
              >
                {/* Number circle — gold banner background */}
                <div
                  className="flex items-center justify-center font-black"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-gold-banner)",
                    color: "var(--color-black)",
                    fontSize: "20px",
                    marginBottom: "12px",
                  }}
                >
                  {number}
                </div>

                {/* Icon */}
                <Icon
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "var(--color-black)",
                    marginBottom: "32px",
                  }}
                />

                {/* Label */}
                <p
                  className="font-bold uppercase"
                  style={{
                    fontSize: "12px",
                    color: "var(--color-black)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.4,
                    maxWidth: "160px",
                  }}
                >
                  {label}
                </p>
              </div>

              {/* Desktop arrow */}
              {i < STEPS.length - 1 && (
                <span
                  className="hidden md:block"
                  style={{
                    fontSize: "28px",
                    color: "var(--color-primary)",
                    alignSelf: "flex-start",
                    marginTop: "56px",
                    padding: "0 16px",
                    lineHeight: 1,
                  }}
                  aria-hidden
                >
                  →
                </span>
              )}

              {/* Mobile arrow */}
              {i < STEPS.length - 1 && (
                <span
                  className="block md:hidden"
                  style={{
                    fontSize: "28px",
                    color: "var(--color-primary)",
                    margin: "8px 0",
                    lineHeight: 1,
                  }}
                  aria-hidden
                >
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

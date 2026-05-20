"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface)",
        minHeight: "420px",
      }}
    >
      <div
        className="flex flex-col md:flex-row"
        style={{ minHeight: "420px" }}
      >
        {/* ── Left (~42%) ── */}
        <div
          className="flex flex-col justify-center"
          style={{
            width: "100%",
            paddingLeft: "clamp(24px, 5vw, 64px)",
            paddingRight: "clamp(16px, 3vw, 40px)",
            paddingTop: "40px",
            paddingBottom: "40px",
            flex: "0 0 42%",
          }}
        >
          {/* Eyebrow pill */}
          <span
            className="inline-block mb-3 font-bold text-white"
            style={{
              backgroundColor: "var(--color-primary)",
              borderRadius: "9999px",
              padding: "4px 14px",
              fontSize: "11px",
              letterSpacing: "0.05em",
            }}
          >
            MADE JUST FOR YOU!
          </span>

          {/* H1 */}
          <h1 style={{ lineHeight: 1.05, margin: 0 }}>
            <span
              className="block"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "var(--color-black)",
              }}
            >
              Cute. Custom.
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(56px, 8vw, 96px)",
                fontWeight: 900,
                color: "var(--color-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              MADE
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 800,
                color: "var(--color-black)",
              }}
            >
              TO MAKE YOU
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 900,
                color: "var(--color-primary)",
              }}
            >
              SMILE! ♥ ♥
            </span>
          </h1>

          {/* CTA */}
          <div style={{ marginTop: "24px" }}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
              style={{
                backgroundColor: "var(--color-black)",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontSize: "14px",
              }}
            >
              SHOP NOW ♥
            </Link>
          </div>
        </div>

        {/* ── Right (~58%) ── */}
        <div
          className="relative flex items-center justify-center"
          style={{
            flex: "0 0 58%",
            backgroundColor: "var(--color-surface)",
            overflow: "hidden",
            minHeight: "380px",
          }}
        >
          {/* Product collage placeholder */}
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{
              width: "90%",
              height: "380px",
              backgroundColor: "#FFF5F5",
              color: "var(--color-gray)",
              fontSize: "13px",
            }}
          >
            {/* TODO: Replace with real product photos from Drive */}
            {/* Mockup shows: pink tumbler center, white pillow right, */}
            {/*   keychain right, mug lower center, all with sunflower/floral */}
            {/*   illustrations overlaid */}
            Product showcase — photos coming soon
          </div>

          {/* Floating circle badge — top right of collage */}
          <div
            className="absolute flex flex-col items-center justify-center text-center text-white"
            style={{
              top: "20px",
              right: "20px",
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              backgroundColor: "var(--color-primary)",
              padding: "12px",
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 800, lineHeight: 1.2 }}>CUSTOM</span>
            <span style={{ fontSize: "11px", lineHeight: 1.2 }}>DESIGNS,</span>
            <span style={{ fontSize: "10px", lineHeight: 1.2 }}>NAMES, PHOTOS</span>
            <span style={{ fontSize: "11px", fontWeight: 700, lineHeight: 1.2 }}>&amp; MORE!</span>
          </div>

          {/* TODO: add once real photos are in place */}
          {/* Floating design text badges (desktop only) */}
          {/*
          <div className="absolute hidden lg:block" style={{ top: "30%", left: "5%" }}>
            <span style={{ fontSize: "18px", fontStyle: "italic", color: "var(--color-black)" }}>Bee Kind</span>
          </div>
          <div className="absolute hidden lg:block" style={{ top: "20%", right: "20%" }}>
            <span style={{ fontSize: "16px", color: "var(--color-black)" }}>You Are My Sunshine</span>
          </div>
          <div className="absolute hidden lg:block" style={{ bottom: "30%", left: "10%" }}>
            <span style={{ fontSize: "14px", fontStyle: "italic", color: "var(--color-black)" }}>good things take time</span>
          </div>
          <div className="absolute hidden lg:block" style={{ bottom: "20%", right: "15%" }}>
            <span style={{ fontSize: "15px", color: "var(--color-black)" }}>Radiate Kindness</span>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"

// Set to true once Sarah provides the 7 hero images in /public/images/hero/
const hasImages = false

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
          {/* Eyebrow pill with floating hearts */}
          <div className="relative inline-block mb-3" style={{ alignSelf: "flex-start" }}>
            <span
              className="inline-block font-bold text-white"
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
            {/* Floating mini-hearts */}
            <span
              aria-hidden
              className="absolute"
              style={{ top: "-8px", right: "-10px", fontSize: "10px", color: "var(--color-primary)" }}
            >
              🤍
            </span>
            <span
              aria-hidden
              className="absolute"
              style={{ bottom: "-8px", left: "-8px", fontSize: "8px", color: "var(--color-primary)" }}
            >
              🤍
            </span>
          </div>

          {/* H1 */}
          <h1 style={{ lineHeight: 1.05, margin: 0 }}>
            <span
              className="block"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "var(--color-black)",
                fontFamily: "var(--font-montserrat)",
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
                fontFamily: "var(--font-montserrat)",
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
                fontFamily: "var(--font-montserrat)",
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
                fontFamily: "var(--font-montserrat)",
              }}
            >
              SMILE! 🤍 🤍
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
              SHOP NOW 🤍
            </Link>
          </div>
        </div>

        {/* ── Right (~58%) — hero image slots ── */}
        <div
          className="relative flex items-center justify-center"
          style={{
            flex: "0 0 58%",
            backgroundColor: "var(--color-cream)",
            overflow: "hidden",
            minHeight: "380px",
          }}
        >
          {hasImages ? (
            <>
              {/*
               * Slot: tumbler
               * File: /public/images/hero/tumbler.png
               * Pink tumbler with sunflower design — center-left of collage
               */}
              <div
                data-slot="tumbler"
                className="absolute"
                style={{ bottom: "10%", left: "20%", width: "160px", height: "200px" }}
              >
                {/* TODO: <img src="/images/hero/tumbler.png" alt="Custom tumbler" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>

              {/*
               * Slot: pillow
               * File: /public/images/hero/pillow.png
               * White pillow with floral design — right side
               */}
              <div
                data-slot="pillow"
                className="absolute"
                style={{ top: "10%", right: "12%", width: "140px", height: "140px" }}
              >
                {/* TODO: <img src="/images/hero/pillow.png" alt="Custom pillow" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>

              {/*
               * Slot: keychain
               * File: /public/images/hero/keychain.png
               * Small keychain — right side, below pillow
               */}
              <div
                data-slot="keychain"
                className="absolute"
                style={{ top: "55%", right: "10%", width: "80px", height: "100px" }}
              >
                {/* TODO: <img src="/images/hero/keychain.png" alt="Custom keychain" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>

              {/*
               * Slot: mug
               * File: /public/images/hero/mug.png
               * Mug with custom design — lower center
               */}
              <div
                data-slot="mug"
                className="absolute"
                style={{ bottom: "8%", left: "48%", width: "120px", height: "120px" }}
              >
                {/* TODO: <img src="/images/hero/mug.png" alt="Custom mug" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>

              {/*
               * Slot: floral-left
               * File: /public/images/hero/floral-left.png
               * Floral/botanical illustration — left edge overlay
               */}
              <div
                data-slot="floral-left"
                className="absolute"
                style={{ top: "0", left: "0", width: "120px", height: "200px" }}
              >
                {/* TODO: <img src="/images/hero/floral-left.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>

              {/*
               * Slot: floral-right
               * File: /public/images/hero/floral-right.png
               * Floral illustration — bottom-right corner overlay
               */}
              <div
                data-slot="floral-right"
                className="absolute"
                style={{ bottom: "0", right: "0", width: "120px", height: "160px" }}
              >
                {/* TODO: <img src="/images/hero/floral-right.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>

              {/*
               * Slot: floral-top-right
               * File: /public/images/hero/floral-top-right.png
               * Small floral sprig — top-right accent
               */}
              <div
                data-slot="floral-top-right"
                className="absolute"
                style={{ top: "0", right: "0", width: "80px", height: "80px" }}
              >
                {/* TODO: <img src="/images/hero/floral-top-right.png" alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain" }} /> */}
              </div>
            </>
          ) : (
            /* Placeholder shown until Sarah provides images */
            <div
              className="flex flex-col items-center justify-center rounded-2xl text-center"
              style={{
                width: "90%",
                height: "380px",
                backgroundColor: "#FFF5F5",
                color: "var(--color-gray)",
                fontSize: "13px",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "32px" }}>🐝</span>
              <p style={{ fontWeight: 600 }}>Product photos coming soon!</p>
              <p style={{ fontSize: "11px" }}>
                7 image slots ready · tumbler · pillow · keychain · mug · 3 florals
              </p>
            </div>
          )}

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
        </div>
      </div>
    </section>
  )
}

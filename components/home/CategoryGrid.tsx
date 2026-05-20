"use client"

import Link from "next/link"
import { ImageIcon } from "lucide-react"

const CATEGORIES = [
  { name: "APPAREL",           handle: "apparel" },
  { name: "DRINKWARE",         handle: "drinkware" },
  { name: "TOTE BAGS",         handle: "tote-bags" },
  { name: "KEYCHAINS",         handle: "keychains" },
  { name: "DECALS & STICKERS", handle: "stickers-decals" },
  { name: "HOME DECOR",        handle: "home-lifestyle" },
  { name: "CUSTOM ITEMS",      handle: "custom-items" },
  { name: "GIFTS",             handle: "gift-ideas" },
  { name: "NEW ARRIVALS",      handle: "new-arrivals" },
]

function CategoryTile({ name, handle }: { name: string; handle: string }) {
  return (
    <Link
      href={`/shop/${handle}`}
      className="group flex-shrink-0"
      style={{
        width: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      {/* Image area */}
      <div
        className="transition-all duration-200 group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "12px",
          backgroundColor: "var(--color-gray-light)",
          border: "1.5px solid var(--color-border)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* TODO: replace with category product image */}
        <ImageIcon
          className="h-8 w-8"
          style={{ color: "var(--color-gray)" }}
        />
      </div>

      {/* Label */}
      <span
        className="group-hover:text-[var(--color-primary)] transition-colors"
        style={{
          marginTop: "8px",
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--color-black)",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.03em",
        }}
      >
        {name}
      </span>
    </Link>
  )
}

export function CategoryGrid() {
  return (
    <section style={{ backgroundColor: "var(--color-bg)", padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <div
          className="flex items-center justify-center"
          style={{ marginBottom: "32px" }}
        >
          <h2
            className="font-extrabold text-center"
            style={{ fontSize: "24px", color: "var(--color-black)", margin: 0, fontFamily: "var(--font-montserrat)" }}
          >
            🤍 SHOP BY CATEGORY 🤍
          </h2>
        </div>

        {/* Horizontal scroll row */}
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "12px",
            padding: "0 24px 16px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {CATEGORIES.map(({ name, handle }) => (
            <CategoryTile key={handle} name={name} handle={handle} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
          <Link
            href="/shop"
            className="font-bold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            style={{
              backgroundColor: "var(--color-primary)",
              padding: "10px 28px",
              borderRadius: "9999px",
              fontSize: "13px",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            SHOP ALL COLLECTIONS
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react"
import { useCartStore } from "@/store/cart"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "HOME",              href: "/" },
  { label: "SHOP ALL",          href: "/shop" },
  { label: "CUSTOM APPAREL",    href: "/shop/custom-apparel" },
  { label: "DRINKWARE",         href: "/shop/drinkware" },
  { label: "ACCESSORIES",       href: "/shop/accessories" },
  { label: "HOME & LIFESTYLE",  href: "/shop/home-lifestyle" },
  { label: "STICKERS & DECALS", href: "/shop/stickers-decals" },
  { label: "NEW ARRIVALS",      href: "/shop/new-arrivals" },
  { label: "GIFT IDEAS",        href: "/shop/gift-ideas" },
  { label: "SALE",              href: "/shop/sale", sale: true },
  { label: "ABOUT US",          href: "/about" },
  { label: "CONTACT",           href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { items, openCart } = useCartStore()
  const itemCount = items.reduce((s, i) => s + i.quantity, 0)

  return (
    <header
      className="sticky top-0 z-40 w-full border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Row 1: Hamburger · Search · Logo · Icons ── */}
      <div
        className="grid px-6"
        style={{
          height: "80px",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left: hamburger + search */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle navigation"
            className="rounded-full p-2 transition-colors hover:bg-[var(--color-topbar-bg)] lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen
              ? <X className="h-5 w-5" style={{ color: "var(--color-black)" }} />
              : <Menu className="h-5 w-5" style={{ color: "var(--color-black)" }} />
            }
          </button>

          {/* Search bar */}
          <div className="relative hidden sm:flex" style={{ width: "220px" }}>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search custom designs..."
              className="w-full rounded-full border py-2 pl-4 pr-10 text-[13px] outline-none transition-colors placeholder:text-[var(--color-gray)]"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-primary)" }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--color-border)" }}
            />
            <button
              aria-label="Search"
              className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors"
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "var(--color-primary)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-primary-dark)" }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--color-primary)" }}
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex flex-col items-center leading-none" aria-label="HoneyBee Designs home">
            {/* TODO: swap with real logo PNG from Drive */}
            {/* <img src="/images/logo.png" height="70" alt="HoneyBee Designs" /> */}
            <span
              className="block font-black tracking-tight"
              style={{ fontSize: "28px", color: "var(--color-gold)" }}
            >
              HONEYBEE
            </span>
            <span
              className="block italic tracking-widest"
              style={{
                fontSize: "20px",
                fontWeight: 400,
                color: "var(--color-black)",
                marginTop: "-4px",
                display: "block",
              }}
            >
              designs
            </span>
          </Link>
        </div>

        {/* Right: Account · Wishlist · Cart */}
        <div className="flex items-center justify-end gap-6">
          <button
            aria-label="Account"
            className="hidden flex-col items-center gap-1 transition-opacity hover:opacity-70 sm:flex"
          >
            <User className="h-5 w-5" style={{ color: "var(--color-black)" }} />
            <span className="text-[10px]" style={{ color: "var(--color-gray)" }}>Account</span>
          </button>

          <button
            aria-label="Wishlist"
            className="hidden flex-col items-center gap-1 transition-opacity hover:opacity-70 sm:flex"
          >
            <Heart className="h-5 w-5" style={{ color: "var(--color-black)" }} />
            <span className="text-[10px]" style={{ color: "var(--color-gray)" }}>Wishlist</span>
          </button>

          <button
            aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
            onClick={openCart}
            className="relative flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
          >
            <div className="relative">
              <ShoppingCart className="h-5 w-5" style={{ color: "var(--color-black)" }} />
              <span
                className="absolute -right-2 -top-2 flex items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#3B82F6",
                }}
              >
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            </div>
            <span className="text-[10px]" style={{ color: "var(--color-gray)" }}>Cart</span>
          </button>
        </div>
      </div>

      {/* ── Row 2: Nav (desktop) ── */}
      <nav
        className="hidden border-t lg:block"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)", height: "40px" }}
      >
        <ul
          className="flex items-center justify-center h-full"
          style={{ maxWidth: "1200px", margin: "0 auto", gap: "2rem", padding: "0 24px" }}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-block py-0 text-[12px] font-medium tracking-[0.05em] uppercase transition-colors whitespace-nowrap",
                    link.sale
                      ? "text-[var(--color-primary)]"
                      : active
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-black)] hover:text-[var(--color-primary)]",
                    active && "after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-[var(--color-primary)] after:content-['']"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <nav
          className="border-t px-4 py-3 lg:hidden"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
        >
          <div className="relative mb-3">
            <input
              type="search"
              placeholder="Search custom designs..."
              className="w-full rounded-full border py-2 pl-4 pr-10 text-[13px] outline-none focus:border-[var(--color-primary)]"
              style={{ borderColor: "var(--color-border)" }}
            />
            <button
              className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full text-white"
              style={{ width: "28px", height: "28px", backgroundColor: "var(--color-primary)" }}
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-[13px] font-medium tracking-wide uppercase transition-colors",
                    link.sale
                      ? "text-[var(--color-primary)]"
                      : pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-black)] hover:bg-[var(--color-topbar-bg)]"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

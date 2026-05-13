"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react"
import { useCartStore } from "@/store/cart"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Custom Apparel", href: "/shop/custom-apparel" },
  { label: "Drinkware", href: "/shop/drinkware" },
  { label: "Accessories", href: "/shop/accessories" },
  { label: "Home & Lifestyle", href: "/shop/home-lifestyle" },
  { label: "Stickers & Decals", href: "/shop/stickers-decals" },
  { label: "New Arrivals", href: "/shop/new-arrivals" },
  { label: "Gift Ideas", href: "/shop/gift-ideas" },
  { label: "Sale", href: "/shop/sale", sale: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { items, openCart } = useCartStore()
  const itemCount = items.reduce((s, i) => s + i.quantity, 0)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border-soft)] bg-white shadow-sm">
      {/* ── Row 1: Logo · Search · Icons ── */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 leading-none">
          <span className="block text-xl font-black uppercase tracking-tight text-[var(--color-honey)]">
            HoneyBee
          </span>
          <span className="block text-[11px] font-light tracking-[0.2em] text-[var(--color-ink)] uppercase -mt-0.5">
            designs
          </span>
        </Link>

        {/* Search — hidden on small screens */}
        <div className="mx-auto hidden max-w-md flex-1 sm:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-secondary)]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search custom designs..."
              className="w-full rounded-full border border-[var(--color-border-soft)] bg-[var(--color-cream)] py-2 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-[var(--color-secondary)] focus:border-[var(--color-honey)] focus:ring-1 focus:ring-[var(--color-honey)]"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="ml-auto flex items-center gap-1 sm:ml-0">
          <button
            aria-label="Account"
            className="rounded-full p-2 transition-colors hover:bg-[var(--color-cream)]"
          >
            <User className="h-5 w-5 text-[var(--color-ink)]" />
          </button>
          <button
            aria-label="Wishlist"
            className="rounded-full p-2 transition-colors hover:bg-[var(--color-cream)]"
          >
            <Heart className="h-5 w-5 text-[var(--color-ink)]" />
          </button>
          <button
            aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
            onClick={openCart}
            className="relative rounded-full p-2 transition-colors hover:bg-[var(--color-cream)]"
          >
            <ShoppingCart className="h-5 w-5 text-[var(--color-ink)]" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-honey)] text-[10px] font-bold text-white">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>
          {/* Mobile hamburger */}
          <button
            aria-label="Toggle navigation"
            className="rounded-full p-2 transition-colors hover:bg-[var(--color-cream)] lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Row 2: Nav links (desktop) ── */}
      <nav className="hidden border-t border-[var(--color-border-soft)] lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 py-0.5">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-block px-3 py-2.5 text-[13px] font-medium transition-colors",
                    link.sale
                      ? "text-[var(--color-honey)]"
                      : active
                      ? "text-[var(--color-honey)]"
                      : "text-[var(--color-ink)] hover:text-[var(--color-honey)]",
                    active &&
                      "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-[var(--color-honey)] after:content-['']"
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
        <nav className="border-t border-[var(--color-border-soft)] bg-white px-4 py-3 lg:hidden">
          {/* Mobile search */}
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-secondary)]" />
            <input
              type="search"
              placeholder="Search custom designs..."
              className="w-full rounded-full border border-[var(--color-border-soft)] bg-[var(--color-cream)] py-2 pl-9 pr-4 text-sm outline-none focus:border-[var(--color-honey)]"
            />
          </div>
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    link.sale
                      ? "text-[var(--color-honey)]"
                      : pathname === link.href
                      ? "bg-[var(--color-cream)] text-[var(--color-honey)]"
                      : "text-[var(--color-ink)] hover:bg-[var(--color-cream)]"
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

"use client"

import Link from "next/link"
import Image from "next/image"
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
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-white shadow-sm">
      {/* ── Row 1: Hamburger · Search · Logo · Icons ── */}
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">

        {/* Left: hamburger (mobile) + search */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle navigation"
            className="rounded-full p-2 transition-colors hover:bg-[var(--color-topbar)] lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Search bar */}
          <div className="relative hidden max-w-xs flex-1 sm:flex">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search custom designs..."
              className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-topbar)] py-2 pl-4 pr-10 text-[13px] outline-none transition-colors placeholder:text-[var(--color-secondary)] focus:border-[var(--color-coral)] focus:ring-1 focus:ring-[var(--color-coral)]"
            />
            <button
              aria-label="Search"
              className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-coral)] text-white transition-colors hover:bg-[var(--color-coral-dark)]"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex flex-col items-center leading-none">
            {/* TODO: swap with real logo PNG from Drive */}
            <span className="block text-xl font-black tracking-tight text-[var(--color-honey)]">
              HONEYBEE
            </span>
            <span className="block text-[11px] font-light italic tracking-widest text-[var(--color-ink)] -mt-0.5">
              designs
            </span>
          </Link>
        </div>

        {/* Right: Account · Wishlist · Cart */}
        <div className="flex items-center justify-end gap-1 sm:gap-3">
          <button
            aria-label="Account"
            className="hidden flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-[var(--color-topbar)] sm:flex"
          >
            <User className="h-5 w-5 text-[var(--color-ink)]" />
            <span className="text-[10px] font-medium text-[var(--color-ink)]">Account</span>
          </button>
          <button
            aria-label="Wishlist"
            className="hidden flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-[var(--color-topbar)] sm:flex"
          >
            <Heart className="h-5 w-5 text-[var(--color-ink)]" />
            <span className="text-[10px] font-medium text-[var(--color-ink)]">Wishlist</span>
          </button>
          <button
            aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
            onClick={openCart}
            className="relative flex flex-col items-center gap-0.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-[var(--color-topbar)]"
          >
            <div className="relative">
              <ShoppingCart className="h-5 w-5 text-[var(--color-ink)]" />
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-coral)] text-[9px] font-bold text-white">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            </div>
            <span className="text-[10px] font-medium text-[var(--color-ink)]">Cart</span>
          </button>
        </div>
      </div>

      {/* ── Row 2: Nav links (desktop) ── */}
      <nav className="hidden border-t border-[var(--color-border)] lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-0 px-4 py-0">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative inline-block px-2.5 py-2.5 text-[12px] font-medium tracking-wide transition-colors",
                    link.sale
                      ? "text-[var(--color-coral)]"
                      : active
                      ? "text-[var(--color-coral)]"
                      : "text-[var(--color-ink)] hover:text-[var(--color-coral)]",
                    active &&
                      "after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:rounded-full after:bg-[var(--color-coral)] after:content-['']"
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
        <nav className="border-t border-[var(--color-border)] bg-white px-4 py-3 lg:hidden">
          <div className="relative mb-3">
            <input
              type="search"
              placeholder="Search custom designs..."
              className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-topbar)] py-2 pl-4 pr-10 text-sm outline-none focus:border-[var(--color-coral)]"
            />
            <button className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-coral)] text-white">
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-[13px] font-medium tracking-wide transition-colors",
                    link.sale
                      ? "text-[var(--color-coral)]"
                      : pathname === link.href
                      ? "bg-[var(--color-topbar)] text-[var(--color-coral)]"
                      : "text-[var(--color-ink)] hover:bg-[var(--color-topbar)]"
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

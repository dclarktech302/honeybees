import Link from "next/link"
import { Globe, Share2 } from "lucide-react"

const SHOP_LINKS = [
  { label: "All Products", href: "/shop" },
  { label: "Custom Apparel", href: "/shop/custom-apparel" },
  { label: "Drinkware", href: "/shop/drinkware" },
  { label: "Accessories", href: "/shop/accessories" },
  { label: "Home & Lifestyle", href: "/shop/home-lifestyle" },
  { label: "Stickers & Decals", href: "/shop/stickers-decals" },
  { label: "New Arrivals", href: "/shop/new-arrivals" },
]

const HELP_LINKS = [
  { label: "FAQ", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Order Tracking", href: "#" },
  { label: "Care Instructions", href: "#" },
  { label: "Size Charts", href: "#" },
]

const ABOUT_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Reviews", href: "#" },
  { label: "Wholesale", href: "#" },
  { label: "Custom Orders", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
]

const PAYMENT_METHODS = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"]

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-soft)] bg-[var(--color-cream)]">
      {/* ── 4-column grid ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block leading-none">
              <span className="block text-xl font-black uppercase tracking-tight text-[var(--color-honey)]">
                HoneyBee
              </span>
              <span className="block text-[11px] font-light tracking-[0.2em] uppercase text-[var(--color-ink)] -mt-0.5">
                designs
              </span>
            </Link>
            <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
              Cute. Custom. Made for you!
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-secondary)]">
              Thank you for supporting my small business. Every order means the
              world to me!
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-[var(--color-secondary)] transition-colors hover:border-[var(--color-honey)] hover:text-[var(--color-honey)]"
              >
                {/* inline SVG — instagram brand icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-[var(--color-secondary)] transition-colors hover:border-[var(--color-honey)] hover:text-[var(--color-honey)]"
              >
                {/* inline SVG — facebook brand icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Shop */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink)]">
              Shop
            </h3>
            <ul className="space-y-2">
              {SHOP_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-[var(--color-secondary)] transition-colors hover:text-[var(--color-honey)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Help */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink)]">
              Help
            </h3>
            <ul className="space-y-2">
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-[var(--color-secondary)] transition-colors hover:text-[var(--color-honey)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — About */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-ink)]">
              About
            </h3>
            <ul className="space-y-2">
              {ABOUT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-[var(--color-secondary)] transition-colors hover:text-[var(--color-honey)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-[var(--color-border-soft)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-5 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-[12px] text-[var(--color-secondary)]">
            &copy; 2026 HoneyBee Designs &nbsp;·&nbsp;
            <Link href="#" className="hover:text-[var(--color-honey)]">
              Terms of Service
            </Link>
            &nbsp;·&nbsp;
            <Link href="#" className="hover:text-[var(--color-honey)]">
              Privacy Policy
            </Link>
          </p>

          {/* Payment badges */}
          <div className="flex items-center gap-1.5">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="rounded border border-[var(--color-border-soft)] bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-secondary)]"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const CATEGORIES = [
  { name: "Apparel",            handle: "apparel",            emoji: "👕" },
  { name: "Drinkware",          handle: "drinkware",          emoji: "☕" },
  { name: "Keychains",          handle: "keychains",          emoji: "🔑" },
  { name: "Decals & Stickers",  handle: "stickers-decals",    emoji: "🏷️" },
  { name: "Gift Ideas",         handle: "gift-ideas",         emoji: "🎁" },
  { name: "Custom Items",       handle: "custom-items",       emoji: "✨" },
  { name: "New Arrivals",       handle: "new-arrivals",       emoji: "🆕" },
  { name: "Bundles",            handle: "bundles",            emoji: "📦" },
  { name: "Business Products",  handle: "business-products",  emoji: "💼" },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-ink)]">
          Shop by Category
        </h2>
        <p className="mt-2 text-[15px] text-[var(--color-secondary)]">
          Something special for every season, every reason, and every you!
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {CATEGORIES.map(({ name, handle, emoji }) => (
          <Link
            key={handle}
            href={`/shop/${handle}`}
            className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-[var(--color-border-soft)] bg-[var(--color-cream)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-honey)] hover:shadow-md"
          >
            <span className="text-3xl leading-none transition-transform duration-200 group-hover:scale-110">
              {emoji}
            </span>
            <span className="px-2 text-center text-[13px] font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-honey)]">
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--color-honey)] px-7 py-3 text-[14px] font-semibold text-[var(--color-honey)] transition-all hover:bg-[var(--color-honey)] hover:text-white"
        >
          Shop All Collections <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

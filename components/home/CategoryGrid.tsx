import Link from "next/link"

const CATEGORIES = [
  { name: "APPAREL",           handle: "apparel",           emoji: "👕" },
  { name: "DRINKWARE",         handle: "drinkware",         emoji: "☕" },
  { name: "TOTE BAGS",         handle: "tote-bags",         emoji: "👜" },
  { name: "KEYCHAINS",         handle: "keychains",         emoji: "🔑" },
  { name: "DECALS & STICKERS", handle: "stickers-decals",   emoji: "🏷️" },
  { name: "HOME DECOR",        handle: "home-lifestyle",    emoji: "🏠" },
  { name: "CUSTOM ITEMS",      handle: "custom-items",      emoji: "✨" },
  { name: "GIFTS",             handle: "gift-ideas",        emoji: "🎁" },
  { name: "NEW ARRIVALS",      handle: "new-arrivals",      emoji: "🆕" },
]

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="mb-8 text-center text-[28px] font-black text-[var(--color-ink)]">
        ♥ SHOP BY CATEGORY ♥
      </h2>

      {/* Horizontal scroll row */}
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {CATEGORIES.map(({ name, handle, emoji }) => (
          <Link
            key={handle}
            href={`/shop/${handle}`}
            className="group flex w-[130px] flex-shrink-0 flex-col items-center gap-2 rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-background)] p-3 transition-all hover:border-[var(--color-coral)] hover:shadow-sm"
          >
            {/* TODO: add category image */}
            <div className="flex h-[90px] w-full items-center justify-center rounded-lg bg-white">
              <span className="text-4xl">{emoji}</span>
            </div>
            <span className="text-center text-[11px] font-bold uppercase tracking-wide text-[var(--color-ink)] group-hover:text-[var(--color-coral)]">
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/shop"
          className="rounded-full bg-[var(--color-coral)] px-8 py-3 text-[14px] font-bold text-white transition-all hover:bg-[var(--color-coral-dark)]"
        >
          SHOP ALL COLLECTIONS
        </Link>
      </div>
    </section>
  )
}

import Link from "next/link"

const COLLECTIONS = [
  { name: "Dog Tags",     handle: "dog-tags",     dark: true },
  { name: "Car Coasters", handle: "car-coasters",  dark: false },
  { name: "Vinyl Decals", handle: "vinyl-decals",  dark: true },
  { name: "Stickers",     handle: "stickers-decals",dark: false },
  { name: "Custom Signs", handle: "custom-signs",  dark: true },
  { name: "Gift Ideas",   handle: "gift-ideas",    dark: false },
]

const EMOJIS: Record<string, string> = {
  "dog-tags":      "🐾",
  "car-coasters":  "🚗",
  "vinyl-decals":  "🏷️",
  "stickers-decals":"⭐",
  "custom-signs":  "🪧",
  "gift-ideas":    "🎁",
}

export function ShopCollections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-[28px] font-black text-[var(--color-ink)]">
        ♥ SHOP OUR COLLECTIONS ♥
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {COLLECTIONS.map(({ name, handle, dark }) => (
          <Link
            key={handle}
            href={`/shop/${handle}`}
            className="group flex aspect-square flex-col items-center justify-end overflow-hidden rounded-xl transition-all hover:shadow-md"
            style={{ backgroundColor: dark ? "var(--color-ink)" : "var(--color-topbar)" }}
          >
            {/* TODO: add collection image */}
            <div className="flex flex-1 w-full items-center justify-center text-4xl">
              {EMOJIS[handle]}
            </div>
            <div
              className="w-full py-2 text-center text-[11px] font-bold uppercase tracking-wide"
              style={{ color: dark ? "white" : "var(--color-ink)" }}
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

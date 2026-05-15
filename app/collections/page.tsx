import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Collections | HoneyBee Designs",
  description: "Shop by occasion — gifts for mamas, teachers, nurses, and everyone you love.",
}

const OCCASIONS = [
  { label: "MAMA", emoji: "💛", handle: "mama" },
  { label: "TEACHER", emoji: "🍎", handle: "teacher" },
  { label: "NURSE", emoji: "💉", handle: "nurse" },
  { label: "DOG MOM", emoji: "🐾", handle: "dog-mom" },
  { label: "BRIDE", emoji: "💍", handle: "bride" },
  { label: "BACHELORETTE", emoji: "🎉", handle: "bachelorette" },
  { label: "BIRTHDAY", emoji: "🎂", handle: "birthday" },
  { label: "CHRISTMAS", emoji: "🎄", handle: "christmas" },
  { label: "HALLOWEEN", emoji: "🎃", handle: "halloween" },
  { label: "VALENTINES", emoji: "💝", handle: "valentines" },
  { label: "EASTER", emoji: "🐣", handle: "easter" },
  { label: "4TH OF JULY", emoji: "🇺🇸", handle: "fourth-of-july" },
  { label: "FALL", emoji: "🍂", handle: "fall" },
  { label: "SUMMER", emoji: "☀️", handle: "summer" },
  { label: "BEACH", emoji: "🌊", handle: "beach" },
  { label: "SPORTS MOM", emoji: "⚽", handle: "sports-mom" },
  { label: "FARMER", emoji: "🌾", handle: "farmer" },
  { label: "FISHING", emoji: "🎣", handle: "fishing" },
  { label: "CAMPING", emoji: "⛺", handle: "camping" },
  { label: "COFFEE LOVER", emoji: "☕", handle: "coffee-lover" },
  { label: "CAT MOM", emoji: "🐱", handle: "cat-mom" },
  { label: "GRANDMA", emoji: "🌷", handle: "grandma" },
]

const MORE_COLLECTIONS = [
  { label: "Dog Tags", handle: "dog-tags", dark: true },
  { label: "Car Coasters", handle: "car-coasters", dark: false },
  { label: "Vinyl Decals", handle: "vinyl-decals", dark: true },
  { label: "Stickers", handle: "stickers-decals", dark: false },
  { label: "Custom Signs", handle: "custom-signs", dark: true },
  { label: "Gift Ideas", handle: "gift-ideas", dark: false },
  { label: "Apparel", handle: "apparel", dark: true },
  { label: "Keychains", handle: "keychains", dark: false },
  { label: "Drinkware", handle: "drinkware", dark: true },
  { label: "Bundles", handle: "bundles", dark: false },
]

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="mb-2 text-center text-[28px] font-black text-[var(--color-ink)]">
        ♥ SHOP BY OCCASION ♥
      </h1>
      <p className="mb-10 text-center text-[14px] text-[var(--color-secondary)]">
        Find the perfect custom gift for every person &amp; every moment.
      </p>

      {/* Occasion grid */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {OCCASIONS.map(({ label, emoji, handle }) => (
          <Link
            key={handle}
            href={`/shop/${handle}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-4 text-center transition-all hover:border-[var(--color-coral)] hover:shadow-md"
          >
            <span className="text-3xl">{emoji}</span>
            <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-ink)] group-hover:text-[var(--color-coral)]">
              {label}
            </span>
          </Link>
        ))}
      </div>

      {/* Custom order CTA */}
      <div className="my-14 rounded-2xl bg-[var(--color-ink)] px-8 py-10 text-center text-white">
        <p className="text-[12px] font-bold uppercase tracking-widest text-[var(--color-coral)]">
          Don&apos;t see your occasion?
        </p>
        <h2 className="mt-2 text-[24px] font-black">WE DO CUSTOM ORDERS!</h2>
        <p className="mt-2 text-[14px] text-gray-300">
          Any name, any photo, any design — we make it happen.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[13px] text-gray-300">
          {["Custom names & text", "Photo uploads", "Any occasion", "Fast turnaround", "Made with love"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="text-[var(--color-coral)]">✓</span>
              {item}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-[var(--color-coral)] px-8 py-3 text-[14px] font-bold text-white transition-all hover:bg-[var(--color-coral-dark)]"
        >
          REQUEST A CUSTOM ORDER →
        </Link>
      </div>

      {/* More collections */}
      <h2 className="mb-6 text-center text-[22px] font-black text-[var(--color-ink)]">
        MORE COLLECTIONS TO LOVE
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {MORE_COLLECTIONS.map(({ label, handle, dark }) => (
          <Link
            key={handle}
            href={`/shop/${handle}`}
            className="group flex items-center justify-center rounded-xl px-4 py-5 text-center text-[13px] font-bold uppercase tracking-wide transition-all hover:shadow-md"
            style={{
              backgroundColor: dark ? "var(--color-ink)" : "var(--color-topbar)",
              color: dark ? "white" : "var(--color-ink)",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

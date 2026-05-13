const ITEMS = [
  "Made with Love",
  "Packed with Care",
  "Shipped with Smiles",
  "Free Shipping on Orders $75+",
  "5,000+ Happy Customers",
]

const SEP = "·"

export function TopBar() {
  // Duplicate items so the seamless loop works at any viewport width
  const track = [...ITEMS, ...ITEMS]

  return (
    <div
      className="overflow-hidden bg-[var(--color-honey)] py-2"
      aria-label="Site announcements"
    >
      <div className="marquee-track whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-4 text-[13px] font-medium text-white"
          >
            {item}
            <span className="opacity-60" aria-hidden>
              {SEP}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

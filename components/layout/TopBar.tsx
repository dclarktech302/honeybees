const ITEMS = [
  { icon: "♥", text: "Made with Love" },
  { icon: "📦", text: "Packed with Care" },
  { icon: "🚚", text: "Shipped with Smiles" },
  { icon: "🚚", text: "Free Shipping on Orders $75+" },
  { icon: "⭐", text: "5,000+ Happy Customers" },
]

export function TopBar() {
  const track = [...ITEMS, ...ITEMS]
  return (
    <div
      className="overflow-hidden border-b border-[var(--color-border)] py-1.5"
      style={{ backgroundColor: "var(--color-topbar)" }}
      aria-label="Site announcements"
    >
      <div className="marquee-track whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-5 text-[12px] font-medium text-[var(--color-ink)]"
          >
            <span>{item.icon}</span>
            {item.text}
            <span className="ml-3 text-[var(--color-border)] opacity-60" aria-hidden>
              |
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

interface MarqueeBarProps {
  items: string[]
  speed?: number
  bgColor?: string
  textColor?: string
}

export function MarqueeBar({
  items,
  bgColor = "var(--color-cream)",
  textColor = "var(--color-ink)",
}: MarqueeBarProps) {
  // Duplicate so the loop is seamless regardless of item count
  const track = [...items, ...items]

  return (
    <div
      className="overflow-hidden border-y border-[var(--color-border-soft)] py-3"
      style={{ backgroundColor: bgColor }}
    >
      <div className="marquee-track whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-5 text-[13px] font-semibold uppercase tracking-widest"
            style={{ color: textColor }}
          >
            {item}
            <span className="text-[var(--color-honey)] opacity-80" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

const ITEMS = [
  { emoji: "♥",  title: "Made with Love",          desc: "Every item is crafted with so much care!" },
  { emoji: "📦", title: "Packed with Care",         desc: "Your order is packed with extra love!" },
  { emoji: "🚚", title: "Shipped with Smiles",      desc: "Fast, reliable shipping straight to you!" },
  { emoji: "🚚", title: "Free Shipping on Orders $75+", desc: "Because you deserve it!" },
  { emoji: "⭐", title: "5,000+ Happy Customers",   desc: "Thank you for supporting my small business!" },
]

export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map(({ emoji, title, desc }, i) => (
            <div
              key={title}
              className="flex flex-col items-center gap-1 border-r border-[var(--color-border)] px-3 text-center last:border-r-0"
            >
              <span className="text-2xl leading-none">{emoji}</span>
              <p className="text-[13px] font-bold text-[var(--color-ink)]">{title}</p>
              <p className="text-[11px] leading-snug text-[var(--color-secondary)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ITEMS = [
  {
    icon: "♥",
    iconColor: "var(--color-primary)",
    title: "MADE WITH LOVE",
    desc: "Every item is crafted with so much care!",
  },
  {
    icon: "📦",
    iconColor: "var(--color-gold)",
    title: "PACKED WITH CARE",
    desc: "Your order is packed with extra love!",
  },
  {
    icon: "🚚",
    iconColor: "var(--color-primary)",
    title: "SHIPPED WITH SMILES",
    desc: "Fast, reliable shipping straight to you!",
  },
  {
    icon: "🚚",
    iconColor: "var(--color-primary)",
    title: "FREE SHIPPING ON ORDERS $75+",
    desc: "Because you deserve it!",
  },
  {
    icon: "⭐",
    iconColor: "#F5C842",
    title: "5,000+ HAPPY CUSTOMERS",
    desc: "Thank you for supporting my small business!",
  },
]

export function TrustBar() {
  return (
    <section
      className="border-y"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        padding: "20px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div
          className="grid grid-cols-2 lg:grid-cols-5"
          style={{ gap: "0" }}
        >
          {ITEMS.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
              style={{
                padding: "8px 12px",
                borderRight: i < ITEMS.length - 1 ? "1px solid var(--color-border)" : undefined,
              }}
            >
              <span
                className="leading-none mb-1"
                style={{ fontSize: "24px" }}
              >
                {icon}
              </span>
              <p
                className="font-bold"
                style={{ fontSize: "12px", color: "var(--color-black)" }}
              >
                {title}
              </p>
              <p
                style={{ fontSize: "11px", color: "var(--color-gray)", lineHeight: 1.4 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

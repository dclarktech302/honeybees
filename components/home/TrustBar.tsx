import { Heart, Package, Truck, Tag } from "lucide-react"

const ITEMS = [
  {
    Icon: Heart,
    title: "Made with Love",
    description: "Every item is crafted with so much care!",
  },
  {
    Icon: Package,
    title: "Packed with Care",
    description: "Your order is packed with extra love!",
  },
  {
    Icon: Truck,
    title: "Shipped with Smiles",
    description: "Fast, reliable shipping straight to you!",
  },
  {
    Icon: Tag,
    title: "Free Shipping $75+",
    description: "Because you deserve it!",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border-soft)] bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-[var(--color-border-soft)] lg:grid-cols-4">
          {ITEMS.map(({ Icon, title, description }, idx) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2 px-4 py-2 text-center first:pl-0 last:pr-0 sm:flex-row sm:text-left"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-cream)]">
                <Icon
                  className="h-5 w-5"
                  style={{ color: "var(--color-honey)" }}
                  strokeWidth={1.75}
                />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[var(--color-ink)]">
                  {title}
                </p>
                <p className="text-[13px] text-[var(--color-secondary)]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

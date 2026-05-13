import Link from "next/link"
import { ArrowRight, Sparkles, Truck, RefreshCw, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/features/ProductCard"
import { BundleCard } from "@/components/features/BundleCard"
import { placeholderProducts, placeholderCollections } from "@/data/products"

const features = [
  {
    icon: Sparkles,
    title: "Vivid Sublimation Printing",
    description:
      "Full-color, edge-to-edge prints that never crack, fade, or peel — guaranteed to last.",
  },
  {
    icon: Truck,
    title: "Fast Turnaround",
    description:
      "Most orders ship within 3–5 business days. Expedited options available at checkout.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "Not happy? We'll make it right. 30-day hassle-free returns on all standard items.",
  },
  {
    icon: Star,
    title: "Custom Orders Welcome",
    description:
      "Have a specific design in mind? Reach out and let's bring your vision to life.",
  },
]

const testimonials = [
  {
    name: "Sarah K.",
    quote:
      "The colors are incredible — I've washed it a dozen times and it still looks brand new.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    quote:
      "Ordered custom hoodies for our whole team. Everyone was blown away by the quality.",
    rating: 5,
  },
  {
    name: "Priya R.",
    quote:
      "The tumbler is my daily essential. The print wraps perfectly all the way around.",
    rating: 5,
  },
]

export default function HomePage() {
  const featuredProducts = placeholderProducts.filter(
    (p) => !p.collections.includes("bundles")
  )
  const bundleProducts = placeholderProducts.filter((p) =>
    p.collections.includes("bundles")
  )

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-honey/10 via-cream to-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-honey/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-honey-dark">
              Custom Sublimation Merch
            </span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Wear Your{" "}
              <span className="text-primary">Story</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Vibrant, lasting sublimation merch crafted for individuals, teams, and brands.
              T-shirts, hoodies, tumblers — made to order, built to last.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-base" asChild>
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <Link href="/contact">Custom Order</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative honeycomb blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-honey/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-honey/8 blur-3xl"
        />
      </section>

      {/* ─── Collections strip ──────────────────────────────────────────────── */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {placeholderCollections.map((col) => (
              <Link
                key={col.id}
                href={`/shop/${col.handle}`}
                className="text-sm font-medium text-cream/70 transition-colors hover:text-honey"
              >
                {col.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-1 text-muted-foreground">
              Our most-loved sublimation pieces
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/shop">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ─── Features / Value Props ────────────────────────────────────────── */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Why HoneyBee?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-honey/15">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bundles ────────────────────────────────────────────────────────── */}
      {bundleProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Bundle & Save</h2>
            <p className="mt-1 text-muted-foreground">
              Get more for less with our curated bundles
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {bundleProducts.map((product) => (
              <BundleCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* ─── Testimonials ───────────────────────────────────────────────────── */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-cream/10 bg-cream/5 p-6"
              >
                <div className="mb-3 flex text-honey">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic text-cream/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-3 text-xs font-semibold text-honey">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-honey to-honey-dark">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            Ready to design something beautiful?
          </h2>
          <p className="mt-4 text-ink/70">
            Custom orders, bulk pricing, and team packages available. Let&apos;s
            create together.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-ink bg-transparent text-ink hover:bg-ink hover:text-cream"
              asChild
            >
              <Link href="/shop">Browse the Shop</Link>
            </Button>
            <Button
              size="lg"
              className="bg-ink text-cream hover:bg-ink/90"
              asChild
            >
              <Link href="/contact">Start a Custom Order</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

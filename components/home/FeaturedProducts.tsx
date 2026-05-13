import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/features/ProductCard"
import type { Product } from "@/lib/types"

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-[var(--color-ink)]">
            Featured Products
          </h2>
          <p className="mt-1 text-[15px] text-[var(--color-secondary)]">
            Our most loved custom designs
          </p>
        </div>
        <Link
          href="/shop"
          className="hidden items-center gap-1 text-[13px] font-medium text-[var(--color-honey)] hover:underline sm:flex"
        >
          View All <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile "view all" */}
      <div className="mt-8 flex justify-center sm:hidden">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--color-honey)] px-6 py-2.5 text-[14px] font-semibold text-[var(--color-honey)] hover:bg-[var(--color-honey)] hover:text-white transition-colors"
        >
          View All Products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

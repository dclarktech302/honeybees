"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/features/ProductCard"
import type { Product } from "@/lib/types"

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.7
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" })
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-[28px] font-black text-[var(--color-ink)]">
        ♥ FEATURED PRODUCTS ♥
      </h2>

      <div className="relative">
        {/* Prev */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-white p-2 shadow-sm transition-shadow hover:shadow-md lg:flex"
        >
          <ChevronLeft className="h-5 w-5 text-[var(--color-ink)]" />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-4 overflow-x-auto pb-2"
        >
          {products.map((p) => (
            <div key={p.id} className="w-[160px] flex-shrink-0 sm:w-[180px] lg:w-[200px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-white p-2 shadow-sm transition-shadow hover:shadow-md lg:flex"
        >
          <ChevronRight className="h-5 w-5 text-[var(--color-ink)]" />
        </button>
      </div>
    </section>
  )
}

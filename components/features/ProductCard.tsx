import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  collectionHandle?: string
}

export function ProductCard({ product, collectionHandle }: ProductCardProps) {
  const collection = collectionHandle ?? product.collections[0] ?? "shop"
  const href = `/shop/${collection}/${product.handle}`
  const image = product.images[0]
  const hasDiscount =
    product.compareAtPrice != null && product.compareAtPrice > product.price
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0
  const rating = product.rating ?? 5
  const reviewCount = product.reviewCount ?? 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <Link href={href} className="relative block aspect-square overflow-hidden rounded-t-xl bg-[var(--color-cream)]">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl">
            {/* TODO: replace with actual product image */}
            🐝
          </div>
        )}
        {hasDiscount && (
          <Badge className="absolute left-2 top-2 bg-[var(--color-honey)] text-white">
            -{discountPct}%
          </Badge>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 p-3">
        <Link href={href}>
          <p className="line-clamp-2 text-[14px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-honey)] transition-colors">
            {product.title}
          </p>
        </Link>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-[var(--color-honey)] text-[var(--color-honey)]"
            />
          ))}
          {reviewCount > 0 && (
            <span className="ml-1 text-[12px] text-[var(--color-secondary)]">
              ({reviewCount})
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div>
            <span className="text-[16px] font-semibold text-[var(--color-honey)]">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="ml-1.5 text-[12px] text-[var(--color-secondary)] line-through">
                {formatPrice(product.compareAtPrice!)}
              </span>
            )}
          </div>
        </div>

        <Link
          href={href}
          className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[var(--color-honey)] py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--color-honey-dark)]"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </Link>
      </div>
    </div>
  )
}

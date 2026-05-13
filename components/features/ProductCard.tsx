import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  collectionHandle?: string
}

export function ProductCard({ product, collectionHandle }: ProductCardProps) {
  const href = collectionHandle
    ? `/shop/${collectionHandle}/${product.handle}`
    : `/shop/${product.collections[0] ?? "all"}/${product.handle}`

  const image = product.images[0]
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0

  return (
    <Link href={href} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-cream-dark">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <span className="text-4xl">🐝</span>
          </div>
        )}
        {hasDiscount && (
          <Badge className="absolute left-2 top-2 bg-honey text-ink">
            -{discountPct}%
          </Badge>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.title}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

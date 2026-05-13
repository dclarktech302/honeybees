import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface BundleCardProps {
  product: Product
}

export function BundleCard({ product }: BundleCardProps) {
  const image = product.images[0]
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price
  const savings = hasDiscount ? product.compareAtPrice! - product.price : 0

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-honey/30 bg-gradient-to-br from-honey/5 to-cream-dark p-6 shadow-sm transition-shadow hover:shadow-md">
      {hasDiscount && (
        <Badge className="absolute right-4 top-4 bg-honey text-ink">
          Save {formatPrice(savings)}
        </Badge>
      )}

      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-cream-dark">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            🐝
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
        {product.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
        <Button asChild>
          <Link href={`/shop/bundles/${product.handle}`}>Shop Bundle</Link>
        </Button>
      </div>
    </div>
  )
}

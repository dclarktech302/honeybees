"use client"

import { use, useState } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { VariantPicker } from "@/components/features/VariantPicker"
import { useCartStore } from "@/store/cart"
import { formatPrice } from "@/lib/utils"
import { placeholderProducts } from "@/data/products"
import type { Variant } from "@/lib/types"

interface Props {
  params: Promise<{ collection: string; product: string }>
}

export default function ProductPage({ params }: Props) {
  const { collection, product: productHandle } = use(params)

  const product = placeholderProducts.find((p) => p.handle === productHandle)
  if (!product) notFound()

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants.find((v) => v.availableForSale) ?? null
  )
  const [activeImage, setActiveImage] = useState(0)
  const { addItem, openCart } = useCartStore()

  const handleAddToCart = () => {
    if (!selectedVariant) return
    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      title: product.title,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      image: product.images[0]?.url,
    })
    openCart()
  }

  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream-dark">
            {product.images[activeImage] ? (
              <Image
                src={product.images[activeImage].url}
                alt={product.images[activeImage].altText ?? product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-7xl">🐝</div>
            )}
            {hasDiscount && (
              <Badge className="absolute left-4 top-4 bg-honey text-ink text-sm">
                Sale
              </Badge>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                    activeImage === i
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.altText ?? `${product.title} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-muted-foreground capitalize">{collection}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">{product.title}</h1>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                {formatPrice(selectedVariant?.price ?? product.price)}
              </span>
              {hasDiscount && (
                <span className="text-base text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice!)}
                </span>
              )}
            </div>
          </div>

          <Separator />

          {product.variants.length > 1 && (
            <div>
              <p className="mb-3 text-sm font-medium">
                {product.variants[0].selectedOptions[0]?.name ?? "Option"}
              </p>
              <VariantPicker
                variants={product.variants}
                onSelect={(v) => setSelectedVariant(v)}
              />
            </div>
          )}

          <Button
            size="lg"
            className="w-full sm:w-auto"
            disabled={!selectedVariant}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          <Separator />

          <div>
            <h2 className="mb-2 font-semibold">Description</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

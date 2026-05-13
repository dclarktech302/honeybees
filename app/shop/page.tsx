import { Metadata } from "next"
import { getProducts } from "@/lib/shopify"
import { placeholderProducts, placeholderCollections } from "@/data/products"
import { ProductCard } from "@/components/features/ProductCard"
import { CollectionFilter } from "@/components/features/CollectionFilter"

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse all HoneyBee Designs sublimation merch — t-shirts, hoodies, tumblers, and bundles.",
}

export default async function ShopPage() {
  const liveProducts = await getProducts()
  const products = liveProducts.length > 0 ? liveProducts : placeholderProducts

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <p className="mt-1 text-muted-foreground">
          {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <CollectionFilter collections={placeholderCollections} />

        <div className="flex-1">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-5xl">🐝</span>
              <p className="mt-4 text-muted-foreground">No products found yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

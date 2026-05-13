import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProducts } from "@/lib/shopify"
import {
  placeholderProducts,
  placeholderCollections,
} from "@/data/products"
import { ProductCard } from "@/components/features/ProductCard"
import { CollectionFilter } from "@/components/features/CollectionFilter"

interface Props {
  params: Promise<{ collection: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection } = await params
  const col = placeholderCollections.find((c) => c.handle === collection)
  return {
    title: col?.title ?? collection,
    description: col?.description,
  }
}

export default async function CollectionPage({ params }: Props) {
  const { collection } = await params
  const col = placeholderCollections.find((c) => c.handle === collection)
  if (!col) notFound()

  const liveProducts = await getProducts()
  const allProducts = liveProducts.length > 0 ? liveProducts : placeholderProducts
  const products = allProducts.filter((p) => p.collections.includes(collection))

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{col.title}</h1>
        {col.description && (
          <p className="mt-1 text-muted-foreground">{col.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <CollectionFilter collections={placeholderCollections} />

        <div className="flex-1">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-5xl">🐝</span>
              <p className="mt-4 text-muted-foreground">
                No products in this collection yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  collectionHandle={collection}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCollectionByHandle, getProducts } from "@/lib/shopify"
import { placeholderCollections, placeholderProducts } from "@/data/products"
import { ProductCard } from "@/components/features/ProductCard"

interface Props {
  params: Promise<{ collection: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection } = await params
  const col = placeholderCollections.find((c) => c.handle === collection)
  return {
    title: `${col?.title ?? collection} | HoneyBee Designs`,
    description: col?.description,
  }
}

export async function generateStaticParams() {
  return placeholderCollections.map((c) => ({ collection: c.handle }))
}

export default async function CollectionPage({ params }: Props) {
  const { collection: handle } = await params

  const liveCollection = await getCollectionByHandle(handle)
  const placeholderCol = placeholderCollections.find((c) => c.handle === handle)

  if (!liveCollection && !placeholderCol) notFound()

  const title = liveCollection?.title ?? placeholderCol?.title ?? handle
  const description = liveCollection?.description ?? placeholderCol?.description ?? ""

  let products = liveCollection?.products ?? []
  if (products.length === 0) {
    const all = await getProducts(48)
    const pool = all.length > 0 ? all : placeholderProducts
    products = pool.filter((p) => p.collections.includes(handle))
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-[12px] text-[var(--color-secondary)]">
        <Link href="/shop" className="hover:text-[var(--color-coral)]">
          Shop
        </Link>
        <span>/</span>
        <span className="text-[var(--color-ink)]">{title}</span>
      </nav>

      {/* Hero banner */}
      <div className="mb-10 rounded-2xl bg-[var(--color-topbar)] px-8 py-10 text-center">
        <h1 className="text-[28px] font-black text-[var(--color-ink)]">
          ♥ {title.toUpperCase()} ♥
        </h1>
        {description && (
          <p className="mt-2 text-[14px] text-[var(--color-secondary)]">{description}</p>
        )}
        <p className="mt-1 text-[12px] text-[var(--color-secondary)]">
          {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Grid */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <span className="text-5xl">🐝</span>
          <p className="mt-4 text-[14px] text-[var(--color-secondary)]">
            No products in this collection yet. Check back soon!
          </p>
          <Link
            href="/shop"
            className="mt-6 rounded-full bg-[var(--color-coral)] px-6 py-2.5 text-[13px] font-bold text-white hover:bg-[var(--color-coral-dark)]"
          >
            Shop All
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} collectionHandle={handle} />
          ))}
        </div>
      )}
    </div>
  )
}

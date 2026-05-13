import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductByHandle, getProducts } from "@/lib/shopify"
import { placeholderProducts } from "@/data/products"
import { PDPClient } from "./PDPClient"

interface Props {
  params: Promise<{ collection: string; product: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: handle } = await params
  const liveProduct = await getProductByHandle(handle)
  const product = liveProduct ?? placeholderProducts.find((p) => p.handle === handle)
  return {
    title: product ? `${product.title} | HoneyBee Designs` : "Product | HoneyBee Designs",
    description: product?.description,
  }
}

export async function generateStaticParams() {
  const products = await getProducts(48)
  const pool = products.length > 0 ? products : placeholderProducts
  return pool.flatMap((p) =>
    (p.collections.length > 0 ? p.collections : ["shop"]).map((col) => ({
      collection: col,
      product: p.handle,
    }))
  )
}

export default async function ProductPage({ params }: Props) {
  const { collection, product: handle } = await params
  const liveProduct = await getProductByHandle(handle)
  const product = liveProduct ?? placeholderProducts.find((p) => p.handle === handle)
  if (!product) notFound()

  return <PDPClient product={product} collectionHandle={collection} />
}

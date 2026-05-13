import { Suspense } from "react"
import { getProducts } from "@/lib/shopify"
import { placeholderProducts } from "@/data/products"
import { ShopAllClient } from "./ShopAllClient"

export const metadata = {
  title: "Shop All | HoneyBee Designs",
  description: "Browse all custom sublimation products — decals, keychains, apparel, drinkware & more.",
}

export default async function ShopPage() {
  const shopifyProducts = await getProducts(48)
  const products = shopifyProducts.length > 0 ? shopifyProducts : placeholderProducts

  return (
    <Suspense>
      <ShopAllClient products={products} />
    </Suspense>
  )
}

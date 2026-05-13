import { createStorefrontApiClient } from "@shopify/storefront-api-client"
import type { Collection, Product } from "@/lib/types"

// ─── Client (lazy) ────────────────────────────────────────────────────────────
let _client: ReturnType<typeof createStorefrontApiClient> | null = null

function getClient() {
  if (!_client) {
    _client = createStorefrontApiClient({
      storeDomain: process.env.SHOPIFY_STOREFRONT_API_URL!,
      apiVersion: "2024-10",
      publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
    })
  }
  return _client
}

function isConfigured() {
  return !!process.env.SHOPIFY_STOREFRONT_API_URL && !!process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
}

function devError(fn: string, err: unknown) {
  if (process.env.NODE_ENV !== "production") console.error(`[shopify:${fn}]`, err)
}

export const shopifyClient = {
  request: (...args: Parameters<ReturnType<typeof createStorefrontApiClient>["request"]>) =>
    getClient().request(...args),
}

// ─── GraphQL fragments / queries ──────────────────────────────────────────────
const PRODUCT_FRAGMENT = `
  id title handle description
  priceRange { minVariantPrice { amount currencyCode } }
  compareAtPriceRange { minVariantPrice { amount } }
  images(first: 4) { edges { node { url altText width height } } }
  variants(first: 10) { edges { node {
    id title availableForSale
    price { amount }
    selectedOptions { name value }
  }}}
  collections(first: 5) { edges { node { id title handle } } }
`

const PRODUCTS_QUERY = `#graphql
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges { node { ${PRODUCT_FRAGMENT} } }
    }
  }
`

const COLLECTIONS_QUERY = `#graphql
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges { node {
        id title handle description
        image { url altText }
        products(first: 4) { edges { node {
          id title
          priceRange { minVariantPrice { amount } }
          images(first: 1) { edges { node { url altText } } }
        }}}
      }}
    }
  }
`

const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) { ${PRODUCT_FRAGMENT} }
  }
`

const COLLECTION_BY_HANDLE_QUERY = `#graphql
  query GetCollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      id title handle description
      image { url altText }
      products(first: 24) { edges { node { ${PRODUCT_FRAGMENT} } } }
    }
  }
`

// ─── Cart mutations ───────────────────────────────────────────────────────────
const CART_FRAGMENT = `
  id checkoutUrl
  lines(first: 100) { edges { node {
    id quantity
    merchandise { ... on ProductVariant {
      id title price { amount }
      product { id title images(first: 1) { edges { node { url altText } } } }
      selectedOptions { name value }
    }}
  }}}
  cost { totalAmount { amount currencyCode } }
`

const CART_CREATE_MUTATION = `#graphql
  mutation CartCreate {
    cartCreate { cart { ${CART_FRAGMENT} } userErrors { field message } }
  }
`

const CART_LINES_ADD_MUTATION = `#graphql
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ${CART_FRAGMENT} } userErrors { field message }
    }
  }
`

const CART_LINES_REMOVE_MUTATION = `#graphql
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ${CART_FRAGMENT} } userErrors { field message }
    }
  }
`

const CART_LINES_UPDATE_MUTATION = `#graphql
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ${CART_FRAGMENT} } userErrors { field message }
    }
  }
`

// ─── Normalisers ──────────────────────────────────────────────────────────────
function normalizeProduct(node: Record<string, unknown>): Product {
  const pr = node.priceRange as { minVariantPrice: { amount: string } }
  const cpr = node.compareAtPriceRange as { minVariantPrice: { amount: string } } | null
  const imgs = node.images as { edges: { node: Record<string, unknown> }[] }
  const vars = node.variants as { edges: { node: Record<string, unknown> }[] }
  const cols = node.collections as { edges: { node: { handle: string } }[] }

  return {
    id: node.id as string,
    title: node.title as string,
    handle: node.handle as string,
    description: node.description as string,
    price: parseFloat(pr.minVariantPrice.amount),
    compareAtPrice: cpr?.minVariantPrice.amount
      ? parseFloat(cpr.minVariantPrice.amount)
      : undefined,
    images: imgs.edges.map(({ node: img }) => ({
      id: img.id as string,
      url: img.url as string,
      altText: img.altText as string | undefined,
      width: img.width as number | undefined,
      height: img.height as number | undefined,
    })),
    variants: vars.edges.map(({ node: v }) => {
      const vp = v.price as { amount: string }
      return {
        id: v.id as string,
        title: v.title as string,
        price: parseFloat(vp.amount),
        availableForSale: v.availableForSale as boolean,
        selectedOptions: v.selectedOptions as { name: string; value: string }[],
      }
    }),
    collections: cols.edges.map(({ node: c }) => c.handle),
  }
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  lines: CartLine[]
  totalAmount: number
}

export interface CartLine {
  id: string
  quantity: number
  variantId: string
  variantTitle: string
  productId: string
  productTitle: string
  price: number
  image?: string
  selectedOptions: { name: string; value: string }[]
}

function normalizeCart(cart: Record<string, unknown>): ShopifyCart {
  const lines = cart.lines as { edges: { node: Record<string, unknown> }[] }
  const cost = cart.cost as { totalAmount: { amount: string } }
  return {
    id: cart.id as string,
    checkoutUrl: cart.checkoutUrl as string,
    totalAmount: parseFloat(cost.totalAmount.amount),
    lines: lines.edges.map(({ node: line }) => {
      const merch = line.merchandise as Record<string, unknown>
      const mp = merch.price as { amount: string }
      const product = merch.product as Record<string, unknown>
      const images = product.images as { edges: { node: { url: string } }[] }
      return {
        id: line.id as string,
        quantity: line.quantity as number,
        variantId: merch.id as string,
        variantTitle: merch.title as string,
        productId: product.id as string,
        productTitle: product.title as string,
        price: parseFloat(mp.amount),
        image: images.edges[0]?.node.url,
        selectedOptions: merch.selectedOptions as { name: string; value: string }[],
      }
    }),
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getProducts(first = 24): Promise<Product[]> {
  if (!isConfigured()) return []
  try {
    const { data, errors } = await shopifyClient.request(PRODUCTS_QUERY, { variables: { first } })
    if (errors || !data) return []
    const result = data as { products: { edges: { node: Record<string, unknown> }[] } }
    return result.products.edges.map(({ node }) => normalizeProduct(node))
  } catch (err) {
    devError("getProducts", err)
    return []
  }
}

export async function getCollections(first = 20): Promise<Collection[]> {
  if (!isConfigured()) return []
  try {
    const { data, errors } = await shopifyClient.request(COLLECTIONS_QUERY, { variables: { first } })
    if (errors || !data) return []
    const result = data as { collections: { edges: { node: Record<string, unknown> }[] } }
    return result.collections.edges.map(({ node }) => ({
      id: node.id as string,
      title: node.title as string,
      handle: node.handle as string,
      description: node.description as string,
      image: node.image as { url: string; altText?: string } | undefined,
    }))
  } catch (err) {
    devError("getCollections", err)
    return []
  }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  if (!isConfigured()) return null
  try {
    const { data, errors } = await shopifyClient.request(PRODUCT_BY_HANDLE_QUERY, { variables: { handle } })
    if (errors || !data) return null
    const result = data as { product: Record<string, unknown> | null }
    return result.product ? normalizeProduct(result.product) : null
  } catch (err) {
    devError("getProductByHandle", err)
    return null
  }
}

export async function getCollectionByHandle(
  handle: string
): Promise<(Collection & { products: Product[] }) | null> {
  if (!isConfigured()) return null
  try {
    const { data, errors } = await shopifyClient.request(COLLECTION_BY_HANDLE_QUERY, { variables: { handle } })
    if (errors || !data) return null
    const result = data as { collection: Record<string, unknown> | null }
    if (!result.collection) return null
    const col = result.collection
    const products = col.products as { edges: { node: Record<string, unknown> }[] }
    return {
      id: col.id as string,
      title: col.title as string,
      handle: col.handle as string,
      description: col.description as string,
      image: col.image as { url: string; altText?: string } | undefined,
      products: products.edges.map(({ node }) => normalizeProduct(node)),
    }
  } catch (err) {
    devError("getCollectionByHandle", err)
    return null
  }
}

export async function createCart(): Promise<{ id: string; checkoutUrl: string } | null> {
  if (!isConfigured()) return null
  try {
    const { data, errors } = await shopifyClient.request(CART_CREATE_MUTATION)
    if (errors || !data) return null
    const result = data as { cartCreate: { cart: Record<string, unknown>; userErrors: unknown[] } }
    if (result.cartCreate.userErrors.length) return null
    const cart = result.cartCreate.cart
    return { id: cart.id as string, checkoutUrl: cart.checkoutUrl as string }
  } catch (err) {
    devError("createCart", err)
    return null
  }
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number
): Promise<ShopifyCart | null> {
  if (!isConfigured()) return null
  try {
    const { data, errors } = await shopifyClient.request(CART_LINES_ADD_MUTATION, {
      variables: { cartId, lines: [{ merchandiseId: variantId, quantity }] },
    })
    if (errors || !data) return null
    const result = data as { cartLinesAdd: { cart: Record<string, unknown> } }
    return normalizeCart(result.cartLinesAdd.cart)
  } catch (err) {
    devError("addToCart", err)
    return null
  }
}

export async function removeFromCart(cartId: string, lineId: string): Promise<ShopifyCart | null> {
  if (!isConfigured()) return null
  try {
    const { data, errors } = await shopifyClient.request(CART_LINES_REMOVE_MUTATION, {
      variables: { cartId, lineIds: [lineId] },
    })
    if (errors || !data) return null
    const result = data as { cartLinesRemove: { cart: Record<string, unknown> } }
    return normalizeCart(result.cartLinesRemove.cart)
  } catch (err) {
    devError("removeFromCart", err)
    return null
  }
}

export async function updateCartQuantity(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<ShopifyCart | null> {
  if (!isConfigured()) return null
  try {
    const { data, errors } = await shopifyClient.request(CART_LINES_UPDATE_MUTATION, {
      variables: { cartId, lines: [{ id: lineId, quantity }] },
    })
    if (errors || !data) return null
    const result = data as { cartLinesUpdate: { cart: Record<string, unknown> } }
    return normalizeCart(result.cartLinesUpdate.cart)
  } catch (err) {
    devError("updateCartQuantity", err)
    return null
  }
}

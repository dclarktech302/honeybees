import { createStorefrontApiClient } from "@shopify/storefront-api-client"
import type { Collection, Product } from "@/lib/types"

let _client: ReturnType<typeof createStorefrontApiClient> | null = null

function getClient() {
  if (!_client) {
    _client = createStorefrontApiClient({
      storeDomain: process.env.SHOPIFY_STOREFRONT_API_URL!,
      apiVersion: "2024-04",
      publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
    })
  }
  return _client
}

export const shopifyClient = {
  request: (...args: Parameters<ReturnType<typeof createStorefrontApiClient>["request"]>) =>
    getClient().request(...args),
}

const PRODUCTS_QUERY = `#graphql
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                price {
                  amount
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          collections(first: 5) {
            edges {
              node {
                handle
              }
            }
          }
        }
      }
    }
  }
`

const COLLECTIONS_QUERY = `#graphql
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image {
            url
            altText
          }
        }
      }
    }
  }
`

const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      collections(first: 5) {
        edges {
          node {
            handle
          }
        }
      }
    }
  }
`

function normalizeProduct(node: Record<string, unknown>): Product {
  const priceRange = node.priceRange as { minVariantPrice: { amount: string } }
  const compareAtPriceRange = node.compareAtPriceRange as {
    minVariantPrice: { amount: string }
  } | null
  const images = node.images as { edges: { node: Record<string, unknown> }[] }
  const variants = node.variants as {
    edges: { node: Record<string, unknown> }[]
  }
  const collections = node.collections as {
    edges: { node: { handle: string } }[]
  }

  return {
    id: node.id as string,
    title: node.title as string,
    handle: node.handle as string,
    description: node.description as string,
    price: parseFloat(priceRange.minVariantPrice.amount),
    compareAtPrice: compareAtPriceRange?.minVariantPrice.amount
      ? parseFloat(compareAtPriceRange.minVariantPrice.amount)
      : undefined,
    images: images.edges.map(({ node: img }) => ({
      id: img.id as string,
      url: img.url as string,
      altText: img.altText as string | undefined,
      width: img.width as number | undefined,
      height: img.height as number | undefined,
    })),
    variants: variants.edges.map(({ node: v }) => {
      const vPrice = v.price as { amount: string }
      return {
        id: v.id as string,
        title: v.title as string,
        price: parseFloat(vPrice.amount),
        availableForSale: v.availableForSale as boolean,
        selectedOptions: v.selectedOptions as {
          name: string
          value: string
        }[],
      }
    }),
    collections: collections.edges.map(({ node: c }) => c.handle),
  }
}

export async function getProducts(first = 20): Promise<Product[]> {
  if (!process.env.SHOPIFY_STOREFRONT_API_URL) return []
  const { data, errors } = await shopifyClient.request(PRODUCTS_QUERY, {
    variables: { first },
  })
  if (errors || !data) return []
  const products = data as {
    products: { edges: { node: Record<string, unknown> }[] }
  }
  return products.products.edges.map(({ node }) => normalizeProduct(node))
}

export async function getCollections(first = 20): Promise<Collection[]> {
  if (!process.env.SHOPIFY_STOREFRONT_API_URL) return []
  const { data, errors } = await shopifyClient.request(COLLECTIONS_QUERY, {
    variables: { first },
  })
  if (errors || !data) return []
  const result = data as {
    collections: {
      edges: {
        node: {
          id: string
          title: string
          handle: string
          description: string
          image?: { url: string; altText?: string }
        }
      }[]
    }
  }
  return result.collections.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description,
    image: node.image,
  }))
}

export async function getProductByHandle(
  handle: string
): Promise<Product | null> {
  if (!process.env.SHOPIFY_STOREFRONT_API_URL) return null
  const { data, errors } = await shopifyClient.request(
    PRODUCT_BY_HANDLE_QUERY,
    { variables: { handle } }
  )
  if (errors || !data) return null
  const result = data as { product: Record<string, unknown> | null }
  if (!result.product) return null
  return normalizeProduct(result.product)
}

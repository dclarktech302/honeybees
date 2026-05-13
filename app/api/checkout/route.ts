import { NextRequest, NextResponse } from "next/server"
import { shopifyClient } from "@/lib/shopify"
import type { CartItem } from "@/lib/types"

const CREATE_CHECKOUT_MUTATION = `#graphql
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`

interface CheckoutRequestBody {
  items: CartItem[]
}

export async function POST(req: NextRequest) {
  const { items } = (await req.json()) as CheckoutRequestBody

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No items in cart" }, { status: 400 })
  }

  if (!process.env.SHOPIFY_STOREFRONT_API_URL) {
    return NextResponse.json(
      { error: "Shopify not configured" },
      { status: 503 }
    )
  }

  const lines = items.map((item) => ({
    merchandiseId: item.variantId,
    quantity: item.quantity,
  }))

  const { data, errors } = await shopifyClient.request(
    CREATE_CHECKOUT_MUTATION,
    { variables: { input: { lines } } }
  )

  if (errors) {
    console.error("Shopify checkout error:", errors)
    return NextResponse.json({ error: "Checkout creation failed" }, { status: 500 })
  }

  const result = data as {
    cartCreate: {
      cart: { id: string; checkoutUrl: string }
      userErrors: { field: string; message: string }[]
    }
  }

  if (result.cartCreate.userErrors.length > 0) {
    return NextResponse.json(
      { error: result.cartCreate.userErrors[0].message },
      { status: 422 }
    )
  }

  return NextResponse.json({
    checkoutUrl: result.cartCreate.cart.checkoutUrl,
  })
}

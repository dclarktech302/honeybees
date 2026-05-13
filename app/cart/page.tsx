"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cart"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-32 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/shop">Browse the Shop</Link>
        </Button>
      </div>
    )
  }

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    })
    const data = await res.json() as { checkoutUrl?: string }
    if (data.checkoutUrl) {
      window.location.href = data.checkoutUrl
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/shop">
            <ArrowLeft className="mr-1 h-4 w-4" /> Continue Shopping
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Items */}
        <div className="lg:col-span-2">
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.variantId} className="flex gap-5">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-muted">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-3xl">
                      🐝
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      {item.variantTitle !== "Default" && (
                        <p className="text-sm text-muted-foreground">
                          {item.variantTitle}
                        </p>
                      )}
                    </div>
                    <p className="font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-md border">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.variantId, item.quantity - 1)
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.variantId, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.variantId)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-muted-foreground">Calculated at checkout</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Estimated Total</span>
              <span>{formatPrice(total())}</span>
            </div>
            <Button
              className="mt-5 w-full"
              size="lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Secure checkout powered by Shopify
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

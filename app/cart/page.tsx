"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cart"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, checkoutUrl, isLoading } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-32 text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-[var(--color-secondary)]" />
        <h1 className="text-[22px] font-black text-[var(--color-ink)]">Your cart is empty</h1>
        <p className="mt-2 text-[14px] text-[var(--color-secondary)]">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/shop"
          className="mt-6 rounded-full bg-[var(--color-coral)] px-6 py-2.5 text-[14px] font-bold text-white hover:bg-[var(--color-coral-dark)]"
        >
          Browse the Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/shop">
            <ArrowLeft className="mr-1 h-4 w-4" /> Continue Shopping
          </Link>
        </Button>
        <h1 className="text-[24px] font-black text-[var(--color-ink)]">Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Items */}
        <div className="lg:col-span-2">
          <ul className="space-y-6">
            {items.map((item) => {
              const lineId = (item as typeof item & { lineId?: string }).lineId ?? item.variantId
              return (
                <li key={item.variantId} className="flex gap-5">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-[var(--color-topbar)]">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-3xl">🐝</div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold text-[var(--color-ink)]">{item.title}</p>
                        {item.variantTitle && item.variantTitle !== "Default Title" && (
                          <p className="text-[12px] text-[var(--color-secondary)]">{item.variantTitle}</p>
                        )}
                      </div>
                      <p className="font-semibold text-[var(--color-ink)]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)]">
                        <button
                          disabled={isLoading}
                          onClick={() => updateQuantity(lineId, item.quantity - 1)}
                          className="px-3 py-1.5 text-[var(--color-secondary)] hover:text-[var(--color-coral)] disabled:opacity-40"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-7 text-center text-[13px] font-semibold">{item.quantity}</span>
                        <button
                          disabled={isLoading}
                          onClick={() => updateQuantity(lineId, item.quantity + 1)}
                          className="px-3 py-1.5 text-[var(--color-secondary)] hover:text-[var(--color-coral)] disabled:opacity-40"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        disabled={isLoading}
                        onClick={() => removeItem(lineId)}
                        className="p-1.5 text-[var(--color-secondary)] hover:text-red-500 disabled:opacity-40"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Summary */}
        <div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
            <h2 className="mb-4 text-[16px] font-black text-[var(--color-ink)]">Order Summary</h2>
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[var(--color-secondary)]">Subtotal</span>
                <span className="font-semibold">{formatPrice(total())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-secondary)]">Shipping</span>
                <span className="text-[var(--color-secondary)]">Calculated at checkout</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between text-[15px] font-bold">
              <span>Estimated Total</span>
              <span>{formatPrice(total())}</span>
            </div>
            {checkoutUrl ? (
              <a
                href={checkoutUrl}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[var(--color-coral)] py-3.5 text-[14px] font-bold text-white hover:bg-[var(--color-coral-dark)]"
              >
                PROCEED TO CHECKOUT →
              </a>
            ) : (
              <button
                disabled
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[var(--color-coral)] py-3.5 text-[14px] font-bold text-white opacity-60"
              >
                PROCEED TO CHECKOUT →
              </button>
            )}
            <p className="mt-2 text-center text-[11px] text-[var(--color-secondary)]">
              Secure checkout powered by Shopify
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

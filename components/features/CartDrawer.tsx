"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { Minus, Plus, Trash2, ShoppingCart, X } from "lucide-react"
import { useCartStore } from "@/store/cart"
import { formatPrice } from "@/lib/utils"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } =
    useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border-soft)] px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-[var(--color-honey)]" />
                <h2 className="text-[16px] font-semibold text-[var(--color-ink)]">
                  Your Cart
                  {items.length > 0 && (
                    <span className="ml-1.5 text-[13px] font-normal text-[var(--color-secondary)]">
                      ({items.length} item{items.length !== 1 ? "s" : ""})
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-full p-1.5 transition-colors hover:bg-[var(--color-cream)]"
              >
                <X className="h-5 w-5 text-[var(--color-secondary)]" />
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
                <span className="text-5xl">🛒</span>
                <p className="text-[16px] font-semibold text-[var(--color-ink)]">
                  Your cart is empty
                </p>
                <p className="text-[13px] text-[var(--color-secondary)]">
                  Add some goodies and come back!
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="mt-2 rounded-full bg-[var(--color-honey)] px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-honey-dark)]"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Items list */}
                <ul className="flex-1 divide-y divide-[var(--color-border-soft)] overflow-y-auto px-5 py-2">
                  {items.map((item) => (
                    <li key={item.variantId} className="flex gap-4 py-4">
                      {/* Image */}
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-[var(--color-cream)]">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-2xl">
                            🐝
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[14px] font-semibold text-[var(--color-ink)] leading-tight">
                              {item.title}
                            </p>
                            {item.variantTitle !== "Default" && (
                              <p className="mt-0.5 text-[12px] text-[var(--color-secondary)]">
                                {item.variantTitle}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.variantId)}
                            aria-label="Remove item"
                            className="flex-shrink-0 rounded p-0.5 text-[var(--color-secondary)] transition-colors hover:text-red-500"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Qty */}
                          <div className="flex items-center rounded-lg border border-[var(--color-border-soft)]">
                            <button
                              onClick={() =>
                                updateQuantity(item.variantId, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="px-2.5 py-1 text-[var(--color-secondary)] transition-colors hover:text-[var(--color-honey)]"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="min-w-[20px] text-center text-[13px] font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.variantId, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="px-2.5 py-1 text-[var(--color-secondary)] transition-colors hover:text-[var(--color-honey)]"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          {/* Price */}
                          <span className="text-[14px] font-semibold text-[var(--color-honey)]">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-[var(--color-border-soft)] px-5 py-5">
                  <div className="flex items-center justify-between text-[15px]">
                    <span className="text-[var(--color-secondary)]">Subtotal</span>
                    <span className="font-bold text-[var(--color-ink)]">
                      {formatPrice(total())}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] text-[var(--color-secondary)]">
                    Shipping &amp; taxes calculated at checkout
                  </p>

                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="mt-4 flex w-full items-center justify-center rounded-full bg-[var(--color-honey)] py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[var(--color-honey-dark)]"
                  >
                    Checkout
                  </Link>
                  <button
                    onClick={closeCart}
                    className="mt-2 w-full text-center text-[13px] text-[var(--color-secondary)] underline underline-offset-2 hover:text-[var(--color-honey)]"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

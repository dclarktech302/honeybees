"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem } from "@/lib/types"
import { createCart, addToCart, removeFromCart, updateCartQuantity } from "@/lib/shopify"

interface CartStore {
  cartId: string | null
  checkoutUrl: string | null
  items: CartItem[]
  isOpen: boolean
  isLoading: boolean
  openCart: () => void
  closeCart: () => void
  initCart: () => Promise<void>
  addItem: (variantId: string, productInfo: Partial<CartItem>) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  updateQuantity: (lineId: string, quantity: number) => Promise<void>
  total: () => number
  itemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartId: null,
      checkoutUrl: null,
      items: [],
      isOpen: false,
      isLoading: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      initCart: async () => {
        if (get().cartId) return
        const result = await createCart()
        if (result) {
          set({ cartId: result.id, checkoutUrl: result.checkoutUrl })
        }
      },

      addItem: async (variantId, productInfo) => {
        set({ isLoading: true })
        try {
          let { cartId } = get()
          if (!cartId) {
            const result = await createCart()
            if (!result) return
            cartId = result.id
            set({ cartId, checkoutUrl: result.checkoutUrl })
          }
          const cart = await addToCart(cartId, variantId, 1)
          if (cart) {
            set({
              checkoutUrl: cart.checkoutUrl,
              items: cart.lines.map((line) => ({
                variantId: line.variantId,
                productId: line.productId,
                title: line.productTitle,
                variantTitle: line.variantTitle,
                price: line.price,
                quantity: line.quantity,
                image: line.image,
                lineId: line.id,
              } as CartItem & { lineId: string })),
            })
          }
        } finally {
          set({ isLoading: false })
        }
      },

      removeItem: async (lineId) => {
        const { cartId } = get()
        if (!cartId) return
        set({ isLoading: true })
        try {
          const cart = await removeFromCart(cartId, lineId)
          if (cart) {
            set({
              items: cart.lines.map((line) => ({
                variantId: line.variantId,
                productId: line.productId,
                title: line.productTitle,
                variantTitle: line.variantTitle,
                price: line.price,
                quantity: line.quantity,
                image: line.image,
                lineId: line.id,
              } as CartItem & { lineId: string })),
            })
          }
        } finally {
          set({ isLoading: false })
        }
      },

      updateQuantity: async (lineId, quantity) => {
        const { cartId } = get()
        if (!cartId) return
        if (quantity <= 0) {
          await get().removeItem(lineId)
          return
        }
        set({ isLoading: true })
        try {
          const cart = await updateCartQuantity(cartId, lineId, quantity)
          if (cart) {
            set({
              items: cart.lines.map((line) => ({
                variantId: line.variantId,
                productId: line.productId,
                title: line.productTitle,
                variantTitle: line.variantTitle,
                price: line.price,
                quantity: line.quantity,
                image: line.image,
                lineId: line.id,
              } as CartItem & { lineId: string })),
            })
          }
        } finally {
          set({ isLoading: false })
        }
      },

      total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: "honeybee-cart",
      partialize: (state) => ({ cartId: state.cartId, checkoutUrl: state.checkoutUrl }),
    }
  )
)

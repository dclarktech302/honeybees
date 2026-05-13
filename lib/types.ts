export interface Product {
  id: string
  title: string
  handle: string
  description: string
  price: number
  compareAtPrice?: number
  images: ProductImage[]
  variants: Variant[]
  collections: string[]
  rating?: number
  reviewCount?: number
}

export interface ProductImage {
  id: string
  url: string
  altText?: string
  width?: number
  height?: number
}

export interface Variant {
  id: string
  title: string
  price: number
  availableForSale: boolean
  selectedOptions: SelectedOption[]
}

export interface SelectedOption {
  name: string
  value: string
}

export interface CartItem {
  variantId: string
  productId: string
  title: string
  variantTitle: string
  price: number
  quantity: number
  image?: string
}

export interface Collection {
  id: string
  title: string
  handle: string
  description: string
  image?: {
    url: string
    altText?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  customRequest?: string
}

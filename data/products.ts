import type { Product, Collection } from "@/lib/types"

// ─── Collections ──────────────────────────────────────────────────────────────

export const placeholderCollections: Collection[] = [
  {
    id: "col-1",
    title: "Apparel",
    handle: "apparel",
    description: "Custom sublimation shirts, hoodies & more.",
  },
  {
    id: "col-2",
    title: "Drinkware",
    handle: "drinkware",
    description: "Personalized tumblers, mugs & water bottles.",
  },
  {
    id: "col-3",
    title: "Keychains",
    handle: "keychains",
    description: "Custom acrylic & sublimation keychains.",
  },
  {
    id: "col-4",
    title: "Stickers & Decals",
    handle: "stickers-decals",
    description: "Waterproof vinyl decals & sticker sheets.",
  },
  {
    id: "col-5",
    title: "Gift Ideas",
    handle: "gift-ideas",
    description: "Perfect custom gifts for every occasion.",
  },
  {
    id: "col-6",
    title: "Bundles",
    handle: "bundles",
    description: "Bundle & save on your favorite HoneyBee items.",
  },
]

// ─── Featured products (seeded from real Shopify store names) ─────────────────

export const placeholderProducts: Product[] = [
  {
    id: "prod-1",
    title: "Bee Kind Tumbler",
    handle: "bee-kind-tumbler",
    description:
      "Sip in style with this adorable Bee Kind sublimation tumbler. Full wraparound print, double-walled insulation keeps drinks cold for 24h or hot for 12h.",
    price: 24.99,
    images: [],
    variants: [
      {
        id: "var-1-20oz",
        title: "20oz",
        price: 24.99,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "20oz" }],
      },
      {
        id: "var-1-30oz",
        title: "30oz",
        price: 29.99,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "30oz" }],
      },
    ],
    collections: ["drinkware"],
    // TODO: add real images from Drive
    rating: 5,
    reviewCount: 128,
  },
  {
    id: "prod-2",
    title: "Mama Bee Hoodie",
    handle: "mama-bee-hoodie",
    description:
      "Cozy sublimation hoodie for every mama bee out there. Soft-feel fabric, full-color print that stays vibrant wash after wash.",
    price: 32.00,
    images: [],
    variants: [
      {
        id: "var-2-s",
        title: "Small",
        price: 32.00,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "var-2-m",
        title: "Medium",
        price: 32.00,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "var-2-l",
        title: "Large",
        price: 32.00,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
    collections: ["apparel"],
    rating: 5,
    reviewCount: 96,
  },
  {
    id: "prod-3",
    title: "You Are My Sunshine Pillow",
    handle: "you-are-my-sunshine-pillow",
    description:
      "Brighten any room with this heartfelt sublimation throw pillow. Vibrant full-color print, soft polyester cover, 18\" × 18\" insert included.",
    price: 28.50,
    images: [],
    variants: [
      {
        id: "var-3-default",
        title: "18\" × 18\"",
        price: 28.50,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "18×18" }],
      },
    ],
    collections: ["home-lifestyle"],
    rating: 5,
    reviewCount: 74,
  },
  {
    id: "prod-4",
    title: "Radiate Kindness Keychain",
    handle: "radiate-kindness-keychain",
    description:
      "Double-sided acrylic keychain with a vibrant Radiate Kindness sublimation print. Lightweight, durable, and makes a perfect little gift!",
    price: 9.99,
    images: [],
    variants: [
      {
        id: "var-4-default",
        title: "Standard",
        price: 9.99,
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Standard" }],
      },
    ],
    collections: ["keychains"],
    rating: 5,
    reviewCount: 89,
  },
  {
    id: "prod-5",
    title: "Blessed Mama Car Coasters",
    handle: "blessed-mama-car-coasters",
    description:
      "Set of 2 neoprene car coasters with a beautiful Blessed Mama sublimation print. Fits most cup holders, non-slip bottom.",
    price: 12.99,
    images: [],
    variants: [
      {
        id: "var-5-default",
        title: "Set of 2",
        price: 12.99,
        availableForSale: true,
        selectedOptions: [{ name: "Quantity", value: "Set of 2" }],
      },
    ],
    collections: ["car-coasters"],
    rating: 5,
    reviewCount: 112,
  },
  {
    id: "prod-6",
    title: "Adventure Awaits Decal",
    handle: "adventure-awaits-decal",
    description:
      "Waterproof vinyl decal perfect for water bottles, laptops, car windows, and more. UV-resistant ink keeps colors bold.",
    price: 3.99,
    images: [],
    variants: [
      {
        id: "var-6-sm",
        title: "Small 3\"",
        price: 3.99,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "Small 3\"" }],
      },
      {
        id: "var-6-lg",
        title: "Large 5\"",
        price: 5.99,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "Large 5\"" }],
      },
    ],
    collections: ["stickers-decals"],
    rating: 4,
    reviewCount: 78,
  },
]

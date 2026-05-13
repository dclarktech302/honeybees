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
    title: "Turtley Awesome",
    handle: "turtley-awesome",
    description:
      "Show the world just how awesome you are with this adorable turtle sublimation tee. Full-color, edge-to-edge print that won't crack or fade!",
    price: 20.0,
    images: [],
    variants: [
      {
        id: "var-1-s",
        title: "Small",
        price: 20.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "var-1-m",
        title: "Medium",
        price: 20.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "var-1-l",
        title: "Large",
        price: 20.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
    collections: ["apparel"],
    // TODO: add real images from Drive
    rating: 5,
    reviewCount: 42,
  },
  {
    id: "prod-2",
    title: "Turtley Kids",
    handle: "turtley-kids",
    description:
      "Adorable turtle-themed sublimation shirt for the little ones. Super soft, vibrant colors, and designed to last through all the adventures!",
    price: 18.0,
    images: [],
    variants: [
      {
        id: "var-2-xs",
        title: "XS",
        price: 18.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
      },
      {
        id: "var-2-s",
        title: "Small",
        price: 18.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
    ],
    collections: ["apparel"],
    rating: 5,
    reviewCount: 28,
  },
  {
    id: "prod-3",
    title: "Turtley Coasters",
    handle: "turtley-coasters",
    description:
      "Set of 4 custom sublimation coasters featuring the beloved Turtley design. Perfect for your home or as a gift!",
    price: 6.0,
    images: [],
    variants: [
      {
        id: "var-3-default",
        title: "Set of 4",
        price: 6.0,
        availableForSale: true,
        selectedOptions: [{ name: "Quantity", value: "Set of 4" }],
      },
    ],
    collections: ["gift-ideas"],
    rating: 5,
    reviewCount: 17,
  },
  {
    id: "prod-4",
    title: "Turtley Decals",
    handle: "turtley-decals",
    description:
      "Waterproof vinyl decal featuring the fan-favorite Turtley design. Sticks to cars, water bottles, laptops — anywhere you want to spread some joy!",
    price: 5.0,
    images: [],
    variants: [
      {
        id: "var-4-sm",
        title: "Small (3\")",
        price: 5.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "Small 3\"" }],
      },
      {
        id: "var-4-lg",
        title: "Large (5\")",
        price: 7.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "Large 5\"" }],
      },
    ],
    collections: ["stickers-decals"],
    rating: 5,
    reviewCount: 61,
  },
  {
    id: "prod-5",
    title: "Turtley Keychains",
    handle: "turtley-keychains",
    description:
      "Custom acrylic keychain with a vibrant Turtley sublimation print. Double-sided, lightweight, and the perfect bag charm!",
    price: 5.0,
    images: [],
    variants: [
      {
        id: "var-5-default",
        title: "Default",
        price: 5.0,
        availableForSale: true,
        selectedOptions: [{ name: "Style", value: "Standard" }],
      },
    ],
    collections: ["keychains"],
    rating: 5,
    reviewCount: 33,
  },
  {
    id: "prod-6",
    title: "Small Town Christmas",
    handle: "small-town-christmas",
    description:
      "Celebrate small-town holiday vibes with this cozy sublimation tee. A warm, festive design that makes the perfect Christmas gift!",
    price: 20.0,
    images: [],
    variants: [
      {
        id: "var-6-s",
        title: "Small",
        price: 20.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "var-6-m",
        title: "Medium",
        price: 20.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "var-6-l",
        title: "Large",
        price: 20.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
    collections: ["apparel"],
    rating: 5,
    reviewCount: 19,
  },
]

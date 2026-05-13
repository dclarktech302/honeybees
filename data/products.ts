import type { Product, Collection } from "@/lib/types"

export const placeholderCollections: Collection[] = [
  {
    id: "col-1",
    title: "T-Shirts",
    handle: "t-shirts",
    description: "Custom sublimation printed t-shirts with vibrant, lasting color.",
    image: { url: "/images/collection-tshirts.jpg", altText: "T-Shirts collection" },
  },
  {
    id: "col-2",
    title: "Hoodies",
    handle: "hoodies",
    description: "All-over print hoodies crafted for comfort and style.",
    image: { url: "/images/collection-hoodies.jpg", altText: "Hoodies collection" },
  },
  {
    id: "col-3",
    title: "Tumblers",
    handle: "tumblers",
    description: "Personalized sublimation tumblers — perfect for everyday use.",
    image: { url: "/images/collection-tumblers.jpg", altText: "Tumblers collection" },
  },
  {
    id: "col-4",
    title: "Bundles",
    handle: "bundles",
    description: "Mix-and-match bundle deals for the best value.",
    image: { url: "/images/collection-bundles.jpg", altText: "Bundles collection" },
  },
]

export const placeholderProducts: Product[] = [
  {
    id: "prod-1",
    title: "Honeybee Classic Tee",
    handle: "honeybee-classic-tee",
    description:
      "Soft, vibrant sublimation-printed tee featuring original HoneyBee Designs artwork. Full-color, edge-to-edge print that won't crack or fade.",
    price: 32.0,
    compareAtPrice: 40.0,
    images: [
      {
        id: "img-1",
        url: "/images/product-tee-1.jpg",
        altText: "Honeybee Classic Tee front",
      },
    ],
    variants: [
      {
        id: "var-1-s",
        title: "Small",
        price: 32.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "var-1-m",
        title: "Medium",
        price: 32.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "var-1-l",
        title: "Large",
        price: 32.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
      {
        id: "var-1-xl",
        title: "XL",
        price: 32.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XL" }],
      },
    ],
    collections: ["t-shirts"],
  },
  {
    id: "prod-2",
    title: "Golden Hour Hoodie",
    handle: "golden-hour-hoodie",
    description:
      "All-over sublimation hoodie with a warm golden-hour sunset design. Heavyweight fleece, kangaroo pocket, and a print that lasts.",
    price: 58.0,
    images: [
      {
        id: "img-2",
        url: "/images/product-hoodie-1.jpg",
        altText: "Golden Hour Hoodie front",
      },
    ],
    variants: [
      {
        id: "var-2-s",
        title: "Small",
        price: 58.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "var-2-m",
        title: "Medium",
        price: 58.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "var-2-l",
        title: "Large",
        price: 58.0,
        availableForSale: false,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
    collections: ["hoodies"],
  },
  {
    id: "prod-3",
    title: "HoneyBee Tumbler 20oz",
    handle: "honeybee-tumbler-20oz",
    description:
      "Stainless steel 20oz tumbler with full-wrap sublimation design. Keeps drinks cold 24hrs, hot 12hrs. BPA-free lid included.",
    price: 28.0,
    images: [
      {
        id: "img-3",
        url: "/images/product-tumbler-1.jpg",
        altText: "HoneyBee Tumbler 20oz",
      },
    ],
    variants: [
      {
        id: "var-3-default",
        title: "Default",
        price: 28.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "20oz" }],
      },
      {
        id: "var-3-30oz",
        title: "30oz",
        price: 34.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "30oz" }],
      },
    ],
    collections: ["tumblers"],
  },
  {
    id: "prod-4",
    title: "Starter Bundle",
    handle: "starter-bundle",
    description:
      "Get the full HoneyBee experience: 1 Classic Tee + 1 Tumbler at a bundled price.",
    price: 52.0,
    compareAtPrice: 60.0,
    images: [
      {
        id: "img-4",
        url: "/images/product-bundle-1.jpg",
        altText: "HoneyBee Starter Bundle",
      },
    ],
    variants: [
      {
        id: "var-4-default",
        title: "Default",
        price: 52.0,
        availableForSale: true,
        selectedOptions: [{ name: "Bundle", value: "Standard" }],
      },
    ],
    collections: ["bundles"],
  },
]

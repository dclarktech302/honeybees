"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"

interface FeaturedProductsProps {
  products: Product[]
}

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center justify-center" style={{ gap: "4px", marginTop: "4px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: "11px",
            color: i < rating ? "#F5C842" : "var(--color-gray-light)",
          }}
        >
          ★
        </span>
      ))}
      {reviews > 0 && (
        <span style={{ fontSize: "11px", color: "var(--color-gray)", marginLeft: "2px" }}>
          ({reviews})
        </span>
      )}
    </div>
  )
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.7
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" })
  }

  return (
    <section style={{ backgroundColor: "var(--color-surface)", padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <h2
          className="text-center font-bold"
          style={{
            fontSize: "24px",
            color: "var(--color-black)",
            marginBottom: "24px",
          }}
        >
          ♥ FEATURED PRODUCTS ♥
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute z-10 hidden lg:flex items-center justify-center transition-colors"
            style={{
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-primary)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)"
            }}
          >
            <ChevronLeft style={{ width: "16px", height: "16px", color: "var(--color-black)" }} />
          </button>

          {/* Cards track */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex"
            style={{ gap: "12px", overflow: "hidden" }}
          >
            {products.map((p) => {
              const collection = p.collections[0] ?? "shop"
              const href = `/shop/${collection}/${p.handle}`
              const image = p.images[0]

              return (
                <Link
                  key={p.id}
                  href={href}
                  className="group flex-shrink-0 transition-transform"
                  style={{
                    width: "calc((100% - 5 * 12px) / 6)",
                    minWidth: "140px",
                    textDecoration: "none",
                    cursor: "pointer",
                    paddingBottom: "8px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      backgroundColor: "#F9F5F0",
                      borderRadius: "8px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={image.url}
                        alt={image.altText ?? p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      /* TODO: real product image */
                      <ImageIcon
                        style={{ width: "32px", height: "32px", color: "var(--color-gray)" }}
                      />
                    )}
                  </div>

                  {/* Name */}
                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-black)",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {p.title}
                  </p>

                  {/* Stars */}
                  <StarRating rating={p.rating ?? 5} reviews={p.reviewCount ?? 0} />

                  {/* Price */}
                  <p
                    style={{
                      marginTop: "4px",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--color-black)",
                      textAlign: "center",
                    }}
                  >
                    {formatPrice(p.price)}
                  </p>
                </Link>
              )
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute z-10 hidden lg:flex items-center justify-center transition-colors"
            style={{
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-primary)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)"
            }}
          >
            <ChevronRight style={{ width: "16px", height: "16px", color: "var(--color-black)" }} />
          </button>
        </div>
      </div>
    </section>
  )
}

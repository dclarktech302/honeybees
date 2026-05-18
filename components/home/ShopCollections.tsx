import Link from "next/link"

const COLLECTIONS = [
  {
    name: "DOG TAGS",
    handle: "dog-tags",
    // TODO: real collection photo from Drive (dark bg, dog tag photo)
    placeholder: "#1A1A1A",
  },
  {
    name: "CAR COASTERS",
    handle: "car-coasters",
    // TODO: real collection photo (dark bg, sunflower coaster)
    placeholder: "#2D2D2D",
  },
  {
    name: "VINYL DECALS",
    handle: "vinyl-decals",
    // TODO: real collection photo (black bg, mountain decal)
    placeholder: "#1A1A1A",
  },
  {
    name: "STICKERS",
    handle: "stickers-decals",
    // TODO: real collection photo (checkered bg, "Good Vibes")
    placeholder: "#E8D5C4",
  },
  {
    name: "CUSTOM SIGNS",
    handle: "custom-signs",
    // TODO: real collection photo (cream bg, "home sweet home")
    placeholder: "#F5ECD7",
  },
  {
    name: "GIFT IDEAS",
    handle: "gift-ideas",
    // TODO: real collection photo (pink bg, gift box + mug)
    placeholder: "#FFE4E8",
  },
]

export function ShopCollections() {
  return (
    <section style={{ backgroundColor: "var(--color-bg)", padding: "48px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <h2
          className="text-center font-bold"
          style={{ fontSize: "24px", color: "var(--color-black)", marginBottom: "32px" }}
        >
          ♥ SHOP OUR COLLECTIONS ♥
        </h2>

        {/* 6-tile grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" style={{ gap: "8px" }}>
          {COLLECTIONS.map(({ name, handle, placeholder }) => (
            <Link
              key={handle}
              href={`/shop/${handle}`}
              className="block overflow-hidden relative transition-transform duration-[250ms] hover:scale-[1.03]"
              style={{
                aspectRatio: "1/1",
                borderRadius: "12px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              {/* Image area — full tile */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: placeholder }}
              >
                {/* TODO: real collection photo */}
              </div>

              {/* Label overlay — gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 text-center"
                style={{
                  background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                  padding: "20px 8px 8px",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

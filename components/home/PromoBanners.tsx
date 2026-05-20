import Link from "next/link"
import { Truck } from "lucide-react"

export function PromoBanners() {
  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-4">

        {/* Panel 1 — Custom Order */}
        <div
          className="flex flex-col justify-between"
          style={{
            backgroundColor: "var(--color-black)",
            padding: "28px 24px",
            minHeight: "220px",
          }}
        >
          <div>
            <p
              className="text-white"
              style={{ fontFamily: "var(--font-montserrat)", fontSize: "18px", fontWeight: 700, lineHeight: 1.2 }}
            >
              🐝 NEED SOMETHING
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "30px",
                fontWeight: 900,
                color: "var(--color-primary)",
                lineHeight: 1.1,
              }}
            >
              CUSTOM?
            </p>
            <p
              className="text-white"
              style={{ fontFamily: "var(--font-montserrat)", fontSize: "14px", fontWeight: 600, marginTop: "4px" }}
            >
              WE&apos;VE GOT YOU!
            </p>
          </div>
          <Link
            href="/contact"
            className="text-white inline-block transition-colors hover:bg-[var(--color-primary-dark)]"
            style={{
              backgroundColor: "var(--color-primary)",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontFamily: "var(--font-montserrat)",
              fontSize: "12px",
              fontWeight: 700,
              marginTop: "48px",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            CUSTOM ORDER →
          </Link>
        </div>

        {/* Panel 2 — Free Shipping */}
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "28px 24px",
            minHeight: "220px",
          }}
        >
          <p
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "22px", fontWeight: 900, color: "var(--color-black)" }}
          >
            🚚 FREE SHIPPING
          </p>
          <p
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "26px", fontWeight: 900, color: "var(--color-primary)" }}
          >
            ON ORDERS $75+
          </p>
          <Truck style={{ width: "48px", height: "48px", color: "var(--color-primary)", marginTop: "32px" }} />
        </div>

        {/* Panel 3 — Be Kind */}
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#FFF0E8", padding: "28px 24px", minHeight: "220px" }}
        >
          <p
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "28px", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1.1 }}
          >
            🌸 BE KIND
          </p>
          <p
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "28px", fontWeight: 900, color: "var(--color-black)", lineHeight: 1.1 }}
          >
            🌻 BE HAPPY
          </p>
          <p
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "28px", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1.1 }}
          >
            🐝 BE YOU
          </p>
        </div>

        {/* Panel 4 — Thank You */}
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "28px 24px",
            minHeight: "220px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-pacifico)",
              fontSize: "26px",
              color: "var(--color-primary)",
              marginBottom: "4px",
            }}
          >
            💛 THANK YOU!
          </p>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "14px", color: "var(--color-black)" }}>
            for supporting my
          </p>
          <p style={{ fontFamily: "var(--font-montserrat)", fontSize: "14px", fontWeight: 700, color: "var(--color-black)" }}>
            small business!
          </p>
          <span style={{ fontSize: "20px", marginTop: "32px", display: "block" }}>🌻</span>
        </div>

      </div>
    </section>
  )
}

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
            <p className="font-bold text-white" style={{ fontSize: "18px", lineHeight: 1.2 }}>
              NEED SOMETHING
            </p>
            <p
              className="font-black"
              style={{ fontSize: "28px", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1.1 }}
            >
              CUSTOM?
            </p>
            <p className="font-bold text-white" style={{ fontSize: "14px", marginTop: "4px" }}>
              WE&apos;VE GOT YOU!
            </p>
          </div>
          {/* TODO: bee mascot illustration holding heart */}
          <Link
            href="/contact"
            className="font-bold text-white inline-block transition-colors hover:bg-[var(--color-primary-dark)]"
            style={{
              backgroundColor: "var(--color-primary)",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "12px",
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
          <p className="font-black" style={{ fontSize: "22px", fontWeight: 900, color: "var(--color-black)" }}>
            FREE SHIPPING
          </p>
          <p className="font-black" style={{ fontSize: "26px", fontWeight: 900, color: "var(--color-primary)" }}>
            ON ORDERS $75+
          </p>
          {/* TODO: pink delivery truck illustration */}
          <Truck style={{ width: "48px", height: "48px", color: "var(--color-primary)", marginTop: "32px" }} />
        </div>

        {/* Panel 3 — Be Kind */}
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#FFF0F0", padding: "28px 24px", minHeight: "220px" }}
        >
          {/* TODO: floral/bee decoration */}
          <p className="font-black" style={{ fontSize: "28px", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1.1 }}>BE KIND</p>
          <p className="font-black" style={{ fontSize: "28px", fontWeight: 900, color: "var(--color-black)", lineHeight: 1.1 }}>BE HAPPY</p>
          <p className="font-black" style={{ fontSize: "28px", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1.1 }}>BE YOU</p>
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
          {/* TODO: bee + heart illustration */}
          <p style={{ fontSize: "28px", fontWeight: 700, fontStyle: "italic", color: "var(--color-primary)" }}>
            THANK YOU!
          </p>
          <p style={{ fontSize: "14px", color: "var(--color-black)" }}>for supporting my</p>
          <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-black)" }}>small business!</p>
          <span style={{ fontSize: "20px", color: "var(--color-primary)", marginTop: "32px", display: "block" }}>♥</span>
        </div>

      </div>
    </section>
  )
}

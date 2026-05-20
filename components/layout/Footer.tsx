import Link from "next/link"

const SHOP_LINKS = [
  { label: "All Products",      href: "/shop" },
  { label: "Custom Apparel",    href: "/shop/custom-apparel" },
  { label: "Drinkware",         href: "/shop/drinkware" },
  { label: "Accessories",       href: "/shop/accessories" },
  { label: "Home & Lifestyle",  href: "/shop/home-lifestyle" },
  { label: "Stickers & Decals", href: "/shop/stickers-decals" },
  { label: "New Arrivals",      href: "/shop/new-arrivals" },
  { label: "Gift Ideas",        href: "/shop/gift-ideas" },
  { label: "Sale",              href: "/shop/sale" },
]

const HELP_LINKS = [
  { label: "FAQ",               href: "#" },
  { label: "Shipping & Returns",href: "#" },
  { label: "Order Tracking",    href: "#" },
  { label: "Care Instructions", href: "#" },
  { label: "Size Charts",       href: "#" },
  { label: "Contact Us",        href: "/contact" },
  { label: "Terms of Service",  href: "#" },
]

const ABOUT_LINKS = [
  { label: "Our Story",         href: "/about" },
  { label: "Reviews",           href: "#" },
  { label: "Wholesale",         href: "#" },
  { label: "Custom Orders",     href: "/contact" },
]

const PAYMENT_METHODS = ["VISA", "MC", "AMEX", "DISCOVER", "APPLE PAY", "G PAY", "PAYPAL", "SHOPIFY"]

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        paddingTop: "48px",
        paddingBottom: "24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="inline-block leading-none">
              {/* TODO: swap with real logo PNG from Drive */}
              {/* <img src="/images/logo.png" height="80" alt="HoneyBee Designs" /> */}
              <span
                className="block font-black tracking-tight"
                style={{ fontSize: "24px", color: "var(--color-gold)" }}
              >
                HONEYBEE
              </span>
              <span
                className="block italic tracking-widest"
                style={{ fontSize: "14px", fontWeight: 400, color: "var(--color-black)", marginTop: "-2px" }}
              >
                designs
              </span>
            </Link>
            <p className="mt-3 italic" style={{ fontSize: "13px", color: "var(--color-gray)" }}>
              Cute. Custom. Made for you!
            </p>
            <p style={{ marginTop: "8px", fontSize: "13px", color: "var(--color-gray)", lineHeight: 1.6, maxWidth: "200px" }}>
              Thank you for supporting my small business. Every order means the world to me!
            </p>
          </div>

          {/* Col 2 — Shop */}
          <div>
            <p
              className="mb-3 font-bold uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--color-black)" }}
            >
              SHOP
            </p>
            <ul>
              {SHOP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="block leading-loose transition-colors hover:text-[var(--color-primary)]"
                    style={{ fontSize: "13px", color: "var(--color-gray)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Help */}
          <div>
            <p
              className="mb-3 font-bold uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--color-black)" }}
            >
              HELP
            </p>
            <ul>
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="block leading-loose transition-colors hover:text-[var(--color-primary)]"
                    style={{ fontSize: "13px", color: "var(--color-gray)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — About + We Accept */}
          <div>
            <p
              className="mb-3 font-bold uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--color-black)" }}
            >
              ABOUT
            </p>
            <ul>
              {ABOUT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="block leading-loose transition-colors hover:text-[var(--color-primary)]"
                    style={{ fontSize: "13px", color: "var(--color-gray)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "16px" }}>
              <p
                className="mb-2 font-bold uppercase"
                style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--color-black)" }}
              >
                WE ACCEPT
              </p>
              <div className="flex flex-wrap gap-1">
                {PAYMENT_METHODS.map((m) => (
                  <span
                    key={m}
                    className="rounded"
                    style={{
                      border: "1px solid var(--color-border)",
                      padding: "3px 6px",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "var(--color-gray)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-2 border-t pt-4 sm:flex-row"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p style={{ fontSize: "11px", color: "var(--color-gray)" }}>
            © 2024, Honey Bee Designs. All rights reserved.
          </p>
          <p className="italic" style={{ fontSize: "11px", color: "var(--color-gray)" }}>
            Unique designs made just for you! ✨
          </p>
          <p style={{ fontSize: "11px", color: "var(--color-gray)" }}>
            <Link href="#" className="transition-colors hover:text-[var(--color-primary)]" style={{ color: "var(--color-gray)" }}>
              Privacy Policy
            </Link>
            {" | "}
            <Link href="#" className="transition-colors hover:text-[var(--color-primary)]" style={{ color: "var(--color-gray)" }}>
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

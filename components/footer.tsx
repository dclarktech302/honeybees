import Link from "next/link"
import { Hexagon, Globe, Share2, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Hexagon className="h-6 w-6 text-honey fill-honey/20" />
              <span className="text-lg font-bold">
                HoneyBee <span className="text-honey">Designs</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-cream/70">
              Custom sublimation merch made with love. Vibrant. Lasting. Yours.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/60 transition-colors hover:text-honey"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/60 transition-colors hover:text-honey"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/60 transition-colors hover:text-honey"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-honey">
              Shop
            </h3>
            <ul className="mt-4 space-y-2">
              {["T-Shirts", "Hoodies", "Tumblers", "Bundles"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/shop/${item.toLowerCase()}`}
                    className="text-sm text-cream/70 hover:text-honey transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-honey">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Custom Orders", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-honey transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-honey">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-cream/70 hover:text-honey transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          &copy; {new Date().getFullYear()} HoneyBee Designs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

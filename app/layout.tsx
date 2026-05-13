import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/components/layout/TopBar"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/features/CartDrawer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "HoneyBee Designs | Cute. Custom. Made for You.",
    template: "%s | HoneyBee Designs",
  },
  description:
    "Custom sublimation apparel, drinkware, accessories and gifts. Handmade with love, shipped with smiles.",
  keywords: [
    "sublimation",
    "custom merch",
    "custom apparel",
    "personalized gifts",
    "drinkware",
    "keychains",
    "decals",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://honeybeedesigns.com",
    siteName: "HoneyBee Designs",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--color-cream)] text-[var(--color-ink)]">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}

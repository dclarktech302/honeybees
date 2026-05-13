import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/features/CartDrawer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "HoneyBee Designs — Custom Sublimation Merch",
    template: "%s | HoneyBee Designs",
  },
  description:
    "Vibrant, lasting custom sublimation merch — t-shirts, hoodies, tumblers, and bundles. Made to order, shipped with love.",
  keywords: ["sublimation", "custom merch", "t-shirts", "hoodies", "tumblers"],
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
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}

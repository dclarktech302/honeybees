import { HeroSection } from "@/components/home/HeroSection"
import { TrustBar } from "@/components/home/TrustBar"
import { MarqueeBar } from "@/components/home/MarqueeBar"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { HowItWorks } from "@/components/home/HowItWorks"
import { CustomOrderCTA } from "@/components/home/CustomOrderCTA"
import { EmailSignup } from "@/components/home/EmailSignup"
import { placeholderProducts } from "@/data/products"

const MARQUEE_ITEMS = [
  "Custom Apparel",
  "Drinkware",
  "Keychains",
  "Car Accessories",
  "Stickers",
  "Gift Ideas",
  "Business Cards",
  "Bundles",
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <MarqueeBar items={MARQUEE_ITEMS} />
      <CategoryGrid />
      <FeaturedProducts products={placeholderProducts} />
      <HowItWorks />
      <CustomOrderCTA />
      <EmailSignup />
    </>
  )
}

import { HeroSection } from "@/components/home/HeroSection"
import { TrustBar } from "@/components/home/TrustBar"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { PromoBanners } from "@/components/home/PromoBanners"
import { HowItWorks } from "@/components/home/HowItWorks"
import { ShopCollections } from "@/components/home/ShopCollections"
import { EmailSignup } from "@/components/home/EmailSignup"
import { placeholderProducts } from "@/data/products"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoryGrid />
      <FeaturedProducts products={placeholderProducts} />
      <PromoBanners />
      <HowItWorks />
      <ShopCollections />
      <EmailSignup />
    </>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CustomOrderCTA() {
  return (
    <section
      className="py-16 text-center"
      style={{ backgroundColor: "var(--color-honey)" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black tracking-tight text-white">
          Need Something Custom?
        </h2>
        <p className="mt-1 text-2xl font-semibold text-white/90">
          We&apos;ve Got You!
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/80">
          Have a special request? Let&apos;s make it exactly how you want!{" "}
          I craft it with care and get it shipped right to you!
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[var(--color-honey)] shadow-md transition-all hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
        >
          Custom Order <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

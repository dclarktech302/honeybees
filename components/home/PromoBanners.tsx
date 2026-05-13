import Link from "next/link"

export function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

        {/* Panel 1 — Custom Order (black bg) */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[var(--color-ink)] p-6 text-center">
          <div>
            <p className="text-[18px] font-black leading-tight text-[var(--color-coral)]">
              NEED SOMETHING CUSTOM?
            </p>
            <p className="mt-1 text-[16px] font-bold text-white">WE&apos;VE GOT YOU!</p>
          </div>
          {/* TODO: add bee mascot image */}
          <div className="my-2 text-4xl">🐝</div>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-coral)] px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[var(--color-coral-dark)]"
          >
            CUSTOM ORDER →
          </Link>
        </div>

        {/* Panel 2 — Free Shipping */}
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 text-center">
          {/* TODO: add truck illustration */}
          <div className="text-4xl">🚚</div>
          <p className="text-[20px] font-black text-[var(--color-ink)]">FREE SHIPPING</p>
          <p className="text-[18px] font-black text-[var(--color-coral)]">ON ORDERS $75+</p>
        </div>

        {/* Panel 3 — Be Kind */}
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-topbar)] p-6 text-center">
          {/* TODO: add floral/bee illustration */}
          <div className="text-3xl">🌸</div>
          <p className="text-[22px] font-black leading-tight text-[var(--color-coral)]">BE KIND</p>
          <p className="text-[22px] font-black leading-tight text-[var(--color-ink)]">BE HAPPY</p>
          <p className="text-[22px] font-black leading-tight text-[var(--color-coral)]">BE YOU</p>
        </div>

        {/* Panel 4 — Thank You */}
        <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center">
          {/* TODO: add bee heart illustration */}
          <div className="text-4xl">🐝❤️</div>
          <p className="text-[22px] font-black italic text-[var(--color-coral)]">THANK YOU!</p>
          <p className="text-[13px] text-[var(--color-secondary)]">
            for supporting my small business!
          </p>
        </div>

      </div>
    </section>
  )
}

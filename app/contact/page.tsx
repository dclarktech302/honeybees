import { Metadata } from "next"
import { Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/features/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HoneyBee Designs — custom orders, bulk pricing, and general inquiries welcome.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          Questions, custom orders, or just want to say hi? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Contact info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-honey/15">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                hello@honeybeedesigns.com
              </p>
              <p className="text-sm text-muted-foreground">
                We reply within 1 business day.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-honey/15">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Mon–Fri: 9am – 5pm CST
              </p>
              <p className="text-sm text-muted-foreground">
                Weekends: Closed
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-honey/15">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Based in the USA. Shipping worldwide.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-honey/10 p-4">
            <h3 className="font-semibold text-honey-dark">Custom Orders</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Looking for a fully custom design, bulk order, or team package? Use
              the form and describe your vision — we&apos;ll send a quote within 24hrs.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

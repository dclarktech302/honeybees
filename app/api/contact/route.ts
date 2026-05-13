import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { ContactEmail } from "@/components/emails/ContactEmail"
import type { ContactFormData } from "@/lib/types"

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactFormData

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL ?? "hello@honeybeedesigns.com"

  const { error } = await resend.emails.send({
    from: "HoneyBee Designs <noreply@honeybeedesigns.com>",
    to,
    subject: `New Contact Message from ${body.name}`,
    react: ContactEmail({ data: body }),
    replyTo: body.email,
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

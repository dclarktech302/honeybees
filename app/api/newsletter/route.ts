import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = (await req.json()) as { email?: string }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  // TODO: integrate Resend audience / email list API here
  console.log("[newsletter] new subscriber:", email)

  return NextResponse.json({ success: true })
}

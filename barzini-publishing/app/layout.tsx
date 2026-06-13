import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Barzini Publishing',
  description: 'Barzini Publishing — label management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} style={{ background: 'var(--background)' }}>
      <body>{children}</body>
    </html>
  )
}

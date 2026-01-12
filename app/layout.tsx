import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Taffon Advisory Consultancy LLP | Stock Advisory & Financial Services",
  description:
    "Professional stock advisory and financial consultancy services. Expert guidance for wealth management and investment strategies.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/taffon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/taffon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/taffon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

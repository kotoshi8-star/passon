import type React from "react"
import type { Metadata } from "next"
import { Zen_Kaku_Gothic_New, Shippori_Mincho } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const zenKaku = Zen_Kaku_Gothic_New({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans"
})

const shippori = Shippori_Mincho({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: "pass on - オンライン家庭教師",
  description: "多彩な講師陣による「きっかけづくり」の場。なりたい自分に近づく、なりたい自分を見つける。",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <body className={`${zenKaku.variable} ${shippori.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

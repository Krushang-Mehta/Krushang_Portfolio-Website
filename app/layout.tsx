import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { getMetaInfo } from "@/lib/data"

const inter = Inter({ subsets: ["latin"] })

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  icons: {
    icon: metaInfo.icon,  
  },
    generator: 'Next.js',
    applicationName: 'Krushang Mehta Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: ['Krushang Mehta', 'Portfolio', 'Web Developer', 'Frontend Developer', 'Full Stack Developer', 'React Developer', 'Next.js Developer'],
    authors: [{ name: 'Krushang Mehta', url: 'https://krushangmehta.com' }],
    creator: 'Krushang Mehta',
    publisher: 'Krushang Mehta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <ScrollProgressIndicator />
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}

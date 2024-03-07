import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./arcgis.css"
import { cn } from "@/lib/utils"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "ArcGIS Map Example with Next.js",
  description:
    "This is an example of using ArcGIS with Next.js with the ArcGIS API for JavaScript. This example uses the `@arcgis/core` package to create a simple map with a few buttons to change the basemap.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "University of Kabridahar - Beta Testing Program",
  description:
    "Join our beta testing program for the University of Kabridahar mobile app. We need 12 beta testers with Gmail accounts to test on Google Play Store.",
  keywords: ["University of Kabridahar", "beta testing", "mobile app", "Google Play Store", "UOK app"],
  authors: [{ name: "University of Kabridahar" }],
  creator: "University of Kabridahar",
  publisher: "University of Kabridahar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "University of Kabridahar - Beta Testing Program",
    description: "Join our beta testing program for the University of Kabridahar mobile app.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "University of Kabridahar - Beta Testing Program",
    description: "Join our beta testing program for the University of Kabridahar mobile app.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/web-app-manifest-192x192.png",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#137fec",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

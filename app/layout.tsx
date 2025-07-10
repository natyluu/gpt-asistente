import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XENTRIS | Asistente Inteligente de Análisis de Mercados Forex",
  description:
    "Más que tecnología, soluciones que impulsan tu crecimiento. Decisiones claras en segundos, con datos en tiempo real.",
  keywords: [
    "forex",
    "trading",
    "análisis técnico",
    "inteligencia artificial",
    "mercados financieros",
    "GPT",
    "automatización",
    "XENTRIS",
    "análisis fundamental",
    "trading profesional",
  ],
  authors: [{ name: "XENTRIS Team" }],
  creator: "XENTRIS",
  publisher: "XENTRIS",
  openGraph: {
    title: "XENTRIS | Asistente Inteligente de Análisis de Mercados Forex",
    description:
      "Más que tecnología, soluciones que impulsan tu crecimiento. Decisiones claras en segundos, con datos en tiempo real.",
    url: "https://xentris.com",
    siteName: "XENTRIS",
    images: [
      {
        url: "https://xentris.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "XENTRIS - Asistente Inteligente de Trading",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XENTRIS | Asistente Inteligente de Análisis de Mercados Forex",
    description:
      "Más que tecnología, soluciones que impulsan tu crecimiento. Decisiones claras en segundos, con datos en tiempo real.",
    images: ["https://xentris.com/og-image.png"],
    creator: "@xentris_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xentris | Asistente Inteligente de Análisis de Mercados Forex",
  description:
    "Decisiones claras en segundos, con datos en tiempo real. Plataforma avanzada de análisis de mercados financieros con IA.",
  generator: "Next.js",
  keywords: [
    "forex",
    "trading",
    "análisis técnico",
    "inteligencia artificial",
    "mercados financieros",
    "GPT",
    "automatización",
  ],
  authors: [{ name: "Xentris Team" }],
  creator: "Xentris",
  publisher: "Xentris",
  openGraph: {
    title: "Xentris | Asistente Inteligente de Análisis de Mercados Forex",
    description:
      "Decisiones claras en segundos, con datos en tiempo real. Plataforma avanzada de análisis de mercados financieros con IA.",
    url: "https://xentris.com",
    siteName: "Xentris",
    images: [
      {
        url: "https://xentris.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xentris - Asistente Inteligente de Trading",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xentris | Asistente Inteligente de Análisis de Mercados Forex",
    description:
      "Decisiones claras en segundos, con datos en tiempo real. Plataforma avanzada de análisis de mercados financieros con IA.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XENTRIS - Asistente Inteligente de Análisis Forex",
  description:
    "Más que tecnología, soluciones que impulsan tu crecimiento. Decisiones claras en segundos, con datos en tiempo real y análisis profesional de Forex.",
  keywords: [
    "forex",
    "trading",
    "análisis técnico",
    "inteligencia artificial",
    "GPT",
    "análisis fundamental",
    "mercados financieros",
    "estrategias de trading",
    "XENTRIS",
  ],
  authors: [{ name: "XENTRIS" }],
  creator: "XENTRIS",
  publisher: "XENTRIS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trading.xentris.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "XENTRIS - Asistente Inteligente de Análisis Forex",
    description:
      "Más que tecnología, soluciones que impulsan tu crecimiento. Decisiones claras en segundos, con datos en tiempo real.",
    url: "https://trading.xentris.tech",
    siteName: "XENTRIS Trading",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XENTRIS - Asistente Inteligente de Análisis Forex",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XENTRIS - Asistente Inteligente de Análisis Forex",
    description:
      "Más que tecnología, soluciones que impulsan tu crecimiento. Decisiones claras en segundos, con datos en tiempo real.",
    images: ["/og-image.png"],
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
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B3BC0" />
        <meta name="msapplication-TileColor" content="#8B3BC0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

import Navigation from "@/components/navigation"
import Module1Hero from "@/components/module1-hero"
import Module1Content from "@/components/module1-content"
import Module1Navigation from "@/components/module1-navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Módulo 1: Fundamentos del Análisis Técnico Automatizado | Xentris",
  description:
    "Aprende a traducir el análisis técnico a un lenguaje estructurado que el GPT pueda entender y responder con setups claros.",
}

export default function Modulo1Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Module1Hero />
      <Module1Content />
      <Module1Navigation />
      <Footer />
    </div>
  )
}

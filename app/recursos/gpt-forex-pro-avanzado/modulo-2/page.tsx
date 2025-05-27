import Navigation from "@/components/navigation"
import Module2Hero from "@/components/module2-hero"
import Module2Content from "@/components/module2-content"
import Module2Navigation from "@/components/module2-navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Módulo 2: Estrategias Técnicas y Simulación de Setups | Xentris",
  description:
    "Aprende a crear estrategias de trading completas con niveles precisos de entrada, take profit y stop loss generados por prompts estructurados.",
}

export default function Modulo2Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Module2Hero />
      <Module2Content />
      <Module2Navigation />
      <Footer />
    </div>
  )
}

import Navigation from "@/components/navigation"
import Module2StrategiesHero from "@/components/module2-strategies-hero"
import Module2StrategiesContent from "@/components/module2-strategies-content"
import StrategiesSimulationLab from "@/components/strategies-simulation-lab"
import PracticalExercises from "@/components/practical-exercises"
import Module2StrategiesNavigation from "@/components/module2-strategies-navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Estrategias Técnicas y Simulación de Setups - Módulo 2 | GPT Forex Pro Avanzado",
  description:
    "Aprende a crear estrategias de trading completas con niveles precisos de entrada, take profit y stop loss generados por prompts estructurados en el Módulo 2 del curso GPT Forex Pro Avanzado.",
}

export default function Module2EstrategiasTecnicasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Module2StrategiesHero />
      <Module2StrategiesContent />
      <StrategiesSimulationLab />
      <PracticalExercises />
      <Module2StrategiesNavigation />
      <Footer />
    </div>
  )
}

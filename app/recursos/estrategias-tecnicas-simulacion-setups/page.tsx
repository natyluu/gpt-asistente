import Navigation from "@/components/navigation"
import StrategiesHero from "@/components/strategies-hero"
import StrategiesContent from "@/components/strategies-content"
import SetupSimulator from "@/components/setup-simulator"
import StrategiesGrid from "@/components/strategies-grid"
import Footer from "@/components/footer"

export const metadata = {
  title: "Estrategias Técnicas y Simulación de Setups | Xentris",
  description:
    "Aprende a crear y simular estrategias de trading técnicas con herramientas avanzadas de análisis y validación de setups en tiempo real.",
}

export default function EstrategiasTecnicasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <StrategiesHero />
      <StrategiesContent />
      <SetupSimulator />
      <StrategiesGrid />
      <Footer />
    </div>
  )
}

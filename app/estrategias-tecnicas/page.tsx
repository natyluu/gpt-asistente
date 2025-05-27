import Navigation from "@/components/navigation"
import StrategiesMainHero from "@/components/strategies-main-hero"
import StrategiesOverview from "@/components/strategies-overview"
import InteractiveSimulator from "@/components/interactive-simulator"
import StrategiesLibrary from "@/components/strategies-library"
import TechnicalAnalysisTools from "@/components/technical-analysis-tools"
import PerformanceMetrics from "@/components/performance-metrics"
import Footer from "@/components/footer"

export const metadata = {
  title: "Estrategias Técnicas y Simulación de Setups | Xentris - Trading Avanzado",
  description:
    "Domina las estrategias técnicas más efectivas del mercado forex. Simula setups en tiempo real, valida tus estrategias y mejora tu rendimiento con herramientas profesionales.",
}

export default function EstrategiasTecnicasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <StrategiesMainHero />
      <StrategiesOverview />
      <InteractiveSimulator />
      <TechnicalAnalysisTools />
      <StrategiesLibrary />
      <PerformanceMetrics />
      <Footer />
    </div>
  )
}

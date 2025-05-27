import Navigation from "@/components/navigation"
import ModuleHero from "@/components/module-hero"
import ModuleContent from "@/components/module-content"
import ModuleNavigation from "@/components/module-navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Módulo 0: Introducción al Curso y al GPT Especializado | Xentris",
  description:
    "Aprende a usar inteligencia artificial aplicada al trading de una manera práctica, estructurada y profesional.",
}

export default function Modulo0Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ModuleHero />
      <ModuleContent />
      <ModuleNavigation />
      <Footer />
    </div>
  )
}

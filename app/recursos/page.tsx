import Navigation from "@/components/navigation"
import ResourcesHero from "@/components/resources-hero"
import ResourcesGrid from "@/components/resources-grid"
import ResourcesCategories from "@/components/resources-categories"
import Footer from "@/components/footer"

export const metadata = {
  title: "Recursos | Xentris - Guías y Herramientas de Trading Forex",
  description:
    "Accede a guías completas, tutoriales y herramientas para mejorar tu trading forex con análisis técnico e inteligencia artificial.",
}

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ResourcesHero />
      <ResourcesCategories />
      <ResourcesGrid />
      <Footer />
    </div>
  )
}

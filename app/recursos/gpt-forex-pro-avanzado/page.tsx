import Navigation from "@/components/navigation"
import CourseHero from "@/components/course-hero"
import CourseContent from "@/components/course-content"
import CourseModules from "@/components/course-modules"
import Footer from "@/components/footer"

export const metadata = {
  title: "GPT Forex Pro Avanzado | Xentris - Curso Completo",
  description:
    "Aprende a analizar cualquier activo financiero en tiempo real usando prompts estructurados para GPT. Curso avanzado de trading con IA.",
}

export default function GPTForexProAvanzadoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <CourseHero />
      <CourseContent />
      <CourseModules />
      <Footer />
    </div>
  )
}

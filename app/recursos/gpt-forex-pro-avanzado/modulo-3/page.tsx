import { Navigation } from "@/components/navigation"
import { Module3Hero } from "@/components/module3-hero"
import { Module3Content } from "@/components/module3-content"
import { Module3Navigation } from "@/components/module3-navigation"
import { Footer } from "@/components/footer"

export default function Module3Page() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navigation />
      <Module3Hero />
      <Module3Content />
      <Module3Navigation />
      <Footer />
    </div>
  )
}

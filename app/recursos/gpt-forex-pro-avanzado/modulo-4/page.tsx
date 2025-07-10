import { Navigation } from "@/components/navigation"
import { Module4Hero } from "@/components/module4-hero"
import { Module4Content } from "@/components/module4-content"
import { Module4Navigation } from "@/components/module4-navigation"
import { Footer } from "@/components/footer"

export default function Module4Page() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navigation />
      <Module4Hero />
      <Module4Content />
      <Module4Navigation />
      <Footer />
    </div>
  )
}

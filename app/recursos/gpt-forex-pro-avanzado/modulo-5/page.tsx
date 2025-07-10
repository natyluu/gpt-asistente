import { Navigation } from "@/components/navigation"
import { Module5Hero } from "@/components/module5-hero"
import { Module5Content } from "@/components/module5-content"
import { Module5Navigation } from "@/components/module5-navigation"
import { Footer } from "@/components/footer"

export default function Module5Page() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navigation />
      <Module5Hero />
      <Module5Content />
      <Module5Navigation />
      <Footer />
    </div>
  )
}

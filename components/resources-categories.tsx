"use client"

import { useState } from "react"

export default function ResourcesCategories() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const categories = [
    { id: "todos", name: "Todos los recursos", count: 24 },
    { id: "guias", name: "Introducción al GPT Forex Pro", count: 8 },
    { id: "tutoriales", name: "Forex", count: 6 },
    { id: "herramientas", name: "Análisis técnico", count: 5 },
    { id: "analisis", name: "Análisis fundamental", count: 5 },
  ]

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

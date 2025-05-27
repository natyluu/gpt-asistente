"use client"

export default function ResourcesGrid() {
  const resources = [
    {
      category: "Herramienta",
      title: "Estrategias Técnicas y Simulación de Setups",
      description:
        "Plataforma completa para crear, probar y validar estrategias de trading técnicas con simulación en tiempo real.",
      readTime: "Interactivo",
      difficulty: "Todos",
      image: "/placeholder.svg?height=200&width=300&query=trading strategies simulation",
      link: "/recursos/estrategias-tecnicas-simulacion-setups",
    },
    {
      category: "Tutorial",
      title: "GPT forex pro avanzado",
      description:
        "Al finalizar este curso, serás capaz de analizar cualquier activo financiero en tiempo real usando prompts estructurados para GPT.",
      readTime: "45 min",
      difficulty: "Principiante",
      image: "/placeholder.svg?height=200&width=300&query=AI trading setup",
      link: "/recursos/gpt-forex-pro-avanzado",
    },
    {
      category: "Herramienta",
      title: "Calculadora de Gestión de Riesgo",
      description:
        "Herramienta gratuita para calcular el tamaño de posición óptimo basado en tu capital y tolerancia al riesgo.",
      readTime: "5 min",
      difficulty: "Todos",
      image: "/placeholder.svg?height=200&width=300&query=risk management calculator",
      link: "#",
    },
    {
      category: "Análisis",
      title: "Patrones de Velas Japonesas con IA",
      description:
        "Cómo identificar y aprovechar los patrones de velas japonesas usando análisis automatizado con inteligencia artificial.",
      readTime: "20 min",
      difficulty: "Intermedio",
      image: "/placeholder.svg?height=200&width=300&query=candlestick patterns",
      link: "#",
    },
    {
      category: "Guía",
      title: "Estrategias de Scalping Automatizadas",
      description:
        "Descubre cómo implementar estrategias de scalping efectivas usando señales generadas por IA en tiempo real.",
      readTime: "25 min",
      difficulty: "Avanzado",
      image: "/placeholder.svg?height=200&width=300&query=scalping strategy",
      link: "#",
    },
    {
      category: "Tutorial",
      title: "Interpretando Señales de TwelveData API",
      description:
        "Aprende a interpretar y actuar sobre las señales de mercado proporcionadas por nuestra integración con TwelveData.",
      readTime: "18 min",
      difficulty: "Intermedio",
      image: "/placeholder.svg?height=200&width=300&query=market data API",
      link: "#",
    },
    {
      category: "Herramienta",
      title: "Simulador de Trading con IA",
      description:
        "Practica tus estrategias en un entorno simulado que utiliza datos históricos reales y análisis de IA.",
      readTime: "Demo",
      difficulty: "Todos",
      image: "/placeholder.svg?height=200&width=300&query=trading simulator",
      link: "#",
    },
    {
      category: "Análisis",
      title: "Correlaciones de Divisas en Tiempo Real",
      description:
        "Entiende cómo las correlaciones entre pares de divisas pueden afectar tus operaciones y cómo aprovecharlas.",
      readTime: "12 min",
      difficulty: "Intermedio",
      image: "/placeholder.svg?height=200&width=300&query=currency correlation",
      link: "#",
    },
    {
      category: "Guía",
      title: "Psicología del Trading y IA",
      description:
        "Cómo la inteligencia artificial puede ayudarte a eliminar las emociones del trading y mantener la disciplina.",
      readTime: "22 min",
      difficulty: "Intermedio",
      image: "/placeholder.svg?height=200&width=300&query=trading psychology",
      link: "#",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Principiante":
        return "bg-green-600"
      case "Intermedio":
        return "bg-yellow-600"
      case "Avanzado":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors group cursor-pointer block"
            >
              <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {resource.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm">{resource.readTime}</span>
                    <span
                      className={`${getDifficultyColor(resource.difficulty)} text-white px-2 py-1 rounded text-xs font-medium`}
                    >
                      {resource.difficulty}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 group-hover:text-purple-400 transition-colors"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Cargar más recursos
          </button>
        </div>
      </div>
    </section>
  )
}

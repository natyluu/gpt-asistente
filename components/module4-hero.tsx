"use client"

export function Module4Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #8b3bc0 0%, transparent 50%), radial-gradient(circle at 70% 80%, #331659 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2 text-[#b1a2d6]">
            <li>
              <a href="/recursos" className="hover:text-white transition-colors">
                Recursos
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <a href="/recursos/gpt-forex-pro-avanzado" className="hover:text-white transition-colors">
                GPT Forex Pro
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-white">Módulo 4</li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#8b3bc0] to-[#a06be7] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <div>
              <p className="text-[#b1a2d6] text-sm font-medium">MÓDULO 04</p>
              <p className="text-gray-400 text-xs">Duración: 40 minutos • Nivel: Experto</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Análisis Fundamental con GPT
            <span className="block text-[#8b3bc0] mt-2">+ Integración de Capas</span>
          </h1>

          <p className="text-xl text-[#b1a2d6] mb-8 leading-relaxed">
            Domina el análisis fundamental usando GPT para integrar noticias, datos económicos y sentiment del mercado
            en una estrategia de trading multicapa.
          </p>

          {/* Objetivos */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8b3bc0] rounded-full"></div>
              Objetivos del Módulo
            </h3>
            <ul className="space-y-2 text-[#b1a2d6]">
              <li className="flex items-start gap-2">
                <span className="text-[#8b3bc0] mt-1">•</span>
                Integrar análisis fundamental con técnico usando GPT
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b3bc0] mt-1">•</span>
                Analizar noticias económicas y su impacto en pares específicos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b3bc0] mt-1">•</span>
                Crear sistema de capas: Técnico + Fundamental + Sentiment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b3bc0] mt-1">•</span>
                Implementar filtros de noticias para evitar trades riesgosos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b3bc0] mt-1">•</span>
                Desarrollar estrategias basadas en eventos económicos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b3bc0] mt-1">•</span>
                Automatizar análisis de correlaciones entre activos
              </li>
            </ul>
          </div>

          {/* Progreso */}
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-[#1a1a1a] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#8b3bc0] to-[#a06be7] h-2 rounded-full transition-all duration-500"
                style={{ width: "90%" }}
              ></div>
            </div>
            <span className="text-[#b1a2d6] text-sm font-medium">90% del curso</span>
          </div>
        </div>
      </div>
    </section>
  )
}

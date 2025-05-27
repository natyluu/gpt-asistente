"use client"

import Link from "next/link"

export default function Module2StrategiesHero() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/recursos" className="hover:text-white transition-colors">
              Recursos
            </Link>
            <span>/</span>
            <Link href="/recursos/gpt-forex-pro-avanzado" className="hover:text-white transition-colors">
              GPT Forex Pro Avanzado
            </Link>
            <span>/</span>
            <Link href="/recursos/gpt-forex-pro-avanzado/modulo-2" className="hover:text-white transition-colors">
              Módulo 2
            </Link>
            <span>/</span>
            <span className="text-white">Estrategias Técnicas y Simulación</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">Módulo 2</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">Práctica Intensiva</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">Simulación</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            📈 Estrategias Técnicas y{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Simulación de Setups
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            En esta lección práctica del Módulo 2, aprenderás a crear estrategias de trading completas usando GPT. No
            solo análisis, sino planes operativos con niveles precisos de entrada, take profit y stop loss, todo
            generado por prompts estructurados.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
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
                className="text-purple-400"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span className="text-white">25 minutos</span>
            </div>
            <div className="flex items-center gap-2">
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
                className="text-purple-400"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              </svg>
              <span className="text-white">5 ejercicios prácticos</span>
            </div>
            <div className="flex items-center gap-2">
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
                className="text-purple-400"
              >
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span className="text-white">Simulador integrado</span>
            </div>
          </div>

          {/* Objetivos de la lección */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🎯 Objetivos de esta lección</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-sm">Crear estrategias completas con entrada, SL y múltiples TPs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-sm">Dominar el prompt maestro para estrategias operativas</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-sm">Calcular gestión de riesgo automática con GPT</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span className="text-sm">Simular y validar setups antes de ejecutar</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <span className="text-sm">Implementar diferentes tipos de estrategias (scalping, swing, etc.)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <span className="text-sm">Crear tu primera estrategia automatizada completa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

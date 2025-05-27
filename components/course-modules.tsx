"use client"

import Link from "next/link"

export default function CourseModules() {
  const modules = [
    {
      number: "00",
      title: "Introducción al Curso y al GPT Especializado",
      duration: "8 min",
      lessons: 3,
      description:
        "Estás por aprender a usar inteligencia artificial aplicada al trading de una manera práctica, estructurada y profesional.",
    },
    {
      number: "01",
      title: "Fundamentos del Análisis Técnico Automatizado",
      duration: "12 min",
      lessons: 4,
      description:
        "Lo que vas a aprender aquí es cómo traducir ese proceso a un lenguaje estructurado que el GPT pueda entender. Y lo más poderoso: te responderá en segundos con setups claros y justificados.",
    },
    {
      number: "02",
      title: "Estrategias Técnicas y Simulación de Setups",
      duration: "10 min",
      lessons: 3,
      description:
        "En este módulo descubrirás cómo usar tu asistente artificial para crear estrategias de trading completas. No hablamos solo de análisis, sino de planes operativos con niveles precisos de entrada, take profit y stop loss, generados por prompts bien estructurados.",
    },
    {
      number: "03",
      title: "Análisis Institucional con GPT (Smart Money / ICT 2022)",
      duration: "15 min",
      lessons: 5,
      description:
        "Descubre cómo identificar y seguir los movimientos del dinero inteligente utilizando conceptos avanzados de ICT y análisis institucional.",
    },
    {
      number: "04",
      title: "Análisis Fundamental con GPT + Integración de Capas",
      duration: "8 min",
      lessons: 3,
      description:
        "Integra análisis fundamental con datos económicos en tiempo real y aprende a combinar múltiples capas de información para decisiones más precisas.",
    },
    {
      number: "05",
      title: "Proyecto Final – Setup Completo y Automatización",
      duration: "18 min",
      lessons: 6,
      description:
        "Aplica todo lo aprendido en un proyecto final donde configurarás un sistema completo de análisis automatizado y alertas inteligentes.",
    },
  ]

  return (
    <section className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contenido del Curso</h2>

          <div className="space-y-4">
            <Link href="/recursos/gpt-forex-pro-avanzado/modulo-0" className="block">
              <div className="bg-black rounded-lg p-6 border border-zinc-800 hover:border-purple-600 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                      00
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Introducción al Curso y al GPT Especializado</h3>
                      <p className="text-gray-400 text-sm">
                        Estás por aprender a usar inteligencia artificial aplicada al trading de una manera práctica,
                        estructurada y profesional.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">8 min</div>
                    <div className="text-sm text-purple-400">3 lecciones</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/recursos/gpt-forex-pro-avanzado/modulo-1" className="block">
              <div className="bg-black rounded-lg p-6 border border-zinc-800 hover:border-purple-600 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fundamentos del Análisis Técnico Automatizado</h3>
                      <p className="text-gray-400 text-sm">
                        Lo que vas a aprender aquí es cómo traducir ese proceso a un lenguaje estructurado que el GPT
                        pueda entender. Y lo más poderoso: te responderá en segundos con setups claros y justificados.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">12 min</div>
                    <div className="text-sm text-purple-400">4 lecciones</div>
                  </div>
                </div>
              </div>
            </Link>

            {modules.slice(2).map((module, index) => (
              <div
                key={index + 2}
                className="bg-black rounded-lg p-6 border border-zinc-800 hover:border-purple-600 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-gray-400 text-sm">{module.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">{module.duration}</div>
                    <div className="text-sm text-purple-400">{module.lessons} lecciones</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-lg transition-colors">
              Comenzar Curso Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

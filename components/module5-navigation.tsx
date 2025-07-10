"use client"

import { ChevronLeft, BookOpen, Award } from "lucide-react"

export function Module5Navigation() {
  return (
    <section className="py-12 px-4 border-t border-[#333]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Módulo Anterior */}
          <a
            href="/recursos/gpt-forex-pro-avanzado/modulo-4"
            className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#8b3bc0] transition-colors group w-full md:w-auto"
          >
            <ChevronLeft className="w-5 h-5 text-[#8b3bc0] group-hover:text-white transition-colors" />
            <div className="text-left">
              <p className="text-[#b1a2d6] text-sm">Anterior</p>
              <p className="text-white font-medium">Módulo 4: Análisis Fundamental</p>
            </div>
          </a>

          {/* Centro - Volver al Curso */}
          <a
            href="/recursos/gpt-forex-pro-avanzado"
            className="flex items-center gap-2 px-6 py-3 bg-[#8b3bc0] text-white rounded-lg hover:bg-[#a06be7] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Volver al Curso</span>
          </a>

          {/* Certificado */}
          <a
            href="#"
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg hover:border-green-400 transition-colors group w-full md:w-auto"
          >
            <div className="text-right">
              <p className="text-green-400 text-sm">Completado</p>
              <p className="text-white font-medium">Obtener Certificado</p>
            </div>
            <Award className="w-5 h-5 text-green-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Progreso del Curso */}
        <div className="mt-8 text-center">
          <p className="text-[#b1a2d6] text-sm mb-2">Progreso del Curso</p>
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#8b3bc0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <div className="w-16 h-1 bg-[#8b3bc0]"></div>
              <div className="w-8 h-8 bg-[#8b3bc0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <div className="w-16 h-1 bg-[#8b3bc0]"></div>
              <div className="w-8 h-8 bg-[#8b3bc0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <div className="w-16 h-1 bg-[#8b3bc0]"></div>
              <div className="w-8 h-8 bg-[#8b3bc0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <div className="w-16 h-1 bg-[#8b3bc0]"></div>
              <div className="w-8 h-8 bg-[#8b3bc0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">🎉 ¡Curso Completado al 100%!</p>
        </div>
      </div>
    </section>
  )
}

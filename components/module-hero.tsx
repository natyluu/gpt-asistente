"use client"

import Link from "next/link"

export default function ModuleHero() {
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
            <span className="text-white">Módulo 0</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">Módulo 0</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">8 min</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🎯 Introducción al Curso y al{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              GPT Especializado
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Estás por aprender a usar inteligencia artificial aplicada al trading de una manera práctica, estructurada y
            profesional. En este módulo te presentamos las bases fundamentales.
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
              <span className="text-white">8 minutos</span>
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
              <span className="text-white">3 lecciones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

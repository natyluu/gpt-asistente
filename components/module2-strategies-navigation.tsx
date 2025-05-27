"use client"

import Link from "next/link"

export default function Module2StrategiesNavigation() {
  return (
    <section className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link
                href="/recursos/gpt-forex-pro-avanzado/modulo-2"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
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
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Volver al Módulo 2
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/recursos/gpt-forex-pro-avanzado/modulo-2"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                📚 Contenido Principal
              </Link>
              <Link
                href="/recursos/gpt-forex-pro-avanzado/modulo-3"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Siguiente: Módulo 3
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
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Resources Download */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <h3 className="text-lg font-bold mb-4">📁 Recursos de esta Lección</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 p-4 bg-black rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
                <div>
                  <h4 className="font-medium text-sm">Prompts Maestros</h4>
                  <p className="text-gray-400 text-xs">Templates completos para estrategias</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-4 bg-black rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
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
                  className="text-green-400"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
                <div>
                  <h4 className="font-medium text-sm">Checklist de Validación</h4>
                  <p className="text-gray-400 text-xs">Lista de verificación para estrategias</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-4 bg-black rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800"
              >
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
                  className="text-blue-400"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
                <div>
                  <h4 className="font-medium text-sm">Ejercicios Resueltos</h4>
                  <p className="text-gray-400 text-xs">Soluciones de los 5 ejercicios</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

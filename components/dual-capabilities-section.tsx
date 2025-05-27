"use client"

export default function DualCapabilitiesSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Primera sección - Capacidades de IA */}
          <div>
            <div className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-4">
              <h2 className="text-xl font-medium text-gray-300">
                Capacidades de la inteligencia artificial de búsqueda
              </h2>
              <div className="hidden md:block">
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  Por qué es importante
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16">
              {/* Primera columna */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Inteligencia de transacciones</span>
                </div>

                <h3 className="text-xl font-bold mb-3">Detectar patrones significativos</h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Actúe con anticipación ante amenazas, tendencias y anomalías al comprender cómo interactúan las
                  billeteras, los tokens y los contratos en tiempo real.
                </p>
              </div>

              {/* Segunda columna */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Extracción de señales</span>
                </div>

                <h3 className="text-xl font-bold mb-3">Atraviese la complejidad</h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Convierta datos fragmentados en información clara para que pueda tomar decisiones más rápidas y
                  seguras.
                </p>
              </div>

              {/* Tercera columna */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Exploración sin fricciones</span>
                </div>

                <h3 className="text-xl font-bold mb-3">Accede a lo que importa</h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Ya no es necesario cambiar de pestañas, escribir scripts personalizados ni buscar en exploradores para
                  obtener las respuestas que necesita.
                </p>
              </div>
            </div>
          </div>

          {/* Segunda sección - Capacidades de búsqueda */}
          <div>
            <div className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-4">
              <h2 className="text-xl font-medium text-gray-300">
                Capacidades de la inteligencia artificial de búsqueda
              </h2>
              <div className="hidden md:block">
                <button className="text-gray-400 hover:text-white transition-colors text-sm">
                  Por qué es importante
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16">
              {/* Primera columna */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Búsqueda web</span>
                </div>

                <h3 className="text-xl font-bold mb-3">Explora fuentes confiables de blockchain</h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Todo lo que necesita en un solo lugar, incluida documentación de protocolo, documentos técnicos,
                  actualizaciones de proyectos, análisis de tokens, información sobre DeFi, tendencias del mercado de
                  NFT y noticias de última hora de la industria.
                </p>
              </div>

              {/* Segunda columna */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Búsqueda de transacciones</span>
                </div>

                <h3 className="text-xl font-bold mb-3">No se necesita experiencia en blockchain</h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Encuentre detalles de cualquier transacción de blockchain en lenguaje sencillo. Visualice al instante
                  los flujos de tokens, las interacciones con la billetera y las ejecuciones de contratos.
                </p>
              </div>

              {/* Tercera columna */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-gray-400">Búsqueda de código</span>
                </div>

                <h3 className="text-xl font-bold mb-3">Descubra información estructurada en segundos</h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                  Traduce lenguaje simple y natural a potentes comandos en cadena. Desbloquea información estructurada
                  sobre blockchain en segundos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

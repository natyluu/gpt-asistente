"use client"

export default function StrategiesHero() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Estrategias Avanzadas
            </span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">Simulación en Vivo</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Estrategias Técnicas
            </span>
            <br />y <span className="text-gray-300">Simulación de Setups</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Domina el arte de crear estrategias de trading técnicas precisas y valídalas en tiempo real con nuestro
            simulador avanzado antes de arriesgar capital real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-lg transition-colors shadow-lg">
              Comenzar Simulación
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black font-medium py-4 px-8 rounded-lg transition-colors">
              Ver Estrategias
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <p className="text-gray-400">Estrategias Probadas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <p className="text-gray-400">Precisión en Backtesting</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <p className="text-gray-400">Simulación en Tiempo Real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

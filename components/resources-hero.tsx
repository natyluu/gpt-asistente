"use client"

export default function ResourcesHero() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Cursos</span>
            <br />
            para <span className="text-gray-300">traders</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Accede a guías completas, tutoriales y herramientas diseñadas para potenciar tu trading con inteligencia
            artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Explorar Guías
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black font-medium py-3 px-6 rounded-lg transition-colors">
              Ver Tutoriales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

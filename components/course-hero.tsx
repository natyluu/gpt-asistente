"use client"

export default function CourseHero() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Video de fondo de YouTube */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/w90_PHj93GM?start=4596&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&playlist=w90_PHj93GM"
          title="GPT Forex Pro Background Video"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      </div>

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">Tutorial</span>
            <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">Principiante</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
              GPT Forex Pro
            </span>
            <br />
            Avanzado
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl font-medium">
            Al finalizar este curso, serás capaz de analizar cualquier activo financiero en tiempo real usando prompts
            estructurados para GPT.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex items-center gap-3">
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
              <span className="text-white font-medium">Duración: 45 minutos</span>
            </div>
            <div className="flex items-center gap-3">
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
              <span className="text-white font-medium">6 módulos prácticos</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg">
              Comenzar Curso Gratis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg transition-colors">
              Ver Vista Previa
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

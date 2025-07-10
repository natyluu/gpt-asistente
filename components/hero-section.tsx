const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Impulsa tu negocio con nuestra plataforma innovadora
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Ofrecemos soluciones personalizadas para ayudarte a crecer y alcanzar tus objetivos. Descubre cómo podemos
              transformar tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8b3bc0] to-[#a06be7] text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8b3bc0]/50"
              >
                ¡Probar ahora gratis!
              </a>
              <a
                href="/recursos"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#8b3bc0] text-[#8b3bc0] font-bold rounded-lg transition-all duration-300 hover:bg-[#8b3bc0] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#8b3bc0]/50"
              >
                Ver Recursos
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://via.placeholder.com/600x400" alt="Hero Image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

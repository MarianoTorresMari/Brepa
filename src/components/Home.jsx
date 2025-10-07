import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-purple-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <img src="/lavanda.png" alt="BREPA" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-light tracking-wider text-slate-700">BREPA</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-purple-400 transition-colors">Inicio</a>
            <a href="#" className="text-slate-600 hover:text-purple-400 transition-colors">Productos</a>
            <a href="#" className="text-slate-600 hover:text-purple-400 transition-colors">Ambientes</a>
            <a href="#" className="text-slate-600 hover:text-purple-400 transition-colors">Sobre Nosotros</a>
            <a href="#" className="text-slate-600 hover:text-purple-400 transition-colors">Contacto</a>
          </div>
          
          <button className="md:hidden text-slate-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block animate-float">
              <img src="/lavanda.png" alt="BREPA lavanda" className="w-32 h-32 mx-auto object-contain" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-wide">
                BREPA
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light tracking-widest">
                deco-home
              </p>
            </div>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Transformá tu espacio en un refugio de calidez y estilo. 
              Descubrí nuestra colección cuidadosamente seleccionada de decoración para el hogar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-8 py-3 bg-purple-300 hover:bg-purple-400 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explorar Productos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-slate-800 mb-12">
            Categorías Destacadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Living', color: 'from-rose-100 to-rose-200', icon: '🛋️' },
              { title: 'Dormitorio', color: 'from-purple-100 to-purple-200', icon: '🛏️' },
              { title: 'Cocina', color: 'from-amber-100 to-amber-200', icon: '🍽️' }
            ].map((category, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`h-80 bg-gradient-to-br ${category.color} p-8 flex flex-col justify-end`}>
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-light text-slate-700">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-slate-800">
                Creamos Espacios que Inspiran
              </h2>
              <p className="text-slate-600 leading-relaxed">
                En BREPA, creemos que cada espacio cuenta una historia. Nuestra misión es ayudarte 
                a crear ambientes que reflejen tu personalidad y estilo de vida, combinando 
                funcionalidad con belleza atemporal.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cada pieza es seleccionada con dedicación, pensando en la armonía y el confort 
                que merecés en tu hogar.
              </p>
              <button className="text-purple-400 hover:text-purple-500 font-medium flex items-center gap-2 group">
                Conocé más sobre nosotros 
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 via-rose-100 to-amber-100 shadow-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-200/50 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-100 via-rose-100 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-slate-800 mb-12">
            Nuestros Productos
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Aquí puedes agregar tus imágenes */}
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
            <div className="aspect-square rounded-2xl bg-white/50 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lavanda.png" alt="BREPA" className="w-8 h-8 object-contain" />
              <span className="text-xl font-light">BREPA</span>
            </div>
            <p className="text-sm text-slate-400">
              Transformando casas en hogares desde 2024
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Todos los productos</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Novedades</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Ofertas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Seguinos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="WhatsApp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>© 2024 BREPA deco-home. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
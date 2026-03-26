import React from 'react';
import { Carousel } from 'flowbite-react';
import { HiShoppingCart, HiStar } from 'react-icons/hi';
import { productosHombres, productosMujeres } from '../data/productos';

// Productos destacados: badge o primeros 4
const allProducts = [
  ...productosHombres.map(p => ({ ...p, genero: 'hombres' })),
  ...productosMujeres.map(p => ({ ...p, genero: 'mujeres' })),
];
const destacados = allProducts.filter(p => p.badge).slice(0, 4);
const carouselItems = allProducts.slice(0, 4);

function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="bg-neutral-900 border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-700/50 transition-all duration-300 group">
      <div className="relative h-52 bg-black overflow-hidden">
        {producto.imagen ? (
          <img src={producto.imagen} alt={producto.nombre}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl opacity-10">🌸</div>
        )}
        {producto.badge && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-yellow-600 text-black text-[9px] font-bold uppercase tracking-widest rounded-sm">
            {producto.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-black/70 text-gray-400 text-[9px] uppercase tracking-widest rounded-sm border border-gray-800">
          {producto.genero === 'hombres' ? 'Hombre' : 'Mujer'}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} className="w-3 h-3 text-yellow-500" />
          ))}
          <span className="text-gray-600 text-[10px] ml-1">4.8</span>
        </div>
        <p className="text-yellow-600/70 text-[10px] uppercase tracking-widest mb-1">{producto.marca}</p>
        <h3 className="text-white text-sm font-medium mb-1 leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
          {producto.nombre}
        </h3>
        <p className="text-gray-600 text-[11px] leading-relaxed mb-4 line-clamp-2">{producto.descripcion}</p>
        <div className="flex items-center justify-between">
          <span className="text-white text-lg font-bold"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            {producto.precioStr}
          </span>
          <button onClick={() => agregarAlCarrito(producto)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-600 hover:bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-wider transition-colors rounded-sm">
            <HiShoppingCart className="w-3 h-3" />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

function Home({ agregarAlCarrito, setCurrentPage }) {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Texto decorativo fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[18vw] font-black uppercase leading-none select-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1px rgba(201,168,76,0.06)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              whiteSpace: 'nowrap',
            }}>
            PERFUMSALTA
          </span>
        </div>
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-yellow-600" />
              <span className="text-yellow-600 text-[10px] uppercase tracking-[0.5em]">
                Colección 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
              Tu olfato nunca<br />
              <span className="text-yellow-500 italic">volverá a ser</span><br />
              el mismo.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              Fragancias exclusivas de diseñador, nicho y árabes.
              Descubrí tu esencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCurrentPage('productos')}
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest transition-colors text-center">
                Explorar Colección
              </button>
              <button onClick={() => setCurrentPage('categorias')}
                className="px-8 py-3 border border-gray-700 hover:border-yellow-700 text-gray-400 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors text-center">
                Ver Categorías
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="bg-black">
        <div className="h-64 md:h-80 xl:h-96">
          <Carousel slideInterval={4000} indicators={true}>
            {carouselItems.map((producto) => (
              <div key={producto.id} className="relative w-full h-full bg-black flex items-center overflow-hidden">
                {producto.imagen && (
                  <img src={producto.imagen} alt={producto.nombre}
                    className="absolute inset-y-0 right-0 w-full md:w-1/2 h-full object-contain object-right opacity-50 md:opacity-90 p-4 md:p-8" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 px-10 md:px-20">
                  <p className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] mb-2">
                    {producto.genero === 'hombres' ? 'Colección Hombres' : 'Colección Mujeres'}
                  </p>
                  <h2 className="text-white text-3xl md:text-4xl font-light mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                    {producto.nombre}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">{producto.marca} · {producto.precioStr}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-600/70 text-[10px] uppercase tracking-[0.5em]">Selección</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-2"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
              Productos Destacados
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-10 bg-yellow-700/50" />
              <div className="w-1 h-1 rounded-full bg-yellow-600" />
              <div className="h-px w-10 bg-yellow-700/50" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destacados.map((p) => (
              <ProductCard key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>
        </div>
      </section>

      {/* FRANJA DE BENEFICIOS */}
      <section className="py-12 px-4 bg-black border-y border-yellow-900/10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { titulo: 'Originales', desc: 'Todos nuestros perfumes son 100% auténticos' },
            { titulo: 'Envío Rápido', desc: 'Entregas en 24-72h a todo el país' },
            { titulo: 'Muestras Gratis', desc: 'Con cada compra mayor a $1,000' },
          ].map((b) => (
            <div key={b.titulo} className="flex flex-col items-center gap-2">
              <div className="h-px w-8 bg-yellow-700/40 mb-1" />
              <p className="text-white text-xs uppercase tracking-widest font-medium">{b.titulo}</p>
              <p className="text-gray-600 text-xs max-w-xs">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
import React from 'react';
import { Badge } from 'flowbite-react';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black pt-20"
    >
      {/* Fondo: texto enorme decorativo PERFUMSALTA */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[13vw] font-black tracking-widest uppercase leading-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(202,157,68,0.18)',
            fontFamily: 'Georgia, serif',
            whiteSpace: 'nowrap',
          }}
        >
          PERFUMSALTA
        </span>
      </div>

      {/* Líneas decorativas horizontales doradas */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/20 to-transparent" />

      {/* Puntos decorativos */}
      <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-yellow-600/60" />
      <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-yellow-600/60" />
      <div className="absolute bottom-1/3 left-10 w-2 h-2 rounded-full bg-yellow-600/40" />
      <div className="absolute bottom-1/3 right-10 w-2 h-2 rounded-full bg-yellow-600/40" />

      {/* Contenido principal */}
      <div className="relative z-10 px-8 md:px-16 max-w-3xl">
        {/* Línea decorativa superior */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-yellow-600" />
          <span className="text-yellow-600 text-xs uppercase tracking-[0.4em] font-medium">
            Colección Exclusiva
          </span>
        </div>

        {/* Título principal */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[1.05] mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ¡TU OLFATO{' '}
          <span className="block text-yellow-500">NUNCA VOLVERÁ</span>
          <span className="block">A SER EL MISMO!</span>
        </h1>

        {/* Descripción */}
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
          Colección exclusiva de perfumes, descubre tu estilo
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-sm uppercase tracking-widest transition-all duration-200 rounded-none"
          >
            Explorar Colección
          </button>
          <button
            onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-yellow-600/60 hover:border-yellow-500 text-yellow-500 hover:text-yellow-400 font-bold text-sm uppercase tracking-widest transition-all duration-200 rounded-none bg-transparent"
          >
            Ver Novedades
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

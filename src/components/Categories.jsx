import React from 'react';
import { HiOutlineGift } from 'react-icons/hi';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

const categorias = [
  {
    titulo: 'Fragancias Femeninas',
    subtitulo: 'Elegantes y sofisticadas',
    icono: BsGenderFemale,
    href: '#catalogo',
    bg: 'from-gray-800 to-gray-900',
    // Si tenés imagen, reemplazá esta línea:
    // imagen: '/images/cat-femeninas.jpg',
  },
  {
    titulo: 'Fragancias Masculinas',
    subtitulo: 'Potentes y distinguidas',
    icono: BsGenderMale,
    href: '#catalogo',
    bg: 'from-gray-900 to-black',
  },
  {
    titulo: 'Sets de Regalo',
    subtitulo: 'Perfectos para sorprender',
    icono: HiOutlineGift,
    href: '#catalogo',
    bg: 'from-yellow-900/40 to-gray-900',
  },
];

function Categories() {
  return (
    <section id="categorias" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Explora por Categoría
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Encuentra la fragancia perfecta para cada ocasión y estilo
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="h-px w-16 bg-yellow-500" />
          </div>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat) => {
            const Icono = cat.icono;
            return (
              <a
                key={cat.titulo}
                href={cat.href}
                className={`
                  group relative overflow-hidden rounded-lg h-56
                  bg-gradient-to-br ${cat.bg}
                  border border-yellow-700/20
                  hover:border-yellow-600/50
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-yellow-500/10
                  flex flex-end items-end
                `}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Icono decorativo */}
                <div className="absolute top-4 left-4 text-yellow-600/30 group-hover:text-yellow-500/50 transition-colors">
                  <Icono className="w-8 h-8" />
                </div>

                {/* Texto */}
                <div className="relative z-10 p-5 w-full">
                  <span className="block text-white font-bold text-lg mb-0.5" style={{ fontFamily: 'Georgia, serif' }}>
                    {cat.titulo}
                  </span>
                  <span className="block text-yellow-400/80 text-xs uppercase tracking-widest">
                    {cat.subtitulo}
                  </span>
                </div>

                {/* Línea dorada inferior al hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;

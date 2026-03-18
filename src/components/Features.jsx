import React from 'react';
import { HiStar, HiTruck, HiGift } from 'react-icons/hi';

const beneficios = [
  {
    icono: HiStar,
    titulo: 'Calidad Premium',
    descripcion: 'Las mejores marcas y fragancias de alta calidad',
  },
  {
    icono: HiTruck,
    titulo: 'Envío Rápido',
    descripcion: 'Entregas en 24-72h de cualquier pedido',
  },
  {
    icono: HiGift,
    titulo: 'Muestras Gratis',
    descripcion: 'Recibe muestras de cortesía con cada compra superior a $1,000',
  },
];

function Features() {
  return (
    <>
      {/* Franja de beneficios */}
      <section className="py-14 px-4 bg-gray-100 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {beneficios.map((b) => {
            const Icono = b.icono;
            return (
              <div key={b.titulo} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-yellow-600/40 flex items-center justify-center bg-white dark:bg-gray-800">
                  <Icono className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                    {b.titulo}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 max-w-xs mx-auto">
                    {b.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-20 px-4 bg-gray-950 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-yellow-600 text-xs uppercase tracking-[0.4em] font-medium">
            Quiénes somos
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Sobre Perfumsalta
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-yellow-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
            <div className="h-px w-12 bg-yellow-600" />
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            Desde 2024, Perfumsalta ha sido sinónimo de distinción en el mundo de las fragancias.
            Nuestra pasión es ayudarte a encontrar tu mejor fragancia con un excelente trato.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Te ofrecemos una experiencia inigualable que cautiva tu olfato y crea recuerdos duraderos.
          </p>
        </div>
      </section>
    </>
  );
}

export default Features;

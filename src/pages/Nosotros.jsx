import React from 'react';

function Nosotros() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-gray-900 px-4 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="text-yellow-600/70 text-[10px] uppercase tracking-[0.5em]">Quiénes somos</span>
          <h1 className="text-4xl md:text-6xl font-light text-white mt-2"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Sobre <span className="text-yellow-500 italic">PerfumsAlta</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-yellow-700/40" />
            <div className="w-1 h-1 rounded-full bg-yellow-600" />
            <div className="h-px w-12 bg-yellow-700/40" />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center">
          <p className="text-gray-400 text-base leading-relaxed">
            Desde 2024, PerfumsAlta ha sido sinónimo de distinción en el mundo de las fragancias.
            Nuestra pasión es ayudarte a encontrar tu mejor fragancia con un trato excelente y personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: '100+', label: 'Fragancias en catálogo' },
            { num: '3', label: 'Categorías exclusivas' },
            { num: '2024', label: 'Desde este año' },
          ].map((stat) => (
            <div key={stat.num} className="text-center border border-gray-900 rounded-lg py-8 px-4">
              <p className="text-yellow-500 text-4xl font-light mb-2"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                {stat.num}
              </p>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-900 pt-10">
          <h2 className="text-white text-2xl font-light mb-4"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Nuestra Misión
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Te ofrecemos una experiencia inigualable que cautiva tu olfato y crea recuerdos duraderos.
            Trabajamos con las mejores casas perfumeras del mundo para traerte fragancias auténticas
            de diseñador, nicho y árabes.
          </p>
        </div>

        <div className="border-t border-gray-900 pt-10">
          <h2 className="text-white text-2xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Contacto
          </h2>
          <div className="space-y-3 text-sm text-gray-500">
            <p>📍 Cda. de Bravo 910, Cd. Altamirano, Gro.</p>
            <p>📞 +52 951 434 8365</p>
            <p>✉️ perfums_alta1@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setEmail('');
  };

  return (
    <div className="pt-16 min-h-screen bg-black flex items-center">
      <div className="max-w-xl mx-auto px-4 py-20 text-center w-full">

        {/* Decoración */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-yellow-700/40" />
          <span className="text-yellow-600/70 text-[10px] uppercase tracking-[0.5em]">Mantenete al día</span>
          <div className="h-px w-12 bg-yellow-700/40" />
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-white mb-4"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
          Newsletter
        </h1>
        <p className="text-gray-600 text-sm mb-12 leading-relaxed">
          Suscribite y recibí primero las novedades, lanzamientos exclusivos y ofertas personalizadas.
        </p>

        {enviado ? (
          <div className="border border-yellow-700/30 rounded-lg px-8 py-10 bg-neutral-950">
            <p className="text-yellow-500 text-3xl mb-3" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
              ✦ Gracias
            </p>
            <p className="text-gray-500 text-sm">Te agregamos a nuestra lista. Pronto recibirás novedades.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-0 rounded overflow-hidden border border-gray-800 focus-within:border-yellow-700/50 transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-5 py-4 bg-neutral-950 text-white text-sm placeholder-gray-700 focus:outline-none"
              />
              <button type="submit"
                className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest transition-colors shrink-0">
                Suscribirme
              </button>
            </div>
            <p className="text-gray-700 text-[10px] uppercase tracking-widest">
              Sin spam. Podés cancelar cuando quieras.
            </p>
          </form>
        )}

        {/* Beneficios */}
        <div className="grid grid-cols-3 gap-4 mt-16">
          {[
            { titulo: 'Novedades', desc: 'Primero en enterarte de nuevos lanzamientos' },
            { titulo: 'Ofertas', desc: 'Descuentos exclusivos para suscriptores' },
            { titulo: 'Guías', desc: 'Tips y recomendaciones de fragancias' },
          ].map((b) => (
            <div key={b.titulo} className="text-center">
              <div className="h-px w-6 bg-yellow-700/40 mx-auto mb-3" />
              <p className="text-white text-[11px] uppercase tracking-widest mb-1">{b.titulo}</p>
              <p className="text-gray-700 text-[10px] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
import React, { useState } from 'react';
import { HiShoppingCart, HiStar } from 'react-icons/hi';
import { productosHombres, productosMujeres } from '../data/productos';

function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="bg-neutral-900 border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-700/50 transition-all duration-300 group">
      <div className="relative h-48 bg-black overflow-hidden">
        {producto.imagen ? (
          <img src={producto.imagen} alt={producto.nombre}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl opacity-10">🌸</div>
        )}
        {producto.badge && (
          <span className="absolute top-2 left-2 px-2 py-0.5 bg-yellow-600 text-black text-[9px] font-bold uppercase tracking-widest rounded-sm">
            {producto.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <HiStar key={i} className="w-3 h-3 text-yellow-500" />)}
          <span className="text-gray-600 text-[10px] ml-1">4.8</span>
        </div>
        <p className="text-yellow-600/70 text-[10px] uppercase tracking-widest mb-0.5">{producto.marca}</p>
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

function Categorias({ agregarAlCarrito }) {
  const [tab, setTab] = useState('hombres');

  const productos = tab === 'hombres'
    ? productosHombres.map(p => ({ ...p, genero: 'hombres' }))
    : productosMujeres.map(p => ({ ...p, genero: 'mujeres' }));

  return (
    <div className="pt-16 min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="bg-black border-b border-gray-900 px-4 py-10">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-yellow-600/70 text-[10px] uppercase tracking-[0.5em]">Explorar</span>
          <h1 className="text-4xl md:text-5xl font-light text-white mt-1"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Categorías
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-black border-b border-gray-900 sticky top-16 z-30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex">
            {[
              { key: 'hombres', label: 'Para Él' },
              { key: 'mujeres', label: 'Para Ella' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-6 py-4 text-xs uppercase tracking-widest border-b-2 transition-all duration-200
                  ${tab === t.key
                    ? 'border-yellow-500 text-yellow-400'
                    : 'border-transparent text-gray-600 hover:text-gray-400'
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Descripción de categoría */}
      <div className="bg-neutral-950 px-4 py-8 border-b border-gray-900">
        <div className="max-w-screen-xl mx-auto flex items-center gap-6">
          <div className="h-px flex-1 bg-yellow-900/20" />
          <p className="text-gray-600 text-xs uppercase tracking-widest text-center">
            {tab === 'hombres'
              ? 'Fragancias potentes, distinguidas y sofisticadas'
              : 'Fragancias elegantes, florales y seductoras'}
          </p>
          <div className="h-px flex-1 bg-yellow-900/20" />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10">
        <p className="text-gray-600 text-xs mb-6">{productos.length} fragancias</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/* AQUÍ ESTÁ EL .MAP() EN ACCIÓN */}
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categorias;
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

function ProductList({ titulo, idSeccion, productos, agregarAlCarrito }) {
  // Mostrar máximo 4 destacados si no hay búsqueda activa
  const productosVisibles = productos.slice(0, 8);

  return (
    <section id={idSeccion} className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {titulo || 'Productos Destacados'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Explora nuestra selección de fragancias exclusivas
          </p>
          {/* Línea decorativa */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="h-px w-16 bg-yellow-500" />
          </div>
        </div>

        {/* Sin resultados */}
        {productos.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-medium">No encontramos resultados</p>
          </div>
        )}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosVisibles.map((producto) => (
            <div
              key={producto.id}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-52">
                {producto.imagen ? (
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl opacity-30">🌸</span>
                  </div>
                )}
                {/* Badge género */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-yellow-600 text-black rounded-sm">
                    {producto.genero === 'hombres' ? 'Hombre' : 'Mujer'}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-yellow-600 text-[10px] uppercase tracking-widest mb-1 font-medium">
                  Colección de diseñador
                </p>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3 leading-tight">
                  {producto.nombre}
                </h3>

                {/* Precio + botón */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-gray-900 dark:text-white">
                    {producto.precio}
                  </span>
                  <button
                    onClick={() => agregarAlCarrito(producto)}
                    className="flex items-center gap-1 px-3 py-2 bg-yellow-600 hover:bg-yellow-500 text-black text-xs font-bold uppercase tracking-wide transition-colors rounded-sm"
                  >
                    <HiShoppingCart className="w-3.5 h-3.5" />
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón ver todos */}
        {productos.length > 8 && (
          <div className="text-center mt-10">
            <button className="px-10 py-3 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-bold text-sm uppercase tracking-widest transition-all duration-200 rounded-sm">
              Ver Todos los Productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductList;

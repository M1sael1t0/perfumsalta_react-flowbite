import React, { useState, useMemo } from 'react';
import { HiShoppingCart, HiStar, HiSearch, HiFilter, HiX } from 'react-icons/hi';
import { productosHombres, productosMujeres } from '../data/productos';

const allProducts = [
  ...productosHombres.map(p => ({ ...p, genero: 'hombres' })),
  ...productosMujeres.map(p => ({ ...p, genero: 'mujeres' })),
];

// Opciones únicas para filtros
const marcas = [...new Set(allProducts.map(p => p.marca))].sort();
const familias = [...new Set(allProducts.map(p => p.familia))].sort();
const tipos = ['diseñador', 'nicho', 'arabe'];
const rangosPrecios = [
  { label: 'Todos', min: 0, max: Infinity },
  { label: 'Hasta $2,000', min: 0, max: 2000 },
  { label: '$2,000 – $3,500', min: 2000, max: 3500 },
  { label: '$3,500 – $6,000', min: 3500, max: 6000 },
  { label: 'Más de $6,000', min: 6000, max: Infinity },
];

function FilterChip({ label, active, onClick }) {
  return (
    <button onClick={onClick}
      className={`px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-sm border transition-all duration-200
        ${active
          ? 'bg-yellow-600 border-yellow-600 text-black font-bold'
          : 'border-gray-800 text-gray-500 hover:border-yellow-700/50 hover:text-gray-300'
        }`}>
      {label}
    </button>
  );
}

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
        <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 text-gray-500 text-[9px] uppercase tracking-widest rounded-sm border border-gray-800">
          {producto.tipo}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} className="w-3 h-3 text-yellow-500" />
          ))}
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

function Productos({ agregarAlCarrito }) {
  const [search, setSearch] = useState('');
  const [genero, setGenero] = useState('todos');
  const [marca, setMarca] = useState('todas');
  const [familia, setFamilia] = useState('todas');
  const [tipo, setTipo] = useState('todos');
  const [precioIdx, setPrecioIdx] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const rango = rangosPrecios[precioIdx];
    return allProducts.filter(p => {
      const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) ||
        p.marca.toLowerCase().includes(search.toLowerCase());
      const matchGenero = genero === 'todos' || p.genero === genero;
      const matchMarca = marca === 'todas' || p.marca === marca;
      const matchFamilia = familia === 'todas' || p.familia === familia;
      const matchTipo = tipo === 'todos' || p.tipo === tipo;
      const matchPrecio = p.precio >= rango.min && p.precio <= rango.max;
      return matchSearch && matchGenero && matchMarca && matchFamilia && matchTipo && matchPrecio;
    });
  }, [search, genero, marca, familia, tipo, precioIdx]);

  const hasActiveFilters = genero !== 'todos' || marca !== 'todas' || familia !== 'todas' || tipo !== 'todos' || precioIdx !== 0 || search !== '';

  const clearAll = () => {
    setSearch(''); setGenero('todos'); setMarca('todas');
    setFamilia('todas'); setTipo('todos'); setPrecioIdx(0);
  };

  return (
    <div className="pt-16 min-h-screen bg-neutral-950">
      {/* Header sección */}
      <div className="bg-black border-b border-gray-900 px-4 py-10">
        <div className="max-w-screen-xl mx-auto">
          <span className="text-yellow-600/70 text-[10px] uppercase tracking-[0.5em]">Catálogo</span>
          <h1 className="text-4xl md:text-5xl font-light text-white mt-1"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            Todos los Perfumes
          </h1>
          <p className="text-gray-600 text-sm mt-2">{filtered.length} fragancias encontradas</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">

        {/* Barra búsqueda + toggle filtros */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre o marca..."
              className="w-full pl-9 pr-4 py-2.5 bg-neutral-900 border border-gray-800 text-white text-sm rounded focus:outline-none focus:border-yellow-700 placeholder-gray-700 transition-colors"
            />
          </div>
          <button onClick={() => setFiltersOpen(!filtersOpen)}
            className={`flex items-center gap-2 px-4 py-2.5 border text-xs uppercase tracking-widest transition-colors rounded sm:w-auto
              ${filtersOpen ? 'border-yellow-600 text-yellow-400' : 'border-gray-800 text-gray-500 hover:border-yellow-700/50'}`}>
            <HiFilter className="w-3.5 h-3.5" />
            Filtros
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            )}
          </button>
          {hasActiveFilters && (
            <button onClick={clearAll}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs text-red-400 hover:text-red-300 uppercase tracking-widest transition-colors">
              <HiX className="w-3 h-3" />
              Limpiar
            </button>
          )}
        </div>

        {/* Panel de filtros */}
        {filtersOpen && (
          <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6 mb-6 space-y-5">

            {/* Género */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-3">Género</p>
              <div className="flex flex-wrap gap-2">
                {['todos', 'hombres', 'mujeres'].map((g) => (
                  <FilterChip key={g} label={g === 'todos' ? 'Todos' : g.charAt(0).toUpperCase() + g.slice(1)}
                    active={genero === g} onClick={() => setGenero(g)} />
                ))}
              </div>
            </div>

            {/* Tipo */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-3">Tipo</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip label="Todos" active={tipo === 'todos'} onClick={() => setTipo('todos')} />
                {tipos.map((t) => (
                  <FilterChip key={t} label={t.charAt(0).toUpperCase() + t.slice(1)}
                    active={tipo === t} onClick={() => setTipo(t)} />
                ))}
              </div>
            </div>

            {/* Familia olfativa */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-3">Familia Olfativa</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip label="Todas" active={familia === 'todas'} onClick={() => setFamilia('todas')} />
                {familias.map((f) => (
                  <FilterChip key={f} label={f} active={familia === f} onClick={() => setFamilia(f)} />
                ))}
              </div>
            </div>

            {/* Marca */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-3">Marca</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip label="Todas" active={marca === 'todas'} onClick={() => setMarca('todas')} />
                {marcas.map((m) => (
                  <FilterChip key={m} label={m} active={marca === m} onClick={() => setMarca(m)} />
                ))}
              </div>
            </div>

            {/* Precio */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-3">Precio</p>
              <div className="flex flex-wrap gap-2">
                {rangosPrecios.map((r, i) => (
                  <FilterChip key={r.label} label={r.label} active={precioIdx === i} onClick={() => setPrecioIdx(i)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid de productos */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-700">
            <p className="text-4xl mb-4">✦</p>
            <p className="text-sm uppercase tracking-widest">Sin resultados</p>
            <button onClick={clearAll} className="mt-4 text-yellow-600 text-xs hover:text-yellow-400 transition-colors">
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Productos;
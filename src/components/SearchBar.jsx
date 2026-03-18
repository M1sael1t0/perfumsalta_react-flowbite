import React from 'react';
import { TextInput, Select } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';

function SearchBar({ searchTerm, setSearchTerm, categoria, setCategoria }) {
  return (
    <div className="bg-gray-900 py-8 px-4 border-y border-yellow-700/20">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-yellow-600/70 text-xs uppercase tracking-[0.4em] mb-5 font-medium">
          Buscar fragancia
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <TextInput
              icon={HiSearch}
              placeholder="Ej: Chanel, Dior, Oud..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500"
            />
          </div>
          <div className="sm:w-40">
            <Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            >
              <option value="todos">Todos</option>
              <option value="hombres">Hombres</option>
              <option value="mujeres">Mujeres</option>
            </Select>
          </div>
        </div>
        {searchTerm && (
          <p className="mt-3 text-xs text-yellow-500 text-center">
            Mostrando resultados para: <span className="font-bold">"{searchTerm}"</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';

function Header({ contadorCarrito, openCart }) {
  return (
    <Navbar
      fluid
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-700/40 px-6 py-3"
    >
      {/* Logo */}
      <NavbarBrand href="#inicio">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border-2 border-yellow-600 flex items-center justify-center bg-black">
            <span className="text-yellow-500 font-bold text-base" style={{ fontFamily: 'Georgia, serif' }}>
              PA
            </span>
          </div>
          <div className="leading-tight">
            <span className="block text-white font-bold text-base tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
              Perfums<span className="text-yellow-500">Alta</span>
            </span>
            <span className="block text-yellow-700/80 text-[9px] uppercase tracking-[0.25em]">
              Fragancias Exclusivas
            </span>
          </div>
        </div>
      </NavbarBrand>

      {/* Acciones derecha */}
      <div className="flex items-center gap-2 md:order-2">
        <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
          <FaSearch className="w-4 h-4" />
        </button>
        <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
          <FaUser className="w-4 h-4" />
        </button>
        <button
          onClick={openCart}
          className="relative p-2 text-gray-400 hover:text-yellow-400 transition-colors"
        >
          <FaShoppingCart className="w-5 h-5" />
          {contadorCarrito > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
              {contadorCarrito}
            </span>
          )}
        </button>
        <NavbarToggle className="text-white" />
      </div>

      {/* Links de navegación */}
      <NavbarCollapse>
        {[
          { label: 'Inicio', href: '#inicio' },
          { label: 'Productos', href: '#catalogo' },
          { label: 'Categorías', href: '#categorias' },
          { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
          { label: 'Contacto', href: '#contacto' },
        ].map((link) => (
          <NavbarLink
            key={link.label}
            href={link.href}
            className="text-gray-300 hover:text-yellow-400 uppercase tracking-widest text-xs font-medium transition-colors py-2"
          >
            {link.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;

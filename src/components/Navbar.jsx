import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

function LogoPA() {
  return (
    <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="25" stroke="#C9A84C" strokeWidth="1.2" fill="#0A0A0A" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#C9A84C" fontSize="19" fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic" fontWeight="bold" letterSpacing="1">
        PA
      </text>
      <line x1="9" y1="38" x2="19" y2="38" stroke="#C9A84C" strokeWidth="0.7" opacity="0.5" />
      <line x1="33" y1="38" x2="43" y2="38" stroke="#C9A84C" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

function Navbar({ contadorCarrito, openCart, openLogin, currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMenuOpen(false);
    window.scrollTo(0, 0); // Vuelve arriba al cambiar de página
  };

  const links = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Productos', id: 'productos' },
    { label: 'Categorías', id: 'categorias' },
    { label: 'Sobre Nosotros', id: 'nosotros' },
    { label: 'Newsletter', id: 'newsletter' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-yellow-900/20 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-black'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => handleNavClick('inicio')} className="flex items-center gap-3 shrink-0 text-left">
            <LogoPA />
            <div className="hidden sm:block leading-tight">
              <span className="block text-white font-semibold text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                Perfums<span className="text-yellow-500">Alta</span>
              </span>
              <span className="block text-yellow-800/70 text-[8px] uppercase tracking-[0.35em]">
                Fragancias Exclusivas
              </span>
            </div>
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)}
                className={`relative text-[11px] uppercase tracking-widest font-medium transition-colors duration-200 group
                  ${currentPage === link.id ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}>
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-yellow-500 transition-all duration-300
                  ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>

          {/* Iconos */}
          <div className="flex items-center gap-1">
            <button onClick={openLogin}
              className="p-2 text-gray-500 hover:text-yellow-400 transition-colors hidden sm:flex" title="Iniciar sesión">
              <FaUser className="w-3.5 h-3.5" />
            </button>
            <button onClick={openCart}
              className="relative p-2 text-gray-500 hover:text-yellow-400 transition-colors" title="Carrito">
              <FaShoppingCart className="w-4 h-4" />
              {contadorCarrito > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-yellow-500 text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                  {contadorCarrito}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-yellow-400 transition-colors ml-1">
              {menuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-900/20">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2.5 text-xs uppercase tracking-widest border-b border-gray-900 transition-colors
                  ${currentPage === link.id ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}>
                {link.label}
              </button>
            ))}
            <button onClick={() => { openLogin(); setMenuOpen(false); }}
              className="block w-full text-left py-2.5 text-xs uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors">
              Iniciar Sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

function Footer({ setCurrentPage }) {
  const handleNav = (id) => {
    setCurrentPage(id);
    window.scrollTo(0, 0); // Vuelve arriba al cambiar de página
  };

  const redes = [
    { Icono: BsFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { Icono: BsInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icono: BsTiktok, href: 'https://tiktok.com', label: 'TikTok' },
  ];

  return (
    <footer className="bg-black border-t border-yellow-900/15">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Marca */}
          <div>
            <span className="block text-white font-semibold text-lg tracking-widest uppercase mb-3"
              style={{ fontFamily: 'Georgia, serif' }}>
              Perfums<span className="text-yellow-500">Alta</span>
            </span>
            <p className="text-gray-700 text-xs leading-relaxed mb-5">
              Tu destino de confianza para las fragancias más exquisitas del mundo.
            </p>
            <div className="flex gap-3">
              {redes.map(({ Icono, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="w-7 h-7 border border-gray-800 flex items-center justify-center text-gray-600 hover:text-yellow-400 hover:border-yellow-800 transition-colors rounded">
                  <Icono className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación (Adaptada) */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-700 mb-5">Navegación</h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'inicio' },
                { label: 'Productos', id: 'productos' },
                { label: 'Categorías', id: 'categorias' },
                { label: 'Newsletter', id: 'newsletter' },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleNav(link.id)}
                    className="text-xs text-gray-600 hover:text-yellow-400 transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-700 mb-5">Legal</h3>
            <ul className="space-y-3">
              {['Política de Privacidad', 'Términos de Uso', 'Envíos', 'Devoluciones'].map((item) => (
                <li key={item}>
                  <button className="text-xs text-gray-600 hover:text-yellow-400 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-700 mb-5">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <HiLocationMarker className="w-3.5 h-3.5 text-yellow-800 mt-0.5 shrink-0" />
                <span className="text-xs text-gray-600">Cda. de Bravo 910, Cd. Altamirano, Gro.</span>
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="w-3.5 h-3.5 text-yellow-800 shrink-0" />
                <span className="text-xs text-gray-600">+52 951 434 8365</span>
              </li>
              <li className="flex items-center gap-2">
                <HiMail className="w-3.5 h-3.5 text-yellow-800 shrink-0" />
                <span className="text-xs text-gray-600">perfums_alta1@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-700 uppercase tracking-widest">
            © {new Date().getFullYear()} PerfumsAlta. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-yellow-900/60 uppercase tracking-widest italic"
            style={{ fontFamily: 'Georgia, serif' }}>
            Tu olfato nunca volverá a ser el mismo
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
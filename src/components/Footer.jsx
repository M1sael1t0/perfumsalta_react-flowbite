import React from 'react';
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const enlacesRapidos = [
  { label: 'Todos los Productos', href: '#catalogo' },
  { label: 'Nuevos Lanzamientos', href: '#catalogo' },
  { label: 'Ofertas Especiales', href: '#catalogo' },
  { label: 'Gift Sets', href: '#catalogo' },
];

const servicioCliente = [
  { label: 'Contacto', href: '#contacto' },
  { label: 'Envíos y Devoluciones', href: '#contacto' },
  { label: 'Preguntas Frecuentes', href: '#contacto' },
  { label: 'Política de Privacidad', href: '#privacidad' },
];

const redes = [
  { Icono: BsFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { Icono: BsInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icono: BsTiktok, href: 'https://tiktok.com', label: 'TikTok' },
];

function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-yellow-700/20">
      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border border-yellow-600 flex items-center justify-center bg-black">
                <span className="text-yellow-500 font-bold text-sm" style={{ fontFamily: 'Georgia, serif' }}>PA</span>
              </div>
              <span className="text-white font-bold text-base tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
                PERFUMSALTA
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Tu destino de confianza para las fragancias más exquisitas del mundo.
              Descubre el aroma que define tu esencia.
            </p>
            {/* Redes */}
            <div className="flex gap-3">
              {redes.map(({ Icono, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-600 transition-colors"
                >
                  <Icono className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-5">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5">
              {enlacesRapidos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicio al Cliente */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-5">
              Servicio al Cliente
            </h3>
            <ul className="space-y-2.5">
              {servicioCliente.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-5">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <HiLocationMarker className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                Cda. de Bravo 910, Cd. Altamirano, Gro.
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <HiPhone className="w-4 h-4 text-yellow-600 shrink-0" />
                +52 951 434 8365
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <HiMail className="w-4 h-4 text-yellow-600 shrink-0" />
                perfums_alta1@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Perfumería Altamirano. Todos los derechos reservados.
          </p>
          <p className="text-yellow-600/50 text-xs mt-1 font-medium tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
            ¡Tu olfato nunca volverá a ser el mismo!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

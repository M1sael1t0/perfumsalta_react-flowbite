import React from 'react';
import { Modal } from 'flowbite-react';
import { HiTrash, HiShoppingCart } from 'react-icons/hi';

function CartModal({ cart, isOpen, onClose, updateQuantity, removeFromCart, total }) {
  const cantidadTotal = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Modal show={isOpen} onClose={onClose} size="md" popup>
      <Modal.Body className="bg-neutral-900 rounded-lg p-0 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <HiShoppingCart className="w-4 h-4 text-yellow-500" />
            <span className="text-white text-sm font-medium"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
              Tu Carrito
            </span>
            {cantidadTotal > 0 && (
              <span className="px-2 py-0.5 bg-yellow-600 text-black text-[10px] font-bold rounded-sm">
                {cantidadTotal}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-white transition-colors text-xl">×</button>
        </div>

        {/* Items */}
        <div className="px-6 py-4 max-h-72 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-700">
              <HiShoppingCart className="w-8 h-8 mx-auto mb-3 opacity-20" />
              <p className="text-xs uppercase tracking-widest">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-800">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 py-4">
                  {item.imagen && (
                    <img src={item.imagen} alt={item.nombre}
                      className="w-12 h-12 object-cover rounded border border-gray-800" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">{item.nombre}</p>
                    <p className="text-yellow-600/70 text-[10px]">{item.marca}</p>
                    <p className="text-yellow-400 text-sm font-bold mt-0.5">{item.precioStr}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 border border-gray-700 text-gray-500 hover:border-yellow-600 hover:text-yellow-400 flex items-center justify-center rounded text-sm transition-colors">
                      −
                    </button>
                    <span className="w-5 text-center text-white text-xs font-bold">{item.cantidad}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 border border-gray-700 text-gray-500 hover:border-yellow-600 hover:text-yellow-400 flex items-center justify-center rounded text-sm transition-colors">
                      +
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}
                    className="p-1 text-gray-700 hover:text-red-400 transition-colors">
                    <HiTrash className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 text-[10px] uppercase tracking-widest">Total</span>
              <span className="text-yellow-400 text-xl font-bold"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                ${total.toLocaleString('es-AR')}
              </span>
            </div>
            <div className="flex gap-3">
              <button onClick={onClose}
                className="flex-1 py-2.5 border border-gray-800 text-gray-500 hover:border-yellow-800 hover:text-white text-[10px] uppercase tracking-widest transition-colors rounded">
                Seguir
              </button>
              <button
                className="flex-1 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-widest transition-colors rounded">
                Finalizar
              </button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default CartModal;
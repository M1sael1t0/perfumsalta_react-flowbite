import React from 'react';
import { Modal } from 'flowbite-react';
import { HiTrash, HiShoppingCart } from 'react-icons/hi';

function CartModal({ cart, isOpen, onClose, updateQuantity, removeFromCart, total }) {
  const cantidadTotal = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Modal show={isOpen} onClose={onClose} size="md" popup>
      <Modal.Header>
        <div className="flex items-center gap-2 pl-2 pt-1">
          <HiShoppingCart className="w-5 h-5 text-yellow-500" />
          <span className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Tu Carrito
          </span>
          {cantidadTotal > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-yellow-600 text-black text-xs font-bold rounded-sm">
              {cantidadTotal}
            </span>
          )}
        </div>
      </Modal.Header>

      <Modal.Body>
        {cart.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-5xl mb-4">🛒</p>
            <p className="font-medium">Tu carrito está vacío</p>
            <p className="text-sm mt-1">¡Agregá perfumes desde el catálogo!</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-4">
                {item.imagen && (
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-14 h-14 object-cover rounded border border-gray-200 dark:border-gray-700"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {item.nombre}
                  </p>
                  <p className="text-yellow-600 font-bold text-sm">{item.precio}</p>
                </div>

                {/* Cantidad */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-yellow-500 hover:text-yellow-500 font-bold transition-colors rounded-sm"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-900 dark:text-white">
                    {item.cantidad}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-yellow-500 hover:text-yellow-500 font-bold transition-colors rounded-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1.5 text-red-400 hover:text-red-600 transition-colors"
                >
                  <HiTrash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>

      {cart.length > 0 && (
        <Modal.Footer>
          <div className="w-full">
            <div className="flex justify-between items-center mb-4 pt-1 border-t border-gray-100 dark:border-gray-700">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Total</span>
              <span className="text-xl font-black text-yellow-600">
                ${total.toLocaleString('es-AR')}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-yellow-600 transition-colors"
              >
                Seguir comprando
              </button>
              <button
                className="flex-1 py-2.5 bg-yellow-600 hover:bg-yellow-500 text-black text-sm font-bold uppercase tracking-wide transition-colors"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default CartModal;

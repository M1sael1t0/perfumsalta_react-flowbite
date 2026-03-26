import React, { useState } from 'react';
import './index.css';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';

// Páginas
import Home from './pages/Home';
import Productos from './pages/Productos';
import Categorias from './pages/Categorias';
import Nosotros from './pages/Nosotros';
import Newsletter from './pages/Newsletter';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio'); // Estado de navegación

  // Lógica del Carrito
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id, amount) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) return { ...i, cantidad: Math.max(1, i.cantidad + amount) };
      return i;
    }));
  };

  const total = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const contadorCarrito = cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Sistema de navegación nativo
  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Home agregarAlCarrito={addToCart} setCurrentPage={setCurrentPage} />;
      case 'productos':
        return <Productos agregarAlCarrito={addToCart} />;
      case 'categorias':
        return <Categorias agregarAlCarrito={addToCart} />;
      case 'nosotros':
        return <Nosotros />;
      case 'newsletter':
        return <Newsletter />;
      default:
        return <Home agregarAlCarrito={addToCart} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar
        contadorCarrito={contadorCarrito}
        openCart={() => setIsCartOpen(true)}
        openLogin={() => setIsLoginOpen(true)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        total={total}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}

export default App;
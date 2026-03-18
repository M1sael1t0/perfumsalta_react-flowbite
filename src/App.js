import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Categories from './components/Categories';   // <-- NUEVO
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import SearchBar from './components/SearchBar';

// Datos
import { productosHombres, productosMujeres } from './data/productos';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFilter, setCategoriaFilter] = useState("todos");

  // --- CARRITO ---
  const addToCart = (product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);
      if (itemExists) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCart, { ...product, cantidad: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.cantidad + amount);
        return { ...item, cantidad: newQuantity };
      }
      return item;
    }));
  };

  const total = cart.reduce((acc, item) => {
    const precioNumerico = parseFloat(item.precio.replace(/[^0-9.-]+/g, ""));
    return acc + (precioNumerico * item.cantidad);
  }, 0);

  // --- FILTRADO ---
  const allProducts = useMemo(() => {
    const hombres = productosHombres.map(p => ({ ...p, genero: 'hombres' }));
    const mujeres = productosMujeres.map(p => ({ ...p, genero: 'mujeres' }));
    return [...hombres, ...mujeres];
  }, []);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoriaFilter === "todos" || product.genero === categoriaFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <Header
        contadorCarrito={cart.reduce((acc, item) => acc + item.cantidad, 0)}
        openCart={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />

        {/* Productos destacados (sin filtro activo) */}
        <ProductList
          titulo="Productos Destacados"
          idSeccion="catalogo"
          productos={filteredProducts}
          agregarAlCarrito={addToCart}
        />

        {/* Categorías */}
        <Categories />

        {/* Buscador */}
        <section className="container-search">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categoria={categoriaFilter}
            setCategoria={setCategoriaFilter}
          />
        </section>

        {/* Beneficios + Sobre Nosotros */}
        {/* Features está compuesto: franja beneficios + sección sobre nosotros */}
        {/* Si lo querés separado podés importar Features también */}

        <ContactForm />
      </main>

      <Footer />

      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        total={total}
      />
    </div>
  );
}

export default App;

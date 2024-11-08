import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact'; 
import Shop from './components/Shop'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product) => setCart([...cart, product]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route 
          path="/shop" 
          element={
            < Shop 
              addToCart={addToCart} 
              cart={cart} 
              removeFromCart={removeFromCart} 
            /> 
          } 
        />
      </Routes>
        {isCartOpen && (
          <Cart 
            cartItems={cart} 
            onClose={toggleCart} 
            removeFromCart={removeFromCart} 
          />
        )}
      <Footer />
    </Router>
  );
}

export default App;

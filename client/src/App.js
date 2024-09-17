import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import ProductInfo from './components/ProductInfo';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleSearch = (searchQuery) => {
    console.log('Search Query:', searchQuery);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList selectedCategory={selectedCategory} cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/categories"
            element={<Category onSelectCategory={handleSelectCategory} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// // App.js
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Category from './components/Category';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import Login from './components/Login';
// import Signup from './components/signup';
// import Checkout from './components/Checkout';

// import './App.css';

// function App() {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // Load cart data from localStorage when the App component mounts
//     const storedCart = localStorage.getItem('cart');
//     setCart(storedCart ? JSON.parse(storedCart) : []);
//   }, []);

//   const removeFromCart = (productId) => {
//     // Implement the logic to remove the product from the cart
//     const updatedCart = cart.filter((product) => product.id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };


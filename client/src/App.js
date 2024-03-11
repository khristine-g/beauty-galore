// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Category from './components/Category';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/signup';
import Checkout from './components/Checkout';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from localStorage when the App component mounts
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const removeFromCart = (productId) => {
    // Implement the logic to remove the product from the cart
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<ProductList cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
          />
          <Route path="/categories" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Display Cart only on the /cart route */}
          <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />

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

//   return (
//     <Router>
//       <Navbar />
//       <div className="App">
//         <Routes>

//         <Route path="/home" element={<Home />} />


//           <Route
//             path="/home"
//             element={<ProductList cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
//           />
//           <Route path="/categories" element={<Category />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} />} />
//           <Route path="/checkout" element={<Checkout cart={cart} />} />
      
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


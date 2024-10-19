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
import TopSellers from './components/ Offers';
import AllProducts from './components/AllProducts';
import OrderConfirmation from './components/OrderConfirmation';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]); // State for search results

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

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent reducing quantity below 1
    const updatedCart = cart.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleSearch = (searchResults) => {
    setSearchResults(searchResults); // Update state with search results
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element={<Home onSelectCategory={handleSelectCategory} />} 
          />
          <Route
            path="/products"
            element={
              <ProductList
                selectedCategory={selectedCategory}
                cart={cart}
                setCart={setCart}
                removeFromCart={removeFromCart}
                searchResults={searchResults} // Pass search results to ProductList
              />
            }
          />
          <Route
            path="/categories"
            element={<Category onSelectCategory={handleSelectCategory} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart 
            cart={cart} 
            onRemoveFromCart={removeFromCart} 
            onUpdateQuantity={handleUpdateQuantity} 
          />} />
          <Route path="/top-sellers" element={<TopSellers cart={cart} setCart={setCart} />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Category from './components/Category';
// import ProductList from './components/ProductList';
// // import TrendingProducts from './components/TrendingProducts';
// import Cart from './components/Cart';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Checkout from './components/Checkout';
// import ProductInfo from './components/ProductInfo';
// import TopSellers from './components/ TopSellers';
// import AllProducts from './components/AllProducts';
// import OrderConfirmation from './components/OrderConfirmation';

// import './App.css';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);


//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     setCart(storedCart ? JSON.parse(storedCart) : []);
//   }, []);

//   const handleSelectCategory = (categoryId) => {
//     setSelectedCategory(categoryId);
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((product) => product.id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const handleUpdateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent reducing quantity below 1
//     const updatedCart = cart.map(product =>
//       product.id === productId ? { ...product, quantity: newQuantity } : product
//     );
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const handleSearch = (searchResults) => {
//  // Update products state with search results
//   };

//   return (
//     <Router>
   
//       <div className="App">
//       <Navbar onSearch={handleSearch} />
     
//         <Routes>
//           <Route 
//             path="/" 
//             element={<Home onSelectCategory={handleSelectCategory} />} 
//           />
//           <Route
//             path="/products"
//             element={
//               <ProductList
//                 selectedCategory={selectedCategory}
//                 cart={cart}
//                 setCart={setCart}
//                 removeFromCart={removeFromCart}
//               />
//             }
//           />
//           <Route
//             path="/categories"
//             element={<Category onSelectCategory={handleSelectCategory} />}
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/cart" element={<Cart 
//             cart={cart} 
//             onRemoveFromCart={removeFromCart} 
//             onUpdateQuantity={handleUpdateQuantity} 
//           />} />
//            <Route path="/top-sellers" element={<TopSellers cart={cart} setCart={setCart} />} />
         
//           <Route path="/product-info" element={<ProductInfo />} />
//           <Route path="/checkout" element={<Checkout cart={cart} />} />
//           <Route path="/order-confirmation" element={<OrderConfirmation />} />
//           <Route path="/all-products" element={<AllProducts />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


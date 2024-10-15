

import React, { useState } from 'react';
import '../TopSellers.css'; // Import the CSS file

const TopSellers = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Morphe Natural Wonder  Eyeshadow Palette',
      image: 'https://uk.morphe.com/cdn/shop/products/Morphe_NaturalWonder_18WPalette_PDP_Open_grande.jpg?v=166179345',
      price: '$29.99',
      
    },
    {
      id: 2,
      name: 'Hydra vegetal moistrurizer',
      image: 'https://media.yves-rocher.com.sa/media/catalog/product/cache/3396ea3f96c12b8daa79648474e9f5ee/1/0/1001300114-bundle8-hv.jpg',
      price: '$49.99',
    
    },
    {
        id: 1,
        name: 'Kimuse Soft Cream Blush',
        image: 'https://m.media-amazon.com/images/I/51d7OxtbKkL._SL1000_.jpg',
        price: '$29.99',
        
      },
      
  ];

  // State to manage cart
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <h2 className='offer-header'>CURRENTLY ON OFFER</h2>
      <p>Check out what is currently on offer.</p>
    <div className="top-sellers-container">
      
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <p className="product-note">{product.note}</p>
          <button onClick={() => addToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default TopSellers;

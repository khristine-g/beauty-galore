


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../ProductInfo.css';

function ProductInfo({ onAddToCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return <p>Please select a product to view details.</p>;
  }

  const handleAddToCart = () => {
    console.log('Adding to cart:', product);

    try {
      const storedCart = localStorage.getItem('cart');
      const parsedCart = (storedCart && JSON.parse(storedCart)) || [];
      const existingProductIndex = parsedCart.findIndex((cartProduct) => cartProduct.id === product.id);

      if (existingProductIndex !== -1) {
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        parsedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(parsedCart));
      console.log('New Cart:', parsedCart);
      alert('Product added successfully');
      onAddToCart(parsedCart);
    } catch (error) {
      console.error('Error parsing or updating cart:', error);
    }
  };

  return (
    <div className="product-info">
      <div className="card">
        <img className='product-img' src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className='price'>${product.price}</p>
          <p className='description'>{product.description}</p>
          <button className="cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
      <button className='info-back-btn' onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default ProductInfo;

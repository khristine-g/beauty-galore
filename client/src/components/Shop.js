import React from 'react';
import { Link } from 'react-router-dom';
import '../Shop.css';

function Shop() {
  return (
    <div className="shop-container">
      <div className="shop-image-wrapper">
        <img
          src="https://st.depositphotos.com/62628780/61584/i/450/depositphotos_615848848-stock-photo-skincare-beauty-women-product-face.jpg"
          alt="Beauty Products"
          className="shop-image"
        />
        <div className="shop-content">
          <h3 className="shop-title">BRING OUT THE HIDDEN BEAUTY</h3>
          <p className="shop-description">
            Get styled with the high-fashion products and transform yourself.
          </p>
          <Link className="shop-link" to="/all-products">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;


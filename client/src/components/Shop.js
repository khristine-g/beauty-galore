import React from 'react';
import { Link } from 'react-router-dom';
import '../Shop.css';

function Shop() {
  return (
    <div className="shop-container">
      <div className="shop-image-wrapper">
        <img
          src="https://tigerlogistics.in/blogs/wp-content/uploads/2024/03/Cosmetics-Import.jpeg"
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


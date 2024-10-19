import React, { useState } from 'react';
import '../TopSellers.css'; // Import the CSS file

const TopSellers = ({ cart, setCart }) => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Morphe Natural Wonder Eyeshadow Palette',
      image: 'https://uk.morphe.com/cdn/shop/products/Morphe_NaturalWonder_18WPalette_PDP_Open_grande.jpg?v=166179345',
      price: '$29.99',
    },
    {
      id: 2,
      name: 'Hydra Vegetal Moisturizer',
      image: 'https://media.yves-rocher.com.sa/media/catalog/product/cache/3396ea3f96c12b8daa79648474e9f5ee/1/0/1001300114-bundle8-hv.jpg',
      price: '$49.99',
    },
    {
      id: 3,
      name: 'Kimuse Soft Cream Blush',
      image: 'https://m.media-amazon.com/images/I/51d7OxtbKkL._SL1000_.jpg',
      price: '$29.99',
    },
  ];

  // State to manage selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle product selection
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      alert(`${product.name} is already in the cart!`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); // Add quantity property
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <>
      <h2 className='offer-header'>CURRENTLY ON OFFER</h2>
      <p>Check out what is currently on offer.</p>
      <div className="top-sellers-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleSelectProduct(product)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when adding to cart
                addToCart(product);
              }}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Display product details when a product is selected */}
      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-detail-image" />
          <p className="product-price">{selectedProduct.price}</p>
          <button onClick={() => addToCart(selectedProduct)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
};

export default TopSellers;



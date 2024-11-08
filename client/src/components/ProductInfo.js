import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported
import { Modal, Button } from 'react-bootstrap';  // Import Bootstrap Modal and Button
import '../ProductInfo.css';

function ProductInfo({ setCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return <p>Please select a product to view details.</p>;
  }

  const handleAddToCart = () => {
    try {
      const storedCart = localStorage.getItem('cart');
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      const existingProductIndex = parsedCart.findIndex((cartProduct) => cartProduct.id === product.id);

      if (existingProductIndex !== -1) {
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        parsedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(parsedCart));
      setCart(parsedCart);  // Update the cart in the parent component

      // Show the Bootstrap modal when the product is added to the cart
      setShowModal(true);
    } catch (error) {
      console.error('Error parsing or updating cart:', error);
    }
  };

  const handleCloseModal = () => setShowModal(false);

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
      <button className='info-back-btn' onClick={() => navigate(-1)}>&lt;</button>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <span style={{ fontSize: '24px', color: 'green' }}>✔️</span>
            <p>Product added to cart successfully!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductInfo;

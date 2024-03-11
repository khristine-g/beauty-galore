import React, { useState, useEffect } from 'react';
import '../Checkout.css';

const Checkout = ({ cart, onPlaceOrder }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    // Add other user information fields as needed
  });

  useEffect(() => {
    console.log('Rendering Checkout component');
    console.log('Cart:', cart);
  }, [cart]);

  useEffect(() => {
    console.log('UserInfo:', userInfo);
  }, [userInfo]);

  const calculateTotalPrice = () => {
    if (!cart || !Array.isArray(cart)) {
      return 0;
    }

    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    // Validate user information before placing the order
    if (userInfo.name && userInfo.email && userInfo.address) {
      // Call the onPlaceOrder prop to submit the order
      await onPlaceOrder(userInfo);
      // Redirect or perform other actions after successful order placement
    } else {
      console.error('Please fill in all required fields.');
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="checkout">
        {/* <p>Your cart is empty. Add some items to proceed to checkout.</p> */}
      </div>
    );
  }

  return (
    <>
    <div className="checkout">
      <h2 style={{color:'#f08080'}}>Checkout</h2>
      {/* Display cart items and total price */}
      <h3 style={{color:'green'}}>Cart Summary:</h3>
      <ul className='check-list'>
        {cart.map((product) => (
          <li key={product.id}>
            <img className='check-img' src={product.image} alt={product.name} />
            <h4 className='check-name'>{product.name}</h4>
            <p className='check-price'>${product.price}</p>
          </li>
        ))}
      </ul>

      <p className='total-price'> Total Price: ${calculateTotalPrice()}</p>

      </div>

      <div>

      <form className='check-form'>
        {/* User information input fields */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={userInfo.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={userInfo.address} onChange={handleChange} required />

        {/* Add other user information fields as needed */}

        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
    </>
  );
};

export default Checkout;

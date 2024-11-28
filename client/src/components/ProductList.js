import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      try {
        const url = selectedCategory
          ? `http://localhost:3000/categories/${selectedCategory}/products`
          : 'http://localhost:3000/products';
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    navigate('/product-info', { state: { product } });
  };

  return (
    
    <div className="popular-product-list-container">

   
      <h2 className="popular-product-header">MOST POPULAR PRODUCTS</h2>
      <p className="product-subtext">The World's Premium Brands In One Destination.</p>

      {/* Category Buttons */}
      <div className="popular-category-buttons">
        <button
          className={`popular-category-button ${!selectedCategory ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`popular-category-button ${
              selectedCategory === category.id ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="popular-product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="popular-product-card"
            onClick={() => handleSelectProduct(product.id)}
          >
            <div className="popular-product-img-card">
              <img
                className="popular-product-img"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="popular-product-details">
              <h6 className="popular-product-name">{product.name}</h6>
              <p className="price">${product.price}</p>
              <div className="popular-product-rating">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default ProductList;

import React, { useEffect, useState } from 'react';
import '../ProductList.css';
import Category from './Category';
import ProductInfo from './ProductInfo';



function ProductList({ cart: propCart, bestSellingProducts  }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Fetch categories and products here
    // Replace the URLs with your actual API endpoints
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  const handleSelectCategory = async (categoryId) => {
    try {
      console.log('Selected Category ID:', categoryId);

      // Fetch products based on the selected category
      const response = await fetch(`http://localhost:3000/categories/${categoryId}`);
      const data = await response.json();

      console.log('Category Products:', data);

      setCategoryProducts(data);
      setSelectedCategory(categoryId);
    } catch (error) {
      console.error('Error fetching category products:', error);
    }
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
    setSelectedCategory(null);
  };
 

  return (
    <div className='ProductList'>
      <div>
        {selectedProduct ? (
          <ProductInfo product={selectedProduct} onGoBack={handleGoBack} />
        ) : (
          <>
            <Category categories={categories} onSelectCategory={handleSelectCategory} />
            {selectedCategory ? (
              <div>
                <h2>Products in Category</h2>
                <div className="product-list">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleSelectProduct(product.id)}>
                      <img className='product-img' src={product.image} alt={product.name} />
                      <h4 className='product-name'>{product.name}</h4>
                      <p className='price'>${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h1 className='product-header'>Top Products</h1>
                <div className="product-list">
                  {products.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleSelectProduct(product.id)}>
                      <img className='product-img' src={product.image} alt={product.name} />
                      <h4 className='product-name'>{product.name}</h4>
                      <p className='price'>${product.price}</p>
                    </div>
                  ))}
                </div>
             
                
              </>
            )}
          </>
        )}
      </div>
    </div>


  );
}

export default ProductList;



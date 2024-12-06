import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jwtToken, setJwtToken] = useState(null); // Add state for JWT token
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://beauty-galore.onrender.com/categories');
        
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
          ? `https://beauty-galore.onrender.com/categories/${selectedCategory}/products`
          : 'https://beauty-galore.onrender.com/products';

        // Fetch products with JWT token and credentials if available
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`, // If you use JWT for authentication
          },
          credentials: 'include', // Send cookies with the request if needed
        });

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory, jwtToken]); // Re-run when jwtToken changes

  useEffect(() => {
    // Optionally, you can retrieve the JWT token from localStorage, sessionStorage, or any other source
    const token = localStorage.getItem('jwtToken'); // Example of how you might retrieve it
    if (token) {
      setJwtToken(token);
    }
  }, []);

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


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../ProductList.css';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch categories
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://beautygalore-e2698a7e3042.herokuapp.com/categories');
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Fetch products
//     const fetchProducts = async () => {
//       try {
//         const url = selectedCategory
//           ? `   https://beautygalore-e2698a7e3042.herokuapp.com//categories/${selectedCategory}/products`
//           : '   https://beautygalore-e2698a7e3042.herokuapp.com//products';
//         const response = await fetch(url);
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategory]);

//   const handleSelectProduct = (productId) => {
//     const product = products.find((product) => product.id === productId);
//     navigate('/product-info', { state: { product } });
//   };

//   return (
    
//     <div className="popular-product-list-container">

   
//       <h2 className="popular-product-header">MOST POPULAR PRODUCTS</h2>
//       <p className="product-subtext">The World's Premium Brands In One Destination.</p>

//       {/* Category Buttons */}
//       <div className="popular-category-buttons">
//         <button
//           className={`popular-category-button ${!selectedCategory ? 'active' : ''}`}
//           onClick={() => setSelectedCategory(null)}
//         >
//           All
//         </button>
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className={`popular-category-button ${
//               selectedCategory === category.id ? 'active' : ''
//             }`}
//             onClick={() => setSelectedCategory(category.id)}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       <div className="popular-product-grid">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="popular-product-card"
//             onClick={() => handleSelectProduct(product.id)}
//           >
//             <div className="popular-product-img-card">
//               <img
//                 className="popular-product-img"
//                 src={product.image}
//                 alt={product.name}
//               />
//             </div>
//             <div className="popular-product-details">
//               <h6 className="popular-product-name">{product.name}</h6>
//               <p className="price">${product.price}</p>
//               <div className="popular-product-rating">
//                 {[...Array(5)].map((_, index) => (
//                   <span key={index} className="star">
//                     &#9733;
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
   
//   );
// }

// export default ProductList;

import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProductList.css';
import ProductInfo from './ProductInfo';

function ProductList({ selectedCategory, cart, setCart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < products.length - 4 ? prevIndex + 1 : 0;
      return newIndex;
    });
  }, [products.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : products.length - 4;
      return newIndex;
    });
  }, [products.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Adjust the duration (3000ms = 3s) for smooth movement

    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className='ProductList'>
      <div>
        {selectedProduct ? (
          <ProductInfo product={selectedProduct} onGoBack={handleGoBack} />
        ) : (
          <>
            <h2 className='product-header'>MOST POPULAR PRODUCTS</h2>
            <p>The World's Premium Brands In One Destination.</p>

            <div className="carousel-container">
              <button className="prev-btn" onClick={handlePrev}>&lt;</button>
              <div className="carousel-track-container">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                >
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="product-card"
                      onClick={() => handleSelectProduct(product.id)}
                    >
                      <div className="product-img-card">
                        <img className="product-img" src={product.image} alt={product.name} />
                      </div>
                      <div className="product-details">
                        <h4 className="product-name">{product.name}</h4>
                        <p className="price">${product.price}</p>
                        <div className="product-rating">
                          {[...Array(5)].map((_, index) => (
                            <span key={index} className="star">&#9733;</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="next-btn" onClick={handleNext}>&gt;</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;


// import React, { useEffect, useState, useCallback } from 'react';
// import '../ProductList.css';
// import ProductInfo from './ProductInfo';

// function ProductList({ selectedCategory, cart, setCart, removeFromCart }) {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const url = selectedCategory 
//           ? `http://localhost:3000/categories/${selectedCategory}/products` 
//           : 'http://localhost:3000/products';
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
//     setSelectedProduct(product);
//   };

//   const handleGoBack = () => {
//     setSelectedProduct(null);
//   };

//   const handleNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex < products.length - 4 ? prevIndex + 1 : 0;
//       return newIndex;
//     });
//   }, [products.length]);

//   const handlePrev = useCallback(() => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex > 0 ? prevIndex - 1 : products.length - 4;
//       return newIndex;
//     });
//   }, [products.length]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNext();
//     }, 3000); // Adjust the duration (3000ms = 3s) for smooth movement

//     return () => clearInterval(intervalId);
//   }, [handleNext]);

//   return (
//     <div className='ProductList'>
//       <div>
//         {selectedProduct ? (
//           <ProductInfo product={selectedProduct} onGoBack={handleGoBack} />
//         ) : (
//           <>
//             <h1 className='product-header'>Top Products</h1>
//             <div className="carousel-container">
//               <button className="prev-btn" onClick={handlePrev}>&lt;</button>
//               <div className="carousel-track-container">
//                 <div
//                   className="carousel-track"
//                   style={{ transform: `translateX(-${currentIndex * 25}%)` }}
//                 >
//                   {products.map((product) => (
//                     <div
//                       key={product.id}
//                       className="product-card"
//                       onClick={() => handleSelectProduct(product.id)}
//                     >
//                       <div className="product-img-card">
//                         <img className="product-img" src={product.image} alt={product.name} />
//                       </div>
//                       <div className="product-details">
//                         <h4 className="product-name">{product.name}</h4>
//                         <p className="price">${product.price}</p>
//                         <div className="product-rating">
//                           {[...Array(5)].map((_, index) => (
//                             <span key={index} className="star">&#9733;</span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button className="next-btn" onClick={handleNext}>&gt;</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductList;



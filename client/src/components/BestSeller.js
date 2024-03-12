import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

function BestSeller({ bestSellerCategory }) {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${bestSellerCategory}`);
        const data = await response.json();

        // Ensure that data is an array before setting the state
        if (Array.isArray(data)) {
          setBestSellerProducts(data);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching best seller products:', error);
      }
    };

    fetchProducts();
  }, [bestSellerCategory]);

  return (
    <div className="BestSeller">
      {/* <h2>Best Selling Products</h2> */}
      <div className="product-list">
        {bestSellerProducts.map(product => (
          <ProductList key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;


// import React, { useEffect, useState } from 'react';
// import ProductList from './ProductList';

// function BestSeller({ bestSellerCategory }) {
//   const [bestSellerProducts, setBestSellerProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products based on the selected category
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/categories/${bestSellerCategory}`);
//         const data = await response.json();
//         setBestSellerProducts(data); // Set the entire data received from the server
//       } catch (error) {
//         console.error('Error fetching best seller products:', error);
//       }
//     };
    

//     fetchProducts();
//   }, [bestSellerCategory]);

//   return (
//     <div className="BestSeller">
//       <h2>Best Selling Products</h2>
//       <div className="product-list">
//         {bestSellerProducts.map(product => (
//           <ProductList key={product.name} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BestSeller;

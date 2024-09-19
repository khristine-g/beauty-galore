import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Category from './Category';
import Shop from './Shop';
import NewsletterModal from './NewsletterModal'; // Import the modal component
import '../Home.css';

const Home = ({ onSelectCategory }) => {
  const slides = [
    {
      image: 'https://lucebeauty.com/cdn/shop/articles/Blog_picture_resized_8.png?v=1688026170',
      text: 'Discover our self-care essentials',
    },
    {
      image: 'https://www.beautyheaven.com.au/wp-content/uploads/2022/08/bh-header-oily-skin-care.png',
      text: 'Experience the magic of skincare',
    },
    {
      image: 'https://cureaquagel.com/cdn/shop/articles/November-Is-National-Health-Skin-Month-Its-Time-To-Promote-Good-Skin-Care-Habits.jpg?v=1660056045',
      text: 'Enhance your beauty routine with friends',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setModalOpen] = useState(true); // Start with the modal open

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [slides.length]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='slideshow-container'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.text}</h2>
              <p>Browse our collection of skincare essentials, curated for your best self.</p>
              <button className="browse-btn">Browse More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Category and ProductList displayed below the images */}
      <Category onSelectCategory={onSelectCategory} />
      <ProductList />
      <Shop />

      {isModalOpen && <NewsletterModal onClose={closeModal} />} {/* Render the modal */}
    </>
  );
};

export default Home;



// import React, { useState, useEffect } from 'react';
// import ProductList from './ProductList';
// import Category from './Category';
// import Shop from './Shop';
// import '../Home.css';

// const Home = ({ onSelectCategory }) => {
//   const slides = [
//     {
//       image: ' https://lucebeauty.com/cdn/shop/articles/Blog_picture_resized_8.png?v=1688026170',
//       text: 'Discover our self-care essentials',
//     },
//     {
//       image: 'https://www.beautyheaven.com.au/wp-content/uploads/2022/08/bh-header-oily-skin-care.png',
//       text: 'Experience the magic of skincare',
//     },
//     {
//       image: 'https://cureaquagel.com/cdn/shop/articles/November-Is-National-Health-Skin-Month-Its-Time-To-Promote-Good-Skin-Care-Habits.jpg?v=1660056045',
//       text: 'Enhance your beauty routine with friends',
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [slides.length]);

//   return (
//     <>
//       <div className='slideshow-container'>
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${index === currentSlide ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="slide-content">
//               <h2>{slide.text}</h2>
//               <p>Browse our collection of skincare essentials, curated for your best self.</p>
//               <button className="browse-btn">Browse More</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Category and ProductList displayed below the images */}
//       <Category onSelectCategory={onSelectCategory} />
     
//       <ProductList />
//       <Shop />
//     </>
//   );
// };

// export default Home;

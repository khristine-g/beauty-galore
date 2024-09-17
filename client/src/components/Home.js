import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Category from './Category';
import '../Home.css';

const Home = () => {
  const slides = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0012/1657/7656/files/self-care-items-every-woman-needs.jpg?v=1680117344',
      text: 'Discover our self-care essentials',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0492/8680/7715/files/shiko_skincare_banner.jpg?v=1616592023',
      text: 'Experience the magic of skincare',
    },
    {
      image: 'https://st5.depositphotos.com/62628780/62388/i/450/depositphotos_623885620-stock-photo-skincare-beauty-black-women-friends.jpg',
      text: 'Enhance your beauty routine with friends',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [slides.length]);

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
      <Category />
      <ProductList />
    </>
  );
};

export default Home;

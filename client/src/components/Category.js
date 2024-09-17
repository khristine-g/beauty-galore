import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../Category.css';

function Category({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < categories.length - 4 ? prevIndex + 1 : 0;
      return newIndex;
    });
  }, [categories.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : categories.length - 4;
      return newIndex;
    });
  }, [categories.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Adjust the duration (3000ms = 3s) for smooth movement

    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className='Category'>
      <h2 className='category-header'>MOST PREFERRED CATEGORIES</h2>
      <p>The World's Premium Brands In One Destination.</p>

      <div className="carousel-container">
        <button className="prev-btn" onClick={handlePrev}>&lt;</button>
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => onSelectCategory(category.id)}
              >
                <div className="category-img-card">
                  <img className="category-img" src={category.image} alt={category.name} />
                </div>
                <div className="category-details">
                  <h4 className="category-name">{category.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="next-btn" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

// Add PropTypes validation
Category.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};

export default Category;




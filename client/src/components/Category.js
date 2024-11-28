import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Category.css';

function Category({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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
    setCurrentIndex((prevIndex) =>
      prevIndex < categories.length - 4 ? prevIndex + 1 : 0
    );
  }, [categories.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categories.length - 4
    );
  }, [categories.length]);

  const handleSelectCategory = (categoryId) => {
    onSelectCategory(categoryId);
    navigate('/products');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className="animate-on-scroll">
    <div className="category-section">
      <h5 className="category-header">SHOP BY CATEGORIES</h5>
      <p className="category-subheader">
        Explore the finest selection from premium brands worldwide.
      </p>

      <div className="category-buttons-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-button"
            onClick={() => handleSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="carousel-container">
        <button className="prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => handleSelectCategory(category.id)}
              >
                <div className="category-img-container">
                  <img
                    className="category-img"
                    src={category.image}
                    alt={category.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
    </div>
  );
}

export default Category;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Category.css';

function Category({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

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

  // Validate that onSelectCategory is a function
  if (typeof onSelectCategory !== 'function') {
    console.error('onSelectCategory is not a function:', onSelectCategory);
  }

  return (
    <div className='Category'>
      <div className="category-list">
        <h2>Categories</h2>
        <div className="card-container">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => onSelectCategory(category.id)}
            >
              <img src={category.image} alt={category.name} />
              <p className='category-name'>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add PropTypes validation
Category.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};

export default Category;



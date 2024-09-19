import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import '../Navbar.css';

const Navbar = ({ onSearch }) => {
  const [scrolled, setScrolled] = useState(false);

      const [searchInput, setSearchInput] = useState('');
    
      const handleInputChange = (e) => {
        setSearchInput(e.target.value);
       };
    
      const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchInput);
      };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand">SERENE BEAUTY</div>

     
      <ul className="navbar-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/signup">SIGNUP</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
       
      
        
      </ul>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <FaSearch className="search-icon" onClick={handleSearch} />
        </div>
      </form>
      
        </nav>
    
  );
};

export default Navbar;
 



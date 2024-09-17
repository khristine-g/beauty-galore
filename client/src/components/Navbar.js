import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
          <input
           className="form-control mr-sm-2"
            type="search"
           placeholder="Search"
            aria-label="Search"
           value={searchInput}
            onChange={handleInputChange}
          />
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        </nav>
    
  );
};

export default Navbar;
 



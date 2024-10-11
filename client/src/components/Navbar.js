import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

import '../Navbar.css';

const Navbar = ({ onSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggle menu
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-brand">SERENE BEAUTY</div>

      {/* Hamburger Menu Icon for mobile */}
      <div className="navbar-toggle" onClick={handleToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Change icon based on menu state */}
      </div>

      {/* Menu Links - Toggled based on menuOpen state */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>CART</Link></li>
        <li><Link to="/signup" onClick={() => setMenuOpen(false)}>SIGNUP</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link></li>
      </ul>

      {/* Search Form */}
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




// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

// import '../Navbar.css';

// const Navbar = ({ onSearch }) => {
//   const [scrolled, setScrolled] = useState(false);

//       const [searchInput, setSearchInput] = useState('');
    
//       const handleInputChange = (e) => {
//         setSearchInput(e.target.value);
//        };
    
//       const handleSearch = (e) => {
//         e.preventDefault();
//         onSearch(searchInput);
//       };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); 
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-brand">SERENE BEAUTY</div>

     
//       <ul className="navbar-links">
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/cart">CART</Link></li>
//         <li><Link to="/signup">SIGNUP</Link></li>
//         <li><Link to="/login">LOGIN</Link></li>
       
      
        
//       </ul>
//       <form className="search-form" onSubmit={handleSearch}>
//         <div className="search-container">
//           <input
//             className="search-input"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//             value={searchInput}
//             onChange={handleInputChange}
//           />
//           <FaSearch className="search-icon" onClick={handleSearch} />
//         </div>
//       </form>
      
//         </nav>
    
//   );
// };

// export default Navbar;
 



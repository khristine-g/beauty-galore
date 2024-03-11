import React from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0 m-6" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react';
// import '../Navbar.css';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Navbar = () => {
//   return (
//     <div>
//       <ul className="navbar">
//       <li>
//           <Link to="/home">Home</Link>
          
//         </li>
       
//         <li>
//           <Link to="/signup">Signup</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
          
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
          
//         </li>
//         <li>
        
          
//         </li>
        
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

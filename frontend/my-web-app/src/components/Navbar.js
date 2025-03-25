import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">ShopEase</div>
      <div className="nav-center">
        <ul className="nav-links">
        
          <li><Link to="/home">Home</Link></li>
        
        

          {/* Products with Dropdown */}
          <li className="dropdown" 
              onMouseEnter={() => setShowDropdown(true)} 
              onMouseLeave={() => setShowDropdown(false)}>
            <Link to="#">Products ▼</Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/products/accessories">Accessories</Link></li>
                <li><Link to="/products/mobiles">Tablets & Mobiles</Link></li>
                <li><Link to="/products/electronics">Electronics</Link></li>
              </ul>
            )}
          </li>


          

          <li><Link to="/cart">Cart</Link></li>


        </ul>
      </div>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

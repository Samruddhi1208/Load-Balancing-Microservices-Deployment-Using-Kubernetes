import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure this file has styles

const productCategories = [
  "Clothing",
  "Accessories",
  "Skincare",
  "Makeup",
  "Household Items",
  "Grocery",
  "Smartphones & Tablets",
  "Electronics",
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="brand">
        <span>Brand Name and Logo</span>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        {/* Products Dropdown */}
        <li className="dropdown-container">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="dropdown-toggle"
          >
            Products ▼
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                {productCategories.map((category, index) => (
                  <li key={index} className="dropdown-item">
                    <Link
                      to={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="dropdown-link"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li>
          <Link to="/deals" className="nav-link">
            Today's Deals
          </Link>
        </li>
        <li>
          <Link to="/bestsellers" className="nav-link">
            Bestsellers
          </Link>
        </li>
      </ul>

      {/* Log In Button */}
      <div>
        <Link to="/login" className="login-button">
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

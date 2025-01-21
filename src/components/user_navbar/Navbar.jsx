import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Electro Borrow
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rent" className="nav-item">
              Rent
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="nav-item">
              Contacts
            </Link>
          </li>
        </ul>
        <div className="navbar-user">
          <div
            className="user-icon"
            onClick={toggleDropdown}
            title="User Menu"
          >
            <i className="fas fa-user-circle"></i>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <Link to="/settings" className="dropdown-item">
                Settings
              </Link>
              <Link to="/logout" className="dropdown-item">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

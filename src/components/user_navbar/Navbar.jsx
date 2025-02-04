import React, { useState } from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
<<<<<<< Updated upstream

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
=======
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage the dialog
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    setIsDialogOpen(true); // Show the confirmation dialog
  };

  const confirmLogout = (confirm) => {
    if (confirm) {
      // Redirect to homepage or logout logic
      navigate("/"); // This can be replaced with actual logout logic (clearing cookies or token)
    } else {
      setIsDialogOpen(false); // Close the dialog
    }
>>>>>>> Stashed changes
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
<<<<<<< Updated upstream
        <Link to="/" className="navbar-logo">
=======
        <Link to="/dashboard" className="navbar-logo">
>>>>>>> Stashed changes
          Electro Borrow
        </Link>
        <ul className="navbar-links">
          <li>
<<<<<<< Updated upstream
            <Link to="/" className="nav-item">
=======
            <Link to="/dashboard" className="nav-item">
>>>>>>> Stashed changes
              Home
            </Link>
          </li>
          <li>
            <Link to="/rent" className="nav-item">
              Rent
            </Link>
          </li>
          <li>
<<<<<<< Updated upstream
            <Link to="/blog" className="nav-item">
              Blog
            </Link>
          </li>
          <li>
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <Link to="/settings" className="dropdown-item">
                Settings
              </Link>
              <Link to="/logout" className="dropdown-item">
                Logout
              </Link>
=======
              <Link to="/cart" className="dropdown-item">
                Cart
              </Link>
              <Link to="/favorites" className="dropdown-item">
                Favourites
              </Link>
              <Link to="/update-information" className="dropdown-item">
                Update Information
              </Link>
              <Link to="/address" className="dropdown-item">
                Update Address
              </Link>

              <div
                className="dropdown-item logout-item"
                onClick={handleLogout}
              >
                Logout
              </div>
>>>>>>> Stashed changes
            </div>
          )}
        </div>
      </div>
<<<<<<< Updated upstream
=======

      {/* Logout confirmation dialog */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Do you want to logout?</h3>
            <div className="dialog-actions">
              <button
                className="btn confirm-btn"
                onClick={() => confirmLogout(true)} // Navigate to home on Yes
              >
                Yes
              </button>
              <button
                className="btn cancel-btn"
                onClick={() => confirmLogout(false)} // Close dialog on No
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
>>>>>>> Stashed changes
    </nav>
  );
};

export default Navbar;

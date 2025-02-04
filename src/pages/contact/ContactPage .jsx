import React from 'react';
import './ContactPage.css'; // Import the CSS for the Contact Page

// Import the image
import contactImage from '../../assets/images/image.png';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Left Side (Image) */}
      <div className="contact-image">
        <img
          src={contactImage} // Use the imported image
          alt="Contact Us"
          className="contact-img"
        />
      </div>

      {/* Right Side (Contact Info) */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> +977 908790876</p>
        <p><strong>Email:</strong> electro@electroborrow.com</p>
        <p><strong>Address:</strong> Pharping, Kathmandu</p>
      </div>
    </div>
  );
};

export default ContactPage;

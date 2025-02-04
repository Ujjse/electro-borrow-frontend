import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmBooking.css"; // Your styling here
import Navbar from "../../components/user_navbar/Navbar";

const ConfirmBooking = () => {
  const location = useLocation();
  const { productName, productImage, productPrice, startDate, endDate, totalCost } = location.state;

  return (
    <div>
        <Navbar />
    <div className="confirm-booking-container">
      <div className="left-box">
        <h4>Per Day Charge</h4>
        <p>NPR {productPrice}</p>

        <div className="dates">
          <h5>Total Price</h5>
          <p>NPR {totalCost}</p>
        </div>

        <button className="confirm-btn">
          Confirm & Pay
        </button>
      </div>

      <div className="right-box">
        <div className="product-info">
          <img 
            src={`http://localhost:5000/products/${productImage}`} 
            alt={productName} 
            className="product-image"
          />
        </div>

        <div className="dates-selection">
          <label>Start Date: {startDate.toLocaleDateString()}</label>
          <label>End Date: {endDate.toLocaleDateString()}</label>
        </div>

        <p className="tax-note">All taxes are included</p>
      </div>
    </div>
    </div>
  );
};

export default ConfirmBooking;

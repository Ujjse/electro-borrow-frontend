// Success page (Confirmation page)
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Assuming your payment verification is handled via backend
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get("/api/order/get_all_order"); // Fetch the latest order
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  if (!orderDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Order Confirmed</h2>
      <p>Product: {orderDetails.productName}</p>
      <p>Total Cost: Rs. {orderDetails.totalCost}</p>
      <p>Start Date: {new Date(orderDetails.startDate).toDateString()}</p>
      <p>End Date: {new Date(orderDetails.endDate).toDateString()}</p>
    </div>
  );
};

export default PaymentSuccessPage;

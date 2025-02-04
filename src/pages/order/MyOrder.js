import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order">
              <img
                src={`http://localhost:5000/products/${order.productImage}`}
                alt={order.productName}
                className="product-image"
              />
              <p><strong>Product:</strong> {order.productName}</p>
              <p><strong>Total Cost:</strong> Rs. {order.totalCost}</p>
              <p><strong>Booking Period:</strong> {new Date(order.startDate).toLocaleDateString()} - {new Date(order.endDate).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {order.paymentStatus}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;

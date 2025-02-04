import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './CartPage.css'
import Navbar from "../../components/user_navbar/Navbar";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Navbar/>
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img
                src={`http://localhost:5000/products/${product.productImage}`}
                alt={product.productName}
                className="img-fluid"
              />
              <div>
                <h4>{product.productName}</h4>
                <p>Price: Rs. {product.productPrice}</p>
                <button
                  className="btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          <button
            className="proceed-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;

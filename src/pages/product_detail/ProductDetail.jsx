import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../../apis/Api";
import Navbar from "../../components/user_navbar/Navbar";
import { FaShoppingCart, FaHeart } from "react-icons/fa"; // Importing the icons
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Retrieve product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Getting cart and favorites from localStorage or initializing as empty arrays
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  useEffect(() => {
    console.log("Received ID from useParams:", id); // Debug log for ID
    fetchProduct();
  }, [id]);

  const fetchProduct = () => {
    setLoading(true);
    getSingleProduct(id)
      .then((res) => {
        console.log("API Response in frontend:", res.data); // Debug API response
        if (res.data.success) {
          setProduct(res.data.products);
        } else {
          setError("Product not found.");
        }
      })
      .catch((err) => {
        console.error("API Error:", err); // Debug API error
        setError("Failed to load product details.");
      })
      .finally(() => setLoading(false));
  };

  // Add product to cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist cart in localStorage
  };

  // Add product to favorites
  const addToFavorites = (product) => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persist favorites in localStorage
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {loading ? (
          <p>Loading product details...</p>
        ) : error ? (
          <p>{error}</p>
        ) : product ? (
          <div className="row">
            <div className="col-md-6">
              <img
                src={`http://localhost:5000/products/${product.productImage}`}
                alt={product.productName}
                className="img-fluid product-image" // Add the class here
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between align-items-center">
                <h2>{product.productName}</h2>
                <div className="icons">
                  <FaHeart
                    className="icon heart-icon"
                    title="Add to Favourites"
                    onClick={() => addToFavorites(product)} // Add to favorites on click
                  />
                  <FaShoppingCart
                    className="icon cart-icon"
                    title="Add to Cart"
                    onClick={() => addToCart(product)} // Add to cart on click
                  />
                </div>
              </div>
              <p>{product.productDescription}</p>
              <h4>Price: {product.productPrice}</h4>
              <button
                className="btn btn-primary mt-3"
                onClick={() => navigate("/booking", { state: product })}
              >
                Book Now
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProductDetail;

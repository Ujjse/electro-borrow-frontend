import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Favourite.css'

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesData);
  }, []);

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((product) => product.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-4">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="empty-favorites">Your favorites list is empty!</p>
      ) : (
        <div>
          {favorites.map((product) => (
            <div key={product.id} className="favorite-item">
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
                  onClick={() => removeFromFavorites(product.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../apis/Api";
import "./UserDashboard.css";
import ProductCard from "../../components/product_card/ProductCard";
import Navbar from "../../components/user_navbar/Navbar";

import dash from "../../assets/images/dash.png";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search
  const productsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, searchQuery]); // Dependency on searchQuery

  const fetchProducts = (page) => {
    setLoading(true);
    getAllProducts(page, productsPerPage, searchQuery)  // Passing searchQuery to the API
      .then((res) => {
        if (res.data.products.length === 0) {
          setError("No products found.");
        } else {
          setProducts(res.data.products);
          setTotalPages(res.data.pagination.totalPages);
          setError("");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query on change
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page after search
    fetchProducts(1); // Fetch the products for the new search query
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={dash} 
                className="d-block w-100"
                alt="electo device"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-container mt-4">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="search-bar"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>

      {/* Product Display */}
      <div className="container mt-3">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <>
            {error ? (
              <p>{error}</p>
            ) : (
              <>
                <div className="row">
                  {products.map((singleProduct) => (
                    <div className="col" key={singleProduct.id}>
                      <ProductCard productInformation={singleProduct} color={"red"} />
                    </div>
                  ))}
                </div>
                <nav aria-label="Product navigation">
                  <ul className="pagination justify-content-center mt-4">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={handlePrevPage}>Previous</button>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={handleNextPage}>Next</button>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default UserDashboard;

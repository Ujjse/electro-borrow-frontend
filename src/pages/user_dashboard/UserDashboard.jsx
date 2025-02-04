<<<<<<< Updated upstream
=======


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllProducts } from "../../apis/Api";
// import "./UserDashboard.css";
// import ProductCard from "../../components/product_card/ProductCard";
// import Navbar from "../../components/user_navbar/Navbar";
// import dash from "../../assets/images/dash.png";
// import electroImage from "../../assets/images/electro.jpg";  // Import the image

// const UserDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const productsPerPage = 9;
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [currentPage, searchQuery]);

//   const fetchProducts = (page) => {
//     setLoading(true);
//     getAllProducts(page, productsPerPage, searchQuery)
//       .then((res) => {
//         if (res.data.products.length === 0) {
//           setError("No products found.");
//         } else {
//           setProducts(res.data.products);
//           setTotalPages(res.data.pagination.totalPages);
//           setError("");
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to fetch products.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setCurrentPage(1);
//     fetchProducts(1);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div id="carouselExampleCaptions" className="carousel slide">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={dash} className="d-block w-100" alt="electro device" />
//             </div>
//           </div>
//         </div>

//         <div className="search-container mt-4">
//           <form onSubmit={handleSearchSubmit} className="search-form">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search for products..."
//               className="search-bar"
//             />
//             <button type="submit" className="search-button">
//               Search
//             </button>
//           </form>
//         </div>

//         {/* New Section with Image and Text */}
//         <div className="info-box mt-4">
//           <div className="info-box-content">
//             <img src={electroImage} alt="Electro" className="info-box-image" />
//             <div className="info-box-text">
//               <h2>The future is flexible, and so are we.</h2>
//               <p>
//                 Whether you need the latest gadgets for a day, a week, or a month, we’re here to make it happen.
//                 Access technology on your terms—because the future belongs to those who adapt.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-3">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <>
//             {error ? (
//               <p>{error}</p>
//             ) : (
//               <div className="row">
//                 {products.map((singleProduct) => (
//                   <div className="col" key={singleProduct._id}>
//                     <ProductCard
//                       productInformation={singleProduct}
//                       onClick={() => handleCardClick(singleProduct._id)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <nav aria-label="Product navigation">
//               <ul className="pagination justify-content-center mt-4">
//                 <li
//                   className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//                 >
//                   <button className="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li
//                   className={`page-item ${
//                     currentPage === totalPages ? "disabled" : ""
//                   }`}
//                 >
//                   <button className="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default UserDashboard;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllProducts } from "../../apis/Api";
// import "./UserDashboard.css";
// import ProductCard from "../../components/product_card/ProductCard";
// import Navbar from "../../components/user_navbar/Navbar";
// import dash from "../../assets/images/dash.png";
// import electroImage from "../../assets/images/electro.jpg";  // Import the image

// const UserDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [navbarHeight, setNavbarHeight] = useState(0); // State to store the navbar height
//   const productsPerPage = 9;
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts(currentPage);
//     const navbar = document.querySelector('.navbar');
//     if (navbar) {
//       setNavbarHeight(navbar.offsetHeight); // Get the height of the navbar
//     }
//   }, [currentPage, searchQuery]);

//   useEffect(() => {
//     const container = document.querySelector('.container');
//     if (container) {
//       container.style.marginTop = `${navbarHeight}px`; // Apply dynamic margin-top based on navbar height
//     }
//   }, [navbarHeight]); // Re-run this effect whenever navbarHeight changes

//   const fetchProducts = (page) => {
//     setLoading(true);
//     getAllProducts(page, productsPerPage)
//       .then((res) => {
//         if (res.data.products.length === 0) {
//           setError("No products found.");
//         } else {
//           setProducts(res.data.products);
//           setTotalPages(res.data.pagination.totalPages);
//           setError("");
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to fetch products.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setCurrentPage(1);
//     fetchProducts(1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };


//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div id="carouselExampleCaptions" className="carousel slide">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={dash} className="d-block w-100" alt="electro device" />
//             </div>
//           </div>
//         </div>

//         <div className="search-container mt-4">
//           <form onSubmit={handleSearchSubmit} className="search-form">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search for products..."
//               className="search-bar"
//             />
//             <button type="submit" className="search-button">
//               Search
//             </button>
//           </form>
//         </div>

//         {/* New Section with Image and Text */}
//         <div className="info-box mt-4">
//           <div className="info-box-content">
//             <img src={electroImage} alt="Electro" className="info-box-image" />
//             <div className="info-box-text">
//               <h2>The future is flexible, and so are we.</h2>
//               <p>
//                 Whether you need the latest gadgets for a day, a week, or a month, we’re here to make it happen.
//                 Access technology on your terms—because the future belongs to those who adapt.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-3">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <>
//             {error ? (
//               <p>{error}</p>
//             ) : (
//               <div className="row">
//                 {products.map((singleProduct) => (
//                   <div className="col" key={singleProduct._id}>
//                     <ProductCard
//                       productInformation={singleProduct}
//                       onClick={() => handleCardClick(singleProduct._id)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <nav aria-label="Product navigation">
//               <ul className="pagination justify-content-center mt-4">
//                 <li
//                   className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//                 >
//                   <button className="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li
//                   className={`page-item ${
//                     currentPage === totalPages ? "disabled" : ""
//                   }`}
//                 >
//                   <button className="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default UserDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllProducts } from "../../apis/Api";
// import "./UserDashboard.css";
// import ProductCard from "../../components/product_card/ProductCard";
// import Navbar from "../../components/user_navbar/Navbar";
// import dash from "../../assets/images/dash.png";
// import electroImage from "../../assets/images/electro.jpg";  // Import the image

// const UserDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const productsPerPage = 9;
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [currentPage, searchQuery]);

//   const fetchProducts = (page) => {
//     setLoading(true);
//     getAllProducts(page, productsPerPage)
//       .then((res) => {
//         if (res.data.products.length === 0) {
//           setError("No products found.");
//         } else {
//           setProducts(res.data.products);
//           setTotalPages(res.data.pagination.totalPages);
//           setError("");
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to fetch products.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setCurrentPage(1);
//     fetchProducts(1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div id="carouselExampleCaptions" className="carousel slide">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={dash} className="d-block w-100" alt="electro device" />
//             </div>
//           </div>
//         </div>

//         <div className="search-container mt-4">
//           <form onSubmit={handleSearchSubmit} className="search-form">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search for products..."
//               className="search-bar"
//             />
//             <button type="submit" className="search-button">
//               Search
//             </button>
//           </form>
//         </div>

//         {/* New Section with Image and Text */}
//         <div className="info-box mt-4">
//           <div className="info-box-content">
//             <img src={electroImage} alt="Electro" className="info-box-image" />
//             <div className="info-box-text">
//               <h2>The future is flexible, and so are we.</h2>
//               <p>
//                 Whether you need the latest gadgets for a day, a week, or a month, we’re here to make it happen.
//                 Access technology on your terms—because the future belongs to those who adapt.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scrollable product section */}
//       <div className="scrollable-container mt-3">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <>
//             {error ? (
//               <p>{error}</p>
//             ) : (
//               <div className="row">
//                 {products.map((singleProduct) => (
//                   <div className="col" key={singleProduct._id}>
//                     <ProductCard
//                       productInformation={singleProduct}
//                       onClick={() => handleCardClick(singleProduct._id)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <nav aria-label="Product navigation">
//               <ul className="pagination justify-content-center mt-4">
//                 <li
//                   className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//                 >
//                   <button className="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li
//                   className={`page-item ${
//                     currentPage === totalPages ? "disabled" : ""
//                   }`}
//                 >
//                   <button className="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default UserDashboard;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllProducts } from "../../apis/Api";
// import "./UserDashboard.css";
// import ProductCard from "../../components/product_card/ProductCard";
// import Navbar from "../../components/user_navbar/Navbar";
// import dash from "../../assets/images/dash.png";
// import electroImage from "../../assets/images/electro.jpg";  // Import the image

// const UserDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const productsPerPage = 9;
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts(currentPage, searchQuery); // Fetch products when query or page changes
//   }, [currentPage, searchQuery]);

//   const fetchProducts = (page, query) => {
//     setLoading(true);
//     getAllProducts(page, productsPerPage, query)  // Pass search query to the API
//       .then((res) => {
//         if (res.data.products.length === 0) {
//           setError("No products found.");
//         } else {
//           setProducts(res.data.products);
//           setTotalPages(res.data.pagination.totalPages);
//           setError("");
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to fetch products.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleCardClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setCurrentPage(1); // Reset to first page when search is triggered
//     fetchProducts(1, searchQuery);  // Fetch products based on the search query
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div id="carouselExampleCaptions" className="carousel slide">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={dash} className="d-block w-100" alt="electro device" />
//             </div>
//           </div>
//         </div>

//         <div className="search-container mt-4">
//           <form onSubmit={handleSearchSubmit} className="search-form">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search for products..."
//               className="search-bar"
//             />
//             <button type="submit" className="search-button">
//               Search
//             </button>
//           </form>
//         </div>

//         {/* New Section with Image and Text */}
//         <div className="info-box mt-4">
//           <div className="info-box-content">
//             <img src={electroImage} alt="Electro" className="info-box-image" />
//             <div className="info-box-text">
//               <h2>The future is flexible, and so are we.</h2>
//               <p>
//                 Whether you need the latest gadgets for a day, a week, or a month, we’re here to make it happen.
//                 Access technology on your terms—because the future belongs to those who adapt.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scrollable product section */}
//       <div className="scrollable-container mt-3">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <>
//             {error ? (
//               <p>{error}</p>
//             ) : (
//               <div className="row">
//                 {products.map((singleProduct) => (
//                   <div className="col" key={singleProduct._id}>
//                     <ProductCard
//                       productInformation={singleProduct}
//                       onClick={() => handleCardClick(singleProduct._id)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <nav aria-label="Product navigation">
//               <ul className="pagination justify-content-center mt-4">
//                 <li
//                   className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//                 >
//                   <button className="page-link" onClick={handlePrevPage}>
//                     Previous
//                   </button>
//                 </li>
//                 <li
//                   className={`page-item ${
//                     currentPage === totalPages ? "disabled" : ""
//                   }`}
//                 >
//                   <button className="page-link" onClick={handleNextPage}>
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default UserDashboard;


>>>>>>> Stashed changes
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../apis/Api";
import "./UserDashboard.css";
import ProductCard from "../../components/product_card/ProductCard";
import Navbar from "../../components/user_navbar/Navbar";
<<<<<<< Updated upstream

import dash from "../../assets/images/dash.png";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
=======
import dash from "../../assets/images/dash.png";
import electroImage from "../../assets/images/electro.jpg"; // Import the image

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]); // Products to display
>>>>>>> Stashed changes
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
<<<<<<< Updated upstream
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
=======
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 9;
  const navigate = useNavigate();

  // Fetch products initially and when page changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Fetch products with pagination
  const fetchProducts = (page) => {
    setLoading(true);
    getAllProducts(page, productsPerPage)
      .then((res) => {
        console.log("Fetched Products:", res.data.products); // Log fetched products
>>>>>>> Stashed changes
        if (res.data.products.length === 0) {
          setError("No products found.");
        } else {
          setProducts(res.data.products);
<<<<<<< Updated upstream
=======
          setDisplayedProducts(res.data.products); // Initially, display all products
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
=======
  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filterProducts = (query, productsList) => {
    console.log("Search Query:", query); // Log the search query
    if (!query) {
      setDisplayedProducts(productsList); // Show all products if no search query
    } else {
      const filteredProducts = productsList.filter((product) => {
        const name = product.name ? product.name.toLowerCase() : "";
        const category = product.category ? product.category.toLowerCase() : "";
        const queryLower = query.toLowerCase();

        console.log("Product Name:", name); // Log the name of each product
        console.log("Product Category:", category); // Log the category of each product

        return name.includes(queryLower) || category.includes(queryLower); // Check if either field matches
      });
      console.log("Filtered Products:", filteredProducts); // Log the filtered products
      setDisplayedProducts(filteredProducts); // Show filtered products
    }
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when search is triggered
    filterProducts(searchQuery, products); // Filter products based on search query
  };

  // Handle page navigation
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query on change
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page after search
    fetchProducts(1); // Fetch the products for the new search query
  };

=======
>>>>>>> Stashed changes
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
<<<<<<< Updated upstream
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
=======
              <img src={dash} className="d-block w-100" alt="electro device" />
            </div>
          </div>
        </div>

>>>>>>> Stashed changes
        <div className="search-container mt-4">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="search-bar"
            />
<<<<<<< Updated upstream
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>

      {/* Product Display */}
      <div className="container mt-3">
=======
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>

        {/* New Section with Image and Text */}
        <div className="info-box mt-4">
          <div className="info-box-content">
            <img src={electroImage} alt="Electro" className="info-box-image" />
            <div className="info-box-text">
              <h2>The future is flexible, and so are we.</h2>
              <p>
                Whether you need the latest gadgets for a day, a week, or a month, we’re here to make it happen.
                Access technology on your terms—because the future belongs to those who adapt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable product section */}
      <div className="scrollable-container mt-3">
>>>>>>> Stashed changes
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <>
            {error ? (
              <p>{error}</p>
            ) : (
<<<<<<< Updated upstream
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
=======
              <div className="row">
                {displayedProducts.map((singleProduct) => (
                  <div className="col" key={singleProduct._id}>
                    <ProductCard
                      productInformation={singleProduct}
                      onClick={() => handleCardClick(singleProduct._id)}
                    />
                  </div>
                ))}
              </div>
            )}
            <nav aria-label="Product navigation">
              <ul className="pagination justify-content-center mt-4">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={handlePrevPage}>
                    Previous
                  </button>
                </li>
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button className="page-link" onClick={handleNextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
>>>>>>> Stashed changes
          </>
        )}
      </div>
    </>
  );
};

export default UserDashboard;

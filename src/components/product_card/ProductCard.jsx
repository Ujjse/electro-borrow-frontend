<<<<<<< Updated upstream
import React from 'react'

// receive product information and color as props
const ProductCard = ({ productInformation, color }) => {
    return (
        <>
            <div class="card" style={{ width: '15rem' }}>
                <span style={{ backgroundColor: color }} className="badge position-absolute top-0">{productInformation.productCategory}</span>
                <img src={`http://localhost:5000/products/${productInformation.productImage}`} class="card-img-top" alt="..."  style= {{height: '15rem'}} />
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">{productInformation.productName}</h5>
                        <h5 class="card-title text-danger">NPR. {productInformation.productPrice}</h5>
                    </div>
                    <p class="card-text">{productInformation.productDescription.slice(0, 30)}</p>
                    <a href="#" class="btn btn-outline-dark w-100">View More</a>
                </div>
            </div>

        </>
    )
}

export default ProductCard
=======


// import React from 'react';

// // receive product information and color as props
// const ProductCard = ({ productInformation }) => {
//   return (
//     <div className="card" style={styles.card}>
//       {/* Product image */}
//       <img
//         src={`http://localhost:5000/products/${productInformation.productImage}`}
//         className="card-img-top"
//         alt={productInformation.productName}
//         style={styles.image}
//       />
      
//       {/* Card body with text */}
//       <div className="card-body">
//         <h5 className="card-title" style={styles.title}>
//           {productInformation.productName}
//         </h5>
//         <h5 className="card-title text-danger" style={styles.price}>
//           NPR. {productInformation.productPrice}
//         </h5>
//         <p className="card-text" style={styles.description}>
//           {productInformation.productDescription.length > 20
//             ? productInformation.productDescription.slice(0, 20) + "..."
//             : productInformation.productDescription}
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     width: '100%',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     cursor: 'pointer',
//     marginBottom: '20px', // space between cards
//   },
//   image: {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     transition: 'transform 0.3s ease',
//     borderTopLeftRadius: '12px',
//     borderTopRightRadius: '12px',
//   },
//   title: {
//     fontSize: '1.2rem',
//     fontWeight: '500',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   price: {
//     fontSize: '1.1rem',
//     fontWeight: '700',
//     color: '#e74c3c',
//   },
//   description: {
//     color: '#777',
//     fontSize: '0.95rem',
//     marginTop: '10px',
//   },
// };

// export default ProductCard;

import React from "react";

const ProductCard = ({ productInformation, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img
        src={`http://localhost:5000/products/${productInformation.productImage}`}
        alt={productInformation.productName}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{productInformation.productName}</h5>
        <p className="card-text">Price: NPR {productInformation.productPrice}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    height: '400px', // Ensure consistent height
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '200px', // Fixed image height
    objectFit: 'cover',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#e74c3c',
  },
};


export default ProductCard;
>>>>>>> Stashed changes

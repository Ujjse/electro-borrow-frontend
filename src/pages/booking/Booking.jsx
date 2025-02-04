// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker"; // For date picker
// import "react-datepicker/dist/react-datepicker.css"; // Date picker styles
// import "./Booking.css"; 
// import Navbar from "../../components/user_navbar/Navbar";

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state; // Assuming the product is passed from ProductDetail

//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [totalCost, setTotalCost] = useState(0);

//   // Function to calculate total cost based on selected dates
//   const calculateTotalCost = () => {
//     if (startDate && endDate) {
//       const timeDiff = endDate.getTime() - startDate.getTime();
//       const dayCount = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
//       setTotalCost(dayCount * product.productPrice);
//     }
//   };

//   // Calculate the total cost when start or end date is changed
//   React.useEffect(() => {
//     calculateTotalCost();
//   }, [startDate, endDate]);

//   // Handle navigation to ConfirmBooking page
//   const handleContinueBooking = () => {
//     if (startDate && endDate && totalCost > 0) {
//       // Passing selected data to the ConfirmBooking page
//       navigate("/confirm-booking", {
//         state: {
//           productName: product.productName,
//           productImage: product.productImage,
//           productPrice: product.productPrice,
//           startDate: startDate,
//           endDate: endDate,
//           totalCost: totalCost,
//         },
//       });
//     } else {
//       // Handle validation (start date, end date, total cost)
//       alert("Please select both start and end dates.");
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <div className="product-banner">
//           <img
//             src={`http://localhost:5000/products/${product.productImage}`}
//             alt={product.productName}
//             className="img-fluid"
//           />
//         </div>
//         <Navbar />
//         <div className="row mt-4">
//           {/* Left Side: Product Information */}
//           <div className="col-md-6">
//             <h2>{product.productName}</h2>
//             <p>{product.productDescription}</p>
//             <h4>Price per day: NPR {product.productPrice}</h4>
//           </div>
          
//           {/* Right Side: Booking Box */}
//           <div className="col-md-6">
//             <div className="booking-box">
//               <h5>Select Dates</h5>
//               <div className="date-picker-container">
//                 <div className="date-picker">
//                   <label>Start Date</label>
//                   <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     selectsStart
//                     startDate={startDate}
//                     endDate={endDate}
//                     dateFormat="yyyy-MM-dd"
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="date-picker">
//                   <label>End Date</label>
//                   <DatePicker
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     selectsEnd
//                     startDate={startDate}
//                     endDate={endDate}
//                     minDate={startDate}
//                     dateFormat="yyyy-MM-dd"
//                     className="form-control"
//                   />
//                 </div>
//               </div>

//               <div className="total-cost">
//                 <h5>Total Cost</h5>
//                 <p>NPR {totalCost}</p>
//               </div>

//               <button
//                 className="btn continue-booking-btn"
//                 onClick={handleContinueBooking} // Navigate on button click
//               >
//                 Continue Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // For date picker
import "react-datepicker/dist/react-datepicker.css"; // Date picker styles
import "./Booking.css"; 
import Navbar from "../../components/user_navbar/Navbar";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state; // Assuming the product is passed from ProductDetail

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalCost, setTotalCost] = useState(0);

  // Function to calculate total cost based on selected dates
  const calculateTotalCost = () => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayCount = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
      setTotalCost(dayCount * product.productPrice);
    }
  };

  // Calculate the total cost when start or end date is changed
  React.useEffect(() => {
    calculateTotalCost();
  }, [startDate, endDate]);

  // Handle navigation to BuyNowPage when confirmed
  const handleContinueBooking = () => {
    if (startDate && endDate && totalCost > 0) {
      // Passing selected data to the BuyNowPage
      navigate(`/buy_now/${product._id}`, { // Assuming product._id is the unique ID for the product
        state: {
          productName: product.productName,
          productImage: product.productImage,
          productPrice: product.productPrice,
          startDate: startDate,
          endDate: endDate,
          totalCost: totalCost,
        },
      });
    } else {
      // Handle validation (start date, end date, total cost)
      alert("Please select both start and end dates.");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="product-banner">
          <img
            src={`http://localhost:5000/products/${product.productImage}`}
            alt={product.productName}
            className="img-fluid"
          />
        </div>
        <Navbar />
        <div className="row mt-4">
          {/* Left Side: Product Information */}
          <div className="col-md-6">
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <h4>Price per day: NPR {product.productPrice}</h4>
          </div>
          
          {/* Right Side: Booking Box */}
          <div className="col-md-6">
            <div className="booking-box">
              <h5>Select Dates</h5>
              <div className="date-picker-container">
                <div className="date-picker">
                  <label>Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                  />
                </div>

                <div className="date-picker">
                  <label>End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="total-cost">
                <h5>Total Cost</h5>
                <p>NPR {totalCost}</p>
              </div>

              <button
                className="btn continue-booking-btn"
                onClick={handleContinueBooking} // Navigate on button click
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import CryptoJS from "crypto-js";
// import "./BuyNowPage.css";

// const BuyNowPage = () => {
//   const location = useLocation();
//   const { productName, productImage, productPrice, startDate, endDate, totalCost } =
//     location.state || {};

//   const [formData, setFormData] = useState({
//     amount: productPrice || "",
//     tax_amount: "0",
//     total_amount: totalCost || "",
//     transaction_uuid: "",
//     product_code: "EPAYTEST",
//     product_service_charge: "0",
//     product_delivery_charge: "0",
//     success_url: "https://google.com",
//     failure_url: "https://facebook.com",
//     signed_field_names: "total_amount,transaction_uuid,product_code",
//     signature: "",
//     secret: "8gBm/:&EnhH.1/q",
//   });

//   const generateSignature = () => {
//     const currentTime = new Date();
//     const formattedTime =
//       currentTime.toISOString().slice(2, 10).replace(/-/g, "") +
//       "-" +
//       currentTime.getHours() +
//       currentTime.getMinutes() +
//       currentTime.getSeconds();

//     const newFormData = {
//       ...formData,
//       transaction_uuid: formattedTime,
//     };

//     const { total_amount, transaction_uuid, product_code, secret } = newFormData;
//     const hash = CryptoJS.HmacSHA256(
//       `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`,
//       secret
//     );
//     const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

//     setFormData({
//       ...newFormData,
//       signature: hashInBase64,
//     });
//   };

//   useEffect(() => {
//     if (productPrice && totalCost) {
//       generateSignature();
//     }
//   }, [productPrice, totalCost]);

//   if (!productName || !productPrice || !totalCost) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="buy-now">
//       <h2>Buy Now</h2>
//       {productImage && (
//         <img
//           src={`http://localhost:5000/products/${productImage}`}
//           alt={productName}
//           className="product-image"
//         />
//       )}
//       <div className="product-info">
//         <p><strong>Product:</strong> {productName}</p>
//         <p><strong>Price:</strong> Rs. {productPrice}</p>
//         <p><strong>Booking Period:</strong> {startDate.toDateString()} to {endDate.toDateString()}</p>
//         <h4>Total Cost: Rs. {totalCost}</h4>
//       </div>

//       <form
//         action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
//         method="POST"
//         target="_blank"
//       >
//         {Object.entries(formData).map(([key, value]) => (
//           <input key={key} type="hidden" name={key} value={value} />
//         ))}
//         <button type="submit" className="btn btn-success">
//           Pay Rs. {totalCost} with eSewa
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BuyNowPage;



import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import axios from "axios"; // Added axios for API calls
import "./BuyNowPage.css";

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productName, productImage, productPrice, startDate, endDate, totalCost } = location.state || {};

  const [formData, setFormData] = useState({
    amount: productPrice || "",
    tax_amount: "0",
    total_amount: totalCost || "",
    transaction_uuid: "",
    product_code: "EPAYTEST",
    product_service_charge: "0",
    product_delivery_charge: "0",
    success_url: "https://google.com",
    failure_url: "https://facebook.com",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const generateSignature = () => {
    const currentTime = new Date();
    const formattedTime =
      currentTime.toISOString().slice(2, 10).replace(/-/g, "") +
      "-" +
      currentTime.getHours() +
      currentTime.getMinutes() +
      currentTime.getSeconds();

    const newFormData = {
      ...formData,
      transaction_uuid: formattedTime,
    };

    const { total_amount, transaction_uuid, product_code, secret } = newFormData;
    const hash = CryptoJS.HmacSHA256(
      `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`,
      secret
    );
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    setFormData({
      ...newFormData,
      signature: hashInBase64,
    });
  };

  useEffect(() => {
    if (productPrice && totalCost) {
      generateSignature();
    }
  }, [productPrice, totalCost]);

  // Function to save the order after successful payment
  const createOrder = async () => {
    try {
      const orderData = {
        productName,
        productImage,
        totalCost,
        startDate,
        endDate,
        paymentStatus: "Paid", // Assuming payment is successful after eSewa callback
      };
      const response = await axios.post("/api/orders", orderData);
      console.log('Order saved successfully:', response.data);
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const handlePaymentSuccess = () => {
    createOrder(); // Save order to the database
    navigate("/my-orders"); // Redirect to My Orders page after successful payment
  };

  if (!productName || !productPrice || !totalCost) {
    return <p>Loading...</p>;
  }

  return (
    <div className="buy-now">
      <h2>Buy Now</h2>
      {productImage && (
        <img
          src={`http://localhost:5000/products/${productImage}`}
          alt={productName}
          className="product-image"
        />
      )}
      <div className="product-info">
        <p><strong>Product:</strong> {productName}</p>
        <p><strong>Price:</strong> Rs. {productPrice}</p>
        <p><strong>Booking Period:</strong> {startDate.toDateString()} to {endDate.toDateString()}</p>
        <h4>Total Cost: Rs. {totalCost}</h4>
      </div>

      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        target="_blank"
      >
        {Object.entries(formData).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}
        <button type="submit" className="btn btn-success" onClick={handlePaymentSuccess}>
          Pay Rs. {totalCost} with eSewa
        </button>
      </form>
    </div>
  );
};

export default BuyNowPage;

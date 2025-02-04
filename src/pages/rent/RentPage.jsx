import React from "react";
import "./RentPage.css";

const RentPage = () => {
  return (
    <div className="rent-page">
      <h2 className="rent-title">Renting FAQs</h2>
      <div className="rent-content">
        <div className="faq-item">
          <h4>1. What happens if the rent is late?</h4>
          <p>
            If you return the rented item late, you will incur a fine of Rs. 1000
            for each additional day.
          </p>
        </div>
        <div className="faq-item">
          <h4>2. What if the rented item is damaged?</h4>
          <p>
            In case of damage, you will be charged a fine based on the extent of
            the damage.
          </p>
        </div>
        <div className="faq-item">
          <h4>3. Do I need to pay before renting?</h4>
          <p>
            Yes, all rental payments must be completed before receiving the
            item.
          </p>
        </div>
        <div className="faq-item">
          <h4>4. Can I rent the same item again?</h4>
          <p>
            To rent the same item again, you must return the previous rental and
            place a new order.
          </p>
        </div>
        <div className="faq-item">
          <h4>5. Are there any additional guidelines?</h4>
          <p>
            Please ensure timely returns and proper care of rented items to
            avoid additional fines or penalties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentPage;

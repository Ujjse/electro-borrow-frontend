import React, { useState } from "react";
import "./UpdateAddress.css";
import Navbar from "../../components/user_navbar/Navbar";

const UpdateAddress = () => {
  const [state, setState] = useState("");
  const [province, setProvince] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    const updatedAddress = {
      state,
      province,
      address,
    };

    console.log("Updated Address:", updatedAddress);
    alert("Address updated successfully!");
  };

  return (
    <div>
        <Navbar/>
    <div className="update-address-container">
      <h2>Update Address</h2>

      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          className="form-control"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter your state"
        />
      </div>

      <div className="form-group">
        <label htmlFor="province">Province</label>
        <input
          type="text"
          id="province"
          className="form-control"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          placeholder="Enter your province"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        ></textarea>
      </div>

      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
    </div>
  );
};

export default UpdateAddress;
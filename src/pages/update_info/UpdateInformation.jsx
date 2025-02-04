import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { updateInformation } from "../../apis/Api"; 
import Navbar from "../../components/user_navbar/Navbar";
import "./UpdateInformation.css";

const UpdateInformation = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    number: '',
    email: '',
  });

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Please log in first.");
          return;
        }

        const res = await updateInformation(token); // API call to fetch user data
        const user = res.data.user;  // Assuming the response has `user` data
        setFormData({
          fname: user.fname,
          lname: user.lname,
          number: user.number,
          email: user.email,
        });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in first.");
      return;
    }

    try {
      const res = await updateInformation(formData, token); // API call to update user data
      if (res.status === 200) {
        toast.success("Information updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
      toast.error("Failed to update information.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="update-form-container">
        <div className="update-form">
          <div className="image-container">
            <img
              src={require("../../assets/images/update.png")} // Updated image path
              alt="User"
              className="user-image"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateInformation;

import "@fortawesome/fontawesome-free/css/all.min.css";
import loginImage from "../../../src/assets/images/image1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../apis/Api";
import "./register.css";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validate = () => {
    let isValid = true;

    if (fname.trim() === "") {
      setFnameError("First name is required");
      isValid = false;
    } else {
      setFnameError(""); // Clear the error if validation passes
    }

    if (lname.trim() === "") {
      setLnameError("Last name is required");
      isValid = false;
    } else {
      setLnameError(""); // Clear the error if validation passes
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError(""); // Clear the error if validation passes
    }

    if (number.trim() === "") {
      setNumberError("Number is required");
      isValid = false;
    } else {
      setNumberError(""); // Clear the error if validation passes
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError(""); // Clear the error if validation passes
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } else {
      setConfirmPasswordError(""); // Clear the error if validation passes
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      return;
    }

    const data = {
      fname: fname,
      lname: lname,
      email: email,
      number: number,
      password: password,
      confirmpassword: confirmPassword,
    };

    console.log('Sending data:', data);

    register(data)
      .then((res) => {
        console.log('Response data:', res.data);
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        toast.error("An error occurred while registering");
      });
  };

  return (
    <div className="container">
      <div className="register-container">
        <div className="register-image">
          <img src={loginImage} alt="Login Visual" />
        </div>
        <div className="register-form-container">
          <h1 className="text-center mb-4">Create an Account</h1>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              {fnameError && <p className="text-danger">{fnameError}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              {lnameError && <p className="text-danger">{lnameError}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {numberError && <p className="text-danger">{numberError}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && (
                <p className="text-danger">{confirmPasswordError}</p>
              )}
            </div>
            <button onClick={handleSubmit} className="btn btn-custom w-100 mt-4">
              Register
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/" className="login-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

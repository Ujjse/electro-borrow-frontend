<<<<<<< Updated upstream
=======
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome for icons
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { login } from "../../apis/Api";
// import "./login.css";
// import loginImage from "../../../src/assets/images/image1.png";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const navigate = useNavigate();

//   const validation = () => {
//     let isValid = true;

//     if (email.trim() === "" || !email.includes("@")) {
//       setEmailError("Email is empty or invalid");
//       isValid = false;
//     } else {
//       setEmailError("");
//     }

//     if (password.trim() === "") {
//       setPasswordError("Password is empty");
//       isValid = false;
//     } else {
//       setPasswordError("");
//     }
//     return isValid;
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!validation()) {
//       return;
//     }

//     const data = {
//       email: email,
//       password: password,
//     };
//     console.log('Sending data:', data);

//     login(data).then((res) => {
//       if (res.data.success === false) {
//         toast.error(res.data.message);
//       } else {
//         toast.success(res.data.message);
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("user", JSON.stringify(res.data.userData));

//         if (res.data.userData.isAdmin) {
//           navigate("/admin/dashboard");
//         } else {
//           navigate("/dashboard");
//         }
//       }
//     });
//   };

//   return (
//     <div className="container">
//       <div className="login-container">
//         <div className="login-image">
//           <img src={loginImage} alt="Login Visual" />
//         </div>
//         <div className="login-frame">
//           <h1 className="text-center mb-4">Login</h1>
//           <form>
//             <div className="form-group">
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="fas fa-envelope"></i>
//                 </span>
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   type="email"
//                   className="form-control"
//                   placeholder="Email Address"
//                 />
//               </div>
//               {emailError && <p className="text-danger">{emailError}</p>}
//             </div>

//             <div className="form-group mt-3">
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="fas fa-lock"></i>
//                 </span>
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                 />
//               </div>
//               {passwordError && <p className="text-danger">{passwordError}</p>}
//             </div>

//             <button onClick={handleLogin} className="btn btn-custom w-100 mt-4">
//               Login
//             </button>
//           </form>
//           <p className="text-center mt-4">
//             Don't have an account?{" "}
//             <Link to="/register" className="login-link">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

>>>>>>> Stashed changes
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome for icons
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../apis/Api";
import "./login.css";
import loginImage from "../../../src/assets/images/image1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validation = () => {
    let isValid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is empty or invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is empty");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };
<<<<<<< Updated upstream
=======
    console.log("Sending data:", data);
>>>>>>> Stashed changes

    login(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.userData));

        if (res.data.userData.isAdmin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    });
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Login Visual" />
        </div>
        <div className="login-frame">
          <h1 className="text-center mb-4">Login</h1>
          <form>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>

            <div className="form-group mt-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>

<<<<<<< Updated upstream
=======
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div></div>
              <Link to="/forgot_password" className="login-link text-end">
                Forgot Password?
              </Link>
            </div>

>>>>>>> Stashed changes
            <button onClick={handleLogin} className="btn btn-custom w-100 mt-4">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="login-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

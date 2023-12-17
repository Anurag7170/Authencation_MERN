import React, { useState } from "react";
import "../login/login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });

  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const register = () => {
    const { name, email, password, reEnterpassword } = user;
    if (name && email && password === reEnterpassword) {
      const res = axios.post(
        "https://mern-auth-gtp0.onrender.com/api/v1/signup",
        user
      );
      res.then(() => alert("registered successfully"));
      navigate("/login");
      alert("done");
    } else {
      alert("invalid enter the data correctly");
    }
  };

  return (
    <div>
      <div className="overall">
        <div className="form">
          <h4 className="title">Sign Up</h4>
          <form>
            <div className="form-input">
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={user.name}
                onChange={changeHandeler}
              />
            </div>
            <div className="form-input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={changeHandeler}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={changeHandeler}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Conform Password"
                name="reEnterpassword"
                value={user.reEnterpassword}
                onChange={changeHandeler}
              />
            </div>
            <div className="form-input">
              <button onClick={register}>Sign In</button>
            </div>
          </form>
          <div className="signup">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

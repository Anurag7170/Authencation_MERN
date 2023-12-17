import React, { useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const login = () => {
    const { password, email} = user;
    if (password && email ) {
      const res = axios.post("http://localhost:8000/api/v1/login", user);
      res.then(() => alert("registered successfully"));
      alert("done");
    } else {
      alert("invalid enter the data correctly");
    }
  };
  return (
    <div>
      <div className="overall">
        <div className="form">
          <h4 className="title">Login to Your Account</h4>
          <form>
            <div className="form-input">
              <input
                type="text"
                placeholder="Username"
                name="email"
                value={user.email}
                onChange={changeHandeler}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Password"
                required=""
                name="password"
                value={user.password}
                onChange={changeHandeler}
              />
            </div>
            <div className="form-input">
              <button onClick={login}>Login</button>
            </div>
          </form>
          <div className="signup">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


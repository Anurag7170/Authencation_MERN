import React, { useState } from "react";
import "../login/login.css";
import axios from "axios"
function Registration() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });

  const changeHandeler = (e) => {
    
    const {name , value} = e.target;
    setuser({...user, [name]:value})
  }
  const register = ()=>{
    const {name, email, password, reEnterpassword} = user
    if(name && email && (password === reEnterpassword)){
      const res = axios.post("http://localhost:8000/api/v1/signup", user);
      res.then(() => alert("registered successfully"))
      alert("done")
    }
    else{
      alert("invalid enter the data correctly")
    }
  }
  
  return (
    <div>
      <div className="overall">
        <div className="top">
          <h4 className="title">Sign Up</h4>
        </div>
        <div className="form">
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
            Already have an account? <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

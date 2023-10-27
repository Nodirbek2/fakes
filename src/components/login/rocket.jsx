import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
const LoginForm = () => {
  const navigate = useNavigate();
  const Api = 'https://predictors-67ao.onrender.com/auth/sign-in'

  if(localStorage.getItem('tokenroket')){
    navigate("/")
  }
localStorage.removeItem('user') 

  const [data, setData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(Api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data ),
    });
    if (response) {
          const data = await response.json();
    if(data.successfully==401){
      const alert = document.getElementById('solo')
      alert.innerHTML = data.message
    }
    else if(data.successfully==207){
      localStorage.setItem('user', data.username)
      if (data.status == "active") {
        localStorage.setItem("tokenroket", data.status);
      }
       navigate("/predict/rocket")
    }
    } else {
     const alert = document.getElementById('solo')
       alert.innerHTML = "Invalid username or password";
    }

  };
  return (
    <>
    <div className="container">
    <h1 className="aa">Login</h1>

    <form onSubmit={handleSubmit}>
      <h3 id="solo" className="aa"></h3>
    <label htmlFor="username" className="aa"><b>Username</b></label>
      <input
      className="inputs"
        type="text"
        placeholder="enter username"
        onChange={(e) => {
          setData({ ...data, username: e.target.value.toLocaleLowerCase() });
        }}
      />
      <label htmlFor="password" className="aa"><b>Password</b></label>
      <input
      className="inputs"

        type="password"
        placeholder="Password"
        onChange={(e) => {
          setData({ ...data, password: e.target.value.toLocaleLowerCase() });
        }}
      />
      <button type="submit" className="btn">Login</button>
    </form>
    </div>
   </>
  );
};
export default LoginForm;

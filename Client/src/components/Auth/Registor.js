import React, { useState } from "react";
import "./Registor.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Store_Token/Utils_Token";

export default function Registor() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "", 
    phone: "",
    password: ""
  });

  const { storeToken } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`${window.location.origin}/api/auth/registor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data: ", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("Registration successful");
        storeToken(responseData.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        const errorText = await response.text();
        console.error("Error inside response: ", errorText);
        alert(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error("Error", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="registorcnt">
        <div className="registorcnt_right">
          <div className="registor_right_head">
            <h1>Registration form</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form_row">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter here user name"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_row">
              <label htmlFor="email">Email</label>
              <input
                className="row2"
                type="email"
                name="email"
                placeholder="Enter here user email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_row">
              <label htmlFor="phone">Phone</label>
              <input
                className="row2"
                type="number"
                name="phone"
                placeholder="Enter here user phone number"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form_row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter here password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <button type="submit" className="btn">Register Now</button>
          </form>
        </div>
      </div>

      <div className="footer">
        <p>©Copyright<span>Dsk Technology</span></p>
      </div>
    </>
  );
}

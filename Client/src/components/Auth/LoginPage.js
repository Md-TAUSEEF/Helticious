import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Store_Token/Utils_Token";

export default function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { storeToken } = useAuth();

  const Changeelemet = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const submitlogin = async (e) => {
    e.preventDefault();

    try {
      const loginresponse = await fetch(`${window.location.origin}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login data", loginresponse);

      if (loginresponse.ok) {
        const loginData = await loginresponse.json();
        alert("login successful");
        storeToken(loginData.token);

        setUser({ email: "", password: "" });
        navigate("/");
        console.log(loginData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className='logincnt'>
        <div className='logincnt_right'>
          <div className='logincnt_header'>
            <h1>Login Form</h1>
          </div>

          <form onSubmit={submitlogin}>
            <div className='loginform'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' placeholder='Enter your email id' required autoCapitalize='off' value={user.email} onChange={Changeelemet} />
            </div>

            <div className='loginform'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' placeholder='Enter your Password' required autoCapitalize='off' value={user.password} onChange={Changeelemet} />
            </div>

            <br />

            <button type="submit" className="btn9">Login Here</button>
          </form>
        </div>
      </div>

    
    </>
  );
}

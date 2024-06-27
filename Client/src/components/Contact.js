import React, { useState } from "react";
import Talk from "./Talk";
import { useAuth } from "./Auth/Store_Token/Utils_Token";
const Contact = () => {
  const { Authorization } = useAuth();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactform = await fetch(`${window.location.origin}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":Authorization
        },
        body: JSON.stringify(data), 
      });

      console.log("login data", contactform);

      if (contactform.ok) {
        const contactformdata = await contactform.json();
        console.log(contactformdata);
        alert("message successfull");
      }
    } catch (error) {
      console.log(`error is coming in contact form ${error}`); 
    }

    setData({
     
        username: "",
        email: "",
        msg: "",
        phone:""
     
    })
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact IN</h1>
      </div>
      <div className="contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="username"
                  value={data.username}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Mobile No.:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="+91"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Talk />
    </>
  );
};

export default Contact;

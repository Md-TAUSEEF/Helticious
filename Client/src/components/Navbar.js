import React from "react";
import "./Testcss.css";
import { useAuth } from "../components/Auth/Store_Token/Utils_Token";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { isLoggedIn, logoutUser } = useAuth();

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  Healthicious
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/service">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="/contact">
                        Contact
                      </a> */}
                      <Link className="nav-link" to="/contact">
                      Contact
                          </Link>
                    </li>


                    {isLoggedIn ? (
                      <li className="nav-item">

                      <Link className="nav-link" onClick={logoutUser}>
                        Logout
                      </Link>
                      </li>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/register">
                            Register
                          </Link>
                        </li>
                      </>
                    )}







                    
                  </ul>
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

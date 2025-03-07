import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <div className="container1 my-5">
        <div className='row'>
          <div className='col-12 col-lg-10 mx-auto'>
            <div className="row">
              <div className="col-8 col-lg-5">
                <h2><strong style={{color: "orangered"}}>Healthicious</strong></h2>
                <h4 className='mx-3 my-3'>About Us</h4>
                <p className='mx-3'>We will offer you personalized recipe recommendations, advanced search functionality, and features for meal planning, scheduling, and shopping list generation.</p>
              </div>
              
              <div className="col-6 col-lg-3">
                <h4 className='text-center' style={{color: "greenyellow"}}>Navigation</h4>
                <ul className="my-3 list-group list-group">
                  <a href="/"><li className="text-center">Home</li></a>
                  <a href="/about"><li className="text-center">About</li></a>
                  <a href="/service"><li className="text-center">Services</li></a>
                  <a href="/contact"><li className="text-center">Contact</li></a>
                </ul>
              </div>
              
              <div className="col-6 col-lg-3">
                <h4 className='text-center' style={{color: "aqua"}}>Social Links</h4>
                <ul className="my-3 list-group list-group">
                  <li className="list-group-item mx-4">
                    <a href="https://www.linkedin.com/in/md-tauseef/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin"> Linkedin</i>
                    </a>
                  </li>
                  <li className="list-group-item mx-4">
                    <a href="https://github.com/Md-TAUSEEF" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github"> Github</i>
                    </a>
                  </li>
                  <li className="list-group-item mx-4">
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter"> Twitter</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className='mt-3'>
              <p className="auth-text text-center w-100">Copyright © 2024 All rights reserved | Healthicious</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

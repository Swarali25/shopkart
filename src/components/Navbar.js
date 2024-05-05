import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://bizwiziq.com/wp-content/uploads/2019/02/shopkart-orange-1.png" alt="shopkart logo" style={{height:"40px"}}/>
         </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
               </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/womens">
                  Womens's Clothing
               </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/mens">
                  Men's Clothing
               </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/electronics">
                 Electronics
               </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">
                  About
               </Link>
              </li>
            </ul>
            <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
            <Link to="/cart" className="mx-2"><i className="fa-solid fa-cart-shopping" id="cartIcon"></i></Link>
            </div>
          </div>
        
      </nav>
    </div>
  );
};

export default Navbar;

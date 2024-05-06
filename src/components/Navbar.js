import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProductContext from "../context/ProductContext";
import { doSignOut } from "../firebase/Auth";
const Navbar = (props) => {
  const context = useContext(AuthContext);
  const productContext = useContext(ProductContext);
  const { currentUser, userLoggedIn, initializeUser } = context;
  const { resetCartItems } = productContext;
  const signOut = async () => {
    try {
      await doSignOut();
      initializeUser(null);
      resetCartItems();
    } catch (e) {
      console.log(e);
      alert("error in sigining out! Try again after some time");
    }
  };
  useEffect(() => {}, [userLoggedIn]);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode === "dark" ? "dark" :"light"} navbar-${props.mode === "dark" ? "dark" :"light"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://bizwiziq.com/wp-content/uploads/2019/02/shopkart-orange-1.png"
              alt="shopkart logo"
              style={{ height: "40px" }}
            />
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

            {!userLoggedIn && (
              <div>
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>{" "}
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </div>
            )}
            {userLoggedIn && (
              <div>
                <i className="fa-solid fa-user"></i>
                <span className="mx-2">{currentUser.email}</span>
                <Link
                  className="btn btn-primary mx-4"
                  to="/login"
                  role="button"
                  onClick={signOut}
                >
                  Logout
                </Link>
              </div>
            )}
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping mx-3" id="cartIcon"></i>
            </Link>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={()=>props.changeMode()}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault" style={{color: props.mode === "dark" ? "white" : "black"}}>
                 {props.mode === "dark" ? "Light" : "Dark"}Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-fluid bg-light">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2024 ShopKart.in 
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3 mx-2">
          <Link className="text-body-secondary" to="/"><i className="fa-brands fa-square-instagram fa-2xl"></i></Link>
        </li>
        <li className="ms-3 mx-2">
          <Link className="text-body-secondary" to="/"><i className="fa-brands fa-facebook fa-2xl"></i></Link>
        </li>
        <li className="ms-3 mx-2">
          <Link className="text-body-secondary" to="/"><i className="fa-brands fa-x-twitter fa-2xl"></i></Link>
        </li>
        <li className="ms-3 mx-2">
          <Link className="text-body-secondary" to="/"><i className="fa-brands fa-whatsapp fa-2xl"></i></Link>
        </li>
      </ul>
    </div>
  )
};

export default Footer;

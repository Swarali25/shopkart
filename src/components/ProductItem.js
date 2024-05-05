import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { image, price, title, id } = props.item;
  return (
    <Link to={`/product/${id}`} className="col-md-3 my-3 mx-5" style={{textDecoration:"none"}}>
      <div>
        <div className="card">
          <img src={image} className="card-img-top productItemImg" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ minHeight: "50px" }}>
              {title.length > 80 ? title.slice(0, 80) + ".." : title}
            </h5>
            <p className="card-text">Rs. {price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

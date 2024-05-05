import React from "react";
import "./ProductItem.css"
const ProductItem = (props) => {
  const {image,price,title,id}= props.item
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img src={image} className="card-img-top productItemImg" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" style={{minHeight:"50px"}}>{title.length> 80 ? title.slice(0,80)+".." : title}</h5>
          <p className="card-text">
             Rs. {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

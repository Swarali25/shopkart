import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import AuthContext from "../context/AuthContext";
import { useParams,useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const context = useContext(ProductContext);
  const authContext = useContext(AuthContext);
  const { fetchProductByID, currentProduct,addToCart ,cartItems,setCurrentProduct} = context;
  const {userLoggedIn,currentUser} =authContext;

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductByID(params.id)
    //    setProduct(currentProduct);
  }, []);

  const addItemToCart = async()=>{
      if(!userLoggedIn){
        alert("Please Login to Save Items to Cart");
        navigate("/login");
      }
      else{
        await addToCart(currentUser.email,currentProduct)
        console.log(cartItems);
    
        navigate("/cart");
        
      }
  }

  return (
    <div className="card mb-3 mx-2 p-3 my-2">
      
      <div className="row g-0">
        <div className="col-md-4">
        <button className="btn btn-primary my-3" onClick={()=>{navigate(-1); }}> <i class="fa-solid fa-backward"></i></button>
          <img src={currentProduct.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div className="card-body">
            <h1 className="card-title">{currentProduct.title}</h1>
            <p className="card-text">
              {currentProduct.description}
            </p>
            {/* <i class="fa-solid fa-star"></i>{currentProduct ? currentProduct.rating.rate :"" } */}
            <h3 className="card-text">
             Rs {currentProduct.price}
            </h3>
            <button className="btn btn-primary my-3" onClick={addItemToCart}>Add to Cart</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div className="banner">
        <div className="bannerContent">
          <img
            className="bannerImg"
            src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1714884025~exp=1714884625~hmac=78dbad5f77e431ee38ff8cd6e53b69facbafe076025a39d2107a57db5421d6ac"
            alt="bannerImage"
          />
        </div>
        <div className="card col-md-4 col-lg-6 mx-auto" id="offerCard">
          <div className="card-body">
            <h3 className="card-title">Flash Sale: Up to 50% Off on Fashion & Electronics!</h3>
          </div>
        </div>
      </div>
      
      {/* Best Seller */}
      <Products category={"Best Seller"}/>
    </div>
  );
};

export default Home;

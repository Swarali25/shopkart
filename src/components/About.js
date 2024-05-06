import React from "react";

const About = () => {
  return (
    <div className="container" style={{height: "500px"}}>
      <h2 className="my-4">Your One-Stop Shopping Destination</h2>
      <div className="accordion col-md-6 m-auto" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
           Diverse Product Range
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Our platform is a treasure trove for shoppers, offering an extensive collection of clothing and electronics. From the latest fashion trends to timeless classics, our clothing section caters to all ages and styles. Simultaneously, our electronics department is a tech enthusiast’s dream, featuring the newest gadgets and devices. We prioritize quality and variety, ensuring that every customer finds exactly what they’re looking for.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Customer-Centric Experience
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We believe shopping should be a pleasure, not a chore. That’s why we’ve designed our website with user-friendliness in mind. Easy navigation, detailed product descriptions, and a seamless checkout process make shopping with us a breeze. Our dedicated customer service
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Secure and Convenient Shopping
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Security and convenience are at the heart of our operations. Our user-friendly interface ensures a hassle-free shopping experience from browsing to checkout.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

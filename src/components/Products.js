import React, { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductContext from "../context/ProductContext";

const Products = (props) => {
  const context = useContext(ProductContext);
  const { products, fetchProducts } = context;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <h2>{props.category}</h2>
      <div className="row my-5">
        {products.map((item) => {
          if (props.category === "Best Seller") {
            return (
              item.rating.rate > 4.2 && <ProductItem item={item} key={item.id} />
            );
          } else {
            return <ProductItem item={item} key={item.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Products;
